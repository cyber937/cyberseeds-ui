import type { ReactNode } from "react";
import React from "react";
import type { Scale } from "../DesignSystemUtils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  scale?: Scale;
  children: ReactNode;
}

export function Select({ scale = "md", children, ...props }: SelectProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "pl-2 pr-6 py-1 text-xs h-6",
    md: "pl-3 pr-10 py-1.5 text-sm/6 h-9",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "size-3 -ml-5.5 -mt-2",
    md: "size-4 -ml-7",
  };

  return (
    <div className="flex dark:text-gray-200">
      <select
        className={`col-start-1 row-start-1 w-full appearance-none rounded-md border-gray-300 bg-white dark:bg-gray-800 font-sans focus:outline-hidden border-1 disabled:bg-gray-300 ${scaleMap[scale]}`}
        {...props}
      >
        {children}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`pointer-events-none col-start-1 row-start-1 items-center self-center justify-self-end ${iconScaleMap[scale]}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
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
