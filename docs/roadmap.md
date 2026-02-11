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

## v0.7.0 — レスポンシブ & モバイル対応 ✅

> 詳細: [responsive.md](./responsive.md)

### Phase 1: レスポンシブ基盤

#### フック & ユーティリティ

- [x] `useBreakpoint()` フック — 現在のブレークポイントを返す (`sm` | `md` | `lg` | `xl` | `2xl`)
- [x] `useIsMobile()` フック — `md` 未満 (768px) で `true` を返す簡易版
- [x] `useTouchDevice()` フック — `@media (hover: none) and (pointer: coarse)` を検出
- [x] SSR セーフな `matchMedia` ラッパーの実装 (`useMediaQuery` 汎用フック)

#### デザインシステム定義

- [x] `designTokens.ts` にレスポンシブトークン追加 (`TOUCH_TARGET_MIN`, `MOBILE_INPUT_FONT`, `RESPONSIVE_MAX_WIDTH`)
- [x] タッチターゲットサイズ基準の策定 (最小 44×44px = `cs:max-md:min-h-11`)

### Phase 2: 高優先コンポーネントの適応

#### Modal

- [x] モバイル (`md` 未満) でフルスクリーン表示に切り替え
- [x] モバイル表示時のスクロールロック (`useBodyScrollLock` フック)
- [x] `max-height` のビューポート対応 (`90vh` → `90dvh`)

#### Tabs

- [x] モバイルでの水平スクロール対応 (`overflow-x: auto`, `scrollbar-none`)
- [x] タッチターゲットサイズの保証 (`cs:max-md:min-h-11`)

#### Toast

- [x] レスポンシブ `max-width` の適用 (`calc(100vw - 2rem)` ガード)

#### フォーム系コンポーネント (Input, TextArea, Select, PhoneInput)

- [x] タッチターゲットサイズの保証 (`min-height: 44px`)
- [x] モバイル時の `font-size: 16px` 強制（iOS ズーム防止: `cs:max-md:text-base`）

### Phase 3: 中優先コンポーネントの適応

#### Button

- [x] タッチデバイスでの最小タップ領域保証 (44×44px, xs/sm/md スケール)
- [x] `:active` スタイルの強化（`active:scale-[0.97]` + `motion-reduce:active:scale-100`）

#### Checkbox / Radio / Switch

- [x] タッチターゲットサイズの拡大（`cs:max-md:min-h-11`）
- [x] Checkbox: `cs:max-md:items-center` でモバイル時の中央揃え

#### Tooltip

- [x] タッチデバイスではホバー → タップでの表示切替（`useTouchDevice` フック）
- [x] モバイルでの `aria-expanded` によるトグル表示対応
- [x] 外側タップで閉じる（`touchstart` イベントリスナー）

#### Accordion

- [x] タッチターゲットサイズ確認済み（`p-4` = 48px+ で WCAG 2.5.8 準拠済み）

### Phase 4: テスト & ドキュメント

- [x] レスポンシブフックのユニットテスト (21テスト, `matchMedia` モック)
- [x] Storybook にモバイルビューポートプリセットを追加 (375px, 768px, 1280px)
- [x] モバイル表示ストーリー追加 (Modal, Tabs, Input, Tooltip)
- [x] レスポンシブ対応ガイド (`docs/responsive.md`) の作成
- [x] `index.tsx` にフックのエクスポート追加

## v1.0.0 — 安定版リリース ✅

> マイグレーションガイド: [MIGRATION.md](../MIGRATION.md)

### Breaking Changes

- [x] 旧カラーマップ (`Record<Color, string>`) の完全削除 — `colorMap.ts`, `constants.ts` 削除
- [x] CSS変数ベースのカラーシステムに完全移行 — `colorToCSSVars()` で統一
- [x] CSS クラス名を `cs-custom-*` → `cs-*` にリネーム

### ドキュメント & DX

- [x] Storybook に「Foundations」ページ追加（カラーパレット、タイポグラフィ、スペーシング）
- [x] Storybook MDX でデザインシステム全体のドキュメント整備
- [x] カスタムカラーの使い方ガイド（Foundations MDX + CustomColor stories）
- [ ] 各コンポーネントの Do / Don't パターンをストーリーに追加（v1.1.0 で対応予定）

### テスト & 品質

- [x] 全22色 × 全コンポーネントのカラーシステム統合テスト（655 テスト）
- [x] コントラスト比テスト（LIGHT_BG_COLORS のダークテキスト切替検証）
- [x] カバレッジ: 93%+ statements, 88%+ branches
- [x] cyberseeds-ui-rhf ビルド修正 (`moduleResolution: "bundler"`)
- [ ] Visual Regression Testing (Chromatic) の導入（v1.2.0 で対応予定）
- [ ] E2E テスト (Playwright) でのキーボードナビゲーション検証（v1.2.0 で対応予定）

## v1.1.0 — 新規コンポーネント5種追加 ✅

### 新規コンポーネント

| コンポーネント | 説明 | カラーシステム |
| -------------- | ---- | -------------- |
| **Alert** | 静的フィードバック通知 (info/success/warning/error) | セマンティック (Toast 方式) |
| **Card** | 汎用コンテナ (Header/Body/Footer) | なし (中立) |
| **Stepper** | ステップ進行表示 (番号付き円 + 接続線) | CSS変数 |
| **ButtonGroup** | セグメントコントロール (単一/複数選択) | CSS変数 |
| **ButtonTabs** | ボタン形式タブ (Tabs の発展版) | CSS変数 |

- [x] Alert: `role="alert"` / `role="status"`, closable, title, icon, 4バリアント
- [x] Card: Compound pattern (Header/Body/Footer), shadow/bordered オプション
- [x] Stepper: 3ステップ状態 (completed/active/pending), チェックマーク SVG
- [x] ButtonGroup: `role="radiogroup"` (single) / `role="group"` (multiple), keyboard navigation
- [x] ButtonTabs: WAI-ARIA Tabs パターン準拠, ArrowLeft/Right/Home/End キーボード操作
- [x] Select コンポーネントの overflow 修正 (`min-w-0` + `w-full`)
- [x] 全コンポーネントの jest-axe アクセシビリティテスト追加
- [x] カラーシステム統合テスト追加 (Stepper, ButtonGroup, ButtonTabs)
- [x] テスト: 811テスト, 28コンポーネント

## 関連ドキュメント

- [Design System Overview](./design-system.md) — デザイントークンとカラーシステムの現状
- [Custom Color Proposal](./custom-color-proposal.md) — カスタムカラー対応の詳細提案
- [Component Guidelines](./component-guidelines.md) — コンポーネント設計規約
- [Accessibility Guidelines](./accessibility.md) — アクセシビリティ方針
- [Performance Guidelines](./performance.md) — パフォーマンス分析と最適化ガイドライン
- [New Components Proposal](./new-components-proposal.md) — 新規コンポーネントの詳細設計提案
- [Responsive Guide](./responsive.md) — レスポンシブ対応ガイド
- [Migration Guide](../MIGRATION.md) — v0.7.0 → v1.0.0 マイグレーションガイド
