# Migration Guide: v0.7.0 → v1.0.0

## Breaking Changes

### 1. Color System — Unified CSS Variables

**Before (v0.7.0):** Preset colors used hardcoded Tailwind utility classes (e.g., `cs:bg-blue-600`), while custom colors used CSS variables (`--cs-ui-*`).

**After (v1.0.0):** All colors — preset and custom — go through the same CSS variable system.

#### What changed

- All per-color `Record<PresetColor, string>` class maps have been removed
- Components now use semantic CSS classes (`cs-btn-primary`, `cs-badge-solid`, etc.) that reference CSS variables
- `UIColorProvider` now always renders a wrapper `<div style={{ display: "contents", ...cssVars }}>` for both preset and custom colors

#### CSS class renames

| Old Class (v0.7.0) | New Class (v1.0.0) |
|---------------------|---------------------|
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

#### Impact

- If you wrote custom CSS targeting `cs-custom-*` classes, rename them to `cs-*`
- If your tests assert specific Tailwind color classes (e.g., `cs:bg-blue-600`), update to check for CSS variable classes (e.g., `cs-btn-primary`) and CSS variable values
- `UIColorProvider` with preset colors now renders a wrapper div with `display: contents` — this should not affect layout but may affect CSS selectors that depend on DOM structure

### 2. Removed Exports

The following internal exports have been removed:

- `backgroundColorMap` — use `colorToCSSVars()` instead
- `focusOutlineColorMap` — use `colorToCSSVars()` instead
- `checkedFocusOutlineColorMap` — use `colorToCSSVars()` instead

### 3. New Export

- `colorToCSSVars(color)` — Unified function that generates CSS custom properties for any color (preset or custom)

## Migration Steps

1. **Update your CSS:** Rename any `cs-custom-*` class references to `cs-*`
2. **Update test assertions:** Replace `toHaveClass("cs:bg-blue-600")` with `toHaveClass("cs-btn-primary")` and/or check CSS variable values
3. **Update imports:** Replace `backgroundColorMap` / `focusOutlineColorMap` with `colorToCSSVars()`
4. **Test:** Run your test suite to catch any remaining references to old class names

## New Features

- **Storybook Foundations:** New documentation pages for Color Palette, Scale System, and Design Overview
- **655 tests** with 93%+ statement coverage and 88%+ branch coverage
- **Unified color system** — simpler codebase, same API for preset and custom colors
