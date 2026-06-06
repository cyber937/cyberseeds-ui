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

- **`Pagination` コンポーネント** — `offset` / `limit` / `total` / `onChange` 4 つの controlled props で動作する Prev/Next 型ページネーション。"X-Y of Z" のカウントを内蔵（`showSummary={false}` で非表示可）。境界では Prev/Next ボタンを自動 disable、Prev は 0 にクランプ。`previousLabel` / `nextLabel` で多言語対応。`role="navigation" aria-label="Pagination"` で SR 対応。

  ```tsx
  <Pagination
    offset={offset}
    limit={50}
    total={total}
    onChange={(next) => setOffset(next)}
  />
  ```

- **`Table` 複合コンポーネント** — `Table` / `Table.Head` / `Table.Body` / `Table.Row` / `Table.HeaderCell` / `Table.Cell` の compound 構造で in-memory 一覧を表示。`scale` は React context で全セルに伝播するので prop drilling 不要。`striped` で偶数行ストライプ、`bordered` (default true) で外側丸枠、`interactive` を Row につけると hover / cursor、`numeric` を Cell につけると `tabular-nums`、`align` で text-align。TanStack Table の headless モードと組み合わせて使えるよう、各 compound は標準 HTML 属性を素通しする。

  ```tsx
  <Table scale="md" striped>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>SKU</Table.HeaderCell>
        <Table.HeaderCell align="right">On hand</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {rows.map(r => (
        <Table.Row key={r.sku} interactive onClick={() => open(r)}>
          <Table.Cell>{r.sku}</Table.Cell>
          <Table.Cell align="right" numeric>{r.onHand}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
  ```

- **`Combobox` コンポーネント** — 検索可能な単一選択ドロップダウン。WAI-ARIA 1.2 combobox パターンに準拠し、ArrowUp/Down/Home/End/Enter/Escape/Tab のキーボードナビゲーションをサポート。`options: ComboboxOption[]` で選択肢を受け取り、case-insensitive substring filter がデフォルトで動作（`filter` プロップで上書き可）。`clearable` (default true)、`disabled` オプション、`isInvalid`、`name`（hidden input でフォーム連携）を含む。

  ```tsx
  <Combobox
    options={[
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
    ]}
    value={selectedId}
    onChange={setSelectedId}
    placeholder="Pick a fruit"
  />
  ```

  **v1 のスコープ外**（将来 PR で追加検討）: 複数選択、非同期/サーバ駆動オプション、フリーテキスト入力、option グルーピング、仮想化、Floating UI による表示位置フリップ。

### Improvements

- **API consistency: Switch / Checkbox / Radio に `className` + `ref` を追加** — 3 つの form control に
  - `className?: string`: 外側ラッパーに適用（インナーの button / input には漏らさない）
  - `ref?: Ref<...>`: インナーの button / input にフォワード
  既存 props は影響なし。React 19 の ref-as-prop 形式で実装。

  ```tsx
  const ref = useRef<HTMLInputElement>(null);
  <Checkbox ref={ref} className="self-end" />
  ```

### Accessibility

- **Switch: WCAG AA contrast on light backgrounds** — `Switch` の thumb（白丸）が `amber` / `yellow` / `lime` の -600 トラック上に乗ると UI コンポーネントの contrast 比 3:1 を下回るため、これらのカラーが選択され、かつ `checked` の時のみ thumb の background を `gray-900` に切り替えるようにした。`Button` / `Badge` / `Checkbox` / `Radio` で確立済みの `LIGHT_BG_COLORS` パターンを踏襲。`unchecked` 時はトラックがグレーなので白 thumb のまま。
- **PillBox: 既存設計が AA 達成済みを検証** — `PillBox` は pastel `-50` background + `--cs-ui-lightText`（カラーシステムが各色の `-700` shade を算出）でテキストを描画しており、全パレットで WCAG AA を満たしているため、`LIGHT_BG_COLORS` のオーバーライドは不要。これを `color-contrast.test.tsx` に検証ケースとして固定。

### Performance

- **UIColorProvider: メモ化を徹底** — `effectiveColor` の semantic→preset 解決、`cssVars` の `colorToCSSVars()` / `customColorToCSSVars()` 呼び出し、ラッパー `<div>` に渡す `style` オブジェクト（`{ display: "contents", ...cssVars }`）の 3 つを `useMemo` でくくった。Provider が再レンダリングしても `color` / `darkColor` / dark mode が変わっていない場合は同一参照を返すため、配下の `React.memo` を被せた context consumer が無駄に再レンダリングされなくなる。

### Tests

- `src/components/__tests__/color-contrast.test.ts` → `.tsx` にリネーム（コンポーネントを実際に render して検証するため）。`Switch` の thumb 色切替（light/dark カラー両方） と `PillBox` の `cs-pill` 配線を検証する 11 件の test を追加。
- `UIColorContext.test.tsx` を追加。3 件の test で (1) 親プロップが変わっても color が同じならラッパーの inline style が安定参照を保つこと、(2) `React.memo` した consumer が provider 配下で無関係な再レンダリング時にスキップされること、(3) color が実際に変わった時はちゃんと consumer が再レンダリングされること を検証。
- `Modal.test.tsx` に 5 件追加: 初期 focus、Tab 巻き戻し、Shift+Tab 巻き戻し、focus 復帰、focusable がない時のコンテナへの fallback。

### Modal Accessibility

- **Modal: focus trap + 初期 / 復帰 focus** — `Modal` が open している間、`Tab` / `Shift+Tab` がモーダル内の focusable element だけを巡回するようにした (WAI-ARIA Dialog (Modal) Pattern の必須要件)。マウント時は最初の focusable element に初期 focus を移し、focusable 要素が一切ない場合は `dialog` コンテナ自身に `tabindex="-1"` を付けて focus を当てる。アンマウント時は open 直前に focus されていた要素に focus を復帰する。

### New Hooks

- **`useFocusTrap(containerRef, active, options)`** — 上記の focus 管理ロジックを再利用可能なフックとして `src/hooks/useFocusTrap.ts` に切り出し。今後追加予定の Drawer / Popover などからも流用可能。`initialFocus` / `restoreFocus` を個別に opt-out 可能。

### Type Exports

- **公開型の export 漏れを補完** — consumer から参照したいのに `import type` できなかった以下 7 つの型を `index.tsx` から re-export した:
  - `BadgeVariant`（Badge.tsx で宣言だけされて非 export だった）
  - `ButtonGroupContextType` / `ButtonTabsContextType`
  - `FormFieldContextType`
  - `TabsContextType`
  - `ToastState`
  - `UIColorContextType`
- **将来の漏れを防ぐ retest** — `src/components/__tests__/public-types.test.ts` を追加。23 個の公開型を `import type` してコンパイル時にアサインメント可能性を検証する。新しい型を public surface に追加した時はここに追記する運用に。

### API

- **Accordion: 複合 (compound) API へ統一** — `Accordion.Item` を追加。他のコンパウンドコンポーネント (`Tabs.List` / `Tabs.Trigger`、`Modal.Header` / `Modal.Body` / `Modal.Footer`) と書き味を揃えた。`AccordionItem` の named export はそのまま維持しているので既存コードは無変更で動作する (両方を混在させても可)。

  ```tsx
  // ✓ 推奨
  <Accordion>
    <Accordion.Item title="Section 1">...</Accordion.Item>
  </Accordion>

  // ✓ 後方互換 (既存コードは無変更で動く)
  import { Accordion, AccordionItem } from "cyberseeds-ui";
  <Accordion>
    <AccordionItem title="Section 1">...</AccordionItem>
  </Accordion>
  ```

### Accessibility / FormField integration

- **`FormField.isRequired` を form control に伝播** — `<FormField isRequired>` で囲んだ `Input` / `Select` / `TextArea` / `PhoneInput` の underlying form element に native `required` 属性が反映されるようにした。今までは `FormField.isRequired` は `FormField.Label` のアスタリスク表示にしか使われておらず、form control 側は無視していたため、ブラウザのネイティブ form validation が走らず、AT も「required」と読み上げないバグ的状態だった。
- 個別の form control に明示的に `required` prop を渡した場合はそれが優先される（OR-merge）。`FormField` が無い場合の従来挙動は完全に保持。

### FormField Tests

- `FormField.isRequired.test.tsx` を追加。4 つの form control 全部で `FormField.isRequired` → `required` が伝播することと、 OR-merge / 非 FormField ケースの 7 件を検証。

### Documentation / Stories

- **フォーム系コンポーネントの状態 variant stories を完全化** — Storybook で実装の visual coverage が薄かった以下を追加。これらの variant は自動 a11y sweep（`accessibility.test.tsx` の jest-axe）にも自動的に組み込まれる。
  - `Switch`: `Color` (20 色一覧)、`Disabled` (off / on)、`States` (4 状態並列)
  - `Checkbox`: `Checked`、`Indeterminate` (DOM 経由で `input.indeterminate` を設定)、`Disabled`、`States`
  - `Select`: `Disabled`、`States` (Default / Invalid / Disabled / Pre-selected を並列)
- **Radio に story ファイルを新規作成** — 今まで `Radio.stories.tsx` が無く、Radio は `RadioGroup` 経由でしか視覚確認できなかった。`Default` / `Checked` / `Disabled` / `Scales` / `Color` (20 色)/ `States` の 6 stories を追加。

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
