# Accessibility Guidelines

cyberseeds-ui のアクセシビリティ方針と実装ガイドライン。

## 基本方針

- **WCAG 2.1 AA** 準拠を目標
- すべてのコンポーネントで WAI-ARIA パターンを適用
- キーボードのみでの操作を保証
- スクリーンリーダーでの利用を考慮
- `prefers-reduced-motion` / `prefers-color-scheme` のユーザー設定を尊重

## コンポーネント別 ARIA 実装

### フォーム要素 (Input, Select, TextArea, PhoneInput)

```tsx
<input
  id={id}                              // label との関連付け
  aria-invalid={isInvalid || undefined} // バリデーション状態
  aria-describedby={descId}            // エラーメッセージ・ヘルプテキスト
/>
<label htmlFor={id}>...</label>
```

- `useId()` で一意のIDを自動生成
- `aria-invalid` はバリデーションエラー時のみ `true` を設定（`false` は設定しない）
- `Label` コンポーネントで必須マーク (`*`) を表示
- `FormField` 経由で `aria-describedby` を自動関連付け

### FormField

```tsx
<FormField isInvalid isRequired>
  <FormField.Label>Email</FormField.Label>
  <Input />
  <FormField.Error>必須項目です</FormField.Error>
  <FormField.HelperText>メールアドレスを入力</FormField.HelperText>
</FormField>
```

- Context ベースで `aria-describedby` を自動関連付け
- `isInvalid`, `isRequired`, `isDisabled` をコンテキスト経由で子要素に伝播
- `FormField.Error` に `role="alert"` + `aria-live="polite"` を適用

### Checkbox / Radio

```tsx
<input
  type="checkbox"
  className="... cs:checked:... cs:indeterminate:..."
/>
```

- ネイティブの `<input type="checkbox">` を使用（カスタム div ではない）
- `checked`, `indeterminate` 状態をネイティブ擬似クラスで処理
- SVG アイコンは `cs:pointer-events-none` で操作を入力要素に委譲

### RadioGroup

```tsx
<fieldset role="radiogroup">
  <legend>{label}</legend>
  <RadioGroup.Option value="a" label="Option A" />
</fieldset>
```

- `role="radiogroup"` + `<fieldset>` でグループを明示
- 各オプションは内部的に `<Radio>` を使用

### Switch

```tsx
<button
  role="switch"
  aria-checked={checked}
  aria-labelledby={labelId}
/>
<label id={labelId} htmlFor={id}>...</label>
```

- `role="switch"` でトグルの意味を伝達
- `aria-checked` でオン/オフ状態を通知
- `aria-labelledby` でラベルと関連付け

### Modal

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby={titleId}
>
```

- `role="dialog"` + `aria-modal="true"` でモーダルダイアログを宣言
- ESC キーで閉じる
- バックドロップクリックで閉じる
- `aria-labelledby` でタイトルと関連付け

### Accordion

```tsx
<button aria-expanded={isOpen} aria-controls={panelId}>
  {title}
</button>
<div id={panelId} role="region" aria-labelledby={headerId}>
  {content}
</div>
```

- `aria-expanded` で開閉状態を通知
- `aria-controls` でパネルとの関連を明示
- パネルは `role="region"` でランドマーク化

### Tabs

```tsx
<div role="tablist">
  <button role="tab" aria-selected={isActive} aria-controls={panelId}>
    Tab 1
  </button>
</div>
<div role="tabpanel" id={panelId} aria-labelledby={tabId}>
  Content
</div>
```

- WAI-ARIA Tabs パターン準拠
- Arrow キーでタブ間を移動
- `aria-selected` でアクティブタブを通知
- `aria-controls` / `aria-labelledby` でタブとパネルを関連付け

### Toast

- `role="status"` + `aria-live="polite"` で通知をスクリーンリーダーに伝達
- 閉じるボタンに `aria-label` を設定
- 自動消去タイマーはユーザー操作で一時停止

### Tooltip

```tsx
<Tooltip content="補足情報">
  <button>Hover me</button>
</Tooltip>
```

- `role="tooltip"` + `aria-describedby` でアクセシビリティ対応
- Escape キーで閉じる
- ホバー/フォーカスで表示

### Spinner

- `role="status"` + `aria-label` でローディング状態を通知
- SVG ベースのアニメーション

### Progress

- `role="progressbar"` + `aria-valuenow` / `aria-valuemin` / `aria-valuemax`
- パーセント表示オプション
- `aria-label` でプログレスバーの用途を説明

### Badge

- テキストコンテンツはスクリーンリーダーで読み上げ可能
- `max` prop で表示上限を設定（例: "99+"）
- dot バリアントは装飾的要素として扱う

## キーボードナビゲーション

### 対応状況

| コンポーネント | Tab | Enter/Space | Escape | Arrow Keys |
| --- | --- | --- | --- | --- |
| Button | フォーカス | クリック | - | - |
| Checkbox | フォーカス | トグル | - | - |
| Radio | フォーカス | 選択 | - | - |
| Switch | フォーカス | トグル | - | - |
| Input | フォーカス | - | - | - |
| Select | フォーカス | 開く | - | 選択肢移動 |
| TextArea | フォーカス | 改行 | - | - |
| PhoneInput | フォーカス | - | - | - |
| Modal | トラップ | - | 閉じる | - |
| Accordion | ヘッダーにフォーカス | 開閉 | - | - |
| Tabs | タブにフォーカス | タブ選択 | - | タブ間移動 |
| Toast | 閉じるボタンにフォーカス | 閉じる | - | - |
| Tooltip | トリガーにフォーカスで表示 | - | 閉じる | - |

### フォーカス管理

- すべてのインタラクティブ要素にフォーカスリングを表示
- フォーカスリングの色はコンポーネントの `color` prop に連動
- `cs:focus-visible:outline-*` で キーボードフォーカス時のみリングを表示（マウスクリックでは非表示）
- Modal はフォーカストラップを実装（Tab で外部に抜けない）

## カラーコントラスト

### WCAG AA コントラスト比

| 要素 | ライトモード | ダークモード | 目標 |
| --- | --- | --- | --- |
| 本文テキスト | `gray-900` on `white` | `gray-200` on `gray-800` | 4.5:1 以上 |
| ラベル | `gray-900` on `white` | `gray-300` on `gray-800` | 4.5:1 以上 |
| プレースホルダ | `gray-400` on `white` | `gray-400` on `gray-800` | 3:1 以上 |
| disabled | コントラスト比の要件なし | コントラスト比の要件なし | - |

### 明るい背景色のテキストカラー補正

`yellow`, `lime`, `amber` は背景色が明るいため、白テキストでは WCAG AA (4.5:1) を満たさない。
`LIGHT_BG_COLORS` セット（`src/components/Constants/colorContrast.ts`）で管理し、以下のコンポーネントで `cs:text-gray-900` に切り替えている:

| コンポーネント | 対象 | 変更内容 |
| --- | --- | --- |
| Button | primary variant | `cs:text-white` → `cs:text-gray-900` |
| Badge | solid variant | `cs:text-white` → `cs:text-gray-900` |
| Checkbox | チェックマーク | `cs:stroke-white` → `cs:stroke-gray-900` |
| Radio | ドット | `cs:before:bg-white` → `cs:before:bg-gray-900` |

## ダークモード対応

### ThemeProvider

```tsx
<ThemeProvider mode="system">
  <App />
</ThemeProvider>
```

- `mode="light"` | `"dark"` | `"system"` で切り替え
- `mode="system"` で `prefers-color-scheme` メディアクエリを監視し、自動でテーマを切り替え
- `useTheme()` hook で `{ mode, setMode, resolvedTheme }` にアクセス
- ラッパー div に `.dark` class を自動 toggle

### ダークモードスタイル

- すべてのテキストでダークモード時のコントラスト比を確保
- `cs:dark:text-gray-200`, `cs:dark:text-gray-300` 等で明るいテキストを適用
- 背景色もダークモード用に調整 (`cs:dark:bg-gray-800`)

## prefers-reduced-motion 対応

ユーザーがOSレベルで「視覚効果を減らす」を有効にしている場合、アニメーションを無効化または簡素化する。

### useReducedMotion hook

```tsx
import { useReducedMotion } from "cyberseeds-ui";

const prefersReducedMotion = useReducedMotion();
```

- `matchMedia("(prefers-reduced-motion: reduce)")` を監視
- SSR セーフ（`typeof window === "undefined"` 時は `false` を返す）

### CSS レベルの対応

Tailwind の `motion-reduce:` バリアントを使用:

| コンポーネント | 対応内容 |
| --- | --- |
| Switch | `cs:motion-reduce:transition-none` (トラック + ノブ) |
| Accordion | `cs:motion-reduce:transition-none` (シェブロン + パネル) |
| Modal | `cs:motion-reduce:transition-none` (バックドロップ + ダイアログ) |
| Toast | `cs:motion-reduce:transition-none` |
| Progress | `cs:motion-reduce:transition-none` + CSS `@media` でストライプ無効化 |
| Spinner | `cs:motion-reduce:animate-pulse` (回転 → 点滅に変更) |
| Button | `cs:motion-reduce:transition-none` |
| Tabs | `cs:motion-reduce:transition-none` |

### JS レベルの対応

- **Modal**: `useReducedMotion()` で `requestAnimationFrame` アニメーションをバイパス。初期表示時に即座に表示。
- **Toast**: `useReducedMotion()` でスライドイン/アウトアニメーションをバイパス。自動消去時の退場遅延を0に。

## 無効化状態 (disabled)

- `disabled` 属性を使用（`aria-disabled` ではなく）
- 視覚的にグレーアウト (`cs:disabled:bg-gray-100`, `cs:disabled:text-gray-400`)
- Checkbox の checked + disabled: `cs:disabled:checked:bg-gray-200`
- カーソルは `not-allowed` に変更
- フォーカスリングは非表示

## テスト

### 自動テスト

`jest-axe` による axe-core ルールの自動検証:

```tsx
const { container } = render(<Component />);
const results = await axe(container);
expect(results).toHaveNoViolations();
```

### テスト対象

- 全23コンポーネントの基本レンダリング
- ライト/ダークテーマ両方でのテスト
- キーボードナビゲーションのテスト
- スクリーンリーダー属性の検証
- フォーム統合テスト（label + input の関連付け）
- Modal のフォーカス管理テスト
- `prefers-reduced-motion` 時の動作テスト
- `LIGHT_BG_COLORS` によるテキストカラー検証

### テストファイル

```text
src/components/__tests__/accessibility.test.tsx  # 統合アクセシビリティテスト
src/components/__tests__/color-contrast.test.ts  # LIGHT_BG_COLORS テスト
src/components/__tests__/reduced-motion.test.tsx  # reduced-motion テスト
src/hooks/useReducedMotion.test.ts                # useReducedMotion hook テスト
src/components/ThemeProvider/ThemeProvider.test.tsx # ThemeProvider テスト
src/components/*/ComponentName.test.tsx           # 各コンポーネントのテスト
```

## 実装済みの改善 (v0.7.0–v1.0.0)

| 項目 | 実装バージョン |
| --- | --- |
| 全22色 × ライト/ダーク × 全コンポーネントのコントラスト比自動テスト (655テスト) | v1.0.0 ✅ |
| タッチデバイスでの Tooltip 表示方法 (hover → tap + 外側タップで閉じる) | v0.7.0 ✅ |
| タッチターゲットサイズの保証 (44×44px, `cs:max-md:min-h-11`) | v0.7.0 ✅ |

## 今後の課題

| 優先度 | 項目 | 対象バージョン |
| --- | --- | --- |
| 中 | E2E テスト (Playwright) でのキーボードナビゲーション検証 | v1.1.0 |
| 中 | Visual Regression Testing (Chromatic) の導入 | v1.1.0 |
