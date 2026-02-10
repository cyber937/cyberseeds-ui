"use client";

import clsx from "clsx";
import { memo } from "react";
import type { Scale } from "../DesignSystemUtils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  scale?: Scale;
  text: string;
  require?: boolean;
  className?: string;
  htmlFor?: string;
}

const scaleMaps: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm/6",
  lg: "cs:text-base",
};

export const Label = memo(function Label({
  scale = "md",
  text,
  require = false,
  className = "",
  htmlFor,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`cs:block cs:font-medium cs:font-sans cs:text-gray-900 cs:dark:text-gray-400 cs:text-nowrap ${clsx(
        require && "cs:after:content-['*'] cs:after:text-red-500"
      )} ${scaleMaps[scale]} ${className}`}
      {...props}
    >
      {text}
    </label>
  );
});
