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
  /**
   * The element this layer occupies. Used to work out which layer Escape
   * belongs to when several are open at once — see `innermostLayer`.
   *
   * Optional: a layer without one still takes part, it just falls back to
   * registration order. Pass it whenever the component has a container node;
   * every component in this library does.
   */
  container?: RefObject<HTMLElement | null>;
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
/** One open layer that is listening for Escape. */
type EscapeLayer = {
  dismiss: () => void;
  container?: RefObject<HTMLElement | null>;
};

/**
 * Every layer currently listening for Escape, oldest first.
 *
 * Module scope is the point: these layers know nothing about each other. A
 * confirm dialog opened inside a detail dialog, or a date picker inside a
 * drawer, are written independently and still have to agree on who is on top.
 */
const openLayers: EscapeLayer[] = [];

/**
 * Which layer should Escape close? The one the user is looking at: the
 * innermost.
 *
 * Nesting is read from the DOM rather than from registration order, because
 * **React runs a child's effect before its parent's**. Two nested layers that
 * mount in the same commit therefore register inner-first, and "whoever
 * registered last" would hand Escape to the *outer* layer.
 *
 * A layer is passed over when another open layer sits inside it. Scanning from
 * the newest backwards means that among layers which don't nest — two popovers
 * side by side, or one rendered through a portal — the most recently opened
 * still wins.
 */
function innermostLayer(): EscapeLayer | undefined {
  for (let i = openLayers.length - 1; i >= 0; i--) {
    const layer = openLayers[i];
    const el = layer.container?.current;
    // Nothing to compare against: fall back to registration order.
    if (!el) return layer;
    const containsAnother = openLayers.some((other) => {
      if (other === layer) return false;
      const otherEl = other.container?.current;
      return !!otherEl && otherEl !== el && el.contains(otherEl);
    });
    if (!containsAnother) return layer;
  }
  return openLayers[openLayers.length - 1];
}

export function useDismissable({
  enabled,
  onDismiss,
  refs,
  escape = true,
  container,
}: DismissableOptions) {
  const onDismissRef = useRef(onDismiss);
  onDismissRef.current = onDismiss;

  const watchOutside = refs !== undefined && refs.length > 0;

  useEffect(() => {
    if (!enabled) return;

    // Register while open so nested layers can tell who is on top. A layer
    // that opts out of Escape never joins, so it can't take a turn it would
    // only throw away — `Combobox` does exactly that.
    const self: EscapeLayer | undefined = escape
      ? { dismiss: () => onDismissRef.current("escape"), container }
      : undefined;
    if (self) openLayers.push(self);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // Only the innermost layer reacts. Every open layer hears the keypress,
      // so without this one Escape closes the whole stack: backing out of a
      // confirm dialog would take the dialog underneath it too.
      if (innermostLayer() !== self) return;
      self!.dismiss();
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
      if (self) {
        const i = openLayers.indexOf(self);
        if (i !== -1) openLayers.splice(i, 1);
      }
      if (escape) document.removeEventListener("keydown", handleKeyDown);
      if (watchOutside) {
        document.removeEventListener("mousedown", handlePress);
        document.removeEventListener("touchstart", handlePress);
      }
    };
    // `refs` is read through the closure above; identity churn on the array
    // itself would only re-attach identical listeners.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, escape, watchOutside, container]);
}
