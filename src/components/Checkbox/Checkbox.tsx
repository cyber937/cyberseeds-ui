import { checkedFocusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Checkbox({
  scale = "md",
  color = "blue",
  label = "checkbox",
  ...props
}: CheckboxProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const gapScaleMap: Record<Scale, string> = {
    sm: "cs:gap-x-2",
    md: "cs:gap-x-3",
  };

  const checkBoxScaleMap: Record<Scale, string> = {
    sm: "cs:size-3.5",
    md: "cs:size-4",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "cs:size-3",
    md: "cs:size-3.5",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "cs:text-xs",
    md: "cs:text-sm/6",
  };

  return (
    <div className={`cs:flex ${gapScaleMap[scale]}`}>
      <div className="cs:flex cs:h-6 cs:shrink-0 cs:items-center">
        <div
          className={`cs:group cs:grid cs:grid-cols-1 ${checkBoxScaleMap[scale]}`}
        >
          <input
            type="checkbox"
            className={`cs:col-start-1 cs:row-start-1 cs:appearance-none cs:rounded-sm cs:border cs:border-gray-300 cs:bg-white cs:dark:bg-gray-200 cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2  cs:disabled:border-gray-300 cs:disabled:bg-amber-100 cs:disabled:checked:bg-amber-100 cs:forced-colors:appearance-auto ${checkedFocusOutlineColorMap[finalUIColor]}`}
            {...props}
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className={`cs:pointer-events-none cs:col-start-1 cs:row-start-1 cs:self-center cs:justify-self-center cs:stroke-white cs:group-has-disabled:stroke-gray-950/25 ${iconScaleMap[scale]}`}
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cs:opacity-0 cs:group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cs:opacity-0 cs:group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>
      <div className="cs:text-sm/6">
        <label
          className={`cs:font-sans cs:dark:text-gray-300 ${textScaleMap[scale]}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}
