# Roadmap

cyberseeds-ui の改善計画とロードマップ。

## v0.3.1 — パフォーマンス最適化 ✅

> 詳細: [performance.md](./performance.md)

### Context value の安定化（最重要）

- [x] `UIColorContext` の value を `useMemo` でメモ化
- [x] `RadioGroupContext` の value を `useMemo` でメモ化
- [x] `ModalContext` の value を `useMemo` でメモ化
- [x] `FormFieldContext`, `ToastContext`, `ThemeContext` も `useMemo` でメモ化 (v0.5.0/v0.6.0 で新規作成時に適用)

### オブジェクト再生成の排除

- [x] Button の scaleMap, activeColorMap をモジュールスコープに移動
- [x] Switch の4つの scaleMap をモジュールスコープに移動
- [x] Checkbox の4つの scaleMap をモジュールスコープに移動
- [x] Radio の3つの scaleMap をモジュールスコープに移動
- [x] PillBox の colorMap, scaleMap をモジュールスコープに移動
- [x] Select, Input, TextArea, Label, PhoneInput, Modal の各マップを移動
- [x] props 依存のマップ（Button の variantMap）を `useMemo` 化

### イベントハンドラの最適化

- [x] PhoneInput の handleChange, handleKeyDown に `useCallback` 適用
- [x] Modal の handleBackdropClick に `useCallback` 適用
- [x] RadioGroup.Option のインラインハンドラに `useCallback` 適用

### React.memo の適用

- [x] Label, PillBox, Radio に `React.memo` を適用
- [x] Modal.Header に `React.memo` を適用

## v0.4.0 — カスタムカラー & デザイントークン強化 ✅

### カスタムカラー対応

> 詳細: [custom-color-proposal.md](./custom-color-proposal.md)

- [x] `Color` 型を `PresetColor | CustomColor` に拡張
- [x] CSS カスタムプロパティ (`--cs-ui-*`) の導入
- [x] `UIColorProvider` でカスタムカラーオブジェクトを受け付け
- [x] 各コンポーネントを CustomColor 対応 (Button, Switch, Checkbox, Radio, PillBox, Input, TextArea, PhoneInput)
- [x] `base` のみ指定時の自動シェード生成 (OKLCH カラースペースで自動計算)
- [x] プリセット22色の CSS変数マッピング定義 (`presetColorVars.ts`)
- [x] ダークモード用カスタムカラーの対応 (`CustomColor.dark` + `UIColorProvider.darkColor`)

### セマンティックカラー

- [x] `success`, `warning`, `error`, `info` のセマンティック名を定義 (`SemanticColor` 型)
- [x] プリセットカラーへのマッピング（`success` → `green`, `warning` → `amber`, `error` → `red`, `info` → `blue`）
- [x] カスタムカラーでのセマンティックカラー上書きサポート (`UIColorProvider.semanticColors`)
- [x] 全12コンポーネントで `resolveColor()` によるセマンティックカラー解決
- [x] Toast の `variant` がセマンティックカラーマップを参照

### Scale 拡張

- [x] `xs`, `lg` サイズの追加 (`Scale = "xs" | "sm" | "md" | "lg"`)
- [x] 全16コンポーネントへの適用 (Button, Switch, Checkbox, Radio, PillBox, Input, TextArea, PhoneInput, Select, Label, Badge, Toast, Progress, Spinner, Tabs, FormField)

### 視覚的一貫性

- [x] フォーカスリングの統一 (`focus:` → `focus-visible:`, `FOCUS_RING` / `FOCUS_RING_INSET` 定数)
- [x] `transition-duration` / `easing` の共通定数化 (`TRANSITION_FAST` / `TRANSITION_NORMAL` / `TRANSITION_SLOW`)
- [x] `border-radius` の統一 (`rounded-md` 標準化, Tooltip・Toast close ボタン修正)
- [x] `motion-reduce:transition-none` を全コンポーネントに適用
- [x] disabled 背景色を `amber-100` → `gray-100` / `gray-200` に変更 (v0.6.0 で実装)

## v0.5.0 — 新規コンポーネント追加 ✅

> 詳細: [new-components-proposal.md](./new-components-proposal.md)

### 高優先度

| コンポーネント | 説明                                              | 既存への影響                                                    |
| -------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| **FormField**  | Label + Input + Error + Help の統合ラッパー       | Input, Select, TextArea, PhoneInput に `useFormField` hook 追加 |
| **Toast**      | フィードバック通知 (宣言的 API + `useToast` hook) | 新規 ToastProvider                                              |

- [x] FormField: Context ベースで `aria-describedby` を自動関連付け
- [x] FormField: `isInvalid`, `isRequired`, `isDisabled` をコンテキスト経由で子要素に伝播
- [x] FormField: Error に `role="alert"` + `aria-live="polite"` を適用
- [x] Toast: `success` / `error` / `warning` / `info` の4バリアント
- [x] Toast: 宣言的 API（`<Toast>` 単体）と命令的 API（`useToast` hook）の両対応
- [x] Toast: ToastProvider で配置位置・自動消去・スタックを管理
- [x] Toast: スライドイン/アウトのアニメーション（Modal と同じ CSS transition パターン）

### 中優先度

| コンポーネント | 説明                                      | 既存への影響 |
| -------------- | ----------------------------------------- | ------------ |
| **Tooltip**    | ホバー/フォーカスで補足情報をポップアップ | なし         |
| **Badge**      | 通知カウント・ドット・ステータス表示      | なし         |

- [x] Tooltip: `position` (top/bottom/left/right)、`delay`、Escape キーで閉じる
- [x] Tooltip: `aria-describedby` + `role="tooltip"` でアクセシビリティ対応
- [x] Tooltip: ビューポート端での自動フリップ（`getBoundingClientRect` による検知）
- [x] Badge: `solid` / `outline` / `dot` の3バリアント
- [x] Badge: `max` prop でカウント上限 (例: 99+)
- [x] Badge: `Badge.Wrapper` で要素に付加（position: absolute）

### 低優先度

| コンポーネント | 説明                                           | 既存への影響 |
| -------------- | ---------------------------------------------- | ------------ |
| **Tabs**       | タブ切り替えUI（Accordion の水平版）           | なし         |
| **Spinner**    | 回転アニメーションのローディングインジケーター | なし         |
| **Progress**   | バー型の進捗表示                               | なし         |

- [x] Tabs: WAI-ARIA Tabs パターン準拠（Arrow キーでタブ移動）
- [x] Tabs: 制御/非制御の両モード対応 (`value` / `defaultValue`)
- [x] Spinner: SVG ベース、`role="status"` + `aria-label`
- [x] Progress: `role="progressbar"` + `aria-valuenow`、パーセント表示オプション
- [x] Progress: ストライプアニメーション（`animated` prop）

## v0.6.0 — アクセシビリティ強化 ✅

> 詳細: [accessibility.md](./accessibility.md)

- [x] `aria-describedby` でエラーメッセージ関連付け (FormField 経由で v0.5.0 で実装済み)
- [x] 明るいカラー (`yellow`, `lime`, `amber`) のコントラスト比検証・修正
  - Button primary variant: `LIGHT_BG_COLORS` で `cs:text-gray-900` に切替
  - Badge solid variant: yellow/lime/amber で `cs:text-gray-900`
  - Checkbox: チェックマーク SVG stroke を `cs:stroke-gray-900` に
  - Radio: ドットを `cs:before:bg-gray-900` に
- [x] `prefers-reduced-motion` 対応 (Switch, Accordion, Modal, Toast, Progress, Spinner, Button, Tabs)
  - `useReducedMotion()` hook 新規作成
  - CSS `motion-reduce:transition-none` を全アニメーションコンポーネントに適用
  - Spinner: `motion-reduce:animate-pulse` (回転→点滅に変更)
  - Modal/Toast: JS レベルで `requestAnimationFrame` アニメーションをバイパス
  - Progress: CSS `@media (prefers-reduced-motion: reduce)` でストライプアニメーション無効化
- [x] `aria-live="polite"` でバリデーション通知 (FormField 経由で v0.5.0 で実装済み)
- [x] `prefers-color-scheme` によるシステム設定追従オプション
  - `ThemeProvider` コンポーネント新規作成 (`mode="light"|"dark"|"system"`)
  - `useTheme()` hook: `{ mode, setMode, resolvedTheme }` を返す
- [x] disabled 背景色の正規化: `disabled:bg-amber-100` → `disabled:bg-gray-100` (6コンポーネント)

## v0.7.0 — レスポンシブ & モバイル対応

### Phase 1: レスポンシブ基盤

#### フック & ユーティリティ

- [ ] `useBreakpoint()` フック — 現在のブレークポイントを返す (`sm` | `md` | `lg` | `xl` | `2xl`)
- [ ] `useIsMobile()` フック — `md` 未満 (768px) で `true` を返す簡易版
- [ ] `useTouchDevice()` フック — `@media (hover: none) and (pointer: coarse)` を検出
- [ ] SSR セーフな `matchMedia` ラッパーの実装

#### デザインシステム定義

- [ ] [design-system.md](./design-system.md) にブレークポイント定義を追加 (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`)
- [ ] モバイルファーストの設計方針をドキュメント化
- [ ] タッチターゲットサイズ基準の策定 (最小 44×44px、推奨 48×48px)

### Phase 2: 高優先コンポーネントの適応

#### Modal

- [ ] モバイル (`md` 未満) でフルスクリーン表示に切り替え
- [ ] モバイル時の padding・font-size 調整
- [ ] モバイル表示時のスクロールロック (`body` の `overflow: hidden`)
- [ ] `max-height` のビューポート対応 (`dvh` 単位の活用)

#### Tabs

- [ ] モバイルでの水平スクロール対応 (`overflow-x: auto`)
- [ ] スクロールインジケーター（フェードグラデーション）の追加
- [ ] タブが多い場合のレスポンシブ折り返し対応

#### Toast

- [ ] レスポンシブ `max-width` の適用 (`calc(100vw - 2rem)` ガード)
- [ ] モバイルでのデフォルト配置を `bottom-center` に変更
- [ ] モバイル時のフルワイド表示オプション

#### フォーム系コンポーネント (Input, TextArea, Select, PhoneInput)

- [ ] タッチターゲットサイズの保証 (`min-height: 44px`)
- [ ] モバイル時の `font-size: 16px` 強制（iOS ズーム防止）
- [ ] レスポンシブ padding の適用

### Phase 3: 中優先コンポーネントの適応

#### Button

- [ ] タッチデバイスでの最小タップ領域保証 (44×44px)
- [ ] モバイル時のレスポンシブ padding 調整
- [ ] `:active` スタイルの強化（タッチフィードバック）

#### RadioGroup / Checkbox / Switch

- [ ] タッチターゲットサイズの拡大（ラベル領域含む）
- [ ] モバイル時のタッチフレンドリーな間隔 (`gap`) 調整

#### Tooltip

- [ ] タッチデバイスではホバー → タップ/ロングプレスでの表示に切り替え
- [ ] モバイルでの `aria-expanded` によるトグル表示対応

#### Accordion

- [ ] モバイル時の padding 最適化
- [ ] タッチターゲットサイズの保証

### Phase 4: テスト & ドキュメント

- [ ] レスポンシブフックのユニットテスト (`matchMedia` モック)
- [ ] Storybook にモバイルビューポートプリセットを追加 (375px, 768px, 1024px)
- [ ] 全コンポーネントのモバイル表示ストーリー追加
- [ ] レスポンシブ対応ガイド (`docs/responsive.md`) の作成

## v1.0.0 — 安定版リリース

### Breaking Changes

- [ ] 旧カラーマップ (`Record<Color, string>`) の完全削除
- [ ] CSS変数ベースのカラーシステムに完全移行
- [ ] `Color` 型の旧定義を `PresetColor` にリネーム

### ドキュメント & DX

- [ ] Storybook に「Foundations」ページ追加（カラーパレット、タイポグラフィ、スペーシング）
- [ ] 各コンポーネントの Do / Don't パターンをストーリーに追加
- [ ] Storybook MDX でデザインシステム全体のドキュメント整備
- [ ] カスタムカラーの使い方ガイド

### テスト & 品質

- [ ] 全22色 × ライト/ダーク × 全コンポーネントのコントラスト比自動テスト
- [ ] Visual Regression Testing (Chromatic) の導入
- [ ] E2E テスト (Playwright) でのキーボードナビゲーション検証

## 関連ドキュメント

- [Design System Overview](./design-system.md) — デザイントークンとカラーシステムの現状
- [Custom Color Proposal](./custom-color-proposal.md) — カスタムカラー対応の詳細提案
- [Component Guidelines](./component-guidelines.md) — コンポーネント設計規約
- [Accessibility Guidelines](./accessibility.md) — アクセシビリティ方針
- [Performance Guidelines](./performance.md) — パフォーマンス分析と最適化ガイドライン
- [New Components Proposal](./new-components-proposal.md) — 新規コンポーネントの詳細設計提案
- [Responsive Guide](./responsive.md) — レスポンシブ対応ガイド (v0.7.0 で作成予定)
