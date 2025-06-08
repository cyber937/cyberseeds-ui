import { checkedFocusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Checkbox({
  scale = "md",
  color = "red",
  label = "checkbox",
  ...props
}: CheckboxProps) {
  const gapScaleMap: Record<Scale, string> = {
    sm: "gap-x-2",
    md: "gap-x-3",
  };

  const checkBoxScaleMap: Record<Scale, string> = {
    sm: "size-3.5",
    md: "size-4",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "size-3",
    md: "size-3.5",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "text-xs",
    md: "text-sm/6",
  };

  return (
    <div className={`flex ${gapScaleMap[scale]}`}>
      <div className="flex h-6 shrink-0 items-center">
        <div className={`group grid grid-cols-1 ${checkBoxScaleMap[scale]}`}>
          <input
            type="checkbox"
            className={`col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white dark:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2  disabled:border-gray-300 disabled:bg-amber-100 disabled:checked:bg-amber-100 forced-colors:appearance-auto ${checkedFocusOutlineColorMap[color]}`}
            {...props}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className={`pointer-events-none col-start-1 row-start-1 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 ${iconScaleMap[scale]}`}
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      <div className="text-sm/6">
        <label
          className={`font-sans dark:text-gray-200 ${textScaleMap[scale]}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}
