import type { ReactNode } from "react";
import { createContext } from "react";

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
    sm: "sm:w-2xs",
    md: "sm:w-md",
    lg: "sm:w-2xl",
  };

  return (
    <ModalContext.Provider value={{ close: onClose }}>
      <div className="fixed inset-0 bg-gray-500/80 flex justify-center items-center z-50 text-base sm:text-sm/5">
        <div
          className={`absolute bg-white shadow-xl rounded-md p-2 flex flex-col max-h-[90vh] ${widthMap[width]}`}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

Modal.Header = function ModalHeader({ children }: { children: ReactNode }) {
  return <div className="px-4 py-2 font-semibold">{children}</div>;
};

Modal.Body = function ModalBody({ children }: { children: ReactNode }) {
  return <div className="px-4 pt-1 pb-4 flex-1 overflow-auto">{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="px-4 pt-2 flex justify-end space-x-2">{children}</div>;
};
