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
  /** Per-instance position override; falls back to the provider's `position`. */
  position?: ToastPosition;
}

interface ToastContextType {
  toasts: ToastState[];
  success: (message: ReactNode, duration?: number, position?: ToastPosition) => void;
  error: (message: ReactNode, duration?: number, position?: ToastPosition) => void;
  warning: (message: ReactNode, duration?: number, position?: ToastPosition) => void;
  info: (message: ReactNode, duration?: number, position?: ToastPosition) => void;
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
    (variant: ToastVariant, message: ReactNode, duration?: number, position?: ToastPosition) => {
      const id = `toast-${++toastCounter}`;
      const finalDuration = duration ?? (variant === "error" ? 0 : 5000);
      setToasts((prev) => [
        ...prev,
        { id, message, variant, duration: finalDuration, position },
      ]);
    },
    [],
  );

  const success = useCallback(
    (message: ReactNode, duration?: number, position?: ToastPosition) =>
      add("success", message, duration, position),
    [add],
  );
  const error = useCallback(
    (message: ReactNode, duration?: number, position?: ToastPosition) =>
      add("error", message, duration, position),
    [add],
  );
  const warning = useCallback(
    (message: ReactNode, duration?: number, position?: ToastPosition) =>
      add("warning", message, duration, position),
    [add],
  );
  const info = useCallback(
    (message: ReactNode, duration?: number, position?: ToastPosition) =>
      add("info", message, duration, position),
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

  // Group toasts by their effective position so per-instance overrides land
  // in their own fixed container.
  const toastsByPosition = toasts.reduce<Record<ToastPosition, ToastState[]>>(
    (acc, toast) => {
      const p = toast.position ?? position;
      (acc[p] ??= []).push(toast);
      return acc;
    },
    {} as Record<ToastPosition, ToastState[]>,
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {(Object.entries(toastsByPosition) as Array<[ToastPosition, ToastState[]]>).map(
        ([pos, list]) => (
          <div
            key={pos}
            className={`cs:fixed cs:z-50 cs:flex cs:flex-col cs:gap-2 ${positionClasses[pos]}`}
          >
            {list.map((toast) => (
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
        ),
      )}
    </ToastContext.Provider>
  );
}
