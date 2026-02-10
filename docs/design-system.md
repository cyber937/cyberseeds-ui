# Design System Overview

cyberseeds-ui のデザインシステムの基盤を定義するドキュメント。

## Design Tokens

### Color

現在 Tailwind CSS v4 の22色をプリセットとして提供。

| カテゴリ | カラー |
| --- | --- |
| Warm | `red` `orange` `amber` `yellow` |
| Green | `lime` `green` `emerald` `teal` |
| Cool | `cyan` `sky` `blue` `indigo` |
| Purple | `violet` `purple` `fuchsia` |
| Pink | `pink` `rose` |
| Neutral | `slate` `gray` `zinc` `neutral` `stone` |

各カラーは CSS 変数 (`--cs-ui-*`) を通じて以下の用途で使用される:

| CSS 変数 | 用途 | 例 |
| --- | --- | --- |
| `--cs-ui-base` | 主要背景色 (ボタン背景等) | `oklch(0.546 0.245 262.881)` |
| `--cs-ui-hover` | ホバー時の背景色 | 自動生成 or 明示指定 |
| `--cs-ui-active` | アクティブ時の背景色 | 自動生成 or 明示指定 |
| `--cs-ui-focus` | フォーカスリング色 | 自動生成 or 明示指定 |
| `--cs-ui-light` | 薄い背景 (PillBox等) | 自動生成 or 明示指定 |
| `--cs-ui-lightText` | 薄い背景上のテキスト | 自動生成 or 明示指定 |
| `--cs-ui-border` | ボーダー/アウトライン | 自動生成 or 明示指定 |

### Scale

コンポーネントのサイズを4段階で制御。

| Scale | 用途 | パディング例 | フォントサイズ |
| --- | --- | --- | --- |
| `xs` | 極小UI | `px-1.5 py-0.5` | `text-[0.625rem]` |
| `sm` | コンパクトUI | `px-2 py-1` | `text-xs` |
| `md` | 標準 (デフォルト) | `px-3 py-1.5` | `text-sm` |
| `lg` | 大型UI | `px-4 py-2` | `text-base` |

### Variant

コンポーネントの外観バリエーション。

| Variant | 説明 | 用途 |
| --- | --- | --- |
| `primary` | 塗りつぶしスタイル（カラー背景 + 白テキスト） | 主要アクション |
| `secondary` | アウトラインスタイル（リング + テキスト） | 補助アクション |

## カラーシステムのアーキテクチャ

> Updated for v1.0.0 — 全カラーが CSS 変数ベースに統一済み。

### 構成

```
DesignSystemUtils.tsx              → Color, Scale, Variant 型定義
Constants/presetColorVars.ts       → 22プリセット → OKLCH CSS変数値マッピング
Constants/colorUtils.ts            → colorToCSSVars(), isPresetColor(), resolveColor()
Constants/colorShadeGenerator.ts   → base のみ指定時の自動シェード生成
Constants/colorContrast.ts         → LIGHT_BG_COLORS (amber/yellow/lime のコントラスト判定)
Constants/semanticColor.ts         → success/warning/error/info → プリセットカラーマッピング
Constants/designTokens.ts          → FOCUS_RING, TRANSITION_*, TOUCH_TARGET_MIN 定数
UIColorContext.tsx                 → グローバルカラー Provider (CSS変数注入)
```

### カラー適用の優先順位

```
1. コンポーネントの color prop（最優先）
2. UIColorProvider の initialColor（コンテキスト経由）
3. デフォルト値 "blue"（フォールバック）
```

### カラー解決フロー

```tsx
// 1. カラー解決 (セマンティック → プリセット/カスタム)
const resolved = resolveColor(finalColor, semanticMap);

// 2. CSS変数生成 (プリセットもカスタムも同じパス)
const cssVars = colorToCSSVars(resolved);
// → { "--cs-ui-base": "oklch(...)", "--cs-ui-hover": "oklch(...)", ... }

// 3. UIColorProvider が wrapper div に CSS変数を注入
<div style={{ display: "contents", ...cssVars }}>{children}</div>

// 4. コンポーネントは CSS クラスで参照
<button className="cs-btn-primary">  // index.css で var(--cs-ui-*) を参照
```

### CSS クラスと CSS 変数の対応

| CSS クラス | 参照する CSS 変数 | 使用コンポーネント |
| --- | --- | --- |
| `cs-btn-primary` | `--cs-ui-base`, `--cs-ui-hover`, `--cs-ui-active` | Button |
| `cs-bg` | `--cs-ui-base` | Switch |
| `cs-focus-visible` | `--cs-ui-focus` | Input, Select, TextArea, PhoneInput |
| `cs-checked` | `--cs-ui-base`, `--cs-ui-focus` | Checkbox, Radio |
| `cs-pill` | `--cs-ui-light`, `--cs-ui-lightText`, `--cs-ui-border` | PillBox |
| `cs-badge-solid/outline/dot` | `--cs-ui-base`, `--cs-ui-border` | Badge |
| `cs-spinner` | `--cs-ui-base` | Spinner |
| `cs-progress` | `--cs-ui-base` | Progress |
| `cs-tab-active` | `--cs-ui-base` | Tabs |

## Tailwind CSS v4 統合

### プレフィックス

```css
@import "tailwindcss" prefix(cs);
```

すべてのユーティリティクラスに `cs:` プレフィックスを付与し、利用者のアプリケーションとのスタイル競合を防止。

### ダークモード

```css
@custom-variant dark (&:where(.dark, .dark *));
```

HTML要素に `.dark` クラスを付与することでダークモードが有効化される。各コンポーネントは `cs:dark:` バリアントで対応。

```tsx
// 例: Input
"cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:dark:text-gray-200"
```

## 設計原則

1. **Accessibility First** — WAI-ARIA準拠、キーボードナビゲーション、スクリーンリーダー対応
2. **Composable** — Compound Components パターンによる柔軟な構成
3. **Themeable** — グローバル/ローカルでのカラー制御
4. **Namespace Safe** — `cs:` プレフィックスによるスタイル分離
5. **Type Safe** — 全プロパティに TypeScript 型定義
