import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Toast } from "./Toast";
import { ToastProvider, useToast } from "./ToastContext";

describe("Toast Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("Rendering", () => {
    it("renders toast message", () => {
      render(<Toast>Test message</Toast>);
      expect(screen.getByText("Test message")).toBeInTheDocument();
    });

    it("renders with success variant", () => {
      const { container } = render(
        <Toast variant="success">Success!</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:bg-green-50");
    });

    it("renders with error variant", () => {
      const { container } = render(
        <Toast variant="error">Error!</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:bg-red-50");
    });

    it("renders with warning variant", () => {
      const { container } = render(
        <Toast variant="warning">Warning!</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:bg-amber-50");
    });

    it("renders with info variant", () => {
      const { container } = render(
        <Toast variant="info">Info!</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:bg-blue-50");
    });
  });

  describe("Close button", () => {
    it("renders close button when onClose is provided", () => {
      render(<Toast onClose={() => {}}>Message</Toast>);
      expect(screen.getByLabelText("Close")).toBeInTheDocument();
    });

    it("does not render close button when onClose is not provided", () => {
      render(<Toast>Message</Toast>);
      expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
      const onClose = vi.fn();
      render(<Toast onClose={onClose}>Message</Toast>);
      fireEvent.click(screen.getByLabelText("Close"));
      // onClose is called after the 200ms animation delay
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe("Auto-dismiss", () => {
    it("auto-dismisses after duration", () => {
      const onClose = vi.fn();
      render(
        <Toast duration={3000} onClose={onClose}>
          Message
        </Toast>,
      );

      act(() => {
        vi.advanceTimersByTime(3000);
      });
      // Wait for animation delay
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(onClose).toHaveBeenCalled();
    });

    it("does not auto-dismiss when duration is 0", () => {
      const onClose = vi.fn();
      render(
        <Toast duration={0} onClose={onClose}>
          Message
        </Toast>,
      );

      act(() => {
        vi.advanceTimersByTime(10000);
      });
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe("Scale", () => {
    it("renders with sm scale", () => {
      const { container } = render(
        <Toast scale="sm">Message</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:text-xs");
    });

    it("renders with md scale", () => {
      const { container } = render(
        <Toast scale="md">Message</Toast>,
      );
      const toast = container.firstElementChild;
      expect(toast).toHaveClass("cs:text-sm");
    });
  });

  describe("Accessibility", () => {
    it("has role=status for non-error variants", () => {
      render(<Toast variant="success">Success</Toast>);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has role=alert for error variant", () => {
      render(<Toast variant="error">Error</Toast>);
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("has aria-live=polite for non-error variants", () => {
      render(<Toast variant="info">Info</Toast>);
      expect(screen.getByRole("status")).toHaveAttribute(
        "aria-live",
        "polite",
      );
    });

    it("has aria-live=assertive for error variant", () => {
      render(<Toast variant="error">Error</Toast>);
      expect(screen.getByRole("alert")).toHaveAttribute(
        "aria-live",
        "assertive",
      );
    });

    it("has aria-atomic=true", () => {
      render(<Toast>Message</Toast>);
      expect(screen.getByRole("status")).toHaveAttribute(
        "aria-atomic",
        "true",
      );
    });
  });
});

describe("ToastProvider", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function TestConsumer() {
    const toast = useToast();
    return (
      <div>
        <button onClick={() => toast.success("Success!")}>Success</button>
        <button onClick={() => toast.error("Error!")}>Error</button>
        <button onClick={() => toast.warning("Warning!")}>Warning</button>
        <button onClick={() => toast.info("Info!")}>Info</button>
      </div>
    );
  }

  it("renders toasts via useToast hook", () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Success"));
    expect(screen.getByText("Success!")).toBeInTheDocument();
  });

  it("renders multiple toasts", () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Success"));
    fireEvent.click(screen.getByText("Error"));
    expect(screen.getByText("Success!")).toBeInTheDocument();
    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  it("removes toast after auto-dismiss", () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Info"));
    expect(screen.getByText("Info!")).toBeInTheDocument();

    // Default duration is 5000ms + 200ms animation
    act(() => {
      vi.advanceTimersByTime(5200);
    });
    expect(screen.queryByText("Info!")).not.toBeInTheDocument();
  });

  it("error toasts do not auto-dismiss", () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>,
    );

    fireEvent.click(screen.getByText("Error"));
    expect(screen.getByText("Error!")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(screen.getByText("Error!")).toBeInTheDocument();
  });

  it("throws when useToast is used outside provider", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => {
      render(<TestConsumer />);
    }).toThrow("useToast must be used within a ToastProvider");
    consoleSpy.mockRestore();
  });
});
