# cyberseeds-ui — Package Development Guide

## Package Overview

Core UI component library for the Cyberseeds ecosystem.
28 components, CSS variable-based color system, Tailwind CSS v4 with `cs:` namespace.

- **Version**: 1.2.1
- **Entry point**: `src/components/index.tsx`
- **Exports**: Named exports only (no default exports)

## Commands

```bash
# All commands run from workspace root with -w flag
npm run dev -w cyberseeds-ui          # Vite dev server
npm run build -w cyberseeds-ui        # Full build (css:preview → tsc → vite → css)
npm run lint -w cyberseeds-ui         # ESLint (23 react-refresh warnings are expected)
npm run test -w cyberseeds-ui         # Vitest watch mode
npm run test:run -w cyberseeds-ui     # Single run
npm run test:coverage -w cyberseeds-ui # Coverage report
npm run storybook -w cyberseeds-ui    # Storybook on port 6006
```

### Build Pipeline Detail

```
npm run build:css:preview   → Tailwind: src/index.css → src/style.css (for dev/storybook)
tsc -b                      → Type check
vite build                  → Bundle to dist/cyberseeds-ui.js (single ESM file)
npm run build:css           → Tailwind: src/index.css → dist/style.css (for consumers)
```

## Color System (v1.0.0)

All colors — preset and custom — go through CSS variables (`--cs-ui-*`).

### Key Files

| File | Purpose |
|------|---------|
| `src/components/Constants/colorUtils.ts` | `colorToCSSVars()`, `isPresetColor()`, `resolveColor()` |
| `src/components/Constants/presetColorVars.ts` | 22 preset colors → OKLCH CSS variable values |
| `src/components/Constants/colorContrast.ts` | `LIGHT_BG_COLORS` set (amber/yellow/lime dark text) |
| `src/components/Constants/colorShadeGenerator.ts` | Auto-generate shades from `base` color |
| `src/components/Constants/semanticColor.ts` | success/warning/error/info → preset color mapping |
| `src/components/Constants/designTokens.ts` | FOCUS_RING, TRANSITION, TOUCH_TARGET constants |

### Color Resolution Flow

```
Component color prop → UIColorProvider context → "blue" default
        ↓
resolveColor() (handles semantic → preset mapping)
        ↓
colorToCSSVars(color) → { "--cs-ui-base": "oklch(...)", ... }
        ↓
CSS classes (cs-btn-primary, cs-checked, etc.) reference var(--cs-ui-*)
```

### CSS Class Names

Components use semantic CSS classes defined in `src/index.css`:

```
cs-btn-primary, cs-bg, cs-focus, cs-focus-visible, cs-checked,
cs-pill, cs-badge-solid, cs-badge-outline, cs-badge-dot,
cs-spinner, cs-progress, cs-tab-active,
cs-stepper-active, cs-stepper-completed, cs-stepper-line-completed,
cs-btn-tab-active
```

### LIGHT_BG_COLORS

amber/yellow/lime need dark text for WCAG AA contrast.
`LIGHT_BG_COLORS` Set is used in Button, Badge, Checkbox, Radio to switch to `cs:text-gray-900`.
This cannot be done via CSS variables (no lightness detection in CSS).

## Component Structure

### Standard Pattern

```
ComponentName/
├── ComponentName.tsx          # Component implementation
├── ComponentName.stories.tsx  # Storybook stories (Required)
├── ComponentName.test.tsx     # Unit tests (Required)
└── index.tsx                  # Re-export (only for components with Context/Hook files)
```

### When to Create index.tsx

Create `index.tsx` only when the directory has multiple exportable files (Context, Hook, etc.).
Components with a single `.tsx` file do NOT need `index.tsx` — they are exported directly from `src/components/index.tsx`.

### Components Without Dedicated Tests/Stories (Intentional)

| Component | Reason |
|-----------|--------|
| **Label** | Simple display component, tested indirectly via FormField |
| **Radio** | Internal component, tested via RadioGroup |
| **UIColorProvider** | Context provider, tested via `__tests__/customColor.test.tsx` |

## Test Infrastructure

### Configuration

- **Runner**: Vitest with jsdom environment
- **Setup**: `src/test-setup.ts` (jest-dom matchers, browser API mocks)
- **Config**: `vitest.config.ts`
- **Coverage targets**: 90%+ statements, 85%+ branches

### Test Utilities (`src/test-utils.ts`)

```tsx
import { renderWithUIColorProvider, testColors, testScales, mockMatchMedia } from "../../test-utils";

// renderWithUIColorProvider(ui, { initialColor: "red" })
// testColors = ["blue", "red", "green", "amber", "gray", "purple"]
// testScales = ["xs", "sm", "md", "lg"] as const
// mockMatchMedia(matches: boolean) — mock window.matchMedia
```

### Global Mocks (auto-loaded via test-setup.ts)

- `ResizeObserver`, `IntersectionObserver`
- `matchMedia`, `getComputedStyle`
- `requestAnimationFrame` / `cancelAnimationFrame`

### Integration Tests (`src/components/__tests__/`)

| File | Purpose |
|------|---------|
| `accessibility.test.tsx` | jest-axe for all components |
| `colorSystem.test.tsx` | 22 colors × all components CSS variable integration |
| `customColor.test.tsx` | CustomColor object + UIColorProvider |
| `color-contrast.test.ts` | LIGHT_BG_COLORS dark text verification |
| `colorShadeGenerator.test.ts` | Auto shade generation from base |
| `semanticColor.test.ts` | Semantic → preset color resolution |
| `integration.test.tsx` | Cross-component interactions |

## Shared Types (`src/components/DesignSystemUtils.tsx`)

```tsx
type PresetColor = "red" | "orange" | ... | "stone"  // 22 Tailwind colors
interface CustomColor { base: string; hover?: ...; active?: ...; focus?: ...; light?: ...; lightText?: ...; border?: ...; dark?: ... }
type SemanticColor = "success" | "warning" | "error" | "info"
type Color = PresetColor | CustomColor | SemanticColor
type Scale = "xs" | "sm" | "md" | "lg"
type Variant = "primary" | "secondary"
```

## Hooks (`src/hooks/`)

All hooks have dedicated tests in `src/hooks/__tests__/`.

| Hook | Purpose |
|------|---------|
| `useMediaQuery` | Generic SSR-safe matchMedia wrapper |
| `useBreakpoint` | Current responsive breakpoint (sm/md/lg/xl/2xl) |
| `useIsMobile` | true when viewport < 768px |
| `useTouchDevice` | Detects `hover: none` + `pointer: coarse` |
| `useReducedMotion` | Detects `prefers-reduced-motion: reduce` |
| `useBodyScrollLock` | Lock body scroll (for Modal mobile fullscreen) |

## Known Issues / Gotchas

- **ESLint warnings**: 23 `react-refresh/only-export-components` warnings from barrel exports in `index.tsx`. These are expected and acceptable.
- **`@` path alias**: Defined in `vitest.config.ts` and `vite.config.ts` but NOT in `tsconfig.json`. Use relative imports in component code.
- **Storybook Foundations**: MDX docs live in `src/docs/` (not `docs/`).
