import type { ReactNode } from "react";
import { createContext, memo, useCallback, useContext, useEffect, useId, useMemo, useState } from "react";

type ModalContextType = {
  close?: () => void;
  headerId: string;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

type ModalProps = {
  width?: "sm" | "md" | "lg";
  children: ReactNode;
  onClose?: () => void;
};

const widthMap = {
  sm: "cs:sm:w-2xs",
  md: "cs:sm:w-md",
  lg: "cs:sm:w-2xl",
} as const;

export function Modal({ width = "md", children, onClose }: ModalProps) {
  const headerId = useId();

  const [isVisible, setIsVisible] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    },
    [onClose]
  );

  useEffect(() => {
    // 次のフレームで visible を true にしてアニメーション開始
    const timeout = requestAnimationFrame(() => setIsVisible(true));
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      cancelAnimationFrame(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    },
    [onClose]
  );

  const contextValue = useMemo(() => ({ close: onClose, headerId }), [onClose, headerId]);

  return (
    <ModalContext.Provider value={contextValue}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={headerId}
        className={`cs:transition-opacity cs:duration-200 cs:ease-in-out cs:fixed cs:inset-0 cs:bg-gray-500/80 cs:flex cs:justify-center cs:items-center cs:z-50 cs:text-base cs:sm:text-sm/5 ${
          isVisible ? "cs:opacity-100" : "cs:opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        <div
          className={`cs:transition cs:duration-300 cs:ease-in-out cs:absolute cs:bg-white cs:dark:bg-gray-800 cs:shadow-xl cs:rounded-md cs:p-2 cs:flex cs:flex-col cs:max-h-[90vh] cs:transform ${
            isVisible
              ? "cs:opacity-100 cs:scale-100"
              : "cs:opacity-0 cs:scale-95"
          } ${widthMap[width]}`}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

Modal.Header = memo(function ModalHeader({ children }: { children: ReactNode }) {
  const context = useContext(ModalContext);
  return (
    <div id={context?.headerId} className="cs:px-4 cs:py-2 cs:font-semibold cs:dark:text-gray-200">
      {children}
    </div>
  );
});

Modal.Body = function ModalBody({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:pt-1 cs:pb-4 cs:flex-1 cs:overflow-auto cs:dark:text-gray-400">
      {children}
    </div>
  );
};

Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:pt-2 cs:flex cs:justify-end cs:space-x-2">
      {children}
    </div>
  );
};
