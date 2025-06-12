import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

type ModalContext = {
  close?: () => void;
};

const ModalContext = createContext<ModalContext | undefined>(undefined);

type ModalProps = {
  width?: "sm" | "md" | "lg";
  children: ReactNode;
  onClose?: () => void;
};

export function Modal({ width = "md", children, onClose }: ModalProps) {
  const widthMap = {
    sm: "cs:sm:w-2xs",
    md: "cs:sm:w-md",
    lg: "cs:sm:w-2xl",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 次のフレームで visible を true にしてアニメーション開始
    const timeout = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timeout);
  }, []);

  return (
    <ModalContext.Provider value={{ close: onClose }}>
      <div
        className={`cs:transition-opacity cs:duration-200 cs:ease-in-out cs:fixed cs:inset-0 cs:bg-gray-500/80 cs:flex cs:justify-center cs:items-center cs:z-50 cs:text-base cs:sm:text-sm/5 ${
          isVisible ? "cs:opacity-100" : "cs:opacity-0"
        }`}
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

Modal.Header = function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <div className="cs:px-4 cs:py-2 cs:font-semibold cs:dark:text-gray-200">
      {children}
    </div>
  );
};

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
