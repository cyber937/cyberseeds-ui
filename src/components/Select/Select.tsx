import { ChevronDownIcon } from "@heroicons/react/16/solid"
import React from "react";
import type { ReactNode } from "react";
import type { Scale } from "../DesignSystemUtils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  scale?: Scale
  children: ReactNode
}


export function Select({ scale = 'md', children, ...props }: SelectProps) {

  const scaleMap: Record<Scale, string> = {
    sm: 'pl-2 pr-6 py-1 text-xs',
    md: 'pl-3 pr-10 py-1.5 text-sm/6'
  }

  const iconScaleMap: Record<Scale, string> = {
    sm: 'size-4 -ml-5.5 mt-1',
    md: 'size-5 -ml-7 mt-2',
  }

  return (
    <div className="flex">
      <select
        className={`appearance-none rounded-md border-gray-300 bg-white dark:bg-gray-800 font-sans focus:outline-hidden border-1 disabled:bg-gray-300 ${scaleMap[scale]}`}
        {...props}
      >
        {children}
      </select>
      <ChevronDownIcon className={`pointer-events-none items-center ${iconScaleMap[scale]}`} />
    </div>
  )
}

type SelectOptionPros = {
  label: string
  value: string
} & React.OptgroupHTMLAttributes<HTMLOptionElement>

export function SelectOption({ label, value, ...props }: SelectOptionPros) {
  return (
    <option value={value} {...props}>{label}</option>
  )
}