import type { ReactNode } from "react";

type GroupboxProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export function Groupbox({ label, children, className = "" }: GroupboxProps) {
  return (
    <div className="cs:w-full">
      {label && (
        <div className="cs:left-4 cs:px-2 cs:text-xs cs:font-semibold cs:text-gray-700 cs:dark:text-gray-100">
          {label}
        </div>
      )}
      <div
        className={`cs:border cs:border-gray-300 cs:dark:text-gray-400 cs:dark:bg-gray-800 cs:dark:border-gray-600 cs:rounded-md cs:p-4 cs:w-full ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
