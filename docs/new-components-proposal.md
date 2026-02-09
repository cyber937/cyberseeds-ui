# New Components Proposal

cyberseeds-ui に追加する新規コンポーネントの詳細設計提案。

既存コンポーネントの設計パターン（Compound Components, UIColorContext 統合,
Scale/Color props, useId, clsx, Tailwind `cs:` プレフィックス）に準拠する。

---

## 目次

1. [FormField](#1-formfield) — 高優先度
2. [Toast](#2-toast) — 高優先度
3. [Tooltip](#3-tooltip) — 中優先度
4. [Badge](#4-badge) — 中優先度
5. [Tabs](#5-tabs) — 低優先度
6. [Spinner / Progress](#6-spinner--progress) — 低優先度

---

## 1. FormField

### 概要

Label + 入力要素 + エラーメッセージ + ヘルプテキストを統合するラッパーコンポーネント。
`aria-describedby` による自動関連付けでアクセシビリティを保証する。

**優先度: 高** — 現在、Input や Select をフォーム内で使う際にバリデーションエラーの
表示やラベルの関連付けを毎回手動で行う必要があり、DX が低い。

### API 設計

```tsx
interface FormFieldProps {
  children: ReactNode;
  scale?: Scale;
  color?: Color;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
}

interface FormFieldLabelProps {
  children: ReactNode;
  className?: string;
}

interface FormFieldErrorProps {
  children: ReactNode;
  className?: string;
}

interface FormFieldHelpProps {
  children: ReactNode;
  className?: string;
}
```

### 使用例

```tsx
// 基本的な使い方
<FormField isRequired>
  <FormField.Label>メールアドレス</FormField.Label>
  <Input type="email" placeholder="user@example.com" />
  <FormField.Help>ログインに使用するメールアドレスを入力してください</FormField.Help>
</FormField>

// バリデーションエラー
<FormField isInvalid isRequired>
  <FormField.Label>パスワード</FormField.Label>
  <Input type="password" />
  <FormField.Error>8文字以上で入力してください</FormField.Error>
</FormField>

// Scale / Color の一括指定
<FormField scale="sm" color="indigo">
  <FormField.Label>ユーザー名</FormField.Label>
  <Input />
</FormField>

// Select との組み合わせ
<FormField>
  <FormField.Label>都道府県</FormField.Label>
  <Select>
    <SelectOption value="">選択してください</SelectOption>
    <SelectOption value="tokyo">東京</SelectOption>
  </Select>
</FormField>
```

### 内部実装方針

```tsx
// FormFieldContext で子要素に状態を伝播
interface FormFieldContextType {
  id: string;
  errorId: string;
  helpId: string;
  isInvalid: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  scale?: Scale;
  color?: Color;
  hasError: boolean;   // FormField.Error が存在するか
  hasHelp: boolean;    // FormField.Help が存在するか
}

export function FormField({
  children,
  scale,
  color = "blue",
  isInvalid = false,
  isRequired = false,
  isDisabled = false,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  // aria-describedby に渡す ID のリストを構築
  // FormField.Error/Help の有無に基づいて動的に生成

  return (
    <FormFieldContext.Provider value={{ ... }}>
      <div className="cs:flex cs:flex-col cs:gap-1">
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}
```

### 子コンポーネント

#### FormField.Label

```tsx
FormField.Label = function FormFieldLabel({ children, className }) {
  const ctx = useContext(FormFieldContext);
  return (
    <Label
      htmlFor={ctx.id}
      text={children}
      scale={ctx.scale}
      require={ctx.isRequired}
      className={className}
    />
  );
};
```

#### FormField.Error

```tsx
FormField.Error = function FormFieldError({ children, className }) {
  const ctx = useContext(FormFieldContext);
  if (!ctx.isInvalid) return null;

  return (
    <p
      id={ctx.errorId}
      role="alert"
      aria-live="polite"
      className={clsx(
        "cs:text-red-500 cs:dark:text-red-400 cs:font-sans",
        ctx.scale === "sm" ? "cs:text-xs" : "cs:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
```

#### FormField.Help

```tsx
FormField.Help = function FormFieldHelp({ children, className }) {
  const ctx = useContext(FormFieldContext);
  return (
    <p
      id={ctx.helpId}
      className={clsx(
        "cs:text-gray-500 cs:dark:text-gray-400 cs:font-sans",
        ctx.scale === "sm" ? "cs:text-xs" : "cs:text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
```

### 入力要素への自動属性注入

FormField 内の Input / Select / TextArea が自動的に以下の属性を受け取る仕組みが必要:

**アプローチ A: Children Cloning**

```tsx
// FormField 内で React.Children.map + cloneElement
React.Children.map(children, (child) => {
  if (isInputLike(child)) {
    return React.cloneElement(child, {
      id: ctx.id,
      'aria-invalid': ctx.isInvalid || undefined,
      'aria-describedby': buildDescribedBy(ctx),
      disabled: ctx.isDisabled || undefined,
      scale: ctx.scale,
      color: ctx.color,
    });
  }
  return child;
});
```

**アプローチ B: Context + Hook（推奨）**

```tsx
// 入力コンポーネント側で FormFieldContext を参照
function Input({ id: externalId, isInvalid: externalInvalid, ... }) {
  const formField = useFormField(); // FormFieldContext を参照（存在しなければ null）

  const id = externalId ?? formField?.id ?? generatedId;
  const isInvalid = externalInvalid ?? formField?.isInvalid ?? false;
  const describedBy = formField ? buildDescribedBy(formField) : undefined;
  // ...
}
```

**推奨: アプローチ B** — Children Cloning は型安全性が低く、ネストした構造に対応しにくい。
Context ベースなら子要素の深さに関係なく動作し、既存の UIColorContext パターンと一貫性がある。

### ARIA 出力例

```html
<div>
  <label for=":r1:" class="...">
    メールアドレス <span aria-hidden="true">*</span>
  </label>
  <input
    id=":r1:"
    type="email"
    aria-invalid="true"
    aria-describedby=":r1:-error :r1:-help"
    aria-required="true"
  />
  <p id=":r1:-error" role="alert" aria-live="polite" class="... text-red-500">
    有効なメールアドレスを入力してください
  </p>
  <p id=":r1:-help" class="... text-gray-500">
    ログインに使用するメールアドレスを入力してください
  </p>
</div>
```

### ファイル構成

```
src/components/
  FormField/
    FormField.tsx
    FormFieldContext.tsx
    FormField.stories.tsx
    FormField.test.tsx
```

---

## 2. Toast

### 概要

画面端に一時的に表示されるフィードバックメッセージ。
フォーム送信結果、操作の成功/失敗を通知する。

**優先度: 高** — ユーザーフィードバックの仕組みが現在ない。

### API 設計

```tsx
// Toast 単体の Props
interface ToastProps {
  children: ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  scale?: Scale;
  duration?: number;       // 自動消去までのミリ秒 (デフォルト: 5000, 0 で手動閉じのみ)
  onClose?: () => void;
  className?: string;
}

// Toast コンテナ（配置制御）
interface ToastContainerProps {
  children: ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

// 命令的 API 用の Hook
interface ToastOptions {
  message: ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  duration?: number;
}
```

### 使用例

#### 宣言的 API

```tsx
// 単体で使用
const [showToast, setShowToast] = useState(false);

{showToast && (
  <Toast variant="success" onClose={() => setShowToast(false)}>
    保存しました
  </Toast>
)}

// コンテナ内で複数表示
<ToastContainer position="top-right">
  <Toast variant="success">保存しました</Toast>
  <Toast variant="error">エラーが発生しました</Toast>
</ToastContainer>
```

#### 命令的 API (useToast Hook)

```tsx
function SaveButton() {
  const toast = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast.success("保存しました");
    } catch {
      toast.error("保存に失敗しました");
    }
  };

  return <Button onClick={handleSave}>保存</Button>;
}

// アプリのルートに Provider を配置
function App() {
  return (
    <ToastProvider position="top-right">
      <SaveButton />
    </ToastProvider>
  );
}
```

### 内部実装方針

```tsx
// variant → スタイルのマッピング
const variantStyles = {
  success: {
    bg: "cs:bg-green-50 cs:dark:bg-green-900/30",
    border: "cs:border-green-200 cs:dark:border-green-700",
    text: "cs:text-green-800 cs:dark:text-green-200",
    icon: CheckCircleIcon,
  },
  error: {
    bg: "cs:bg-red-50 cs:dark:bg-red-900/30",
    border: "cs:border-red-200 cs:dark:border-red-700",
    text: "cs:text-red-800 cs:dark:text-red-200",
    icon: XCircleIcon,
  },
  warning: {
    bg: "cs:bg-amber-50 cs:dark:bg-amber-900/30",
    border: "cs:border-amber-200 cs:dark:border-amber-700",
    text: "cs:text-amber-800 cs:dark:text-amber-200",
    icon: ExclamationTriangleIcon,
  },
  info: {
    bg: "cs:bg-blue-50 cs:dark:bg-blue-900/30",
    border: "cs:border-blue-200 cs:dark:border-blue-700",
    text: "cs:text-blue-800 cs:dark:text-blue-200",
    icon: InformationCircleIcon,
  },
} as const;
```

### アニメーション

```tsx
// スライドイン → 表示 → スライドアウト
// CSS transition で実装 (Modal と同じパターン)
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const frame = requestAnimationFrame(() => setIsVisible(true));
  return () => cancelAnimationFrame(frame);
}, []);

// 自動消去タイマー
useEffect(() => {
  if (duration === 0) return;
  const timer = setTimeout(() => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 200); // アニメーション完了後に削除
  }, duration);
  return () => clearTimeout(timer);
}, [duration, onClose]);
```

### アクセシビリティ

```html
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="..."
>
  <span class="sr-only">成功:</span>
  保存しました
  <button aria-label="閉じる" onClick={onClose}>×</button>
</div>
```

- `role="status"` + `aria-live="polite"` でスクリーンリーダーに通知
- `aria-atomic="true"` で内容全体を読み上げ
- error variant の場合は `role="alert"` (即座に通知)
- 閉じるボタンに `aria-label`

### ToastProvider の実装

```tsx
interface ToastState {
  id: string;
  message: ReactNode;
  variant: "success" | "error" | "warning" | "info";
  duration: number;
}

interface ToastContextType {
  toasts: ToastState[];
  success: (message: ReactNode, opts?: Partial<ToastOptions>) => void;
  error: (message: ReactNode, opts?: Partial<ToastOptions>) => void;
  warning: (message: ReactNode, opts?: Partial<ToastOptions>) => void;
  info: (message: ReactNode, opts?: Partial<ToastOptions>) => void;
  remove: (id: string) => void;
}

export function ToastProvider({ children, position = "top-right" }) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const add = useCallback((toast: Omit<ToastState, "id">) => {
    setToasts((prev) => [...prev, { ...toast, id: crypto.randomUUID() }]);
  }, []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const contextValue = useMemo(() => ({
    toasts,
    success: (msg, opts) => add({ message: msg, variant: "success", duration: 5000, ...opts }),
    error:   (msg, opts) => add({ message: msg, variant: "error",   duration: 0, ...opts }),
    warning: (msg, opts) => add({ message: msg, variant: "warning", duration: 5000, ...opts }),
    info:    (msg, opts) => add({ message: msg, variant: "info",    duration: 5000, ...opts }),
    remove,
  }), [toasts, add, remove]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer position={position}>
        {toasts.map((t) => (
          <Toast key={t.id} variant={t.variant} duration={t.duration} onClose={() => remove(t.id)}>
            {t.message}
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}
```

### ファイル構成

```
src/components/
  Toast/
    Toast.tsx
    ToastContainer.tsx
    ToastContext.tsx        # ToastProvider, useToast
    Toast.stories.tsx
    Toast.test.tsx
```

---

## 3. Tooltip

### 概要

ホバーまたはフォーカスで表示される補足情報のポップアップ。
アイコンボタンの説明やヘルプテキストに使用する。

**優先度: 中**

### API 設計

```tsx
interface TooltipProps {
  children: ReactNode;        // トリガー要素
  content: ReactNode;         // ツールチップの内容
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;             // 表示までの遅延 ms (デフォルト: 300)
  scale?: Scale;
  className?: string;
}
```

### 使用例

```tsx
// 基本
<Tooltip content="設定を保存します">
  <Button>保存</Button>
</Tooltip>

// アイコンボタンの説明
<Tooltip content="新規作成" position="bottom">
  <Button variant="secondary">
    <Button.Icon><PlusIcon /></Button.Icon>
  </Button>
</Tooltip>

// 複数行の内容
<Tooltip content={
  <>
    <strong>ショートカット</strong>
    <br />
    Ctrl + S で保存
  </>
}>
  <span>?</span>
</Tooltip>
```

### 内部実装方針

```tsx
export function Tooltip({
  children,
  content,
  position = "top",
  delay = 300,
  scale = "md",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    timeoutRef.current = window.setTimeout(() => setIsVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  }, []);

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="cs:relative cs:inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {/* トリガー要素に aria-describedby を付与 */}
      {React.cloneElement(children as React.ReactElement, {
        'aria-describedby': isVisible ? tooltipId : undefined,
      })}

      {/* ツールチップ本体 */}
      {isVisible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={clsx(
            "cs:absolute cs:z-50 cs:rounded-md cs:shadow-lg cs:px-3 cs:py-1.5",
            "cs:bg-gray-900 cs:text-white cs:dark:bg-gray-100 cs:dark:text-gray-900",
            "cs:font-sans cs:whitespace-nowrap",
            "cs:animate-in cs:fade-in cs:duration-150",
            positionMap[position],
            scaleMap[scale],
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
```

### 配置ロジック

```tsx
const positionMap = {
  top:    "cs:bottom-full cs:left-1/2 cs:-translate-x-1/2 cs:mb-2",
  bottom: "cs:top-full cs:left-1/2 cs:-translate-x-1/2 cs:mt-2",
  left:   "cs:right-full cs:top-1/2 cs:-translate-y-1/2 cs:mr-2",
  right:  "cs:left-full cs:top-1/2 cs:-translate-y-1/2 cs:ml-2",
} as const;
```

### アクセシビリティ

- `role="tooltip"` でツールチップを宣言
- `aria-describedby` でトリガー要素とツールチップを関連付け
- `onFocus` / `onBlur` でキーボードフォーカスにも対応
- `Escape` キーでツールチップを閉じる

```tsx
useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") hide();
  };
  if (isVisible) document.addEventListener("keydown", handleEsc);
  return () => document.removeEventListener("keydown", handleEsc);
}, [isVisible, hide]);
```

### ファイル構成

```
src/components/
  Tooltip/
    Tooltip.tsx
    Tooltip.stories.tsx
    Tooltip.test.tsx
```

---

## 4. Badge

### 概要

通知カウント、ステータス、カテゴリ表示用の小型インジケーター。
PillBox と似ているが、カウント表示・ドット表示・要素への付加に特化。

**優先度: 中**

### PillBox との違い

| 特性 | PillBox | Badge |
| --- | --- | --- |
| 主な用途 | タグ、ラベル | 通知カウント、ステータス |
| 配置 | インライン（フロー内） | 要素に付加（position: absolute） |
| 内容 | テキスト | 数字、ドット、短いテキスト |
| バリエーション | color, scale | color, variant (solid/outline/dot) |

### API 設計

```tsx
interface BadgeProps {
  children?: ReactNode;        // 数字やテキスト（省略時はドット表示）
  color?: Color;
  variant?: "solid" | "outline" | "dot";
  scale?: Scale;
  max?: number;                // カウント上限 (例: max={99} → "99+")
  className?: string;
}

// 要素に付加するラッパー
interface BadgeWrapperProps {
  children: ReactNode;         // ラップ対象の要素
  badge: ReactNode;            // Badge コンポーネント
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}
```

### 使用例

```tsx
// 基本的なカウントバッジ
<Badge color="red">5</Badge>

// 上限付きカウント
<Badge color="red" max={99}>150</Badge>
{/* 表示: "99+" */}

// ドットバッジ（未読インジケータ）
<Badge variant="dot" color="red" />

// アウトラインバッジ
<Badge variant="outline" color="blue">New</Badge>

// 要素に付加
<Badge.Wrapper badge={<Badge color="red">3</Badge>}>
  <Button variant="secondary">
    <Button.Icon><BellIcon /></Button.Icon>
    通知
  </Button>
</Badge.Wrapper>

// ドットバッジをアイコンに付加
<Badge.Wrapper badge={<Badge variant="dot" color="green" />} position="bottom-right">
  <span>ユーザーアイコン</span>
</Badge.Wrapper>
```

### 内部実装方針

```tsx
export function Badge({
  children,
  color = "red",
  variant = "solid",
  scale = "md",
  max,
  className,
}: BadgeProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  // カウント上限処理
  const displayContent = (() => {
    if (max && typeof children === "number" && children > max) {
      return `${max}+`;
    }
    return children;
  })();

  // ドットバリアントの場合は内容なし
  if (variant === "dot") {
    return (
      <span
        className={clsx(
          "cs:inline-block cs:rounded-full",
          dotScaleMap[scale],
          solidColorMap[finalColor],
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={clsx(
        "cs:inline-flex cs:items-center cs:justify-center cs:rounded-full cs:font-sans cs:font-medium",
        scaleMap[scale],
        variant === "solid" ? solidColorMap[finalColor] : outlineColorMap[finalColor],
        className
      )}
    >
      {displayContent}
    </span>
  );
}
```

### Badge.Wrapper

```tsx
Badge.Wrapper = function BadgeWrapper({
  children,
  badge,
  position = "top-right",
}: BadgeWrapperProps) {
  const positionMap = {
    "top-right":    "cs:-top-1 cs:-right-1",
    "top-left":     "cs:-top-1 cs:-left-1",
    "bottom-right": "cs:-bottom-1 cs:-right-1",
    "bottom-left":  "cs:-bottom-1 cs:-left-1",
  } as const;

  return (
    <div className="cs:relative cs:inline-flex">
      {children}
      <span className={clsx("cs:absolute", positionMap[position])}>
        {badge}
      </span>
    </div>
  );
};
```

### ファイル構成

```
src/components/
  Badge/
    Badge.tsx
    Badge.stories.tsx
    Badge.test.tsx
```

---

## 5. Tabs

### 概要

コンテンツをタブで切り替えるUIコンポーネント。
Accordion と補完関係にあり、水平方向のコンテンツ区分に使用する。

**優先度: 低**

### API 設計

```tsx
interface TabsProps {
  children: ReactNode;
  defaultValue?: string;       // 初期選択タブ
  value?: string;              // 制御コンポーネントとして使う場合
  onChange?: (value: string) => void;
  scale?: Scale;
  color?: Color;
}

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  value: string;               // タブの識別子
  disabled?: boolean;
  className?: string;
}

interface TabsContentProps {
  children: ReactNode;
  value: string;               // 対応するタブの識別子
  className?: string;
}
```

### 使用例

```tsx
// 基本
<Tabs defaultValue="profile">
  <Tabs.List>
    <Tabs.Trigger value="profile">プロフィール</Tabs.Trigger>
    <Tabs.Trigger value="settings">設定</Tabs.Trigger>
    <Tabs.Trigger value="billing">請求</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="profile">
    <p>プロフィール情報</p>
  </Tabs.Content>
  <Tabs.Content value="settings">
    <p>アカウント設定</p>
  </Tabs.Content>
  <Tabs.Content value="billing">
    <p>請求情報</p>
  </Tabs.Content>
</Tabs>

// 制御コンポーネント
const [tab, setTab] = useState("profile");
<Tabs value={tab} onChange={setTab} color="indigo">
  ...
</Tabs>

// disabled タブ
<Tabs.Trigger value="billing" disabled>請求（準備中）</Tabs.Trigger>
```

### 内部実装方針

```tsx
interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
  scale: Scale;
  color: Color;
  baseId: string;
}

export function Tabs({
  children,
  defaultValue,
  value: controlledValue,
  onChange,
  scale = "md",
  color = "blue",
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const activeTab = controlledValue ?? internalValue;
  const baseId = useId();
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  const setActiveTab = useCallback((val: string) => {
    if (!controlledValue) setInternalValue(val);
    onChange?.(val);
  }, [controlledValue, onChange]);

  const contextValue = useMemo(
    () => ({ activeTab, setActiveTab, scale, color: finalColor, baseId }),
    [activeTab, setActiveTab, scale, finalColor, baseId]
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}
```

### キーボードナビゲーション（WAI-ARIA Tabs パターン）

```tsx
Tabs.List = function TabsList({ children, className }) {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const tabs = Array.from(
      e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
    );
    const currentIndex = tabs.indexOf(e.target as HTMLButtonElement);

    let nextIndex: number | null = null;
    switch (e.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
    }
    if (nextIndex !== null) {
      e.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    }
  }, []);

  return (
    <div
      role="tablist"
      className={clsx("cs:flex cs:border-b cs:border-gray-200 cs:dark:border-gray-600", className)}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};
```

### ARIA 出力例

```html
<div>
  <div role="tablist">
    <button role="tab" id=":r1:-tab-profile" aria-selected="true"
            aria-controls=":r1:-panel-profile" tabindex="0">
      プロフィール
    </button>
    <button role="tab" id=":r1:-tab-settings" aria-selected="false"
            aria-controls=":r1:-panel-settings" tabindex="-1">
      設定
    </button>
  </div>
  <div role="tabpanel" id=":r1:-panel-profile"
       aria-labelledby=":r1:-tab-profile" tabindex="0">
    プロフィール情報
  </div>
</div>
```

### ファイル構成

```
src/components/
  Tabs/
    Tabs.tsx
    TabsContext.tsx
    Tabs.stories.tsx
    Tabs.test.tsx
```

---

## 6. Spinner / Progress

### 概要

非同期処理のローディング状態を示すコンポーネント。

**優先度: 低**

### API 設計

#### Spinner

```tsx
interface SpinnerProps {
  scale?: Scale;
  color?: Color;
  label?: string;       // スクリーンリーダー用ラベル (デフォルト: "読み込み中")
  className?: string;
}
```

#### Progress

```tsx
interface ProgressProps {
  value: number;          // 0-100
  max?: number;           // デフォルト: 100
  scale?: Scale;
  color?: Color;
  label?: string;         // スクリーンリーダー用ラベル
  showValue?: boolean;    // パーセント表示 (デフォルト: false)
  className?: string;
}
```

### 使用例

```tsx
// Spinner
<Spinner />
<Spinner scale="sm" color="indigo" />
<Spinner label="データを取得中" />

// Progress
<Progress value={65} />
<Progress value={65} showValue />        {/* "65%" を表示 */}
<Progress value={3} max={10} showValue /> {/* "30%" を表示 */}

// ボタン内のローディング
<Button disabled>
  <Spinner scale="sm" color="white" />
  保存中...
</Button>
```

### Spinner 実装

```tsx
export function Spinner({
  scale = "md",
  color = "blue",
  label = "読み込み中",
  className,
}: SpinnerProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  return (
    <svg
      className={clsx(
        "cs:animate-spin",
        sizeMap[scale],
        colorMap[finalColor],
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label={label}
    >
      <circle
        className="cs:opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="cs:opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
```

### Progress 実装

```tsx
export function Progress({
  value,
  max = 100,
  scale = "md",
  color = "blue",
  label,
  showValue = false,
  className,
}: ProgressProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;
  const percentage = Math.round(Math.min(100, Math.max(0, (value / max) * 100)));

  return (
    <div className={clsx("cs:w-full", className)}>
      {(label || showValue) && (
        <div className={clsx("cs:flex cs:justify-between cs:mb-1 cs:font-sans", textScaleMap[scale])}>
          {label && <span className="cs:text-gray-700 cs:dark:text-gray-300">{label}</span>}
          {showValue && <span className="cs:text-gray-500 cs:dark:text-gray-400">{percentage}%</span>}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? `${percentage}%`}
        className={clsx(
          "cs:w-full cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700 cs:overflow-hidden",
          heightMap[scale]
        )}
      >
        <div
          className={clsx(
            "cs:h-full cs:rounded-full cs:transition-all cs:duration-300 cs:ease-in-out",
            barColorMap[finalColor]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
```

### アクセシビリティ

- Spinner: `role="status"` + `aria-label` でスクリーンリーダーに通知
- Progress: `role="progressbar"` + `aria-valuenow` / `aria-valuemin` / `aria-valuemax`

### ファイル構成

```
src/components/
  Spinner/
    Spinner.tsx
    Spinner.stories.tsx
    Spinner.test.tsx
  Progress/
    Progress.tsx
    Progress.stories.tsx
    Progress.test.tsx
```

---

## 実装優先順位のまとめ

| 優先度 | コンポーネント | 理由 | 依存関係 |
| --- | --- | --- | --- |
| 1 | **FormField** | 既存 Input/Select の DX を大幅に改善。a11y 向上。 | Input, Label に `useFormField` hook 追加 |
| 2 | **Toast** | ユーザーフィードバックが現在不可能 | 新規 Context (ToastProvider) |
| 3 | **Tooltip** | アイコンボタン等の補足情報に必須 | 依存なし |
| 4 | **Badge** | PillBox と補完。通知UI に必要 | 依存なし |
| 5 | **Tabs** | コンテンツ区分。Accordion の水平版 | 依存なし |
| 6 | **Spinner / Progress** | ローディング表示 | 依存なし |

### 既存コンポーネントへの影響

| 新規 | 影響を受ける既存コンポーネント | 変更内容 |
| --- | --- | --- |
| FormField | Input, Select, TextArea, PhoneInput | `useFormField()` hook でコンテキストを参照するロジック追加 |
| Toast | なし | 新規 Provider をアプリルートに配置 |
| その他 | なし | 独立して追加可能 |

### エクスポート追加

```tsx
// src/components/index.tsx に追加
export { FormField } from "./FormField/FormField";
export { Toast, ToastContainer, ToastProvider, useToast } from "./Toast/Toast";
export { Tooltip } from "./Tooltip/Tooltip";
export { Badge } from "./Badge/Badge";
export { Tabs } from "./Tabs/Tabs";
export { Spinner } from "./Spinner/Spinner";
export { Progress } from "./Progress/Progress";
```
