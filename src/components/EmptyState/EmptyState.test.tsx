import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import { EmptyState } from "./EmptyState";
import * as stories from "./EmptyState.stories";

const { Primary, WithIcon, WithAction, SilentEmpty } = composeStories(stories);

describe("EmptyState Component", () => {
  describe("Storybook Stories", () => {
    it("renders Primary story correctly", () => {
      render(<Primary />);
      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(screen.getByText("No items match these filters")).toBeInTheDocument();
    });

    it("renders WithIcon story correctly", () => {
      render(<WithIcon />);
      expect(screen.getByText("📦")).toBeInTheDocument();
      expect(screen.getByText("No items yet")).toBeInTheDocument();
    });

    it("renders WithAction story with an action button", () => {
      render(<WithAction />);
      expect(screen.getByRole("button", { name: /record movement/i })).toBeInTheDocument();
    });

    it("renders SilentEmpty story without a title or icon", () => {
      render(<SilentEmpty />);
      expect(screen.queryByRole("heading")).toBeNull();
      expect(screen.getByText("No results.")).toBeInTheDocument();
    });
  });

  describe("Rendering", () => {
    it("renders nothing optional when no props are passed", () => {
      const { container } = render(<EmptyState />);
      const wrapper = container.querySelector('[role="status"]');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper?.children.length).toBe(0);
    });

    it("renders the title as an h3", () => {
      render(<EmptyState title="Nothing here" />);
      const heading = screen.getByRole("heading", { level: 3 });
      expect(heading).toHaveTextContent("Nothing here");
    });

    it("hides the icon from screen readers via aria-hidden", () => {
      render(<EmptyState icon={<span data-testid="icon">📦</span>} />);
      const icon = screen.getByTestId("icon");
      // The icon's container should be aria-hidden so SR doesn't read decorative glyphs.
      expect(icon.parentElement).toHaveAttribute("aria-hidden", "true");
    });

    it("renders the action region after the description", () => {
      const { container } = render(
        <EmptyState
          title="Empty"
          description="No data."
          action={<button>Click me</button>}
        />
      );
      const root = container.querySelector('[role="status"]');
      const children = Array.from(root?.children ?? []);
      const button = screen.getByRole("button", { name: "Click me" });
      // Action is the last child of the wrapper.
      expect(children[children.length - 1]?.contains(button)).toBe(true);
    });

    it("forwards className to the wrapper", () => {
      const { container } = render(<EmptyState className="my-empty" />);
      expect(container.querySelector(".my-empty")).toBeInTheDocument();
    });

    it("applies role=status for assistive tech", () => {
      render(<EmptyState title="Nothing" />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });

  describe("Scale variants", () => {
    it.each(["xs", "sm", "md", "lg"] as const)("renders with scale=%s", (scale) => {
      render(<EmptyState scale={scale} title="x" />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });
});
