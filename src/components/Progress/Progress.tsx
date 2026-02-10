import clsx from "clsx";
import { backgroundColorMap } from "../Constants/colorMap";
import { customColorToCSSVars, isPresetColor } from "../Constants/colorUtils";
import type { Color, PresetColor, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface ProgressProps {
  value: number;
  max?: number;
  scale?: Scale;
  color?: Color;
  showValue?: boolean;
  animated?: boolean;
  label?: string;
  className?: string;
}

const trackHeightMap: Record<Scale, string> = {
  sm: "cs:h-1.5",
  md: "cs:h-2.5",
};

const labelScaleMap: Record<Scale, string> = {
  sm: "cs:text-xs",
  md: "cs:text-sm",
};

export function Progress({
  value,
  max = 100,
  scale = "md",
  color = "blue",
  showValue = false,
  animated = false,
  label,
  className,
}: ProgressProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = contextUIColor ?? color;

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  const customStyle = !isPresetColor(finalColor)
    ? customColorToCSSVars(finalColor)
    : undefined;

  return (
    <div className={clsx("cs:w-full cs:font-sans", className)}>
      {(label || showValue) && (
        <div
          className={clsx(
            "cs:flex cs:justify-between cs:mb-1",
            labelScaleMap[scale],
          )}
        >
          {label && (
            <span className="cs:text-gray-700 cs:dark:text-gray-300 cs:font-medium">
              {label}
            </span>
          )}
          {showValue && (
            <span className="cs:text-gray-500 cs:dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? "Progress"}
        className={clsx(
          "cs:w-full cs:rounded-full cs:bg-gray-200 cs:dark:bg-gray-700 cs:overflow-hidden",
          trackHeightMap[scale],
        )}
      >
        <div
          style={{ width: `${percentage}%`, ...customStyle }}
          className={clsx(
            "cs:h-full cs:rounded-full cs:transition-all cs:duration-300 cs:ease-in-out",
            animated && "cs-progress-animated",
            isPresetColor(finalColor)
              ? backgroundColorMap[finalColor]
              : "cs-custom-progress",
          )}
        />
      </div>
    </div>
  );
}
