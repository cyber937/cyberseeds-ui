import clsx from "clsx";
import { createContext, type ReactNode, useContext } from "react";
import type { Scale } from "../DesignSystemUtils";

interface CardProps {
  children: ReactNode;
  scale?: Scale;
  shadow?: boolean;
  bordered?: boolean;
  /** 背景色クラス（例: "cs:bg-blue-50"）。指定時はデフォルトの白背景を上書き */
  bgColor?: string;
  className?: string;
}

interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

interface CardStatProps {
  /** カードのラベル */
  label: string;
  /** 表示する数値 */
  value: number | string;
  /** サブテキスト（例: "退学 4 / 卒業 1"） */
  subText?: string;
  /** クリック時のコールバック */
  onClick?: () => void;
  /** ラベルのテキスト色クラス（例: "cs:text-blue-600"） */
  labelColor?: string;
  /** 数値のテキスト色クラス（例: "cs:text-blue-800"） */
  valueColor?: string;
  /** サブテキストのテキスト色クラス（例: "cs:text-blue-400"） */
  subTextColor?: string;
  /** 追加 className */
  className?: string;
}

type CardContextType = { scale: Scale };
const CardContext = createContext<CardContextType | null>(null);

function useCardContext(): CardContextType {
  return useContext(CardContext) ?? { scale: "md" };
}

const paddingMap: Record<Scale, string> = {
  xs: "cs:p-2",
  sm: "cs:p-3",
  md: "cs:p-4",
  lg: "cs:p-6",
};

const sectionPaddingMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1.5",
  sm: "cs:px-3 cs:py-2",
  md: "cs:px-4 cs:py-3",
  lg: "cs:px-6 cs:py-4",
};

export function Card({
  children,
  scale = "md",
  shadow = true,
  bordered = true,
  bgColor,
  className,
}: CardProps) {
  return (
    <CardContext.Provider value={{ scale }}>
      <div
        className={clsx(
          "cs:rounded-lg cs:font-sans cs:overflow-hidden",
          bgColor ?? "cs:bg-white cs:dark:bg-gray-800",
          bordered && "cs:border cs:border-gray-200 cs:dark:border-gray-700",
          shadow && "cs:shadow-sm",
          className,
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  );
}

function CardHeader({ children, className }: CardSectionProps) {
  const { scale } = useCardContext();
  return (
    <div
      className={clsx(
        "cs:border-b cs:border-gray-200 cs:dark:border-gray-700 cs:font-semibold cs:text-gray-900 cs:dark:text-gray-200",
        sectionPaddingMap[scale],
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardBody({ children, className }: CardSectionProps) {
  const { scale } = useCardContext();
  return (
    <div
      className={clsx(
        "cs:text-gray-700 cs:dark:text-gray-400",
        paddingMap[scale],
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardFooter({ children, className }: CardSectionProps) {
  const { scale } = useCardContext();
  return (
    <div
      className={clsx(
        "cs:border-t cs:border-gray-200 cs:dark:border-gray-700 cs:flex cs:justify-end cs:gap-2",
        sectionPaddingMap[scale],
        className,
      )}
    >
      {children}
    </div>
  );
}

function CardStat({ label, value, subText, onClick, labelColor, valueColor, subTextColor, className }: CardStatProps) {
  const { scale } = useCardContext();

  const labelSizeMap: Record<Scale, string> = {
    xs: "cs:text-xs",
    sm: "cs:text-xs",
    md: "cs:text-sm",
    lg: "cs:text-sm",
  };

  const valueSizeMap: Record<Scale, string> = {
    xs: "cs:text-lg",
    sm: "cs:text-xl",
    md: "cs:text-2xl",
    lg: "cs:text-3xl",
  };

  const subTextSizeMap: Record<Scale, string> = {
    xs: "cs:text-[10px]",
    sm: "cs:text-xs",
    md: "cs:text-xs",
    lg: "cs:text-sm",
  };

  const content = (
    <>
      <p className={clsx(labelSizeMap[scale], labelColor ?? "cs:text-gray-500 cs:dark:text-gray-400")}>
        {label}
      </p>
      <p className={clsx(valueSizeMap[scale], "cs:font-bold", valueColor ?? "cs:text-gray-900 cs:dark:text-gray-100")}>
        {value}
      </p>
      {subText && (
        <p className={clsx(subTextSizeMap[scale], "cs:mt-1", subTextColor ?? "cs:text-gray-400 cs:dark:text-gray-500")}>
          {subText}
        </p>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(
          paddingMap[scale],
          "cs:w-full cs:text-left cs:cursor-pointer",
          "cs:rounded-lg cs:transition-shadow",
          "cs:hover:ring-2 cs:hover:ring-offset-2 cs:hover:ring-indigo-500",
          "cs:focus:outline-none cs:focus:ring-2 cs:focus:ring-offset-2 cs:focus:ring-indigo-500",
          className,
        )}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={clsx(paddingMap[scale], className)}>
      {content}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Stat = CardStat;
