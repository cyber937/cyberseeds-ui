import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { useState } from "react";
import { Drawer } from "./Drawer";

describe("Drawer Component", () => {
  it("renders with role=dialog and aria-modal=true", () => {
    render(
      <Drawer>
        <Drawer.Header>Title</Drawer.Header>
        <Drawer.Body>Body</Drawer.Body>
      </Drawer>,
    );
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  it("renders Header, Body, Footer children", () => {
    render(
      <Drawer>
        <Drawer.Header>My Header</Drawer.Header>
        <Drawer.Body>My Body</Drawer.Body>
        <Drawer.Footer>
          <button>OK</button>
        </Drawer.Footer>
      </Drawer>,
    );
    expect(screen.getByText("My Header")).toBeInTheDocument();
    expect(screen.getByText("My Body")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "OK" })).toBeInTheDocument();
  });

  it("wires header id to aria-labelledby on the dialog", () => {
    render(
      <Drawer>
        <Drawer.Header>Header</Drawer.Header>
      </Drawer>,
    );
    const dialog = screen.getByRole("dialog", { hidden: true });
    const header = screen.getByText("Header");
    expect(dialog).toHaveAttribute("aria-labelledby", header.id);
  });

  it("calls onClose when Escape is pressed", () => {
    const handleClose = vi.fn();
    render(
      <Drawer onClose={handleClose}>
        <Drawer.Body>Body</Drawer.Body>
      </Drawer>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  describe("Position variants", () => {
    it.each(["right", "left", "top", "bottom"] as const)(
      "renders without errors at position=%s",
      (position) => {
        render(
          <Drawer position={position}>
            <Drawer.Body>Body</Drawer.Body>
          </Drawer>,
        );
        expect(screen.getByRole("dialog", { hidden: true })).toBeInTheDocument();
      },
    );
  });

  describe("Focus management (via shared useFocusTrap)", () => {
    it("focuses the first focusable element on mount", () => {
      render(
        <Drawer>
          <Drawer.Body>
            <button>first</button>
            <button>second</button>
          </Drawer.Body>
        </Drawer>,
      );
      expect(document.activeElement).toBe(screen.getByText("first"));
    });

    it("restores focus to the trigger on close", () => {
      function Harness() {
        const [open, setOpen] = useState(false);
        return (
          <>
            <button onClick={() => setOpen(true)}>opener</button>
            {open && (
              <Drawer onClose={() => setOpen(false)}>
                <Drawer.Body>
                  <button>inside</button>
                </Drawer.Body>
              </Drawer>
            )}
          </>
        );
      }
      render(<Harness />);
      const opener = screen.getByText("opener");
      act(() => opener.focus());
      act(() => opener.click());
      expect(document.activeElement).toBe(screen.getByText("inside"));

      act(() => {
        fireEvent.keyDown(document, { key: "Escape" });
      });
      expect(document.activeElement).toBe(opener);
    });
  });

  describe("Backdrop click", () => {
    it("calls onClose when the backdrop is clicked", () => {
      const handleClose = vi.fn();
      render(
        <Drawer onClose={handleClose}>
          <Drawer.Body>Body</Drawer.Body>
        </Drawer>,
      );
      const dialog = screen.getByRole("dialog", { hidden: true });
      const backdrop = dialog.parentElement!;
      fireEvent.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not call onClose when the panel itself is clicked", () => {
      const handleClose = vi.fn();
      render(
        <Drawer onClose={handleClose}>
          <Drawer.Body>Body</Drawer.Body>
        </Drawer>,
      );
      const body = screen.getByText("Body");
      fireEvent.click(body);
      expect(handleClose).not.toHaveBeenCalled();
    });
  });
});
