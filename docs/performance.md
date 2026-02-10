# Performance Guidelines

cyberseeds-ui のパフォーマンス分析と最適化ガイドライン。

> **Note**: This document was written during v0.3.1 development. All optimizations listed below
> have been **implemented and verified** in subsequent releases (v0.3.1–v1.0.0).
> The document is retained as a reference for the optimization patterns used in this codebase.
>
> **v1.0.0 update**: `Constants/colorMap.ts` and its 3 shared color maps
> (`focusOutlineColorMap`, `checkedFocusOutlineColorMap`, `backgroundColorMap`)
> have been **deleted** and replaced by the CSS variable system (`colorToCSSVars()`).
> References to these files below are historical.

## 問題点と最適化 (v0.3.1 時点の分析 — 全て修正済み)

### 1. Context value の参照不安定（最重要）

Context Provider の `value` に毎レンダーで新しいオブジェクトが渡されており、
すべての消費コンポーネントが不要に再レンダーされる。

#### 該当箇所

**UIColorContext** — `src/components/UIColorContext.tsx:33`

```tsx
// 問題: { color, setColor } は毎レンダーで新しいオブジェクト
<UIColorContext.Provider value={{ color, setColor }}>
```

UIColorContext はほぼ全てのフォームコンポーネントが消費しているため、
Provider が再レンダーされると以下の全コンポーネントに影響する:
Button, Input, TextArea, Select, Checkbox, Radio, RadioGroup, Switch, PhoneInput

**RadioGroupContext** — `src/components/RadioGroup/RadioGroup.tsx:30`

```tsx
<RadioGroupContext.Provider value={{ scale, color, value, onChange }}>
```

RadioGroup 内の全 Option が再レンダーされる。

**ModalContext** — `src/components/Modal/Modal.tsx:53`

```tsx
<ModalContext.Provider value={{ close: onClose, headerId }}>
```

Modal.Header, Modal.Body, Modal.Footer が再レンダーされる。

#### 修正方法

```tsx
// Before
<UIColorContext.Provider value={{ color, setColor }}>

// After
const contextValue = useMemo(() => ({ color, setColor }), [color, setColor]);
<UIColorContext.Provider value={contextValue}>
```

同じパターンを RadioGroupContext, ModalContext にも適用する。

---

### 2. レンダーごとのオブジェクト再生成（全コンポーネント共通）

静的な `Record<Color|Scale, string>` マップがコンポーネント関数の内部で定義されており、
レンダーのたびに新しいオブジェクトが生成されている。

#### 影響度別の一覧

| 深刻度 | コンポーネント | 生成数/レンダー | ファイル:行 |
| --- | --- | --- | --- |
| 高 | Button | 3個（scaleMap, activeColorMap 22色, variantMap） | `Button.tsx:32-65` |
| 高 | Switch | 4個（scaleMap, nobScaleMap, checkedPositionMap, labelScaleMap） | `Switch.tsx:33-51` |
| 高 | Checkbox | 4個（gapScaleMap, checkBoxScaleMap, iconScaleMap, textScaleMap） | `Checkbox.tsx:26-44` |
| 高 | Radio | 3個（gapScaleMap, radioScaleMap, textScaleMap） | `Radio.tsx:26-39` |
| 高 | PillBox | 2個（colorMap 22色, scaleMap） | `PillBox.tsx:18-46` |
| 中 | Select | 2個（scaleMap, iconScaleMap） | `Select.tsx:11-19` |
| 中 | Input | 1個（scaleMap） | `Input.tsx:32-35` |
| 中 | TextArea | 1個（scaleMap） | `TextArea.tsx:31-34` |
| 中 | Label | 1個（scaleMaps） | `Label.tsx:22-25` |
| 中 | PhoneInput | 1個（scaleMap） | `PhoneInput.tsx:53-56` |
| 中 | Modal | 1個（widthMap） | `Modal.tsx:19-23` |

#### 修正方法

props に依存しない静的マップはモジュールスコープに移動する。

```tsx
// Before: コンポーネント内（毎レンダーで新規生成）
function Switch({ scale, ... }) {
  const scaleMap: Record<Scale, string> = {
    sm: "cs:w-6 cs:h-4 cs:p-0.5",
    md: "cs:w-10 cs:h-5 cs:p-1",
  };
  // ...
}

// After: モジュールスコープ（アプリケーション全体で1回だけ生成）
const scaleMap = {
  sm: "cs:w-6 cs:h-4 cs:p-0.5",
  md: "cs:w-10 cs:h-5 cs:p-1",
} as const;

function Switch({ scale, ... }) {
  // scaleMap[scale] を参照するだけ
}
```

> 既に `Constants/colorMap.ts` の3マップ（focusOutlineColorMap, checkedFocusOutlineColorMap,
> backgroundColorMap）はモジュールスコープで正しく定義されている。
> 同じパターンを全コンポーネントのローカルマップにも適用する。

#### props に依存するマップの場合

`variantMap` のように props の値を含むマップは `useMemo` を使用する。

```tsx
// Button の variantMap は finalUIColor に依存
const variantMap = useMemo<Record<Variant, string>>(() => ({
  primary: `cs:text-white ${backgroundColorMap[finalUIColor]} ${activeColorMap[finalUIColor]}`,
  secondary: `cs:dark:text-white cs:ring-gray-500/80 ...`,
}), [finalUIColor]);
```

---

### 3. イベントハンドラの再生成

#### PhoneInput（影響度: 高）

`src/components/PhoneInput/PhoneInput.tsx:58-139`

```tsx
// 問題: 複雑なフォーマット処理が毎レンダーで新しい関数として生成される
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // 約40行の電話番号フォーマットロジック
};
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  // 約40行のカーソル操作ロジック
};
```

修正:

```tsx
const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  // ...
}, [onChange]);

const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
  // ...
}, []);
```

#### Modal（影響度: 中）

`src/components/Modal/Modal.tsx:46-50`

```tsx
// handleKeyDown は useCallback 済み（良い）
// handleBackdropClick はインライン（改善の余地あり）
const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.target === e.currentTarget) {
    onClose?.();
  }
};
```

#### RadioGroup.Option（影響度: 低）

`src/components/RadioGroup/RadioGroup.tsx:54`

```tsx
// インラインアロー関数
onChange={() => ctx.onChange?.(value)}
```

---

### 4. React.memo の未使用

v0.3.1 時点では全14コンポーネントで `React.memo` が未使用だった（v0.3.1 で Label, PillBox, Radio, Modal.Header に適用済み）。
純粋な表示コンポーネントは `React.memo` でラップすることで、
props が変わらない場合の再レンダーを防げる。

#### 適用が効果的なコンポーネント

| コンポーネント | 理由 |
| --- | --- |
| **Label** | props のみに依存するシンプルな表示コンポーネント |
| **PillBox** | 静的な表示。リスト内で大量に使われる可能性が高い |
| **Button.Icon** | 親 Button の scale のみに依存 |
| **Modal.Header / Body / Footer** | 親 Modal の再レンダーに連鎖する |
| **Radio** | RadioGroup 内で複数回レンダーされる |

#### 適用例

```tsx
// Before
export function Label({ ... }) { ... }

// After
export const Label = memo(function Label({ ... }) { ... });
```

---

## 良い点（維持すべきパターン）

| 項目 | 詳細 |
| --- | --- |
| CSS変数ベースのカラーシステム | v1.0.0 で `colorToCSSVars()` に統一。旧カラーマップ (`Constants/colorMap.ts`) は削除済み |
| CSS コード分割 | `vite.config.ts` で `cssCodeSplit: true` |
| ツリーシェイキング | `package.json` の `sideEffects: false` |
| 外部依存の除外 | `external: ["react", "react-dom", "clsx"]` |
| ES モジュール出力 | モダンバンドラーで最適なツリーシェイキング |
| Modal の handleKeyDown | 唯一 `useCallback` が適用されているハンドラ |

---

## 修正の優先順位

| 優先度 | 対策 | 影響範囲 | 難易度 | 破壊的変更 |
| --- | --- | --- | --- | --- |
| 1 (最高) | Context value を `useMemo` で安定化 | 全消費コンポーネント | 低 | なし |
| 2 (高) | 静的マップをモジュールスコープに移動 | 全コンポーネント 10+ ファイル | 低 | なし |
| 3 (中) | PhoneInput ハンドラに `useCallback` | PhoneInput | 低 | なし |
| 4 (中) | 純粋表示コンポーネントに `React.memo` | Label, PillBox, Radio 等 | 低 | なし |
| 5 (低) | 重複 scaleMap の共通定数化 | 複数コンポーネント | 中 | なし |
| 6 (低) | Modal, RadioGroup のハンドラ最適化 | Modal, RadioGroup | 低 | なし |

すべての対策は破壊的変更なし・難易度低で、段階的に適用可能。

---

## 計測方法

### React DevTools Profiler

```bash
npm run dev
# ブラウザで React DevTools → Profiler タブ
# 「Record」を押してコンポーネントを操作 → 再レンダー回数を確認
```

### 修正前後の比較ポイント

- UIColorProvider 配下のコンポーネント再レンダー回数
- RadioGroup 内の Option 再レンダー回数
- リスト内に大量の PillBox を配置した場合のレンダー時間
- PhoneInput の入力時のレンダー時間
