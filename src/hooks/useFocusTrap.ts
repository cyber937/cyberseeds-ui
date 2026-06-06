import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "iframe",
  "object",
  "embed",
  "[contenteditable='true']",
  "[tabindex]:not([tabindex='-1'])",
  "audio[controls]",
  "video[controls]",
  "details > summary:first-of-type",
].join(",");

function isVisible(el: HTMLElement): boolean {
  if (el.hidden) return false;
  if (el.getAttribute("aria-hidden") === "true") return false;
  if (el.hasAttribute("inert")) return false;
  // jsdom doesn't lay out, so offsetParent is null even for visible nodes.
  // Trust display:none / visibility:hidden detection via computed style when available.
  if (typeof window !== "undefined" && typeof window.getComputedStyle === "function") {
    const style = window.getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") return false;
  }
  return true;
}

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(isVisible);
}

type Options = {
  /**
   * When true, on mount: focus the first focusable element inside the container
   * (or the container itself if none are focusable). Default true.
   */
  initialFocus?: boolean;
  /**
   * When true, on unmount: restore focus to whatever element was focused before
   * the trap was installed. Default true.
   */
  restoreFocus?: boolean;
};

/**
 * Traps Tab / Shift+Tab inside `containerRef`, sets initial focus on mount,
 * and restores focus to the previously-focused element on unmount.
 *
 * Implements the focus management requirements from the WAI-ARIA Authoring
 * Practices Dialog (Modal) pattern.
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  options: Options = {},
): void {
  const { initialFocus = true, restoreFocus = true } = options;

  useEffect(() => {
    if (!active) return;
    if (typeof document === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    if (initialFocus) {
      const focusables = getFocusableElements(container);
      const target = focusables[0] ?? container;
      // Ensure container can receive focus if it has no focusable children.
      if (target === container && !container.hasAttribute("tabindex")) {
        container.setAttribute("tabindex", "-1");
      }
      target.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = getFocusableElements(container);
      if (focusables.length === 0) {
        // Nothing to tab between — keep focus on the container.
        e.preventDefault();
        container.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const current = document.activeElement;
      // If focus has escaped the container entirely, pull it back in.
      if (!(current instanceof HTMLElement) || !container.contains(current)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && current === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
      if (restoreFocus && previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [containerRef, active, initialFocus, restoreFocus]);
}
