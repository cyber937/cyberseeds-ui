import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import { Skeleton } from "./Skeleton";
import * as stories from "./Skeleton.stories";

const { Primary, Avatar, Rectangle, Paragraph } = composeStories(stories);

describe("Skeleton Component", () => {
  describe("Storybook Stories", () => {
    it("renders Primary story", () => {
      render(<Primary />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("renders Avatar story as a circle", () => {
      render(<Avatar />);
      const node = screen.getByRole("status");
      expect(node.className).toMatch(/rounded-full/);
    });

    it("renders Rectangle story", () => {
      render(<Rectangle />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("renders Paragraph story with multiple lines", () => {
      const { container } = render(<Paragraph />);
      // Wrapper + child bars
      const bars = container.querySelectorAll("div > div");
      expect(bars.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Accessibility", () => {
    it("announces itself as a loading status", () => {
      render(<Skeleton />);
      const node = screen.getByRole("status");
      expect(node).toHaveAttribute("aria-busy", "true");
      expect(node).toHaveAttribute("aria-label", "Loading");
    });

    it("uses aria-live polite so announcements don't interrupt", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    });
  });

  describe("Rendering", () => {
    it("defaults to text variant when no variant is given", () => {
      render(<Skeleton />);
      // text variant uses textHeightScaleMap which sets a h-* class
      const node = screen.getByRole("status");
      expect(node.className).toMatch(/cs:h-\d/);
    });

    it("accepts numeric width and renders px", () => {
      render(<Skeleton width={150} />);
      const node = screen.getByRole("status");
      expect(node.getAttribute("style") ?? "").toContain("width: 150px");
    });

    it("accepts string width", () => {
      render(<Skeleton width="50%" />);
      const node = screen.getByRole("status");
      expect(node.getAttribute("style") ?? "").toContain("width: 50%");
    });

    it("falls back to width as height for circular variant", () => {
      render(<Skeleton variant="circular" width={48} />);
      const node = screen.getByRole("status");
      const style = node.getAttribute("style") ?? "";
      expect(style).toContain("width: 48px");
      expect(style).toContain("height: 48px");
    });

    it("renders the requested number of lines for text + lines", () => {
      const { container } = render(<Skeleton lines={5} />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.children.length).toBe(5);
    });

    it("makes the last line of a paragraph narrower", () => {
      const { container } = render(<Skeleton lines={3} />);
      const wrapper = container.firstChild as HTMLElement;
      const lastChild = wrapper.children[wrapper.children.length - 1] as HTMLElement;
      expect(lastChild.getAttribute("style") ?? "").toContain("width: 60%");
    });

    it("forwards className", () => {
      render(<Skeleton className="my-skeleton" />);
      expect(screen.getByRole("status").className).toContain("my-skeleton");
    });

    it("includes motion-reduce variant for prefers-reduced-motion", () => {
      render(<Skeleton />);
      expect(screen.getByRole("status").className).toContain("motion-reduce:animate-none");
    });
  });

  describe("Scale variants", () => {
    it.each(["xs", "sm", "md", "lg"] as const)("renders text variant at scale=%s", (scale) => {
      render(<Skeleton scale={scale} />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });
  });
});
