"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Toast } from "./Toast";

export type ToastVariant = "success" | "error" | "warning" | "info";

export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

export interface ToastState {
  id: string;
  message: ReactNode;
  variant: ToastVariant;
  duration: number;
}

interface ToastContextType {
  toasts: ToastState[];
  success: (message: ReactNode, duration?: number) => void;
  error: (message: ReactNode, duration?: number) => void;
  warning: (message: ReactNode, duration?: number) => void;
  info: (message: ReactNode, duration?: number) => void;
  remove: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast(): ToastContextType {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

let toastCounter = 0;

export function ToastProvider({
  children,
  position = "top-right",
}: {
  children: ReactNode;
  position?: ToastPosition;
}) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const add = useCallback(
    (variant: ToastVariant, message: ReactNode, duration?: number) => {
      const id = `toast-${++toastCounter}`;
      const finalDuration = duration ?? (variant === "error" ? 0 : 5000);
      setToasts((prev) => [
        ...prev,
        { id, message, variant, duration: finalDuration },
      ]);
    },
    [],
  );

  const success = useCallback(
    (message: ReactNode, duration?: number) => add("success", message, duration),
    [add],
  );
  const error = useCallback(
    (message: ReactNode, duration?: number) => add("error", message, duration),
    [add],
  );
  const warning = useCallback(
    (message: ReactNode, duration?: number) => add("warning", message, duration),
    [add],
  );
  const info = useCallback(
    (message: ReactNode, duration?: number) => add("info", message, duration),
    [add],
  );

  const contextValue = useMemo(
    () => ({ toasts, success, error, warning, info, remove }),
    [toasts, success, error, warning, info, remove],
  );

  const positionClasses: Record<ToastPosition, string> = {
    "top-right": "cs:top-4 cs:right-4",
    "top-left": "cs:top-4 cs:left-4",
    "bottom-right": "cs:bottom-4 cs:right-4",
    "bottom-left": "cs:bottom-4 cs:left-4",
    "top-center": "cs:top-4 cs:left-1/2 cs:-translate-x-1/2",
    "bottom-center": "cs:bottom-4 cs:left-1/2 cs:-translate-x-1/2",
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toasts.length > 0 && (
        <div
          className={`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${positionClasses[position]}`}
        >
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              duration={toast.duration}
              onClose={() => remove(toast.id)}
            >
              {toast.message}
            </Toast>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}
