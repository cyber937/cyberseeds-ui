import clsx from "clsx";
import type { ReactNode } from "react";
import { isPresetColor } from "../Constants/colorUtils";
import { FOCUS_RING } from "../Constants/designTokens";
import { resolveSemanticColor } from "../Constants/semanticColor";
import type { PresetColor, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

export type AlertVariant = "info" | "success" | "warning" | "error";

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  scale?: Scale;
  title?: string;
  closable?: boolean;
  onClose?: () => void;
  icon?: boolean;
  className?: string;
}

type AlertStyleSet = { bg: string; border: string; text: string; iconColor: string };

const presetAlertStyles: Record<PresetColor, AlertStyleSet> = {
  red: { bg: "cs:bg-red-50 cs:dark:bg-red-900/30", border: "cs:border-red-200 cs:dark:border-red-700", text: "cs:text-red-800 cs:dark:text-red-300", iconColor: "cs:text-red-500 cs:dark:text-red-400" },
  orange: { bg: "cs:bg-orange-50 cs:dark:bg-orange-900/30", border: "cs:border-orange-200 cs:dark:border-orange-700", text: "cs:text-orange-800 cs:dark:text-orange-300", iconColor: "cs:text-orange-500 cs:dark:text-orange-400" },
  amber: { bg: "cs:bg-amber-50 cs:dark:bg-amber-900/30", border: "cs:border-amber-200 cs:dark:border-amber-700", text: "cs:text-amber-800 cs:dark:text-amber-300", iconColor: "cs:text-amber-500 cs:dark:text-amber-400" },
  yellow: { bg: "cs:bg-yellow-50 cs:dark:bg-yellow-900/30", border: "cs:border-yellow-200 cs:dark:border-yellow-700", text: "cs:text-yellow-800 cs:dark:text-yellow-300", iconColor: "cs:text-yellow-500 cs:dark:text-yellow-400" },
  lime: { bg: "cs:bg-lime-50 cs:dark:bg-lime-900/30", border: "cs:border-lime-200 cs:dark:border-lime-700", text: "cs:text-lime-800 cs:dark:text-lime-300", iconColor: "cs:text-lime-500 cs:dark:text-lime-400" },
  green: { bg: "cs:bg-green-50 cs:dark:bg-green-900/30", border: "cs:border-green-200 cs:dark:border-green-700", text: "cs:text-green-800 cs:dark:text-green-300", iconColor: "cs:text-green-500 cs:dark:text-green-400" },
  emerald: { bg: "cs:bg-emerald-50 cs:dark:bg-emerald-900/30", border: "cs:border-emerald-200 cs:dark:border-emerald-700", text: "cs:text-emerald-800 cs:dark:text-emerald-300", iconColor: "cs:text-emerald-500 cs:dark:text-emerald-400" },
  teal: { bg: "cs:bg-teal-50 cs:dark:bg-teal-900/30", border: "cs:border-teal-200 cs:dark:border-teal-700", text: "cs:text-teal-800 cs:dark:text-teal-300", iconColor: "cs:text-teal-500 cs:dark:text-teal-400" },
  cyan: { bg: "cs:bg-cyan-50 cs:dark:bg-cyan-900/30", border: "cs:border-cyan-200 cs:dark:border-cyan-700", text: "cs:text-cyan-800 cs:dark:text-cyan-300", iconColor: "cs:text-cyan-500 cs:dark:text-cyan-400" },
  sky: { bg: "cs:bg-sky-50 cs:dark:bg-sky-900/30", border: "cs:border-sky-200 cs:dark:border-sky-700", text: "cs:text-sky-800 cs:dark:text-sky-300", iconColor: "cs:text-sky-500 cs:dark:text-sky-400" },
  blue: { bg: "cs:bg-blue-50 cs:dark:bg-blue-900/30", border: "cs:border-blue-200 cs:dark:border-blue-700", text: "cs:text-blue-800 cs:dark:text-blue-300", iconColor: "cs:text-blue-500 cs:dark:text-blue-400" },
  indigo: { bg: "cs:bg-indigo-50 cs:dark:bg-indigo-900/30", border: "cs:border-indigo-200 cs:dark:border-indigo-700", text: "cs:text-indigo-800 cs:dark:text-indigo-300", iconColor: "cs:text-indigo-500 cs:dark:text-indigo-400" },
  violet: { bg: "cs:bg-violet-50 cs:dark:bg-violet-900/30", border: "cs:border-violet-200 cs:dark:border-violet-700", text: "cs:text-violet-800 cs:dark:text-violet-300", iconColor: "cs:text-violet-500 cs:dark:text-violet-400" },
  purple: { bg: "cs:bg-purple-50 cs:dark:bg-purple-900/30", border: "cs:border-purple-200 cs:dark:border-purple-700", text: "cs:text-purple-800 cs:dark:text-purple-300", iconColor: "cs:text-purple-500 cs:dark:text-purple-400" },
  fuchsia: { bg: "cs:bg-fuchsia-50 cs:dark:bg-fuchsia-900/30", border: "cs:border-fuchsia-200 cs:dark:border-fuchsia-700", text: "cs:text-fuchsia-800 cs:dark:text-fuchsia-300", iconColor: "cs:text-fuchsia-500 cs:dark:text-fuchsia-400" },
  pink: { bg: "cs:bg-pink-50 cs:dark:bg-pink-900/30", border: "cs:border-pink-200 cs:dark:border-pink-700", text: "cs:text-pink-800 cs:dark:text-pink-300", iconColor: "cs:text-pink-500 cs:dark:text-pink-400" },
  rose: { bg: "cs:bg-rose-50 cs:dark:bg-rose-900/30", border: "cs:border-rose-200 cs:dark:border-rose-700", text: "cs:text-rose-800 cs:dark:text-rose-300", iconColor: "cs:text-rose-500 cs:dark:text-rose-400" },
  slate: { bg: "cs:bg-slate-50 cs:dark:bg-slate-900/30", border: "cs:border-slate-200 cs:dark:border-slate-700", text: "cs:text-slate-800 cs:dark:text-slate-300", iconColor: "cs:text-slate-500 cs:dark:text-slate-400" },
  gray: { bg: "cs:bg-gray-50 cs:dark:bg-gray-900/30", border: "cs:border-gray-200 cs:dark:border-gray-700", text: "cs:text-gray-800 cs:dark:text-gray-300", iconColor: "cs:text-gray-500 cs:dark:text-gray-400" },
  zinc: { bg: "cs:bg-zinc-50 cs:dark:bg-zinc-900/30", border: "cs:border-zinc-200 cs:dark:border-zinc-700", text: "cs:text-zinc-800 cs:dark:text-zinc-300", iconColor: "cs:text-zinc-500 cs:dark:text-zinc-400" },
  neutral: { bg: "cs:bg-neutral-50 cs:dark:bg-neutral-900/30", border: "cs:border-neutral-200 cs:dark:border-neutral-700", text: "cs:text-neutral-800 cs:dark:text-neutral-300", iconColor: "cs:text-neutral-500 cs:dark:text-neutral-400" },
  stone: { bg: "cs:bg-stone-50 cs:dark:bg-stone-900/30", border: "cs:border-stone-200 cs:dark:border-stone-700", text: "cs:text-stone-800 cs:dark:text-stone-300", iconColor: "cs:text-stone-500 cs:dark:text-stone-400" },
};

const scaleMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem] cs:px-2 cs:py-1.5",
  sm: "cs:text-xs cs:px-3 cs:py-2",
  md: "cs:text-sm cs:px-4 cs:py-3",
  lg: "cs:text-base cs:px-5 cs:py-4",
};

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:h-3 cs:w-3",
  sm: "cs:h-4 cs:w-4",
  md: "cs:h-5 cs:w-5",
  lg: "cs:h-6 cs:w-6",
};

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  );
}

const variantIcons: Record<AlertVariant, React.FC<{ className?: string }>> = {
  success: SuccessIcon,
  error: ErrorIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

const variantFallbackColor: Record<AlertVariant, PresetColor> = {
  success: "green",
  error: "red",
  warning: "amber",
  info: "blue",
};

export function Alert({
  children,
  variant = "info",
  scale = "md",
  title,
  closable = false,
  onClose,
  icon = true,
  className,
}: AlertProps) {
  const Icon = variantIcons[variant];

  const uiColor = useUIColor();
  const semanticMap = uiColor?.semanticColors;
  const resolvedColor = resolveSemanticColor(variant, semanticMap);
  const styles = isPresetColor(resolvedColor)
    ? presetAlertStyles[resolvedColor]
    : presetAlertStyles[variantFallbackColor[variant]];

  const role = variant === "error" || variant === "warning" ? "alert" : "status";

  return (
    <div
      role={role}
      className={clsx(
        "cs:flex cs:items-start cs:gap-3 cs:rounded-md cs:border cs:font-sans",
        styles.bg,
        styles.border,
        styles.text,
        scaleMap[scale],
        className,
      )}
    >
      {icon && <Icon className={clsx("cs:shrink-0", iconScaleMap[scale], styles.iconColor)} />}
      <div className="cs:flex-1">
        {title && <div className="cs:font-semibold">{title}</div>}
        <div>{children}</div>
      </div>
      {closable && onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={clsx(
            `cs:shrink-0 cs:rounded-md cs:p-0.5 cs:hover:opacity-70 ${FOCUS_RING}`,
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
