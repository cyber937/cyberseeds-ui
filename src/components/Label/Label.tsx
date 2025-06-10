"use client";

import clsx from "clsx";
import type { Scale } from "../DesignSystemUtils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  scale?: Scale;
  text: string;
  require?: boolean;
}

export function Label({ scale = "md", text, require = false }: LabelProps) {
  const scaleMaps: Record<Scale, string> = {
    sm: "cs:text-xs",
    md: "cs:text-sm/6",
  };

  return (
    <label
      className={`cs:block cs:font-medium cs:font-sans cs:text-gray-900 cs:dark:text-gray-200 cs:text-nowrap ${clsx(
        require && "cs:after:content-['*'] cs:after:text-red-500"
      )} ${scaleMaps[scale]}`}
    >
      {text}
    </label>
  );
}
