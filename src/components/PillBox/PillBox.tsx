import clsx from "clsx";
import { memo } from "react";

import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface PillBoxProps {
  label: string;
  scale?: Scale;
  color?: Color;
  className?: string;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:px-1.5 cs:py-0.5 cs:text-[0.5rem]",
  sm: "cs:px-2 cs:py-0.5 cs:text-[0.6rem]",
  md: "cs:px-2 cs:py-1 cs:text-xs",
  lg: "cs:px-3 cs:py-1 cs:text-sm",
};

export const PillBox = memo(function PillBox({
  label,
  color,
  scale = "md",
  className,
}: PillBoxProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const resolvedColor = resolveColor(color ?? contextUIColor ?? "blue");
  const baseClasses =
    "cs:inline-block cs:font-medium cs:rounded-full cs:outline-1 cs:font-sans cs:w-fit cs:max-w-full cs:whitespace-nowrap cs:self-start";

  const colorStyle = colorToCSSVars(resolvedColor);

  return (
    <span
      style={colorStyle}
      className={clsx(baseClasses, scaleMap[scale], "cs-pill", className)}
    >
      {label}
    </span>
  );
});
