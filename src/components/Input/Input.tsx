import React from "react";
import { focusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
}

export function Input({
  label,
  scale = "md",
  color = "blue",
  require = false,
  isInvalid = false,
  className = "",
  ...props
}: InputProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const scaleMap: Record<Scale, string> = {
    sm: "cs:px-2 cs:py-1 cs:text-xs",
    md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
  };

  return (
    <div>
      {label && (
        <Label
          text={label}
          scale={scale}
          require={require}
          className="cs:ml-2"
        />
      )}
      <input
        className={`cs:w-full cs:items-center cs:rounded-md cs:dark:text-gray-200 cs:disabled:bg-amber-100 cs:disabled:text-gray-400 cs:font-sans cs:outline-1 cs:placeholder:text-gray-400 cs:focus:outline-2 cs:focus:-outline-offset-2 cs:self-start ors cs:duration-200 cs:ease-in-out ${isInvalid
          ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
          : "cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:outline-gray-300"
          } ${scaleMap[scale]} ${focusOutlineColorMap[finalUIColor]
          } ${className}`}
        {...props}
      />
    </div>
  );
}
