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
