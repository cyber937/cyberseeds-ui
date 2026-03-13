# Changelog

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
