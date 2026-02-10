import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";
import { testColors, testScales } from "../../test-utils";

describe("Spinner Component", () => {
  describe("Rendering", () => {
    it("renders spinner", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("renders with SVG element", () => {
      const { container } = render(<Spinner />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Scale", () => {
    it("renders with sm scale", () => {
      const { container } = render(<Spinner scale="sm" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("cs:h-4");
      expect(svg).toHaveClass("cs:w-4");
    });

    it("renders with md scale", () => {
      const { container } = render(<Spinner scale="md" />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("cs:h-6");
      expect(svg).toHaveClass("cs:w-6");
    });
  });

  describe("Colors", () => {
    it("renders with default blue color", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("cs:text-blue-600");
    });

    it("renders with different preset colors", () => {
      testColors.forEach((color) => {
        const { unmount } = render(<Spinner color={color} />);
        expect(screen.getByRole("status")).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Accessibility", () => {
    it("has role=status", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has default aria-label", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading");
    });

    it("has custom aria-label", () => {
      render(<Spinner label="Processing" />);
      expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Processing");
    });
  });

  describe("Animation", () => {
    it("has animate-spin class", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveClass("cs:animate-spin");
    });
  });
});
