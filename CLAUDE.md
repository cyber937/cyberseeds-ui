# cyberseeds-ui — Package Development Guide

## Package Overview

Core UI component library for the Cyberseeds ecosystem.
28 components, CSS variable-based color system, Tailwind CSS v4 with `cs:` namespace.

- **Version**: 1.2.2
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
| `src/components/Constants/colorContrast.ts` | `needsDarkText()` / `solidTextClass()` — 背景の明るさから文字色を決める |
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

### 文字色は背景の明るさで決める（v3.0.0）

ソリッド背景に文字を載せる部品は `solidTextClass(color)` を使う。**自分で判断を書かない。**

```tsx
import { solidTextClass, needsDarkText } from "../Constants/colorContrast";
const textColor = solidTextClass(finalUIColor);   // cs:text-white … か cs:text-gray-950
```

背景に白文字を載せて WCAG AA（4.5:1）に届かなければ濃い文字（`cs:text-gray-950`）にする。
プリセットも自前の色（CustomColor）も同じ規則で判断する。

⚠️ **CSS 側で `color:` を固定しないこと。** `.cs-badge-solid` が `color: white` を
持っていたため、部品が付けた `cs:text-gray-950` に勝ってしまい、明るい背景でも白文字の
ままだった（v3.0.0 で修正）。背景色だけを CSS に置き、文字色は部品が決める。

⚠️ **CSS は 2 ファイルにある。** `src/index.css`（開発・Storybook 用）と
`src/index-dist.css`（配布用 `dist/style.css` の元）。**片方だけ直すと配布物に反映されない。**

#### なぜ一覧ではなく計算なのか

以前は amber / yellow / lime の 3 色を手で並べていた。実際に測ると
orange / green / emerald / teal / cyan / sky も白文字では 3.2〜4.0:1 しかなく、
**6 色を取りこぼしていた**。`LIGHT_BG_COLORS` は今も export しているが、
手書きの一覧ではなく実測から求めた集合になっている。

#### hover / active は文字色から遠ざかる

濃淡の自動生成は以前 hover を必ず明るくしていた（+0.08）。白文字を載せる濃い色では
コントラストが下がる方向で、**22 色中 13 色がホバーで AA を割っていた**。
今は「文字色から遠ざかる向き」に動かす（白文字なら暗く、濃い文字なら明るく）。

#### 濃い文字は gray-950

`sky` は白文字 4.02:1・gray-900 でも 4.41:1 とどちらでも届かない。
gray-950（#030712）にすると 5.01:1 になり、22 色すべてが通る。

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

### User interaction: prefer `@testing-library/user-event` over `fireEvent`

Default to `userEvent` for any test that simulates a user action (click, type, tab, keyboard activation). `fireEvent` dispatches a single low-level DOM event and misses the rest of the real interaction (`pointerdown` → `mousedown` → `focus` → `mouseup` → `click`, the `:disabled` pointer-events check on buttons, etc.), so tests that pass with `fireEvent` can still mask real bugs.

```tsx
// Preferred
import userEvent from '@testing-library/user-event';

it('handles click', async () => {
  const user = userEvent.setup();          // create the user *outside* of any timer
  render(<Button onClick={spy} />);
  await user.click(screen.getByRole('button'));
  expect(spy).toHaveBeenCalledTimes(1);
});

// Acceptable only when userEvent can't model the case (e.g. synthesizing a
// non-trusted event, or stubbing a single transitionend / animationend hook)
import { fireEvent } from '@testing-library/react';
fireEvent.transitionEnd(node);
```

Notes for migration:
- `fireEvent.click` → `await user.click(el)` — the test becomes `async`.
- `fireEvent.change(input, { target: { value } })` → `await user.type(input, value)` (per-character) or `await user.clear(input); await user.type(input, value)` if you also need to overwrite.
- `fireEvent.keyDown(el, { key: 'Enter' })` → `el.focus(); await user.keyboard('{Enter}')`.
- For Escape close-on-modal / global keydown handlers attached to `document`, `fireEvent.keyDown(document, …)` is still fine — there's no element to focus.

The migration is incremental — new tests use `userEvent`; old `fireEvent` tests are converted as they're touched.

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

## API Conventions

### Controlled inputs — `onCheckedChange(checked: boolean)`

Switch / Checkbox / Radio expose a typed `onCheckedChange?: (checked: boolean) => void`
callback in addition to the raw DOM events.

```tsx
// Preferred — typed callback, no event ceremony
<Switch checked={x} onCheckedChange={setX} />
<Checkbox checked={x} onCheckedChange={setX} />
<Radio checked={x} onCheckedChange={setX} />

// Still works — raw DOM event for callers that need it
<Checkbox onChange={(e) => fn(e.target.checked)} />
<Switch onClick={(e) => { /* analytics */ }} />
```

Why: Switch is a `<button>`, so the inherited `onChange` from `ButtonHTMLAttributes`
**never fires** (buttons don't emit change events). Without an explicit typed callback,
callers had to flip `!checked` manually inside `onClick`, which is easy to get wrong
and inconsistent with how Checkbox/Radio behave. `onCheckedChange` papers over the
DOM asymmetry while keeping the existing `onClick` / `onChange` passthroughs intact.

Implementation pattern (used in `Switch.tsx`, `Checkbox.tsx`, `Radio.tsx`):

```tsx
export function Switch({ onCheckedChange, onClick, checked = false, ...props }: SwitchProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onCheckedChange?.(!checked);    // typed callback fires first
    onClick?.(event);                // then chain to user's onClick if any
  };
  return <button onClick={handleClick} {...props} />;
}
```

When adding new boolean-toggle components, follow the same naming: `onCheckedChange`,
not `onChange`/`onToggle`/`onSelect`. Radix UI uses the same convention so callers
already trained on Radix slot in without surprises.

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
