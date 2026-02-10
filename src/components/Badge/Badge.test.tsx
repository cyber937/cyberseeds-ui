import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";
import { testColors, testScales } from "../../test-utils";

describe("Badge Component", () => {
  describe("Rendering", () => {
    it("renders badge with text content", () => {
      render(<Badge>5</Badge>);
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("renders badge with string content", () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText("New")).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("renders solid variant by default", () => {
      const { container } = render(<Badge>5</Badge>);
      const badge = container.firstElementChild as HTMLElement;
      expect(badge).toHaveClass("cs-badge-solid");
      expect(badge.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("renders outline variant", () => {
      const { container } = render(<Badge variant="outline">5</Badge>);
      const badge = container.firstElementChild as HTMLElement;
      expect(badge).toHaveClass("cs:border");
      expect(badge).toHaveClass("cs-badge-outline");
      expect(badge.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
    });

    it("renders dot variant", () => {
      const { container } = render(<Badge variant="dot" />);
      const badge = container.firstElementChild as HTMLElement;
      expect(badge).toHaveClass("cs:rounded-full");
      expect(badge).toHaveClass("cs-badge-dot");
      expect(badge.style.getPropertyValue("--cs-ui-base")).toBeTruthy();
      expect(badge).toHaveAttribute("aria-hidden", "true");
    });
  });

  describe("Max prop", () => {
    it("shows count when below max", () => {
      render(<Badge max={99}>{50}</Badge>);
      expect(screen.getByText("50")).toBeInTheDocument();
    });

    it("shows max+ when above max", () => {
      render(<Badge max={99}>{150}</Badge>);
      expect(screen.getByText("99+")).toBeInTheDocument();
    });

    it("shows exact count when equal to max", () => {
      render(<Badge max={99}>{99}</Badge>);
      expect(screen.getByText("99")).toBeInTheDocument();
    });

    it("renders string content unchanged when max is set", () => {
      render(<Badge max={99}>New</Badge>);
      expect(screen.getByText("New")).toBeInTheDocument();
    });
  });

  describe("Scale", () => {
    it("renders with sm scale", () => {
      const { container } = render(<Badge scale="sm">5</Badge>);
      const badge = container.firstElementChild;
      expect(badge).toHaveClass("cs:text-[0.6rem]");
    });

    it("renders with md scale", () => {
      const { container } = render(<Badge scale="md">5</Badge>);
      const badge = container.firstElementChild;
      expect(badge).toHaveClass("cs:text-xs");
    });

    it("dot variant uses correct size for sm", () => {
      const { container } = render(<Badge variant="dot" scale="sm" />);
      const badge = container.firstElementChild;
      expect(badge).toHaveClass("cs:h-2");
      expect(badge).toHaveClass("cs:w-2");
    });

    it("dot variant uses correct size for md", () => {
      const { container } = render(<Badge variant="dot" scale="md" />);
      const badge = container.firstElementChild;
      expect(badge).toHaveClass("cs:h-2.5");
      expect(badge).toHaveClass("cs:w-2.5");
    });
  });

  describe("Colors", () => {
    it("renders with different preset colors", () => {
      testColors.forEach((color) => {
        const { unmount } = render(<Badge color={color}>1</Badge>);
        const badge = screen.getByText("1");
        expect(badge).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("Badge.Wrapper", () => {
    it("renders wrapper with relative positioning", () => {
      const { container } = render(
        <Badge.Wrapper>
          <span>Icon</span>
          <Badge>3</Badge>
        </Badge.Wrapper>,
      );
      expect(container.firstElementChild).toHaveClass("cs:relative");
      expect(container.firstElementChild).toHaveClass("cs:inline-flex");
    });

    it("renders children inside wrapper", () => {
      render(
        <Badge.Wrapper>
          <span>Icon</span>
          <Badge>3</Badge>
        </Badge.Wrapper>,
      );
      expect(screen.getByText("Icon")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });
  });
});
