import type { ReactNode } from "react";
import React from "react";
import type { Scale } from "../DesignSystemUtils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  scale?: Scale;
  children: ReactNode;
}

export function Select({ scale = "md", children, ...props }: SelectProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "cs:pl-2 cs:pr-6 cs:py-1 cs:text-xs cs:h-6",
    md: "cs:pl-3 cs:pr-10 cs:py-1.5 cs:text-sm/6 cs:h-9",
  };

  const iconScaleMap: Record<Scale, string> = {
    sm: "cs:h-3 cs:w-3 cs:-ml-4.5 cs:mt-1.5",
    md: "cs:h-4 cs:w-4 cs:-ml-7 cs:mt-3",
  };

  return (
    <div className="cs:flex">
      <select
        className={`cs:appearance-none cs:rounded-md cs:bg-white cs:border-gray-300 cs:dark:text-gray-200 cs:dark:bg-gray-800 cs:font-sans cs:focus:outline-hidden cs:border-1 cs:disabled:bg-gray-300 ${scaleMap[scale]}`}
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
        className={`cs:pointer-events-none cs:dark:text-gray-200 ${iconScaleMap[scale]}`}
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
