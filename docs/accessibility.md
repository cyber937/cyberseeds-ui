# Accessibility Guidelines

cyberseeds-ui のアクセシビリティ方針と実装ガイドライン。

## 基本方針

- **WCAG 2.1 AA** 準拠を目標
- すべてのコンポーネントで WAI-ARIA パターンを適用
- キーボードのみでの操作を保証
- スクリーンリーダーでの利用を考慮

## コンポーネント別 ARIA 実装

### フォーム要素 (Input, Select, TextArea, PhoneInput)

```tsx
<input
  id={id}                              // label との関連付け
  aria-invalid={isInvalid || undefined} // バリデーション状態
/>
<label htmlFor={id}>...</label>
```

- `useId()` で一意のIDを自動生成
- `aria-invalid` はバリデーションエラー時のみ `true` を設定（`false` は設定しない）
- `Label` コンポーネントで必須マーク (`*`) を表示

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
| Modal | トラップ | - | 閉じる | - |
| Accordion | ヘッダーにフォーカス | 開閉 | - | - |

### フォーカス管理

- すべてのインタラクティブ要素にフォーカスリングを表示
- フォーカスリングの色はコンポーネントの `color` prop に連動
- `cs:focus-visible:outline-*` で キーボードフォーカス時のみリングを表示（マウスクリックでは非表示）
- Modal はフォーカストラップを実装（Tab で外部に抜けない）

## ダークモード対応

- すべてのテキストでダークモード時のコントラスト比を確保
- `cs:dark:text-gray-200`, `cs:dark:text-gray-300` 等で明るいテキストを適用
- 背景色もダークモード用に調整 (`cs:dark:bg-gray-800`)

### コントラスト比の目標

| 要素 | ライトモード | ダークモード | 目標 |
| --- | --- | --- | --- |
| 本文テキスト | `gray-900` on `white` | `gray-200` on `gray-800` | 4.5:1 以上 |
| ラベル | `gray-900` on `white` | `gray-300` on `gray-800` | 4.5:1 以上 |
| プレースホルダ | `gray-400` on `white` | `gray-400` on `gray-800` | 3:1 以上 |
| disabled | コントラスト比の要件なし | コントラスト比の要件なし | - |

## 無効化状態 (disabled)

- `disabled` 属性を使用（`aria-disabled` ではなく）
- 視覚的にグレーアウト (`cs:disabled:bg-amber-100`, `cs:disabled:text-gray-400`)
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

- 全14コンポーネントの基本レンダリング
- ライト/ダークテーマ両方でのテスト
- キーボードナビゲーションのテスト
- スクリーンリーダー属性の検証
- フォーム統合テスト（label + input の関連付け）
- Modal のフォーカス管理テスト

### テストファイル

```
src/components/__tests__/accessibility.test.tsx  # 統合アクセシビリティテスト
src/components/*/ComponentName.test.tsx           # 各コンポーネントのテスト
```

## 改善提案

### 現状の課題

1. **disabled 時の背景色** — `cs:disabled:bg-amber-100` は意味的に分かりにくい。`gray-100` / `gray-200` の方が一般的
2. **エラーメッセージの関連付け** — `aria-describedby` でエラーメッセージを入力フィールドに紐付ける仕組みがない
3. **ライブリージョン** — 動的なフィードバック（バリデーション結果等）を `aria-live` で通知する仕組みがない
4. **すべてのカラーでのコントラスト検証** — 22色すべてで WCAG AA を満たしているか未検証（特に `yellow`, `lime`, `amber` の明るい色）

### 推奨改善

| 優先度 | 項目 | 影響範囲 |
| --- | --- | --- |
| 高 | `aria-describedby` でエラーメッセージ関連付け | Input, Select, TextArea |
| 高 | 明るいカラー (yellow, lime, amber) のコントラスト検証 | 全コンポーネント |
| 中 | disabled 背景色を gray 系に統一 | 全フォームコンポーネント |
| 中 | `aria-live="polite"` でバリデーション通知 | FormField (新規) |
| 低 | `prefers-reduced-motion` 対応 | Switch, Accordion, Modal |
