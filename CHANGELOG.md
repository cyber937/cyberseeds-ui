# Changelog

## Unreleased

### New Features

- **`onCheckedChange(checked: boolean)` on Switch / Checkbox / Radio** — 型付きの真偽値コールバックを 3 コンポーネントに追加。
  - Switch は内部的に `<button>` 要素なので、これまで `onChange` は型上の存在のみで実際には発火せず、消費側で `onClick={() => setX(!x)}` を書く必要があった。`onCheckedChange={setX}` で済むようになる。
  - Checkbox / Radio は `<input>` ベースなので native `onChange` は動くが、`onChange={(e) => fn(e.target.checked)}` のセレモニーが不要になる。
  - 既存の `onChange` / `onClick` は引き続き機能（後方互換）。両方指定された場合は `onCheckedChange` が先、続いて `onChange` / `onClick` の順で呼ばれる。

  ```tsx
  // 推奨
  <Switch checked={x} onCheckedChange={setX} />
  <Checkbox checked={x} onCheckedChange={setX} />
  <Radio checked={x} onCheckedChange={setX} />
  ```

- **`EmptyState` コンポーネント** — リストやテーブルが空のときに表示する placeholder。
  - 中央寄せの `icon` / `title` / `description` / `action` 4 スロット
  - `Alert` よりも控えめな視覚（点線ボーダー、色なし）で「長期的な空状態」を表現
  - 一時的なフィードバックは引き続き `Alert` を使う、永続的な「データなし」は `EmptyState` を使う、という棲み分け
  - `scale="xs" | "sm" | "md" | "lg"` でパディング / フォントサイズ調整
  - `role="status"` でスクリーンリーダーが空状態を告知

  ```tsx
  <EmptyState
    icon="📦"
    title="No items yet"
    description="Import an .xlsx workbook or create your first item to get started."
    action={<Button>Import</Button>}
  />
  ```

- **`Skeleton` コンポーネント** — ロード中のプレースホルダ。3 つの variant：`text`（行サイズに合わせた幅広バー）/ `circular`（アバター用の円形）/ `rectangular`（カード・画像の矩形）。`lines` プロップを渡すと複数行スタック（最終行のみ 60% 幅にしてパラグラフ末を表現）。`prefers-reduced-motion: reduce` を尊重してパルスアニメーションを抑制。`role="status" aria-busy aria-live="polite"` でアクセシビリティ対応。

  ```tsx
  <Skeleton width="60%" />
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="rectangular" width="100%" height={120} />
  <Skeleton lines={3} />
  ```

## 1.4.0 (2026-03-13)

### New Features

- **Tabs: `asChild` prop** — `Tabs.Trigger` に `asChild` prop を追加。`true` にすると子要素（`<a>` や Next.js `<Link>` など）に ARIA 属性・className・イベントハンドラをマージしてレンダリングする。これにより、ルートベースのタブナビゲーション（App Router の各タブが別URLのケース）で cyberseeds-ui の Tabs コンポーネントを使用可能になった。

  ```tsx
  <Tabs value={activeTab}>
    <Tabs.List>
      <Tabs.Trigger value="main" asChild>
        <Link href="/dashboard/student/123/edit/main">メインページ</Link>
      </Tabs.Trigger>
    </Tabs.List>
  </Tabs>
  ```

- **Slot ユーティリティ** — `asChild` パターンの内部実装として `Slot` コンポーネントを追加。親の props を単一の子要素にマージする（className 結合、style マージ、イベントハンドラ合成、ref 合成）。

### Improvements

- **TabsList キーボードナビゲーション** — `<button>` 以外の要素（`<a>` など）でもキーボードナビゲーション（ArrowLeft/Right, Home, End）が正しく動作するようにセレクタを `HTMLElement` ベースに拡張。

### Notes

- `asChild` 使用時は `aria-controls` が省略される（`Tabs.Content` なしでの使用を想定）。
- 既存の `<button>` ベースの Tabs 使用は一切変更なし（後方互換）。
