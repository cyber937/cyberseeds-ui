# Roadmap

cyberseeds-ui の改善計画とロードマップ。

## v0.3.1 — パフォーマンス最適化

> 詳細: [performance.md](./performance.md)

### Context value の安定化（最重要）

- [ ] `UIColorContext` の value を `useMemo` でメモ化
- [ ] `RadioGroupContext` の value を `useMemo` でメモ化
- [ ] `ModalContext` の value を `useMemo` でメモ化

### オブジェクト再生成の排除

- [ ] Button の scaleMap, activeColorMap をモジュールスコープに移動
- [ ] Switch の4つの scaleMap をモジュールスコープに移動
- [ ] Checkbox の4つの scaleMap をモジュールスコープに移動
- [ ] Radio の3つの scaleMap をモジュールスコープに移動
- [ ] PillBox の colorMap, scaleMap をモジュールスコープに移動
- [ ] Select, Input, TextArea, Label, PhoneInput, Modal の各マップを移動
- [ ] props 依存のマップ（Button の variantMap）を `useMemo` 化

### イベントハンドラの最適化

- [ ] PhoneInput の handleChange, handleKeyDown に `useCallback` 適用
- [ ] Modal の handleBackdropClick に `useCallback` 適用
- [ ] RadioGroup.Option のインラインハンドラに `useCallback` 適用

### React.memo の適用

- [ ] Label, PillBox, Radio など純粋表示コンポーネントに `React.memo` を適用

## v0.4.0 — カスタムカラー & デザイントークン強化

### カスタムカラー対応

> 詳細: [custom-color-proposal.md](./custom-color-proposal.md)

- [x] `Color` 型を `PresetColor | CustomColor` に拡張
- [x] CSS カスタムプロパティ (`--cs-ui-*`) の導入
- [x] `UIColorProvider` でカスタムカラーオブジェクトを受け付け
- [x] 各コンポーネントを CustomColor 対応 (Button, Switch, Checkbox, Radio, PillBox, Input, TextArea, PhoneInput)
- [ ] `base` のみ指定時の自動シェード生成 (将来対応)
- [ ] プリセット22色の CSS変数マッピング定義 (将来対応)
- [ ] ダークモード用カスタムカラーの対応 (将来対応)

### セマンティックカラー

- [ ] `success`, `warning`, `error`, `info` のセマンティック名を定義
- [ ] プリセットカラーへのマッピング（例: `success` → `green`）
- [ ] カスタムカラーでのセマンティックカラー上書きサポート

### Scale 拡張

- [ ] `xs`, `lg` サイズの追加を検討
- [ ] 全コンポーネントへの適用

### 視覚的一貫性

- [ ] フォーカスリングの太さ・オフセットを全コンポーネントで統一
- [ ] `transition-duration` / `easing` の共通定数化
- [ ] `border-radius` の統一（`rounded-md` vs `rounded-lg` の整理）
- [ ] disabled 背景色を `amber-100` → `gray-100` / `gray-200` に変更

## v0.5.0 — 新規コンポーネント追加 ✅

> 詳細: [new-components-proposal.md](./new-components-proposal.md)

### 高優先度

| コンポーネント | 説明 | 既存への影響 |
| --- | --- | --- |
| **FormField** | Label + Input + Error + Help の統合ラッパー | Input, Select, TextArea, PhoneInput に `useFormField` hook 追加 |
| **Toast** | フィードバック通知 (宣言的 API + `useToast` hook) | 新規 ToastProvider |

- [x] FormField: Context ベースで `aria-describedby` を自動関連付け
- [x] FormField: `isInvalid`, `isRequired`, `isDisabled` をコンテキスト経由で子要素に伝播
- [x] FormField: Error に `role="alert"` + `aria-live="polite"` を適用
- [x] Toast: `success` / `error` / `warning` / `info` の4バリアント
- [x] Toast: 宣言的 API（`<Toast>` 単体）と命令的 API（`useToast` hook）の両対応
- [x] Toast: ToastProvider で配置位置・自動消去・スタックを管理
- [x] Toast: スライドイン/アウトのアニメーション（Modal と同じ CSS transition パターン）

### 中優先度

| コンポーネント | 説明 | 既存への影響 |
| --- | --- | --- |
| **Tooltip** | ホバー/フォーカスで補足情報をポップアップ | なし |
| **Badge** | 通知カウント・ドット・ステータス表示 | なし |

- [x] Tooltip: `position` (top/bottom/left/right)、`delay`、Escape キーで閉じる
- [x] Tooltip: `aria-describedby` + `role="tooltip"` でアクセシビリティ対応
- [x] Tooltip: ビューポート端での自動フリップ（`getBoundingClientRect` による検知）
- [x] Badge: `solid` / `outline` / `dot` の3バリアント
- [x] Badge: `max` prop でカウント上限 (例: 99+)
- [x] Badge: `Badge.Wrapper` で要素に付加（position: absolute）

### 低優先度

| コンポーネント | 説明 | 既存への影響 |
| --- | --- | --- |
| **Tabs** | タブ切り替えUI（Accordion の水平版） | なし |
| **Spinner** | 回転アニメーションのローディングインジケーター | なし |
| **Progress** | バー型の進捗表示 | なし |

- [x] Tabs: WAI-ARIA Tabs パターン準拠（Arrow キーでタブ移動）
- [x] Tabs: 制御/非制御の両モード対応 (`value` / `defaultValue`)
- [x] Spinner: SVG ベース、`role="status"` + `aria-label`
- [x] Progress: `role="progressbar"` + `aria-valuenow`、パーセント表示オプション
- [x] Progress: ストライプアニメーション（`animated` prop）

## v0.6.0 — アクセシビリティ強化

> 詳細: [accessibility.md](./accessibility.md)

- [ ] `aria-describedby` でエラーメッセージ関連付け (Input, Select, TextArea)
- [ ] 明るいカラー (`yellow`, `lime`, `amber`) のコントラスト比検証・修正
- [ ] `prefers-reduced-motion` 対応 (Switch, Accordion, Modal)
- [ ] `aria-live="polite"` でバリデーション通知
- [ ] `prefers-color-scheme` によるシステム設定追従オプション

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
