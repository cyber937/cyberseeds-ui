# レスポンシブ対応ガイド

cyberseeds-ui v0.7.0 で導入されたレスポンシブ & モバイル対応の設計方針と API リファレンス。

## 設計方針

### ブレークポイント

Tailwind CSS v4 のデフォルトブレークポイントに準拠:

| ブレークポイント | 幅 | 用途 |
|---|---|---|
| `sm` | 640px | 小型タブレット |
| `md` | 768px | タブレット（モバイル/デスクトップの境界） |
| `lg` | 1024px | ラップトップ |
| `xl` | 1280px | デスクトップ |
| `2xl` | 1536px | ワイドスクリーン |

`md` (768px) を**モバイルとデスクトップの境界**として使用しています。`cs:max-md:*` クラスはモバイルデバイス (768px 未満) にのみ適用されます。

### タッチターゲットサイズ

WCAG 2.5.8 (Target Size) に準拠し、モバイルでのタッチターゲットを最小 **44×44px** に保証:

```
cs:max-md:min-h-11  /* 44px = 2.75rem */
```

適用コンポーネント: Button (xs/sm/md), Input, Select, PhoneInput, Checkbox, Radio, Switch, Tabs (TabsTrigger)

### iOS ズーム防止

iOS Safari はフォーカスした `<input>` の `font-size` が 16px 未満の場合に自動ズームします。モバイルでは `text-base` (16px) を強制:

```
cs:max-md:text-base  /* 16px on mobile */
```

適用コンポーネント: Input, TextArea, Select, PhoneInput (xs/sm/md スケール)

## レスポンシブフック

### `useMediaQuery(query: string): boolean`

SSR セーフな汎用 `matchMedia` ラッパー。全てのレスポンシブフックの基盤。

```tsx
import { useMediaQuery } from "cyberseeds-ui";

function MyComponent() {
  const isWide = useMediaQuery("(min-width: 1024px)");
  return <div>{isWide ? "デスクトップ表示" : "モバイル表示"}</div>;
}
```

- SSR 時は `false` を返す
- `MediaQueryList.addEventListener("change")` でリアクティブに更新
- `query` が変更されると自動的に再購読

### `useBreakpoint(): Breakpoint | null`

現在のビューポート幅に基づくブレークポイントを返します。

```tsx
import { useBreakpoint, type Breakpoint } from "cyberseeds-ui";

function MyComponent() {
  const bp = useBreakpoint(); // "sm" | "md" | "lg" | "xl" | "2xl" | null
  return <div>現在のブレークポイント: {bp ?? "xs 未満"}</div>;
}
```

- 640px 未満の場合は `null` を返す
- 最も大きくマッチするブレークポイントを返す（例: 1100px → `"lg"`）

`BREAKPOINTS` 定数もエクスポートされています:

```typescript
import { BREAKPOINTS } from "cyberseeds-ui";
// { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }
```

### `useIsMobile(): boolean`

`md` (768px) 未満で `true` を返す簡易フック。

```tsx
import { useIsMobile } from "cyberseeds-ui";

function MyComponent() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
```

### `useTouchDevice(): boolean`

タッチデバイス（ホバー非対応 & 粗いポインター）を検出します。

```tsx
import { useTouchDevice } from "cyberseeds-ui";

function MyComponent() {
  const isTouch = useTouchDevice();
  return isTouch ? <TapInstructions /> : <HoverInstructions />;
}
```

内部では `(hover: none) and (pointer: coarse)` メディアクエリを使用。

### `useBodyScrollLock(isLocked: boolean): void`

`body` 要素のスクロールをロック/解除します。Modal で内部的に使用されています。

```tsx
import { useBodyScrollLock } from "cyberseeds-ui";

function MyOverlay({ isOpen }: { isOpen: boolean }) {
  useBodyScrollLock(isOpen);
  return isOpen ? <div className="overlay">...</div> : null;
}
```

- `isLocked` が `true` の時に `document.body.style.overflow = "hidden"` を設定
- アンマウント時に元の `overflow` 値を復元
- SSR セーフ

## コンポーネント別の変更

### Modal

| 変更 | 説明 |
|---|---|
| スクロールロック | `useBodyScrollLock(true)` でモーダル表示中の背景スクロールを防止 |
| dvh 対応 | `max-h-[90vh]` → `max-h-[90dvh]` でモバイルブラウザのアドレスバーに対応 |
| フルスクリーン | `md` 未満で `w-full h-full rounded-none` に切替 |

### Tabs

| 変更 | 説明 |
|---|---|
| 水平スクロール | `overflow-x: auto` + `scrollbar-none` でタブが多い場合にスクロール可能 |
| タッチターゲット | TabsTrigger に `min-h-11` (44px) を適用 |

### Toast

| 変更 | 説明 |
|---|---|
| max-width ガード | `max-w-[calc(100vw-2rem)]` で狭い画面での溢れを防止 |

### Button

| 変更 | 説明 |
|---|---|
| タッチターゲット | xs/sm/md スケールに `min-h-11` (44px) を適用 |
| アクティブフィードバック | `active:scale-[0.97]` + `motion-reduce:active:scale-100` |

### Checkbox / Radio / Switch

| 変更 | 説明 |
|---|---|
| タッチターゲット | 外側コンテナに `min-h-11` (44px) を適用 |

### Tooltip

| 変更 | 説明 |
|---|---|
| タッチトグル | タッチデバイスではタップで表示/非表示を切替 |
| 外側タップ | ツールチップ外をタップすると閉じる |
| aria-expanded | タッチモード時に `aria-expanded` 属性を追加 |

### フォーム入力 (Input, TextArea, Select, PhoneInput)

| 変更 | 説明 |
|---|---|
| iOS ズーム防止 | xs/sm/md スケールに `max-md:text-base` (16px) を適用 |
| タッチターゲット | xs/sm/md スケールに `max-md:min-h-11` (44px) を適用 |

## デザイントークン

`src/components/Constants/designTokens.ts` に追加されたレスポンシブ定数:

```typescript
// タッチターゲット最小サイズ (WCAG 2.5.8)
export const TOUCH_TARGET_MIN = "cs:max-md:min-h-11" as const; // 44px

// iOS ズーム防止 (16px on mobile)
export const MOBILE_INPUT_FONT = "cs:max-md:text-base" as const;

// ビューポート溢れ防止
export const RESPONSIVE_MAX_WIDTH = "cs:max-w-[calc(100vw-2rem)]" as const;
```

## 後方互換性

全てのレスポンシブ変更は `cs:max-md:*` (768px 未満) でスコープされており、**デスクトップでの既存動作に影響はありません**。

| 変更 | 影響範囲 |
|---|---|
| 新規フック追加 | 完全互換（additive） |
| `cs:max-md:*` クラス追加 | デスクトップ動作に影響なし |
| Modal scroll lock | モーダル表示中の背景スクロール不可に変更 |
| Modal mobile fullscreen | モバイルのみの視覚変更 |
| Tabs overflow-x | タブ溢れ時のみ |
| Toast max-width | 狭い画面のみ |
| Tooltip touch toggle | タッチデバイスのみ |
| iOS zoom fix | モバイルのみ |

## テスト

### フックのテスト

`window.matchMedia` をモックしてテスト:

```typescript
import { mockMatchMedia } from "../test-utils";

test("useIsMobile returns true on mobile", () => {
  mockMatchMedia(true);
  const { result } = renderHook(() => useIsMobile());
  expect(result.current).toBe(true);
});
```

`mockMatchMedia(matches: boolean)` ヘルパーは `src/test-utils.ts` からエクスポートされています。

### Storybook ビューポート

`.storybook/preview.tsx` にモバイル・タブレット・デスクトップのプリセットが追加されています。ストーリーに `parameters.viewport.defaultViewport` を設定することでデフォルトビューポートを指定できます:

```typescript
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
  // ...
};
```
