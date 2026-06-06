import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb Component", () => {
  describe("Structure", () => {
    it("renders a <nav> with aria-label='Breadcrumb' and an <ol>", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item current>Detail</Breadcrumb.Item>
        </Breadcrumb>,
      );
      const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
      expect(nav).toBeInTheDocument();
      expect(nav.querySelector("ol")).toBeInTheDocument();
    });

    it("renders each item inside an <li>", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/">A</Breadcrumb.Item>
          <Breadcrumb.Item href="/b">B</Breadcrumb.Item>
          <Breadcrumb.Item current>C</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });
  });

  describe("Separators", () => {
    it("uses '/' as the default separator", () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Item href="/">A</Breadcrumb.Item>
          <Breadcrumb.Item current>B</Breadcrumb.Item>
        </Breadcrumb>,
      );
      const separators = container.querySelectorAll('[aria-hidden="true"]');
      expect(separators).toHaveLength(1);
      expect(separators[0]).toHaveTextContent("/");
    });

    it("does not render a separator after the last item", () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Item href="/">A</Breadcrumb.Item>
          <Breadcrumb.Item href="/b">B</Breadcrumb.Item>
          <Breadcrumb.Item current>C</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(2);
    });

    it("accepts a custom string separator", () => {
      render(
        <Breadcrumb separator="›">
          <Breadcrumb.Item href="/">A</Breadcrumb.Item>
          <Breadcrumb.Item current>B</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.getByText("›")).toBeInTheDocument();
    });

    it("accepts a custom ReactNode separator (e.g. SVG)", () => {
      render(
        <Breadcrumb separator={<span data-testid="sep">→</span>}>
          <Breadcrumb.Item href="/">A</Breadcrumb.Item>
          <Breadcrumb.Item current>B</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.getByTestId("sep")).toBeInTheDocument();
    });
  });

  describe("Items", () => {
    it("renders a link when href is provided and current is false", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        </Breadcrumb>,
      );
      const link = screen.getByRole("link", { name: "Home" });
      expect(link).toHaveAttribute("href", "/home");
    });

    it("renders plain text when current=true (no link, no href)", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/here" current>Here</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
      expect(screen.getByText("Here")).toHaveAttribute("aria-current", "page");
    });

    it("renders plain text when no href is provided", () => {
      render(
        <Breadcrumb>
          <Breadcrumb.Item>Static</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });

    it("fires onClick when a link is clicked", async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
      render(
        <Breadcrumb>
          <Breadcrumb.Item href="/home" onClick={handleClick}>Home</Breadcrumb.Item>
          <Breadcrumb.Item current>Detail</Breadcrumb.Item>
        </Breadcrumb>,
      );
      await user.click(screen.getByRole("link", { name: "Home" }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Edge cases", () => {
    it("renders correctly with a single current item", () => {
      const { container } = render(
        <Breadcrumb>
          <Breadcrumb.Item current>Solo</Breadcrumb.Item>
        </Breadcrumb>,
      );
      expect(screen.getByText("Solo")).toHaveAttribute("aria-current", "page");
      // No separator should be rendered when there's only one item.
      expect(container.querySelectorAll('[aria-hidden="true"]')).toHaveLength(0);
    });
  });
});
