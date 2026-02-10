import clsx from "clsx";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Scale } from "../DesignSystemUtils";

export type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastProps {
  children: ReactNode;
  variant?: ToastVariant;
  scale?: Scale;
  duration?: number;
  onClose?: () => void;
  className?: string;
}

const variantStyles: Record<
  ToastVariant,
  { bg: string; border: string; text: string; iconColor: string }
> = {
  success: {
    bg: "cs:bg-green-50 cs:dark:bg-green-900/30",
    border: "cs:border-green-200 cs:dark:border-green-700",
    text: "cs:text-green-800 cs:dark:text-green-200",
    iconColor: "cs:text-green-500 cs:dark:text-green-400",
  },
  error: {
    bg: "cs:bg-red-50 cs:dark:bg-red-900/30",
    border: "cs:border-red-200 cs:dark:border-red-700",
    text: "cs:text-red-800 cs:dark:text-red-200",
    iconColor: "cs:text-red-500 cs:dark:text-red-400",
  },
  warning: {
    bg: "cs:bg-amber-50 cs:dark:bg-amber-900/30",
    border: "cs:border-amber-200 cs:dark:border-amber-700",
    text: "cs:text-amber-800 cs:dark:text-amber-200",
    iconColor: "cs:text-amber-500 cs:dark:text-amber-400",
  },
  info: {
    bg: "cs:bg-blue-50 cs:dark:bg-blue-900/30",
    border: "cs:border-blue-200 cs:dark:border-blue-700",
    text: "cs:text-blue-800 cs:dark:text-blue-200",
    iconColor: "cs:text-blue-500 cs:dark:text-blue-400",
  },
};

const scaleMap: Record<Scale, string> = {
  sm: "cs:text-xs cs:px-3 cs:py-2 cs:min-w-56",
  md: "cs:text-sm cs:px-4 cs:py-3 cs:min-w-72",
};

const iconScaleMap: Record<Scale, string> = {
  sm: "cs:h-4 cs:w-4",
  md: "cs:h-5 cs:w-5",
};

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const variantIcons: Record<
  ToastVariant,
  React.FC<{ className?: string }>
> = {
  success: SuccessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

export function Toast({
  children,
  variant = "info",
  scale = "md",
  duration = 5000,
  onClose,
  className,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const styles = variantStyles[variant];
  const Icon = variantIcons[variant];

  // Animate in
  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Auto-dismiss
  useEffect(() => {
    if (duration === 0) return;
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 200);
    }, duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration, onClose]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 200);
  }, [onClose]);

  const role = variant === "error" ? "alert" : "status";
  const ariaLive = variant === "error" ? "assertive" : "polite";

  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      className={clsx(
        "cs:flex cs:items-start cs:gap-3 cs:rounded-md cs:border cs:shadow-lg cs:font-sans cs:transition-all cs:duration-200 cs:ease-in-out",
        styles.bg,
        styles.border,
        styles.text,
        scaleMap[scale],
        isVisible
          ? "cs:opacity-100 cs:translate-y-0"
          : "cs:opacity-0 cs:-translate-y-2",
        className,
      )}
    >
      <Icon className={clsx("cs:shrink-0", iconScaleMap[scale], styles.iconColor)} />
      <div className="cs:flex-1">{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className={clsx(
            "cs:shrink-0 cs:rounded cs:p-0.5 cs:transition-opacity cs:hover:opacity-70 cs:focus:outline-2 cs:focus:outline-offset-1",
            styles.text,
          )}
        >
          <svg
            className={iconScaleMap[scale]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
}
