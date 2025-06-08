import { checkedFocusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Radio({
  label,
  scale = "md",
  color = "red",
  ...props
}: RadioProps) {
  const gapScaleMap: Record<Scale, string> = {
    sm: "gap-x-2",
    md: "gap-x-3",
  };

  const radioScaleMap: Record<Scale, string> = {
    sm: "size-3.5",
    md: "size-4",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "text-xs",
    md: "text-sm/6",
  };

  return (
    <div className={`flex items-center ${gapScaleMap[scale]}`}>
      <input
        type="radio"
        className={`relative appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-amber-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden ${radioScaleMap[scale]} ${checkedFocusOutlineColorMap[color]}`}
        {...props}
      />
      <label
        className={`block text-gray-900 dark:text-white font-sans ${textScaleMap[scale]}`}
      >
        {label}
      </label>
    </div>
  );
}
