import clsx from "clsx";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface SpinnerProps {
  scale?: Scale;
  color?: Color;
  label?: string;
  className?: string;
}

const sizeMap: Record<Scale, string> = {
  xs: "cs:h-3 cs:w-3",
  sm: "cs:h-4 cs:w-4",
  md: "cs:h-6 cs:w-6",
  lg: "cs:h-8 cs:w-8",
};

export function Spinner({
  scale = "md",
  color = "blue",
  label = "Loading",
  className,
}: SpinnerProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

  const colorStyle = colorToCSSVars(finalColor);

  return (
    <svg
      role="status"
      aria-label={label}
      style={colorStyle}
      className={clsx(
        "cs:animate-spin cs:motion-reduce:animate-pulse",
        sizeMap[scale],
        "cs-spinner",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="cs:opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="cs:opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
