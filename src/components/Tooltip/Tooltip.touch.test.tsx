import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";

// Mock useTouchDevice to return true for all tests in this file
vi.mock("../../hooks/useTouchDevice", () => ({
  useTouchDevice: () => true,
}));

import { Tooltip } from "./Tooltip";

// Mock getBoundingClientRect
function mockCenterPosition() {
  const original = HTMLElement.prototype.getBoundingClientRect;
  HTMLElement.prototype.getBoundingClientRect = function () {
    return {
      top: 300, bottom: 340, left: 400, right: 500,
      width: 100, height: 40, x: 400, y: 300,
      toJSON: () => {},
    } as DOMRect;
  };
  return () => {
    HTMLElement.prototype.getBoundingClientRect = original;
  };
}

describe("Tooltip Touch Device Behavior", () => {
  let restoreMock: (() => void) | undefined;

  beforeEach(() => {
    vi.useFakeTimers();
    restoreMock = mockCenterPosition();
  });

  afterEach(() => {
    vi.useRealTimers();
    restoreMock?.();
  });

  it("toggles tooltip on click on touch device", () => {
    render(
      <Tooltip content="Touch help" delay={0}>
        <button>Touch me</button>
      </Tooltip>,
    );

    const wrapper = screen.getByText("Touch me").closest(".cs\\:relative")!;
    // Click to show
    fireEvent.click(wrapper);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    // Click again to hide
    fireEvent.click(wrapper);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("closes tooltip on outside touch", () => {
    render(
      <Tooltip content="Touch help" delay={0}>
        <button>Touch me</button>
      </Tooltip>,
    );

    const wrapper = screen.getByText("Touch me").closest(".cs\\:relative")!;
    // Show tooltip
    fireEvent.click(wrapper);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    // Touch outside
    act(() => {
      document.dispatchEvent(new TouchEvent("touchstart", { bubbles: true }));
    });
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("does not use mouse events on touch device", () => {
    render(
      <Tooltip content="Touch help" delay={0}>
        <button>Touch me</button>
      </Tooltip>,
    );

    const wrapper = screen.getByText("Touch me").closest(".cs\\:relative")!;
    // mouseEnter should NOT show tooltip on touch device
    fireEvent.mouseEnter(wrapper);
    act(() => {
      vi.advanceTimersByTime(0);
    });
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    // Click should show it
    fireEvent.click(wrapper);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });
});
