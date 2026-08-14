import { useEffect, useRef, type RefObject } from "react";

/** How the dismissal was requested. */
export type DismissReason = "escape" | "outside";

export interface DismissableOptions {
  /** Only listen while true — pass the component's own open state. */
  enabled: boolean;
  /**
   * Called when the user asks to close.
   *
   * The reason matters: on Escape the pointer never moved, so focus should go
   * back to the trigger; on an outside press the user has already chosen where
   * to go, and yanking focus back would fight them.
   */
  onDismiss: (reason: DismissReason) => void;
  /**
   * Regions that count as "inside". A press landing in any of them is ignored.
   * Omit (or pass an empty array) to skip outside-press handling and listen for
   * Escape only.
   */
  refs?: ReadonlyArray<RefObject<HTMLElement | null>>;
  /** Listen for Escape on the document. Default `true`. */
  escape?: boolean;
}

/**
 * Close-on-Escape and close-on-outside-press for anything that opens over the
 * page: modals, drawers, popovers, tooltips, dropdowns.
 *
 * Why this exists: the same two listeners were written five times across the
 * library, each with slightly different wiring — and `Menu` and `DatePicker`
 * were missed entirely, so neither could be closed from the keyboard. Having
 * one place to reach for makes the omission harder to repeat.
 *
 * `mousedown`/`touchstart` are used rather than `click` so the dismissal fires
 * on press. Waiting for `click` lets a press that starts outside and releases
 * inside (or on an element that unmounts mid-gesture) slip through.
 *
 * The callback is held in a ref so a caller passing an inline arrow function
 * doesn't tear down and re-attach the listeners on every render.
 */
export function useDismissable({
  enabled,
  onDismiss,
  refs,
  escape = true,
}: DismissableOptions) {
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  const watchOutside = refs !== undefined && refs.length > 0;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismissRef.current("escape");
    };

    const handlePress = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      // A ref whose node has gone (unmounted, or not yet attached) can't
      // contain anything — skip it rather than treating it as "outside".
      const inside = refs!.some((r) => r.current?.contains(target));
      if (!inside) onDismissRef.current("outside");
    };

    if (escape) document.addEventListener("keydown", handleKeyDown);
    if (watchOutside) {
      document.addEventListener("mousedown", handlePress);
      document.addEventListener("touchstart", handlePress);
    }

    return () => {
      if (escape) document.removeEventListener("keydown", handleKeyDown);
      if (watchOutside) {
        document.removeEventListener("mousedown", handlePress);
        document.removeEventListener("touchstart", handlePress);
      }
    };
    // `refs` is read through the closure above; identity churn on the array
    // itself would only re-attach identical listeners.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, escape, watchOutside]);
}
