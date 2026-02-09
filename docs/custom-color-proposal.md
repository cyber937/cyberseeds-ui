# Custom Color 対応 提案書

## 背景

現在のカラーシステムは Tailwind CSS v4 の22色プリセットに限定されている。
ブランドカラーや独自のカラーパレットを使いたいユーザーには対応できていない。

## 現状の課題

### 1. カラーマップのハードコード

各コンポーネントに22色分の `Record<Color, string>` マップが存在し、拡張が困難。

```tsx
// Button.tsx 内の activeColorMap — 22行の繰り返し
const activeColorMap: Record<Color, string> = {
  red: "cs:hover:bg-red-500 cs:active:bg-red-400",
  orange: "cs:hover:bg-orange-500 cs:active:bg-orange-400",
  // ... 20行続く
};
```

### 2. 状態別スタイルの分散

同じ色でも用途ごとにマップが分かれている:
- `backgroundColorMap` — base 背景
- `activeColorMap` — hover/active（Button ローカル）
- `focusOutlineColorMap` — focus リング
- `checkedFocusOutlineColorMap` — checked + focus
- PillBox ローカル — 背景/テキスト/アウトライン

### 3. Color 型が閉じたユニオン

```tsx
type Color = "red" | "orange" | ... | "stone"; // 拡張不可
```

## 提案: CSS カスタムプロパティベースのカラーシステム

### 概要

CSS 変数 (`--cs-color-*`) をベースにカラーを定義し、コンポーネントはこの変数を参照する。
プリセット22色はそのまま維持しつつ、任意の色も指定可能にする。

### カラートークン設計

```css
/* コンポーネントが参照するCSS変数 */
--cs-color-base:       /* 主要背景色 (例: ボタン背景) */
--cs-color-hover:      /* ホバー時 */
--cs-color-active:     /* アクティブ時 */
--cs-color-focus:      /* フォーカスリング */
--cs-color-light:      /* 薄い背景 (例: PillBox) */
--cs-color-light-text: /* 薄い背景上のテキスト */
--cs-color-border:     /* ボーダー/アウトライン */
```

### API 設計

#### Color 型の拡張

```tsx
// プリセットカラー名
type PresetColor =
  | "red" | "orange" | "amber" | "yellow"
  | "lime" | "green" | "emerald" | "teal"
  | "cyan" | "sky" | "blue" | "indigo"
  | "violet" | "purple" | "fuchsia"
  | "pink" | "rose"
  | "slate" | "gray" | "zinc" | "neutral" | "stone";

// カスタムカラー定義
interface CustomColor {
  base: string;        // 必須: メインカラー (例: "#4f46e5")
  hover?: string;      // オプション: ホバー時 (未指定時は base から自動生成)
  active?: string;     // オプション: アクティブ時
  focus?: string;      // オプション: フォーカスリング (デフォルト: base)
  light?: string;      // オプション: 薄い背景
  lightText?: string;  // オプション: 薄い背景上のテキスト
  border?: string;     // オプション: ボーダー色
}

// 統合型
type Color = PresetColor | CustomColor;
```

#### UIColorProvider の拡張

```tsx
// プリセットカラー (既存互換)
<UIColorProvider initialColor="indigo">

// カスタムカラー
<UIColorProvider initialColor={{
  base: "#4f46e5",
  hover: "#4338ca",
  active: "#3730a3",
  focus: "#4f46e5",
  light: "#e0e7ff",
  lightText: "#312e81",
  border: "#a5b4fc",
}}>

// 最小限のカスタムカラー (base のみ、他は自動生成)
<UIColorProvider initialColor={{ base: "#4f46e5" }}>
```

#### コンポーネント Props

```tsx
// プリセット (既存互換)
<Button color="indigo">Submit</Button>

// カスタムカラー
<Button color={{ base: "#e11d48", hover: "#be123c" }}>Delete</Button>
```

### 実装方針

#### Step 1: CSS変数のセットアップ

```tsx
// UIColorProvider 内で CSS変数を注入
function UIColorProvider({ initialColor, children }) {
  const resolved = resolveColor(initialColor);

  return (
    <div style={{
      '--cs-color-base': resolved.base,
      '--cs-color-hover': resolved.hover,
      '--cs-color-active': resolved.active,
      '--cs-color-focus': resolved.focus,
      '--cs-color-light': resolved.light,
      '--cs-color-light-text': resolved.lightText,
      '--cs-color-border': resolved.border,
    }}>
      <UIColorContext.Provider value={...}>
        {children}
      </UIColorContext.Provider>
    </div>
  );
}
```

#### Step 2: プリセットカラーの CSS変数マッピング

```tsx
// プリセット名 → CSS変数値のマッピング
const presetColors: Record<PresetColor, CustomColor> = {
  blue: {
    base: "oklch(0.546 0.245 262.881)",
    hover: "oklch(0.623 0.214 259.815)",
    active: "oklch(0.707 0.165 254.624)",
    focus: "oklch(0.546 0.245 262.881)",
    light: "oklch(0.882 0.059 254.128)",
    lightText: "oklch(0.379 0.146 265.522)",
    border: "oklch(0.707 0.165 254.624)",
  },
  // ... 他のプリセット
};
```

> Note: Tailwind CSS v4 は内部的に OKLCH カラースペースを使用。
> プリセットマッピングは Tailwind の実際の色値を参照して定義する。

#### Step 3: コンポーネントの簡素化

```tsx
// Before: 22色のマップ + Tailwind クラス
const backgroundColorMap: Record<Color, string> = {
  red: "cs:bg-red-600",
  // ... 22行
};
className={`${backgroundColorMap[finalUIColor]}`}

// After: CSS変数を参照するインラインスタイル
style={{ backgroundColor: 'var(--cs-color-base)' }}

// または Tailwind の arbitrary value
className="cs:bg-[var(--cs-color-base)]"
```

#### Step 4: 自動カラー生成

`base` のみ指定された場合、他のシェードを自動計算する:

```tsx
function generateShades(base: string): CustomColor {
  // OKLCHカラースペースで明度を調整
  const parsed = parseToOklch(base);
  return {
    base,
    hover:     adjustLightness(parsed, +0.08),  // やや明るく
    active:    adjustLightness(parsed, +0.16),  // さらに明るく
    focus:     base,
    light:     adjustLightness(parsed, +0.35, -0.18), // 薄い背景
    lightText: adjustLightness(parsed, -0.17),  // 暗いテキスト
    border:    adjustLightness(parsed, +0.16),  // ボーダー
  };
}
```

### 移行計画

| Phase | 内容 | 後方互換性 |
| --- | --- | --- |
| 1 | `Color` 型を `PresetColor \| CustomColor` に拡張 | 完全互換 |
| 2 | `UIColorProvider` で CSS変数を注入 | 完全互換 |
| 3 | コンポーネント内でカスタムカラー分岐を追加 | 完全互換 |
| 4 | ハードコードされたカラーマップを CSS変数参照に段階的移行 | 完全互換 |
| 5 | 旧カラーマップを削除（メジャーバージョン） | Breaking change |

### 考慮事項

#### Tailwind のパージとの互換性

CSS変数を `arbitrary value` (`cs:bg-[var(--cs-color-base)]`) として使用する場合、
Tailwind v4 のコンテンツ検出で正しくスキャンされるか検証が必要。

Tailwind v4 はソースコードをスキャンしてユーティリティを生成するため、
`var(--cs-color-base)` のような動的値はビルド時に存在する必要がある。
→ 対策: `@theme` ディレクティブで CSS変数をテーマに登録するか、`style` 属性で直接適用する。

#### ダークモード

カスタムカラーのダークモード対応は利用者の責任となる。
`UIColorProvider` でダークモード用のカラーセットも指定できるようにする:

```tsx
<UIColorProvider
  initialColor={{
    base: "#4f46e5",
    // ...
  }}
  darkColor={{
    base: "#818cf8",
    // ...
  }}
>
```

#### パフォーマンス

CSS変数の変更は再描画を最小限に抑えられる（CSSOMレベルの更新）。
React の再レンダリングは `UIColorProvider` の `value` が変わった場合のみ発生。

### 代替案: Color型拡張 + style prop フォールバック

CSS変数ベースの大規模リファクタリングを避ける軽量な代替案。

```tsx
type Color = PresetColor | (string & {});

// コンポーネント内
const isPreset = typeof color === 'string' && color in backgroundColorMap;

if (isPreset) {
  // 既存の Tailwind クラスを使用
} else {
  // style 属性で直接適用
  style={{ backgroundColor: color }}
}
```

**メリット:** 既存コードへの変更が最小限
**デメリット:** hover/active/focus 等の状態別スタイルが style だけでは困難

### 推奨

**CSS カスタムプロパティベースのアプローチを推奨。**

理由:
1. 状態別スタイル（hover, active, focus）を自然に扱える
2. カラーマップの大量の繰り返しコードを削減できる
3. ダークモードとの統合が容易
4. ランタイムでのテーマ切り替えが可能
5. コンポーネントライブラリとして利用者の自由度が大幅に向上
