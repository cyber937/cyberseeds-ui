import type { ReactNode } from "react";
import { Label } from "../Label/Label";

type GroupBoxProps = {
  label?: string;
  children: ReactNode;
  className?: string;
};

export function GroupBox({ label, children, className = "" }: GroupBoxProps) {
  return (
    // 外側だけを w-full にする。内側の枠にも w-full を付けると、呼び出し側が
    // className で左右のマージンを足しても幅 100% のままで右へはみ出し、
    // 右の隙間が生まれない（2026-08-28 に実際に起きた）。
    <div className="cs:w-full">
      {label && <Label text={label} className="cs:ml-2" />}
      <div
        className={`cs:border cs:bg-white cs:border-gray-300 cs:dark:text-gray-400 cs:dark:bg-gray-800 cs:dark:border-gray-600 cs:rounded-md cs:p-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
