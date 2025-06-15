import { checkedFocusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
}

export function Radio({
  label,
  scale = "md",
  color = "blue",
  ...props
}: RadioProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const gapScaleMap: Record<Scale, string> = {
    sm: "cs:gap-x-2",
    md: "cs:gap-x-3",
  };

  const radioScaleMap: Record<Scale, string> = {
    sm: "cs:size-3.5",
    md: "cs:size-4",
  };

  const textScaleMap: Record<Scale, string> = {
    sm: "cs:text-xs",
    md: "cs:text-sm/6",
  };

  return (
    <div className={`cs:flex cs:items-center ${gapScaleMap[scale]}`}>
      <input
        type="radio"
        className={`cs:relative cs:appearance-none cs:rounded-full cs:border cs:border-gray-200 cs:bg-white cs:before:absolute cs:before:inset-1 cs:before:rounded-full cs:before:bg-white cs:not-checked:before:hidden cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:disabled:border-gray-300 cs:disabled:bg-amber-100 cs:disabled:before:bg-gray-400 cs:forced-colors:appearance-auto cs:forced-colors:before:hidden cs:transition-colors cs:duration-300 cs:ease-in ${radioScaleMap[scale]} ${checkedFocusOutlineColorMap[finalUIColor]}`}
        {...props}
      />
      <label
        className={`cs:block cs:text-gray-900 cs:dark:text-gray-300 cs:font-sans ${textScaleMap[scale]}`}
      >
        {label}
      </label>
    </div>
  );
}
