import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Tooltip } from "./Tooltip";

// Mock getBoundingClientRect to simulate element in center of viewport
function mockCenterPosition() {
  const original = HTMLElement.prototype.getBoundingClientRect;
  HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      top: 300,
      bottom: 340,
      left: 400,
      right: 500,
      width: 100,
      height: 40,
      x: 400,
      y: 300,
      toJSON: () => {},
    } as DOMRect;
  };
  return () => {
    HTMLElement.prototype.getBoundingClientRect = original;
  };
}

describe("Tooltip Component", () => {
  let restoreMock: (() => void) | undefined;

  beforeEach(() => {
    vi.useFakeTimers();
    restoreMock = mockCenterPosition();
  });

  afterEach(() => {
    vi.useRealTimers();
    restoreMock?.();
  });

  describe("Rendering", () => {
    it("renders children", () => {
      render(
        <Tooltip content="Help text">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(screen.getByText("Hover me")).toBeInTheDocument();
    });

    it("does not show tooltip by default", () => {
      render(
        <Tooltip content="Help text">
          <button>Hover me</button>
        </Tooltip>,
      );
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });
  });

  describe("Show/Hide", () => {
    it("shows tooltip on mouse enter after delay", () => {
      render(
        <Tooltip content="Help text" delay={300}>
          <button>Hover me</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Hover me").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(300);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByText("Help text")).toBeInTheDocument();
    });

    it("hides tooltip on mouse leave", () => {
      render(
        <Tooltip content="Help text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      const wrapper = screen.getByText("Hover me").closest(".cs\\:relative")!;
      fireEvent.mouseEnter(wrapper);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      fireEvent.mouseLeave(wrapper);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("shows tooltip on focus", () => {
      render(
        <Tooltip content="Help text" delay={0}>
          <button>Focus me</button>
        </Tooltip>,
      );

      fireEvent.focus(screen.getByText("Focus me").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("hides tooltip on blur", () => {
      render(
        <Tooltip content="Help text" delay={0}>
          <button>Focus me</button>
        </Tooltip>,
      );

      const wrapper = screen.getByText("Focus me").closest(".cs\\:relative")!;
      fireEvent.focus(wrapper);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      fireEvent.blur(wrapper);
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("hides tooltip on Escape key", () => {
      render(
        <Tooltip content="Help text" delay={0}>
          <button>Hover me</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Hover me").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();

      fireEvent.keyDown(document, { key: "Escape" });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("does not show tooltip before delay completes", () => {
      render(
        <Tooltip content="Help text" delay={500}>
          <button>Hover me</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Hover me").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(300);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });

  describe("Position", () => {
    it("renders with top position when space is available", () => {
      render(
        <Tooltip content="Help" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass("cs:bottom-full");
    });

    it("renders with bottom position", () => {
      render(
        <Tooltip content="Help" position="bottom" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass("cs:top-full");
    });

    it("renders with left position", () => {
      render(
        <Tooltip content="Help" position="left" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass("cs:right-full");
    });

    it("renders with right position", () => {
      render(
        <Tooltip content="Help" position="right" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass("cs:left-full");
    });

    it("flips from top to bottom when no space above", () => {
      restoreMock?.();
      // Mock element near top edge
      restoreMock = (() => {
        const original = HTMLElement.prototype.getBoundingClientRect;
        HTMLElement.prototype.getBoundingClientRect = function () {
          return {
            top: 2, bottom: 42, left: 400, right: 500,
            width: 100, height: 40, x: 400, y: 2,
            toJSON: () => {},
          } as DOMRect;
        };
        return () => {
          HTMLElement.prototype.getBoundingClientRect = original;
        };
      })();

      render(
        <Tooltip content="Help" position="top" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      const tooltip = screen.getByRole("tooltip");
      // Should flip to bottom (cs:top-full) since no space at top
      expect(tooltip).toHaveClass("cs:top-full");
    });
  });

  describe("Accessibility", () => {
    it("has role=tooltip", () => {
      render(
        <Tooltip content="Help" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      fireEvent.mouseEnter(screen.getByText("Trigger").closest(".cs\\:relative")!);
      act(() => {
        vi.advanceTimersByTime(0);
      });
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });

    it("sets aria-describedby on trigger when visible", () => {
      render(
        <Tooltip content="Help" delay={0}>
          <button>Trigger</button>
        </Tooltip>,
      );

      const wrapper = screen.getByText("Trigger").closest(".cs\\:relative")!;
      fireEvent.mouseEnter(wrapper);
      act(() => {
        vi.advanceTimersByTime(0);
      });

      const triggerWrapper = screen.getByText("Trigger").parentElement;
      const tooltip = screen.getByRole("tooltip");
      expect(triggerWrapper).toHaveAttribute("aria-describedby", tooltip.id);
    });

    it("does not set aria-describedby when hidden", () => {
      render(
        <Tooltip content="Help">
          <button>Trigger</button>
        </Tooltip>,
      );

      const triggerWrapper = screen.getByText("Trigger").parentElement;
      expect(triggerWrapper).not.toHaveAttribute("aria-describedby");
    });
  });
});
