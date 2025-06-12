import type { ReactNode } from "react";
import { Label } from "../Label/Label";

type GroupBoxProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export function GroupBox({ label, children, className = "" }: GroupBoxProps) {
  return (
    <div className="cs:w-full">
      {label && <Label text={label} className="cs:ml-2" />}
      <div
        className={`cs:border cs:bg-white cs:border-gray-300 cs:dark:text-gray-400 cs:dark:bg-gray-800 cs:dark:border-gray-600 cs:rounded-md cs:p-4 cs:w-full ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
