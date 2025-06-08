import React from "react";
import { focusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";

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
  color = "red",
  require = false,
  isInvalid = false,
  className = "",
  ...props
}: InputProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm/6",
  };

  return (
    <div>
      {label && (
        <Label text={label} scale={scale} className="mb-2" require={require} />
      )}
      <input
        className={`w-full items-center rounded-md dark:text-gray-200 disabled:bg-amber-100 disabled:text-gray-400 font-sans outline-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 self-start ${
          isInvalid
            ? "text-red-400 bg-red-100/50 outline-red-300 dark:bg-red-200 dark:text-gray-200"
            : "text-gray-900 bg-white dark:bg-gray-800 outline-gray-300"
        } ${scaleMap[scale]} ${focusOutlineColorMap[color]} ${className}`}
        {...props}
      />
    </div>
  );
}
