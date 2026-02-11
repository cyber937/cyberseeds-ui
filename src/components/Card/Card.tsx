import clsx from "clsx";
import { createContext, type ReactNode, useContext } from "react";
import type { Scale } from "../DesignSystemUtils";

interface CardProps {
  children: ReactNode;
  scale?: Scale;
  shadow?: boolean;
  bordered?: boolean;
  className?: string;
}

interface CardSectionProps {
  children: ReactNode;
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
  className,
}: CardProps) {
  return (
    <CardContext.Provider value={{ scale }}>
      <div
        className={clsx(
          "cs:bg-white cs:dark:bg-gray-800 cs:rounded-xl cs:font-sans cs:overflow-hidden",
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

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
