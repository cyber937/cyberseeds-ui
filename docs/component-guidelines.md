# Component Design Guidelines

cyberseeds-ui のコンポーネント設計における規約とベストプラクティス。

> Updated for v1.0.0

## ファイル構成

```
src/components/
  ComponentName/
    ComponentName.tsx          # コンポーネント本体
    ComponentName.stories.tsx  # Storybook ストーリー
    ComponentName.test.tsx     # ユニットテスト
    index.tsx                  # (Context/Hook がある場合のみ)
```

- 1コンポーネント = 1ディレクトリ
- ファイル名はパスカルケース
- エクスポートは `src/components/index.tsx` で一元管理
- `index.tsx` は Context や Hook など複数のエクスポートファイルがある場合のみ作成
- Label, Radio, UIColorProvider はテスト/ストーリーを省略 (それぞれ FormField, RadioGroup, `__tests__/customColor.test.tsx` 経由でテスト済み)

## Props 設計

### 標準 Props

すべてのフォームコンポーネントが共通で持つ Props:

```tsx
interface ComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  scale?: Scale;       // "sm" | "md" — デフォルト: "md"
  color?: Color;       // カラー名 — デフォルト: "blue"
  id?: string;         // 外部指定可能。未指定時は useId() で自動生成
}
```

### Props の命名規則

| パターン | 命名 | 例 |
| --- | --- | --- |
| 真偽値 | `is` + 形容詞 | `isInvalid`, `isDisabled` |
| 必須表示 | `require` | `require={true}` |
| ハンドラ | `on` + 動詞 | `onClick`, `onChange` |
| 子要素テキスト | 内容を表す名詞 | `label`, `onLabel`, `offLabel` |

### HTML属性の継承

ネイティブのHTML属性を受け取れるよう、`extends React.*HTMLAttributes<HTML*Element>` で型を拡張し、`...props` でスプレッドする。

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scale?: Scale;
  variant?: Variant;
  color?: Color;
  children: ReactNode;
}

export function Button({ scale, variant, color, children, className = "", ...props }: ButtonProps) {
  return <button className={...} {...props}>{children}</button>;
}
```

## Compound Components パターン

複数の子要素で構成されるコンポーネントは Compound Components パターンを使用。

### 現在の使用例

| 親 | 子 | Context |
| --- | --- | --- |
| `Button` | `Button.Icon` | `ButtonContext` (scale) |
| `Modal` | `Modal.Header`, `Modal.Body`, `Modal.Footer` | `ModalContext` (onClose) |
| `RadioGroup` | `RadioGroup.Option` | `RadioGroupContext` (value, onChange, color, scale) |

### 実装パターン

```tsx
// 1. Context 定義
const ParentContext = createContext<ContextType | null>(null);

// 2. 親コンポーネント
export function Parent({ children, ...props }) {
  return (
    <ParentContext.Provider value={{ ... }}>
      {children}
    </ParentContext.Provider>
  );
}

// 3. 子コンポーネントを親に付与
Parent.Child = function ParentChild({ children }) {
  const context = useContext(ParentContext);
  if (!context) {
    throw new Error("Parent.Child must be used within a <Parent>");
  }
  return <div>{children}</div>;
};
```

## カラーの適用

### カラー解決ロジック

すべてのカラー対応コンポーネントで統一されたパターン:

```tsx
const { color: contextUIColor } = useUIColor() ?? { color: undefined };
const finalUIColor = contextUIColor ?? color;
```

### カラーの適用 (v1.0.0 CSS 変数方式)

全コンポーネントで `colorToCSSVars()` を使用して CSS 変数を生成し、
セマンティック CSS クラス (`cs-btn-primary`, `cs-checked` 等) で参照する:

```tsx
import { colorToCSSVars, resolveColor, isPresetColor } from "../Constants/colorUtils";
import { LIGHT_BG_COLORS } from "../Constants/colorContrast";

// CSS 変数を生成
const cssVars = colorToCSSVars(finalColor);

// コントラスト判定 (amber/yellow/lime のみ)
const needsDarkText = isPresetColor(finalColor) && LIGHT_BG_COLORS.has(finalColor);

// JSX: CSS 変数をスタイルに、CSS クラスを className に
<button style={cssVars} className={clsx("cs-btn-primary", needsDarkText && "cs:text-gray-900")}>
```

| CSS クラス | 定義元 (`src/index.css`) | 使用コンポーネント |
| --- | --- | --- |
| `cs-btn-primary` | `--cs-ui-base/hover/active` | Button |
| `cs-focus-visible` | `--cs-ui-focus` | Input, Select, TextArea, PhoneInput |
| `cs-checked` | `--cs-ui-base/focus` | Checkbox, Radio |
| `cs-bg` | `--cs-ui-base` | Switch |
| `cs-pill` | `--cs-ui-light/lightText/border` | PillBox |
| `cs-badge-*` | `--cs-ui-base/border` | Badge |
| `cs-spinner` | `--cs-ui-base` | Spinner |
| `cs-progress` | `--cs-ui-base` | Progress |
| `cs-tab-active` | `--cs-ui-base` | Tabs |

## スケーリング

各コンポーネント内で `Record<Scale, string>` マップを定義:

```tsx
const scaleMap: Record<Scale, string> = {
  sm: "cs:px-2 cs:py-1 cs:text-xs",
  md: "cs:px-3 cs:py-1.5 cs:text-sm",
};
```

フォント・パディング・アイコンサイズを一括で制御する。

## クラス名の構成

`clsx` を使用して条件付きクラスを結合:

```tsx
import clsx from "clsx";

className={clsx(
  baseClasses,           // 常に適用
  scaleMap[scale],       // サイズ別
  checked && colorClass, // 条件付き
  className              // 外部からの追加クラス
)}
```

## ID 管理

フォーム要素のアクセシビリティ（label との関連付け）のため、`useId()` で一意の ID を生成:

```tsx
const generatedId = useId();
const id = externalId ?? generatedId;
```

- 外部から `id` を渡せば上書き可能
- 関連する label は `htmlFor={id}` で紐付け
- 関連する aria 属性は `${id}-label` 等のサフィックスパターンで生成

## Storybook ストーリー規約

### 必須ストーリー

| ストーリー名 | 内容 |
| --- | --- |
| `Default` | デフォルト props での表示 |
| `Colors` | 全カラーバリエーション |
| `Scales` | 全サイズバリエーション |

### オプションストーリー

| ストーリー名 | 内容 |
| --- | --- |
| `Variants` | primary/secondary 切り替え |
| `Disabled` | 無効化状態 |
| `WithLabel` | ラベル付き表示 |
| `Integration` | 他コンポーネントとの組み合わせ |

## テスト規約

### 必須テスト

1. **Storybook ストーリーレンダリング** — `composeStories()` で全ストーリーをテスト
2. **基本機能** — クリックハンドラ、値変更、disabled 状態
3. **スケール/カラー** — `testScales`, `testColors` での parametrized テスト
4. **アクセシビリティ属性** — role, aria-*, label 関連付け

### テストユーティリティ

```tsx
import { renderWithUIColorProvider, testColors, testScales } from "../../test-utils";
```
