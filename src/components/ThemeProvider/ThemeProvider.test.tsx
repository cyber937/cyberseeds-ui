import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "./ThemeProvider";
import { useTheme } from "./useTheme";

function ThemeDisplay() {
  const { mode, resolvedTheme, setMode } = useTheme();
  return (
    <div>
      <span data-testid="mode">{mode}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button onClick={() => setMode("dark")}>Set Dark</button>
      <button onClick={() => setMode("light")}>Set Light</button>
      <button onClick={() => setMode("system")}>Set System</button>
    </div>
  );
}

describe("ThemeProvider", () => {
  let matchMediaListeners: Array<(e: MediaQueryListEvent) => void> = [];

  function mockMatchMedia(matches: boolean) {
    const listeners: Array<(e: MediaQueryListEvent) => void> = [];
    matchMediaListeners = listeners;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) =>
          listeners.push(fn),
        removeEventListener: (_: string, fn: (e: MediaQueryListEvent) => void) => {
          const idx = listeners.indexOf(fn);
          if (idx >= 0) listeners.splice(idx, 1);
        },
        dispatchEvent: vi.fn(),
      })),
    });
  }

  afterEach(() => {
    matchMediaListeners = [];
  });

  describe("mode prop", () => {
    it("defaults to system mode", () => {
      mockMatchMedia(false);
      render(
        <ThemeProvider>
          <ThemeDisplay />
        </ThemeProvider>,
      );
      expect(screen.getByTestId("mode")).toHaveTextContent("system");
      expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    });

    it("resolves system mode to dark when prefers-color-scheme is dark", () => {
      mockMatchMedia(true);
      render(
        <ThemeProvider>
          <ThemeDisplay />
        </ThemeProvider>,
      );
      expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    });

    it("respects explicit light mode", () => {
      mockMatchMedia(true);
      render(
        <ThemeProvider mode="light">
          <ThemeDisplay />
        </ThemeProvider>,
      );
      expect(screen.getByTestId("mode")).toHaveTextContent("light");
      expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    });

    it("respects explicit dark mode", () => {
      mockMatchMedia(false);
      render(
        <ThemeProvider mode="dark">
          <ThemeDisplay />
        </ThemeProvider>,
      );
      expect(screen.getByTestId("mode")).toHaveTextContent("dark");
      expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    });
  });

  describe("dark class", () => {
    it("adds dark class when resolved theme is dark", () => {
      mockMatchMedia(false);
      render(
        <ThemeProvider mode="dark">
          <ThemeDisplay />
        </ThemeProvider>,
      );
      const wrapper = screen.getByTestId("mode").closest(".dark");
      expect(wrapper).toBeInTheDocument();
    });

    it("does not add dark class when resolved theme is light", () => {
      mockMatchMedia(false);
      render(
        <ThemeProvider mode="light">
          <ThemeDisplay />
        </ThemeProvider>,
      );
      const wrapper = screen.getByTestId("mode").closest(".dark");
      expect(wrapper).toBeNull();
    });
  });

  describe("setMode (uncontrolled)", () => {
    it("updates mode when setMode is called", async () => {
      mockMatchMedia(false);
      const user = userEvent.setup();
      render(
        <ThemeProvider>
          <ThemeDisplay />
        </ThemeProvider>,
      );

      expect(screen.getByTestId("mode")).toHaveTextContent("system");

      await user.click(screen.getByText("Set Dark"));
      expect(screen.getByTestId("mode")).toHaveTextContent("dark");
      expect(screen.getByTestId("resolved")).toHaveTextContent("dark");

      await user.click(screen.getByText("Set Light"));
      expect(screen.getByTestId("mode")).toHaveTextContent("light");
      expect(screen.getByTestId("resolved")).toHaveTextContent("light");
    });
  });

  describe("system theme changes", () => {
    it("updates resolved theme when system preference changes", () => {
      mockMatchMedia(false);
      render(
        <ThemeProvider>
          <ThemeDisplay />
        </ThemeProvider>,
      );

      expect(screen.getByTestId("resolved")).toHaveTextContent("light");

      // Simulate system theme change to dark
      act(() => {
        matchMediaListeners.forEach((fn) =>
          fn({ matches: true } as MediaQueryListEvent),
        );
      });

      expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
    });
  });

  describe("useTheme error", () => {
    it("throws when used outside ThemeProvider", () => {
      const spy = vi.spyOn(console, "error").mockImplementation(() => {});
      expect(() => render(<ThemeDisplay />)).toThrow(
        "useTheme must be used within a <ThemeProvider>",
      );
      spy.mockRestore();
    });
  });
});
