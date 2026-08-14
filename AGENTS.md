# cyberseeds-ui — 使う側への手引き

このファイルはパッケージに同梱される（`node_modules/cyberseeds-ui/AGENTS.md`）。
**このライブラリを使うコードを書く／直すときに、最初に読むもの。**

パッケージ自体を開発するときは `CLAUDE.md` を見る（そちらは同梱されない）。

---

## 1. 調べ方の順序 — これを飛ばさない

**API の正本は `node_modules/cyberseeds-ui/dist/*.d.ts`。** ビルド生成物なので実装とズレない。
JSDoc もそのまま入っている。

```bash
# その部品に何があるかを知りたいとき
cat node_modules/cyberseeds-ui/dist/Button.d.ts
```

順序:

1. **`dist/<部品名>.d.ts` を読む。** props もサブコンポーネントもここにある
2. **委譲先を辿る**（§3 の表）。ファイル内に該当コードが無くても、内部で別の部品に
   委ねているだけのことがある
3. Storybook（`npm run storybook -w cyberseeds-ui`）で実際の使い方を見る

### やってはいけない推測

**呼び出し側の `className` 上書きを「機能が無い証拠」として扱わない。**
prop があるのに使われていないだけ、という場合が多い。

実例（いずれも「機能が無い」と誤判定された）:

| 誤り | 実際 |
|---|---|
| 「`Skeleton` にサイズ prop が無い」 | `width` `height` `variant` `lines` がある |
| 「`Button` はアイコン非対応」 | `Button.Icon` がある。今は `startIcon` / `endIcon` も |
| 「`Menu` は Escape で閉じない」 | `Popover` に委譲していて動く |

**`grep` で見つからないことを「無い」と結論しない。** 委譲・再エクスポート・
サブコンポーネントは grep をすり抜ける。

---

## 2. 横断的なルール

### 2-1. `color` は「明示 > コンテキスト > 既定」（v2.0.0 で変更）

```tsx
<UIColorProvider initialColor="sky">
  <Button>保存</Button>              {/* sky（コンテキスト） */}
  <Button color="error">削除</Button> {/* error（明示が勝つ） */}
</UIColorProvider>
```

**v1 系ではコンテキストが prop を握り潰していた。** そのため「削除ボタンを赤くしたい」を
API で表現できず、`className="bg-red-600"` と書くしかなかった。v2.0.0 以降その必要はない。

意味を持つ色は `SemanticColor`（`success` / `warning` / `error` / `info`）を使う。
ブランド色は `UIColorProvider` に任せて `color` を書かない。

⚠️ **コンテナ部品を作るときは `color` に既定値を置かない。** 既定値は下流へ
「明示指定」として届き、コンテキストを潰す（`RadioGroup` で実際に踏んだ）。

### 2-2. 重なり順は `Z_INDEX` を使う

```tsx
import { Z_INDEX } from "cyberseeds-ui";
<div className={`fixed inset-0 ${Z_INDEX.OVERLAY}`}>
```

| 段 | 値 | 用途 |
|---|---:|---|
| `STICKY` | 10 | 表の固定ヘッダーなど、流れの中の重なり |
| `DROPDOWN` | 30 | コントロールに紐づく候補一覧 |
| `OVERLAY` | 40 | 全画面の覆い（Modal / Drawer） |
| `POPOVER` | 50 | 覆いの上に乗る浮遊パネル |
| `TOAST` | 60 | 一時的な通知。モーダルより上 |
| `TOOLTIP` | 70 | 最上位 |

数字を直接書かない。**書くと必ず順序が崩れる**（v1 では Tooltip 40 < Modal 50 で、
モーダル内のツールチップが隠れていた）。

### 2-3. `className` で上書きする前に prop を探す

上書きしてよいのは**レイアウト**（`flex-1` `ml-auto` `shrink-0` `mb-4` など、
親の中での位置取り）だけ。

**上書きしてはいけないもの** — 見た目そのもの:

| 書きがちなもの | 正しい prop |
|---|---|
| `className="bg-red-600 text-white"` | `color="error"` |
| `className="whitespace-nowrap"`（表のセル） | `nowrap` |
| `className="w-40"`（表の列） | `width={160}` |
| `className="h-10 w-full rounded-md"`（Skeleton） | `height={40}` |
| `className="h-4 w-4"`（ボタン内のアイコン） | `startIcon` / `endIcon` |

**該当する prop が無いと思ったら、まず §1 の手順で確かめる。**
本当に無ければパッケージ側に追加する（アプリにローカル実装を作らない）。

---

## 3. 委譲関係 — 挙動が「見えない場所」にある部品

内部で他の部品に委ねているもの。**その部品のファイルを読んでも該当コードは無い。**

| 部品 | 委譲先 | 委譲している内容 |
|---|---|---|
| `Menu` | `Popover` | 開閉・Escape・外側クリック・配置・重なり順 |
| `DatePicker` | `Popover`, `Select` | 同上。年月の選択は `Select` |
| `Tabs` | `PillBox` | `count` の件数ピル |
| `Pagination` | `Button` | ページ番号のボタン |
| `RadioGroup` | `Radio` | 各選択肢 |
| `FormField` / `Input` / `TextArea` / `PhoneInput` / `GroupBox` | `Label` | ラベル描画 |
| `Button` / `Popover` / `Tabs` / `Breadcrumb` | `Slot` | `asChild` |

逆に、**変更の影響が広い部品**:

| 部品 | 影響先 |
|---|---|
| `Label` | FormField, GroupBox, Input, PhoneInput, TextArea |
| `Slot` | Breadcrumb, Button, Popover, Tabs |
| `Popover` | DatePicker, Menu |

---

## 4. アクセシビリティで型に守らせている箇所

- **`<Button iconOnly>` は `aria-label` が必須**（型エラーになる）。
  アイコンだけのボタンは読み上げ名が無いと「ボタン」としか読まれない
- `FormField` は `useId()` でラベルと入力を自動で結ぶ。
  **生の `<label>` を書かない** — `htmlFor` の付け忘れが起きる
- `Tabs.Trigger` の `aria-controls` は、`Tabs.Content` が実在するときだけ出る。
  タブをナビゲーションとして使い本文をページ側で描く場合、参照は付かない（正しい挙動）

---

## 5. 迷ったら

- prop があるか → `dist/<部品>.d.ts`
- 使い方 → Storybook
- 挙動が見当たらない → §3 の委譲表
- 機能が本当に無い → **パッケージに追加する**。アプリ側にローカル実装を作らない
