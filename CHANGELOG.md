# Changelog

## Next

### Improvements

- **ButtonGroup: `orientation="horizontal" | "vertical"` prop** — `ButtonGroup` を縦方向にスタックして表示できるようにした。デフォルトは horizontal (既存挙動)。`vertical` を指定すると `flex-col` レイアウトに切り替わり、最初と最後のアイテムが上下に丸まり、キーボードナビゲーションが ArrowUp/ArrowDown に切り替わる (horizontal の時は ArrowLeft/Right のまま)。`aria-orientation` 属性も radiogroup の時のみ付与される (`role="group"` には allow されていないので multi-select 時は省略)。

  ```tsx
  // 縦並び (filter sidebar、segmented control 等)
  <ButtonGroup defaultValue="dashboard" orientation="vertical">
    <ButtonGroup.Item value="dashboard">Dashboard</ButtonGroup.Item>
    <ButtonGroup.Item value="items">Items</ButtonGroup.Item>
    <ButtonGroup.Item value="settings">Settings</ButtonGroup.Item>
  </ButtonGroup>
  ```

- **Modal: `width` prop が responsive object 形式を受け付けるように** — これまでは `width="sm" | "md" | "lg"` で固定幅を 1 つ指定する形だったが、`{ base?, sm?, md?, lg?, xl? }` の breakpoint オブジェクトも受け付けるように拡張。Tailwind の各 breakpoint で別々のサイズを指定でき、mobile では narrow、desktop では wide といったレスポンシブ Modal を 1 prop で組める。既存の文字列形式の挙動は完全に保持。

  ```tsx
  // 従来 (既存挙動、変更なし)
  <Modal width="md">…</Modal>

  // 新規: responsive object
  <Modal width={{ base: "sm", md: "md", lg: "lg" }}>
    {/* mobile では small、md+ で medium、lg+ で large */}
  </Modal>
  ```

  各 key (`base`/`sm`/`md`/`lg`/`xl`) は Tailwind 標準の breakpoint と対応 (`base` は prefix なし)。指定しなかった breakpoint はクラスに含まれないので、不要な CSS を吐かない。

- **Toast: per-instance position override** — `useToast()` の `success` / `error` / `warning` / `info` 4 メソッドに optional な 3rd 引数 `position?: ToastPosition` を追加。指定があれば、その toast 1 件だけ `ToastProvider` のデフォルト position を上書きして表示される。同じ position に振られた複数 toast は同じ fixed コンテナにスタックされ、別 position の toast は別コンテナにレンダリングされる。既存の 2-arg 呼び出し (`success(msg)`、`success(msg, 3000)`) は完全に後方互換。

  ```tsx
  // Provider default は top-right
  <ToastProvider position="top-right">…</ToastProvider>

  // 通常: top-right
  toast.success("Saved!");

  // この 1 件だけ bottom-center
  toast.error("Network error", 0, "bottom-center");
  ```

## Next

### New Components

- **`Avatar` コンポーネント** — ユーザープロフィール / KPI カード / activity feed 用のコンパクトな avatar。`src` 画像を読み込み、`onerror` で broken → 自動的に `name` の頭文字 (例: "Kiyoshi Nagahama" → "KN") にフォールバック、さらにカスタム `fallback` で絵文字やアイコンも置ける。`scale` (xs / sm / md / lg), `color`, `shape` ("circle" / "square") をサポート。

  ```tsx
  <Avatar src="https://i.pravatar.cc/150" alt="Sam" />
  <Avatar name="Kiyoshi Nagahama" color="blue" />
  <Avatar fallback="🦊" color="amber" />
  ```

  - 画像表示時は `<img>` の `alt` がそのまま使われ、wrapper の余分な `role="img"` は省略される (重複 a11y 名対策)
  - フォールバック時は wrapper に `role="img"` + `aria-label={alt ?? name ?? "Avatar"}` を付与
  - Tailwind の `cs:ring-2 cs:-space-x-2` などで avatar スタックを組める (Story 参照)

- **`Drawer` コンポーネント** — Modal の sliding panel 変種。`position` ("right" / "left" / "top" / "bottom") で 4 辺どこからでも slide-in でき、`size` ("sm" / "md" / "lg" / "xl") でパネル幅 / 高さを制御。Modal で書いた `useFocusTrap` / `useBodyScrollLock` / Escape-to-close をそのまま流用しているので、a11y 挙動 (focus trap + 初期 focus + restore) は同等。Compound API: `Drawer.Header` / `Drawer.Body` / `Drawer.Footer`。

  ```tsx
  <Drawer position="right" onClose={() => setOpen(false)}>
    <Drawer.Header>Filters</Drawer.Header>
    <Drawer.Body>
      <Switch onLabel="Below reorder min" offLabel="All" />
    </Drawer.Body>
    <Drawer.Footer>
      <Button onClick={() => setOpen(false)}>Apply</Button>
    </Drawer.Footer>
  </Drawer>
  ```

  - mobile 用の item detail view、admin の filter panel、設定パネルなどに向く
  - `prefers-reduced-motion: reduce` を尊重して slide / fade transition を抑制
  - backdrop click でも `onClose` を発火

- **`Breadcrumb` 複合コンポーネント** — 深い階層ナビゲーションで道筋を表示するためのシンプルな compound。`Breadcrumb` (root) + `Breadcrumb.Item` の 2 つだけで構成。`Breadcrumb.Item` に `href` を渡すと `<a>` でリンク、`current` を渡すと `<span aria-current="page">` で plain text に変わる (= 最後の項目)。`separator` prop でデフォルトの `"/"` を任意の文字列・SVG・ReactNode に差し替え可能。

  ```tsx
  <Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/items">Items</Breadcrumb.Item>
    <Breadcrumb.Item current>SKU-1234</Breadcrumb.Item>
  </Breadcrumb>

  // カスタム separator (SVG, chevron 等)
  <Breadcrumb separator="›">...</Breadcrumb>
  ```

  - root は `<nav aria-label="Breadcrumb">` + `<ol>` で WAI-ARIA / WCAG に準拠
  - 自動的に最終項目の後ろの separator を省略
  - dark mode 対応

- **`NavMenu` 複合コンポーネント** — サイドバー / 縦型ナビゲーションを `NavMenu` + `NavMenu.Section` + `NavMenu.Item` の 3 要素で構築する compound API。inventory-core の admin AppShell で手書きしていたパターンを正式に library 化した。

  ```tsx
  <NavMenu color="indigo">
    <NavMenu.Section title="Operations">
      <NavMenu.Item href="/" icon={<HomeIcon />}>Dashboard</NavMenu.Item>
      <NavMenu.Item href="/items" icon={<ItemsIcon />} active>Items</NavMenu.Item>
    </NavMenu.Section>
    <NavMenu.Section title="Admin">
      <NavMenu.Item href="/users" icon={<UsersIcon />} trailing={<Badge>3</Badge>}>
        Users
      </NavMenu.Item>
    </NavMenu.Section>
  </NavMenu>
  ```

  - `NavMenu.Item` は `href` 指定で `<a>`、未指定で `<button>` をレンダー (router の客先ハンドラに合わせて選べる)
  - `active` で `aria-current="page"` を付与し、UIColor の base color を 15% 透過したハイライト bg を適用
  - `icon` / `trailing` (badge / kbd など) スロット、`disabled` 状態 (a11y: `aria-disabled` + tabIndex=-1) もサポート
  - root は `<nav aria-label="Main navigation">` (ariaLabel prop で変更可) で WAI-ARIA landmark を提供

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

### Test Quality

- **`@testing-library/user-event` への段階移行を開始** — `Button` / `Switch` / `Input` / `Checkbox` の test で `fireEvent.click` / `fireEvent.change` を `user.click()` / `user.type()` に置き換えた。`userEvent` は実ブラウザ挙動に近い (pointerdown → mousedown → focus → mouseup → click のシーケンス, `:disabled` の pointer-events check, per-keystroke `change` event 等) ため、 `fireEvent` だと通過していた潜在バグを検知できるようになる。
- **`Button.test.tsx` に新規 2 件追加**: `userEvent` を使うことで初めて書ける検証 (disabled 時に click が物理的に届かないこと、Enter/Space キー activation がネイティブ button と同じく発火すること) を実装。
- **`CLAUDE.md` に testing convention セクションを追加** — 新規 test は `userEvent` 優先、 `fireEvent` は `transitionEnd` 等のシミュレートで止むを得ない時のみ、と運用ルールを明文化。

### Build

- **Subpath imports + マルチエントリービルド** — 28 個の component それぞれを `dist/<Name>.js` + `dist/<Name>.d.ts` として独立にバンドルし、`package.json#exports` から `cyberseeds-ui/<Name>` で直接 import できるようにした。共通依存（colorUtils / designTokens / hooks 等）は Rollup が `dist/chunks/` に自動 hoist する。

  ```tsx
  // 既存のバレル import — 引き続き完全に動作
  import { Button, Modal } from 'cyberseeds-ui';

  // 新規: per-component subpath
  import { Button } from 'cyberseeds-ui/Button';
  import { Modal } from 'cyberseeds-ui/Modal';
  ```

  両形式は同一実装を指すため自由に混在可能。subpath 経由のほうがバンドラの module graph が小さくなり、tree-shaking が効きにくい古いバンドラでも未使用 component を取り込まなくなる。

- **ファイル名変更**: メインエントリーが `dist/cyberseeds-ui.js` → `dist/index.js` に変更。`package.json#main` / `module` / `exports#.` も更新済み。consumer は `from 'cyberseeds-ui'` を使う限り影響なし。`dist/cyberseeds-ui.js` を直接参照していた特殊なツール（CDN URL など）は subpath import に切り替えるか `dist/index.js` を指す必要あり。

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
