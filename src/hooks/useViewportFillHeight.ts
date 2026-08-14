import { useCallback, useEffect, useRef, useState } from "react";

export interface ViewportFillHeightOptions {
  /** Space to leave between the element's bottom edge and the viewport, in px. */
  bottomGap?: number;
  /** Never shrink below this height, in px. */
  minHeight?: number;
}

const DEFAULT_BOTTOM_GAP = 0;
const DEFAULT_MIN_HEIGHT = 160;

/**
 * Measure how much vertical room is left between an element's top edge and the
 * bottom of the viewport, so the element can cap its own height and scroll
 * internally.
 *
 * Why this exists: `position: sticky` headers only work when the scroll
 * container has a bounded height. The usual way to bound it is to give every
 * ancestor a height (`h-full` / `flex-1 min-h-0` all the way up), which is easy
 * to get wrong and impossible inside a detail page, a tab panel, or a layout
 * with two tables on one screen. Measuring the element's own position removes
 * that requirement entirely.
 *
 * Returns `undefined` while disabled or before the first measurement, so the
 * caller can skip the `max-height` style and fall back to natural flow. That
 * also keeps server rendering and the first client render identical.
 *
 * Recomputes on window resize, on `visualViewport` resize (mobile browser
 * chrome sliding in and out changes the usable height), and when content above
 * the element changes its size.
 */
export function useViewportFillHeight<T extends HTMLElement>(
  enabled: boolean,
  { bottomGap = DEFAULT_BOTTOM_GAP, minHeight = DEFAULT_MIN_HEIGHT }: ViewportFillHeightOptions = {},
) {
  const ref = useRef<T | null>(null);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const frame = useRef<number | null>(null);

  const measure = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    const top = node.getBoundingClientRect().top;
    // visualViewport tracks the area actually visible on mobile, where the
    // address bar overlaps window.innerHeight.
    const viewport = window.visualViewport?.height ?? window.innerHeight;
    const next = Math.max(minHeight, Math.round(viewport - top - bottomGap));
    // Only commit real changes. The element's own height feeds back into the
    // page layout, so an unconditional set would loop with the observer below.
    setMaxHeight((prev) => (prev === next ? prev : next));
  }, [bottomGap, minHeight]);

  const schedule = useCallback(() => {
    if (frame.current !== null) return;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      measure();
    });
  }, [measure]);

  useEffect(() => {
    if (!enabled) {
      setMaxHeight(undefined);
      return;
    }
    measure();

    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);

    // Content above the table (filters, banners, a wrapping toolbar) changes the
    // top edge without firing a window resize.
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
    observer?.observe(document.body);

    return () => {
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      observer?.disconnect();
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
        frame.current = null;
      }
    };
  }, [enabled, measure, schedule]);

  return { ref, maxHeight };
}
