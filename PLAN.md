# cyberseeds-ui v1.0.0 Implementation Plan

> **Status: ALL PHASES COMPLETE** — v1.0.0 has been implemented and released.
> This document is retained as a historical reference for the architectural decisions made.

## Overview

v0.7.0 → v1.0.0: Unified color system to CSS variables, achieved test coverage targets, documentation overhaul, and release preparation.

---

## Phase 0: Infrastructure ✅

### 0.1 ESLint ignore

- [x] `eslint.config.js`: Added `"storybook-static"` and `"coverage"` to `ignores`

### 0.2 Unified color helper `colorToCSSVars()`

- [x] **File:** `src/components/Constants/colorUtils.ts`
- [x] PresetColor → `PRESET_COLOR_VARS[color]` → `customColorToCSSVars()` unified path
- [x] CustomColor → existing `customColorToCSSVars()` as-is
- [x] All colors now flow through `--cs-ui-*` CSS variables

### 0.3 CSS class rename

- [x] `src/index.css`: `cs-custom-*` → `cs-*` (12 classes)
- [x] All component `.tsx` files updated
- [x] Test assertions updated (`customColor.test.tsx`)

| Old | New |
| --- | --- |
| `cs-custom-btn-primary` | `cs-btn-primary` |
| `cs-custom-bg` | `cs-bg` |
| `cs-custom-focus` | `cs-focus` |
| `cs-custom-focus-visible` | `cs-focus-visible` |
| `cs-custom-checked` | `cs-checked` |
| `cs-custom-pill` | `cs-pill` |
| `cs-custom-badge-solid` | `cs-badge-solid` |
| `cs-custom-badge-outline` | `cs-badge-outline` |
| `cs-custom-badge-dot` | `cs-badge-dot` |
| `cs-custom-spinner` | `cs-spinner` |
| `cs-custom-progress` | `cs-progress` |
| `cs-custom-tab-active` | `cs-tab-active` |

### 0.4 Export update

- [x] `colorToCSSVars` exported from `src/components/index.tsx`

---

## Phase 1: Color System Migration (12 components) ✅

**Pattern applied to all:** Remove `isPresetColor` branching. For all colors:

1. Generate CSS variable styles via `colorToCSSVars(finalColor)`
2. Always apply unified CSS class (`cs-btn-primary`, `cs-checked`, etc.)

### Migration order (simple → complex)

#### Tier 1: Single map

- [x] **Progress** — `backgroundColorMap` → `cs-progress` + `colorToCSSVars()`
- [x] **Spinner** — local `textColorMap` → `cs-spinner` + `colorToCSSVars()`
- [x] **PillBox** — local `colorMap` → `cs-pill` + `colorToCSSVars()`

#### Tier 2: focus-outline

- [x] **Input** — `focusOutlineColorMap` → `cs-focus-visible` + `colorToCSSVars()`
- [x] **TextArea** — same pattern
- [x] **PhoneInput** — same pattern
- [x] **Switch** — `backgroundColorMap` + `focusOutlineColorMap` → `cs-bg` / `cs-focus-visible`

#### Tier 3: checked + contrast

- [x] **Checkbox** — `checkedFocusOutlineColorMap` → `cs-checked` (kept `LIGHT_BG_COLORS` for checkmark SVG stroke)
- [x] **Radio** — same pattern (kept for dot color)

#### Tier 4: Multiple maps / complex logic

- [x] **Badge** — `solidColorMap`, `outlineColorMap`, `dotColorMap` → `cs-badge-*` (kept `LIGHT_BG_COLORS` for solid text)
- [x] **Tabs** — `borderColorMap`, `textColorMap` → `cs-tab-active` (CSS vars passed via context to TabsTrigger)
- [x] **Button** — `activeColorMap` + `backgroundColorMap` + `focusOutlineColorMap` (simplified `variantMap` useMemo, kept `LIGHT_BG_COLORS` for primary text)

### Deleted files

- [x] `Constants/colorMap.ts` — removed after all components migrated
- [x] `Constants/constants.ts` — removed (constants moved to `designTokens.ts`)

### UIColorProvider update

- [x] PresetColor now also uses `colorToCSSVars()` to set CSS variables
- [x] Wrapper `<div style={{ display: "contents", ...cssVars }}>` always present

### Test updates

- [x] `customColor.test.tsx`: CSS class names → `cs-*`, PresetColor wrapper div test updated
- [x] Component unit tests: Tailwind utility class assertions → CSS variable-based assertions

---

## Phase 2: Test Coverage Improvements ✅

Target: Statements 90%+, Branches 85%+ — **Achieved: 93%+ statements, 88%+ branches**

### New tests

- [x] `colorSystem.test.tsx` — 22 colors × all components (655 tests)
- [x] `colorUtils` additional tests — `customColorToCSSVars(color, true)` with `dark` property
- [x] `colorToCSSVars` tests — PresetColor / CustomColor both

### Coverage improvements

- [x] **Tooltip.tsx** — position fallback loop, touch device toggle/outside-touch-close
- [x] **PhoneInput.tsx** — Backspace after `)` (space) edge case
- [x] **Tabs.tsx** — scroll buttons (ResizeObserver mock, scrollWidth > clientWidth)

---

## Phase 3: cyberseeds-ui-rhf Fixes ✅

- [x] `tsconfig.json`: `moduleResolution` → `"bundler"`
- [x] `vitest.workspace.ts`: deprecated format fixed
- [x] `package.json`: peerDep `cyberseeds-ui: ^1.0.0`
- [x] RHF component verification

---

## Phase 4: Documentation ✅

### Storybook Foundations pages (MDX)

- [x] Color palette: 22-color OKLCH visual grid (`src/docs/ColorPalette.stories.tsx`)
- [x] Scale system: xs/sm/md/lg comparison (`src/docs/ScaleSystem.stories.tsx`)
- [x] Design overview (`src/docs/Foundations.mdx`)

### Custom Color Guide

- [x] CustomColor object definition in Storybook
- [x] `base`-only auto shade generation
- [x] Dark property for dark mode customization
- [x] v1.0.0 migration guide (`MIGRATION.md`)

### Do / Don't patterns

- [ ] Deferred to v1.1.0

---

## Phase 5: Advanced Testing (partial) ✅

- [x] Color contrast auto-test — 22 colors × light/dark × components WCAG AA verification
- [ ] E2E keyboard navigation (Playwright) — Deferred to v1.1.0

---

## Phase 6: Release Preparation ✅

- [x] `package.json` version → `1.0.0`
- [x] `MIGRATION.md` — Breaking changes documented
- [x] `roadmap.md` — v1.0.0 items all checked
- [x] Final verification: test, coverage, lint, build

---

## Key Design Decisions

### Why LIGHT_BG_COLORS is kept

The CSS variable system eliminates Tailwind utility class branching, but text color contrast detection for amber/yellow/lime cannot be done in CSS (no lightness detection mechanism). The `LIGHT_BG_COLORS` Set with `isPresetColor` check continues in Button, Badge, Checkbox, Radio.

**File:** `src/components/Constants/colorContrast.ts`

### UIColorProvider wrapper div always present

PresetColor now also generates a `display: contents` wrapper div. No layout impact (`display: contents` is transparent to DOM flow). Only test assertions for `querySelectorAll("div[style]")` needed updating.
