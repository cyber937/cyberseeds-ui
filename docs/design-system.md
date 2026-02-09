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

各カラーは以下の用途で使用される:

| 用途 | シェード | 例 |
| --- | --- | --- |
| Background (primary) | 600 | `cs:bg-blue-600` |
| Background (hover) | 500 | `cs:hover:bg-blue-500` |
| Background (active) | 400 | `cs:active:bg-blue-400` |
| Focus outline | 600 | `cs:focus:outline-blue-600` |
| PillBox background | 200 | `cs:bg-blue-200` |
| PillBox text | 800 | `cs:text-blue-800` |
| PillBox outline | 400 | `cs:outline-blue-400` |

### Scale

コンポーネントのサイズを2段階で制御。

| Scale | 用途 | パディング例 | フォントサイズ |
| --- | --- | --- | --- |
| `sm` | コンパクトUI | `px-2 py-1` | `text-xs` |
| `md` | 標準 (デフォルト) | `px-3 py-1.5` | `text-sm` |

### Variant

コンポーネントの外観バリエーション。

| Variant | 説明 | 用途 |
| --- | --- | --- |
| `primary` | 塗りつぶしスタイル（カラー背景 + 白テキスト） | 主要アクション |
| `secondary` | アウトラインスタイル（リング + テキスト） | 補助アクション |

## カラーシステムのアーキテクチャ

### 現在の構成

```
DesignSystemUtils.tsx    → Color, Scale, Variant 型定義
Constants/colorMap.ts    → 共有カラーマップ (focus, checked, background)
UIColorContext.tsx        → グローバルカラー Provider
各コンポーネント内         → ローカルカラーマップ (hover, active 等)
```

### カラー適用の優先順位

```
1. コンポーネントの color prop（最優先）
2. UIColorProvider の initialColor（コンテキスト経由）
3. デフォルト値 "blue"（フォールバック）
```

```tsx
// 例: Input コンポーネントでのカラー解決
const { color: contextUIColor } = useUIColor() ?? { color: undefined };
const finalUIColor = contextUIColor ?? color; // prop > context > default
```

### カラーマップの分布

| ファイル | マップ名 | 用途 |
| --- | --- | --- |
| `Constants/colorMap.ts` | `focusOutlineColorMap` | Input, Select, TextArea のフォーカスリング |
| `Constants/colorMap.ts` | `checkedFocusOutlineColorMap` | Checkbox, Radio のチェック時スタイル |
| `Constants/colorMap.ts` | `backgroundColorMap` | Button, Switch の背景色 |
| `Button.tsx` | `activeColorMap` | Button の hover/active 色 |
| `PillBox.tsx` | `colorMap` | PillBox の背景/テキスト/アウトライン |

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
