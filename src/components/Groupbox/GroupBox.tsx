import type { ReactNode } from "react"

type GroupBoxProps = {
  label?: string
  children: ReactNode
  className?: string
}

export function GroupBox({ label, children, className = '' }: GroupBoxProps) {
  return (
    <div className="w-full">
      {label &&
        <div className="left-4 px-2 bg-white dark:bg-gray-500 text-xs font-semibold text-gray-700 dark:text-gray-100">{label}</div>
      }
      <div className={`border border-gray-300 dark:bg-border-gray-300 dark:border-gray-600 rounded-md p-4 w-full ${className}`}>
        {children}
      </div>
    </div>
  )
}