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
