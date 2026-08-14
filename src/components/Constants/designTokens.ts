// ===== Focus Ring Tokens =====
// Standard: focus-visible:outline-2 with offset-2 (keyboard-only indication)
// Inset: for form inputs where outline sits inside the element border
export const FOCUS_RING =
  "cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2" as const;
export const FOCUS_RING_INSET =
  "cs:focus-visible:outline-2 cs:focus-visible:-outline-offset-2" as const;

// ===== Transition Tokens =====
// All include motion-reduce:transition-none for accessibility.
//   fast (150ms): Color changes, opacity toggles (Button, Tabs)
//   normal (200ms): Form inputs, slide in/out (Input, Toast, Modal backdrop)
//   slow (300ms): Transform, expand/collapse (Switch, Modal dialog, Accordion chevron, Progress)
export const TRANSITION_FAST =
  "cs:transition-colors cs:duration-150 cs:ease-in-out cs:motion-reduce:transition-none" as const;
export const TRANSITION_NORMAL =
  "cs:transition-colors cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none" as const;
export const TRANSITION_SLOW =
  "cs:transition-all cs:duration-300 cs:ease-in-out cs:motion-reduce:transition-none" as const;
export const TRANSITION_TRANSFORM_SLOW =
  "cs:transition-transform cs:duration-300 cs:ease-in-out cs:motion-reduce:transition-none" as const;

// ===== Stacking Order =====
// One ladder for everything that floats, so a component never has to guess a
// number. Read top to bottom: later entries paint over earlier ones.
//
// Why this exists: the values used to be written inline per component and had
// drifted out of order — Tooltip sat at 40 and a Combobox dropdown at 10, both
// *below* Modal's 50, so either one placed inside a modal was painted behind
// it. Toast also tied with Modal at 50, leaving the winner up to DOM order.
//
// Gaps of 10 leave room for a consumer to slot something in between without
// having to renumber the library.
export const Z_INDEX = {
  /** Sticky table headers and other in-flow layering. */
  STICKY: "cs:z-10",
  /** Dropdowns anchored to a control: Combobox, Select, DatePicker, Menu. */
  DROPDOWN: "cs:z-30",
  /** Full-screen scrims: Modal, Drawer. */
  OVERLAY: "cs:z-40",
  /** Content sitting on a scrim, and floating panels: Popover. */
  POPOVER: "cs:z-50",
  /** Transient messages — must clear a modal that triggered them. */
  TOAST: "cs:z-[60]",
  /**
   * Tooltips ride above everything: they can be triggered from a control inside
   * any of the layers above, and are dismissed on their own.
   */
  TOOLTIP: "cs:z-[70]",
} as const;
// 60 and 70 are written as arbitrary values because Tailwind's built-in z scale
// stops at 50.

// ===== Responsive Tokens =====
// Touch target minimum (WCAG 2.5.8: Target Size)
export const TOUCH_TARGET_MIN = "cs:max-md:min-h-11" as const; // 44px on mobile

// Mobile-safe font size (prevents iOS auto-zoom on input focus)
export const MOBILE_INPUT_FONT = "cs:max-md:text-base" as const; // 16px on mobile

// Responsive max-width guard (prevents overflow on narrow viewports)
export const RESPONSIVE_MAX_WIDTH =
  "cs:max-w-[calc(100vw-2rem)]" as const;
