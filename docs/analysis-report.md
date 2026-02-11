# コードベース分析レポート & 改善提言

cyberseeds-ui v1.1.0 の包括的コードベース分析結果と、今後の改善提言。

> 作成日: 2026-02-11
> 対象: cyberseeds-ui v1.1.0 (28コンポーネント, 813テスト)

## 目次

- [総合評価](#総合評価)
- [テストカバレッジ分析](#テストカバレッジ分析)
- [コンポーネントアーキテクチャ分析](#コンポーネントアーキテクチャ分析)
- [CSS・スタイリングシステム分析](#cssスタイリングシステム分析)
- [改善提言](#改善提言)

---

## 総合評価

| 領域             | 評価   | コメント                                             |
| ---------------- | ------ | ---------------------------------------------------- |
| アーキテクチャ   | **A**  | 一貫したパターン、優れた型安全性                     |
| CSS設計          | **A**  | モダンCSS活用（`color-mix()`, CSS Layers）、低詳細度 |
| テスト           | **B+** | 93%+ カバレッジだが Tabs/Toast 等にギャップ          |
| アクセシビリティ | **A-** | jest-axe 116テスト、WCAG準拠。`act()` 警告要修正     |
| 拡張性           | **B**  | ref forwarding 欠如が外部統合を制限                  |
| ドキュメント     | **A**  | CLAUDE.md + 8 docs + Storybook 20+ stories           |

---

## テストカバレッジ分析

### 全体サマリー

| 指標             | 値     | 目標 | 状態 |
| ---------------- | ------ | ---- | ---- |
| Statements       | 93.9%  | 90%+ | 達成 |
| Branches         | 89.41% | 85%+ | 達成 |
| Functions        | 88.97% | —    | —    |
| テストファイル数 | 39     | —    | —    |
| テスト総数       | 813    | —    | —    |

### 目標未達のコンポーネント

#### Tabs — 最大のカバレッジギャップ

- **Statements**: 86.38% (目標 90% 未達)
- **Branches**: 83.78% (目標 85% 未達)
- **Functions**: 71.42%

**未カバー箇所** (約80行):

- `updateScrollState()` コールバック（scrollLeft/scrollWidth の判定）
- `ResizeObserver` のセットアップと切断
- `scroll()` 関数（左右スクロールボタン）
- 左右スクロールボタンの条件付きレンダリング
- `TabsTrigger` の `scrollIntoView` 動作

**根本原因**: スクロールオーバーフロー機能が完全に未テスト。制御/非制御モード、キーボードナビゲーション、disabled タブ、ARIA属性はテスト済み。

#### PhoneInput — ブランチカバレッジ不足

- **Statements**: 99.34%
- **Branches**: **76.47%** (目標 85% を大幅に下回る)

**未カバー箇所**:

- `FormField` コンテキスト内での `describedBy` 計算（`formField.errorId`, `formField.helpId`）
- カーソル補正ロジック（`handleChange` 内の `selectionStart` パス）

#### Toast — Reduced Motion パス未テスト

- **Statements**: 97.91%
- **Branches**: **82.75%** (目標 85% 未達)

**未カバー箇所**:

- `prefersReducedMotion === true` 時の初期表示状態
- アニメーションスキップ（mount 時の early return）
- `handleClose` でアニメーションなしの即時クローズ

#### その他

| コンポーネント | Branches | 未カバー箇所                             |
| -------------- | -------- | ---------------------------------------- |
| RadioGroup     | 80%      | 一部ブランチ                             |
| Radio          | 83.33%   | 間接テスト（RadioGroup経由）で一部未到達 |
| ButtonGroup    | 88.88%   | `Home`/`End` キーナビゲーション          |
| Stepper        | 95.45%   | `step.description` 条件レンダリング      |

### テストパターンの問題

#### `act()` 警告

`accessibility.test.tsx` で Modal・Toast の `act()` 警告が発生。`useEffect` によるアニメーションタイマーが正しく await されておらず、axe スキャン時のDOM状態が不完全な可能性がある。

#### Invalid DOM Property 警告

Button コンポーネントの SVG で `stroke-linecap`（HTML形式）が使用されている。React の `strokeLinecap`（camelCase）に修正が必要。

#### barrel export ファイルのカバレッジ

10個の `index.tsx` ファイルが 0% カバレッジ。テストが直接コンポーネントファイルからインポートしているため。実質的なギャップではないが、集計値を人工的に下げている。

### 不足しているエッジケーステスト

| テスト                   | 対象コンポーネント | 内容                                           |
| ------------------------ | ------------------ | ---------------------------------------------- |
| スクロールオーバーフロー | Tabs               | ボタン表示/クリック、ResizeObserver、状態遷移  |
| Reduced Motion           | Toast, Modal       | `prefersReducedMotion` 全パス                  |
| FormField 統合           | PhoneInput         | `describedBy` ブランチ                         |
| Home/End キー            | ButtonGroup        | キーボードナビゲーション完全性                 |
| Description レンダリング | Stepper            | `step.description` 付きステップ                |
| Dark モード custom color | colorUtils         | `isDark` + `color.dark` ブランチ               |
| 制御モード setMode       | ThemeProvider      | 制御モードで `setMode` が no-op であること     |
| Tooltip フォールバック   | Tooltip            | 全方向にスペースがない場合の最終フォールバック |
| Focus trap               | Modal              | フォーカスがモーダル外に逃げないこと           |
| 複数選択キーボード       | ButtonGroup        | `multiple` モードでキーナビゲーション無効      |

---

## コンポーネントアーキテクチャ分析

### コンポーネント分類 (28個)

| カテゴリ                          | コンポーネント                                               | 数  |
| --------------------------------- | ------------------------------------------------------------ | --- |
| **表示系**                        | Button, Badge, PillBox, Spinner, Progress, Label, Alert      | 7   |
| **フォーム入力系**                | Input, TextArea, PhoneInput, Select, Checkbox, Radio         | 6   |
| **コンテナ/レイアウト系**         | Modal, Card, FormField, GroupBox, Accordion/AccordionItem    | 5   |
| **選択/ナビゲーション系**         | RadioGroup, Tabs, ButtonGroup, ButtonTabs, Switch, Tooltip   | 6   |
| **プロバイダー/ユーティリティ系** | UIColorProvider, ThemeProvider, Toast/ToastProvider, Stepper | 4   |

### 一貫性監査

#### Props 命名 — 非常に高い一貫性

| パターン              | 使用率                 | 対象                                                         |
| --------------------- | ---------------------- | ------------------------------------------------------------ |
| `scale?: Scale`       | 90%                    | Button, Badge, Input, Checkbox, Radio, Switch, Tabs, Card 等 |
| `color?: Color`       | 70%                    | Button, Badge, Input, Switch, Tabs, ButtonGroup 等           |
| `variant?: Variant`   | Button, Alert          | 一貫した適用                                                 |
| `disabled?: boolean`  | 全インタラクティブ要素 | 統一                                                         |
| `className?: string`  | 大半のコンポーネント   | Tailwind オーバーライド用                                    |
| `isInvalid?: boolean` | フォーム入力系         | Input, TextArea, PhoneInput, Select                          |

#### カラーシステム — 完全な一貫性

全カラー対応コンポーネントが同一パターンを遵守:

```tsx
const { color: contextUIColor } = useUIColor() ?? { color: undefined };
const finalColor = resolveColor(contextUIColor ?? color);
const colorStyle = colorToCSSVars(finalColor);
```

`LIGHT_BG_COLORS`（amber/yellow/lime）の暗色テキスト切替も Button, Badge, Checkbox, Radio, Switch, ButtonGroup, Stepper で統一的に適用。

#### Ref Forwarding — 未実装

**全28コンポーネントで `React.forwardRef()` が未使用。**

影響:

- floating-ui, react-select 等のライブラリ統合が不可
- 親コンポーネントからの DOM 直接操作が不可
- RHF の `Controller` 以外のフォーム統合パターンが制限される

#### アクセシビリティ属性 — 優れたカバレッジ

全インタラクティブコンポーネントで WAI-ARIA パターンが実装済み:

- `aria-invalid`, `aria-describedby` — フォーム入力系
- `aria-checked` — Checkbox, Radio, Switch
- `aria-expanded` — Accordion
- `aria-selected` — Tabs
- `role="progressbar"`, `role="switch"`, `role="dialog"` + `aria-modal` 等

キーボードナビゲーション: Tabs, ButtonGroup, ButtonTabs, Accordion で完全実装。

#### Context 利用パターン (7 Context) — 統一的

全 Context で `useMemo` によるメモ化、`null` チェック付きカスタムフック、明確なエラーメッセージを実装。

### Storybook カバレッジ

**Story がないコンポーネント**:

- **PhoneInput** — フォーム系で唯一 Story なし
- **PillBox** — 表示コンポーネント
- **GroupBox** — レイアウトコンポーネント

---

## CSS・スタイリングシステム分析

### アーキテクチャ概要

| ファイル         | サイズ      | 役割                          |
| ---------------- | ----------- | ----------------------------- |
| `src/index.css`  | 6.2 KB      | セマンティック CSS クラス定義 |
| `src/style.css`  | 68 KB (min) | 開発/Storybook 用生成 CSS     |
| `dist/style.css` | 65 KB (min) | 配布用生成 CSS                |

### セマンティック CSS クラス (45 クラス)

全クラスが CSS 変数 (`--cs-ui-*`) を通じてテーマ対応:

| カテゴリ             | クラス                                                                                                                                                                 | 数  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| **カラー駆動**       | `cs-btn-primary`, `cs-badge-solid/outline/dot`, `cs-checked`, `cs-pill`, `cs-spinner`, `cs-progress`, `cs-tab-active`, `cs-stepper-*`, `cs-btn-tab-active`, `cs-bg` 等 | 27  |
| **インタラクション** | `cs-focus`, `cs-focus-visible`, `cs-full-width`, `cs-scrollbar-none`, `cs-progress-animated` 等                                                                        | 18  |

### ダークモード実装

`:is(.dark, .dark *)` コンビネータ + `color-mix()` 関数でプログラマティックに色調を調整:

```css
:is(.dark, .dark *) .cs-pill {
  outline-color: color-mix(in oklch, var(--cs-ui-border) 70%, white 30%);
  background-color: color-mix(in oklch, var(--cs-ui-base) 20%, transparent);
}
```

14個のカラークラス全てにダークモードペアが存在（100%カバレッジ）。

### 詳細度分析 — 非常に低く一貫

| セレクタ                    | 詳細度  | 使用数 |
| --------------------------- | ------- | ------ |
| `.cs-*`                     | (0,1,0) | ~25    |
| `:is(.dark, .dark *) .cs-*` | (0,1,1) | 14     |
| `.cs-*:pseudo-class`        | (0,1,1) | 10     |

`!important` 宣言なし。レイヤー順序 (`theme > base > components > utilities`) で詳細度衝突を防止。

### CSS 変数体系 (7変数/カラー)

```
--cs-ui-base          プライマリカラー (600 shade)
--cs-ui-hover         ホバー状態 (500 shade)
--cs-ui-active        アクティブ状態 (400 shade)
--cs-ui-focus         フォーカスインジケーター (600 shade)
--cs-ui-light         ライト背景 (200 shade)
--cs-ui-lightText     ライト背景上テキスト (900 shade)
--cs-ui-border        ボーダー色 (400 shade)
```

22プリセットカラー × 7変数 = OKLCH カラースペースで定義。

### モダン CSS 機能の活用

- **`color-mix()`** — ダークモードで24箇所使用。明示的なカラーペア不要
- **CSS Layers** — `@layer theme, base, components, utilities`
- **Custom Variant** — `@custom-variant dark (&:where(.dark, .dark *))`
- **CSS Animations** — `@keyframes` + `prefers-reduced-motion` 対応

### 課題

1. `.cs-focus` が定義されているが、コンポーネントでは `.cs-focus-visible` のみ使用（未使用の可能性）
2. Gray 系カラー（`cs:text-gray-400` 等）がユーティリティクラスとしてハードコード — セマンティック変数化の余地あり
3. Tailwind Preflight CSS (~8-10 KB) が含まれる — 消費者側で既にリセット CSS がある場合は冗長

---

## 改善提言

### Priority 1: 高優先 — テストギャップ修正

#### 1-1. Tabs スクロールオーバーフローテスト追加

最大のカバレッジギャップ。約80行が完全に未テスト。

```
対象: src/components/Tabs/Tabs.test.tsx
追加項目:
- [ ] スクロールボタンの条件付き表示テスト
- [ ] 左右スクロールボタンのクリック動作
- [ ] ResizeObserver のセットアップ/切断
- [ ] canScrollLeft/canScrollRight 状態遷移
- [ ] アクティブタブの scrollIntoView 動作
```

**期待効果**: Tabs Statements 86% → 95%+, Branches 83% → 90%+

#### 1-2. Reduced Motion テスト追加

Toast・Modal の `prefersReducedMotion` パスが完全に未テスト。

```
対象: Toast.test.tsx, Modal.test.tsx
追加項目:
- [ ] useReducedMotion を true にモックした状態での Toast mount
- [ ] アニメーションスキップの検証
- [ ] handleClose の即時クローズ動作
- [ ] Modal の reduced motion 初期状態
```

**期待効果**: Toast Branches 82% → 90%+

#### 1-3. PhoneInput FormField 統合テスト追加

```
対象: PhoneInput.test.tsx
追加項目:
- [ ] FormField 内で PhoneInput をレンダリング
- [ ] describedBy (errorId, helpId) の関連付け検証
```

**期待効果**: PhoneInput Branches 76% → 85%+

#### 1-4. accessibility.test.tsx の `act()` 警告修正

```
対象: src/components/__tests__/accessibility.test.tsx
修正: Modal/Toast レンダリングを await act(async () => { ... }) でラップ
```

### Priority 2: 高優先 — アーキテクチャ改善

#### 2-1. フォーム系コンポーネントへの `forwardRef` 導入

外部ライブラリ統合とDOM操作を可能にする。

```
対象コンポーネント (優先順):
- [ ] Input
- [ ] TextArea
- [ ] Select
- [ ] PhoneInput
- [ ] Button
- [ ] Checkbox
- [ ] Switch
```

実装パターン:

```tsx
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color, scale = "md", ...props }, ref) => {
    // 既存ロジック
    return <input ref={ref} {...} />;
  }
);
Input.displayName = "Input";
```

**注意**: Breaking change ではないが、TypeScript の型エクスポートに影響する可能性がある。

### Priority 3: 中優先 — コード品質改善

#### 3-1. Scale Map の共通定数化

20以上のコンポーネントで類似の `scaleMap` が重複。

```
対象: 新規 src/components/Constants/scaleMaps.ts
内容:
- [ ] BUTTON_SCALE_CLASSES
- [ ] INPUT_SCALE_CLASSES
- [ ] TEXT_SCALE_CLASSES
- [ ] ICON_SCALE_CLASSES
各コンポーネントが定数をインポートして使用
```

**利点**: 高さ統一（現在のunstaged変更のような）が1箇所の変更で済む。

#### 3-2. ButtonGroup/ButtonTabs の `fullWidth` テスト追加

現在のunstaged変更で追加された新機能のテストが不足。

```
追加項目:
- [ ] fullWidth=true 時の CSS クラス検証
- [ ] fullWidth=false (デフォルト) の動作確認
- [ ] fullWidth と各 scale の組み合わせ
```

#### 3-3. SVG の React 属性修正

```
対象: Button.tsx 内の SVG
修正: stroke-linecap → strokeLinecap (React camelCase)
```

### Priority 4: 中優先 — 新規コンポーネント

共通 UI ライブラリとして不足しているコンポーネント:

| コンポーネント    | 用途                                 | 難易度 | 備考                                 |
| ----------------- | ------------------------------------ | ------ | ------------------------------------ |
| **Popover**       | ドロップダウン、コンテキストメニュー | 中     | Tooltip の位置計算ロジックを流用可能 |
| **Skeleton**      | ローディングプレースホルダー         | 低     | アニメーション + scale 対応          |
| **Breadcrumb**    | ナビゲーションパス                   | 低     | `aria-current` 対応                  |
| **Pagination**    | データリスト操作                     | 低     | ButtonGroup パターンを流用           |
| **Dropdown/Menu** | アクション選択                       | 中     | Popover + リスト選択の組合せ         |

### Priority 5: 低優先 — 最適化・整備

#### 5-1. 未使用 `.cs-focus` クラスの整理

`.cs-focus` が `src/index.css` に定義されているが、コンポーネントでは `.cs-focus-visible` のみ使用されている。不要であれば削除、必要であれば使い分けをドキュメント化。

#### 5-2. Gray カラーのセマンティック変数化

現在ハードコードされている Gray 系ユーティリティクラスを `--cs-neutral-*` として抽出し、将来のテーマカスタマイズに備える。

#### 5-3. Storybook Story 補完

| コンポーネント | 状態       | 優先度                 |
| -------------- | ---------- | ---------------------- |
| PhoneInput     | Story なし | 中（フォーム系で唯一） |
| PillBox        | Story なし | 低                     |
| GroupBox       | Story なし | 低                     |

#### 5-4. barrel export カバレッジ対策

テストで `index.tsx` 経由のインポートに切り替えるか、カバレッジ設定で barrel ファイルを除外して集計ノイズを排除。

---

## 未コミット変更のサマリー (参考)

現在 18 ファイル (+287/-85行) の未コミット変更が存在:

| テーマ               | 変更内容                                     | 対象ファイル数 |
| -------------------- | -------------------------------------------- | -------------- |
| Button styling reset | `cs:border-0 cs:shadow-none` の統一適用      | 12             |
| Height alignment     | `cs:h-5/6/9/11` によるフォーム要素の高さ統一 | 3              |
| Outline system       | `border` → `outline` への移行                | 4              |
| `fullWidth` prop     | ButtonGroup, ButtonTabs に新規追加           | 2              |
| Storybook 拡充       | HeightAlignment story, Overview 更新         | 3              |
| `.cs-full-width` CSS | 等幅ボタンレイアウト用新規クラス             | 1              |

品質は高く、破壊的変更なし。テスト追加後のコミットを推奨。

---

## 関連ドキュメント

- [Design System Overview](./design-system.md) — デザイントークンとカラーシステム
- [Component Guidelines](./component-guidelines.md) — コンポーネント設計規約
- [Accessibility Guidelines](./accessibility.md) — アクセシビリティ方針
- [Responsive Guide](./responsive.md) — レスポンシブ対応ガイド
- [Roadmap](./roadmap.md) — リリース履歴とロードマップ
- [Testing Guide](../TESTING.md) — テスト戦略とユーティリティ
- [Migration Guide](../MIGRATION.md) — v0.7.0 → v1.0.0 マイグレーション
