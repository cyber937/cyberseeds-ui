import type { ReactNode } from "react";
import React from "react";
import type { Scale } from "../DesignSystemUtils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  scale?: Scale;
  children: ReactNode;
}

export function Select({ scale = "md", children, ...props }: SelectProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "pl-2 pr-6 py-1 text-xs",
    md: "pl-3 pr-10 py-1.5 text-sm/6",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "size-3 -ml-5.5 mt-1.5",
    md: "size-4 -ml-7 mt-3",
  };

  return (
    <div className="flex dark:text-gray-200">
      <select
        className={`appearance-none rounded-md border-gray-300 bg-white dark:bg-gray-800 font-sans focus:outline-hidden border-1 disabled:bg-gray-300 ${scaleMap[scale]}`}
        {...props}
      >
        {children}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className={`pointer-events-none items-center ${iconScaleMap[scale]}`}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

type SelectOptionPros = {
  label: string;
  value: string;
} & React.OptgroupHTMLAttributes<HTMLOptionElement>;

export function SelectOption({ label, value, ...props }: SelectOptionPros) {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
}
