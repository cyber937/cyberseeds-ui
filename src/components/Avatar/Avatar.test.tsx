import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { createRef } from "react";
import { Avatar } from "./Avatar";

describe("Avatar Component", () => {
  describe("Image rendering", () => {
    it("renders an <img> when src is provided", () => {
      render(<Avatar src="https://example.com/a.png" alt="Avatar" />);
      const img = document.querySelector("img");
      expect(img).toHaveAttribute("src", "https://example.com/a.png");
      expect(img).toHaveAttribute("alt", "Avatar");
    });

    it("falls back to initials when the image fails to load", () => {
      render(<Avatar src="https://example.com/broken.png" name="Kiyoshi Nagahama" />);
      const img = document.querySelector("img");
      fireEvent.error(img!);
      expect(screen.getByText("KN")).toBeInTheDocument();
    });
  });

  describe("Initials fallback", () => {
    it("renders first letter of first + last word as initials", () => {
      render(<Avatar name="Kiyoshi Nagahama" />);
      expect(screen.getByText("KN")).toBeInTheDocument();
    });

    it("uses the first two letters when name is a single word", () => {
      render(<Avatar name="Cher" />);
      expect(screen.getByText("CH")).toBeInTheDocument();
    });

    it("uppercases the initials", () => {
      render(<Avatar name="alice smith" />);
      expect(screen.getByText("AS")).toBeInTheDocument();
    });

    it("handles names with extra whitespace", () => {
      render(<Avatar name="  jane   doe  " />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("uses only first 2 initials for multi-word names", () => {
      render(<Avatar name="Mary Jane Watson" />);
      expect(screen.getByText("MW")).toBeInTheDocument();
    });
  });

  describe("Custom fallback", () => {
    it("renders the custom fallback when no image is provided", () => {
      render(<Avatar fallback="🦊" alt="Fox" />);
      expect(screen.getByText("🦊")).toBeInTheDocument();
    });

    it("prefers custom fallback over initials when both are provided", () => {
      render(<Avatar fallback="🦊" name="Kiyoshi Nagahama" />);
      expect(screen.getByText("🦊")).toBeInTheDocument();
      expect(screen.queryByText("KN")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("uses alt as the <img> alt attribute when an image is shown", () => {
      render(<Avatar src="x.png" alt="Profile picture" />);
      const img = document.querySelector("img");
      expect(img).toHaveAttribute("alt", "Profile picture");
    });

    it("falls back to name for aria-label when alt is missing", () => {
      render(<Avatar name="Alice Apple" />);
      expect(screen.getByRole("img", { name: "Alice Apple" })).toBeInTheDocument();
    });

    it("uses a generic 'Avatar' label when neither alt nor name are provided", () => {
      render(<Avatar fallback="?" />);
      expect(screen.getByRole("img", { name: "Avatar" })).toBeInTheDocument();
    });
  });

  describe("Shape and ref", () => {
    it("applies circle shape by default", () => {
      const { container } = render(<Avatar name="X" />);
      expect(container.firstChild).toHaveClass("cs:rounded-full");
    });

    it("applies square shape when requested", () => {
      const { container } = render(<Avatar name="X" shape="square" />);
      expect(container.firstChild).toHaveClass("cs:rounded-md");
      expect(container.firstChild).not.toHaveClass("cs:rounded-full");
    });

    it("forwards ref to the outer span", () => {
      const ref = createRef<HTMLSpanElement>();
      render(<Avatar ref={ref} name="X" />);
      expect(ref.current?.tagName).toBe("SPAN");
    });

    it("applies className to the outer span", () => {
      const { container } = render(<Avatar name="X" className="extra-class" />);
      expect(container.firstChild).toHaveClass("extra-class");
    });
  });
});
