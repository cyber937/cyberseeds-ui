'use client'

import type { Scale } from "../DesignSystemUtils"
import clsx from "clsx"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  scale?: Scale
  text: string,
  require?: boolean
}

export function Label({ scale = 'md', text, require = false }: LabelProps) {

  const scaleMaps: Record<Scale, string> = {
    sm: 'text-xs',
    md: 'text-sm/6'
  }

  return (
    <label
      className={`block font-medium font-sans text-gray-900 dark:text-gray-200 text-nowrap ${clsx(require && "after:content-['*'] after:text-red-500")} ${scaleMaps[scale]}`} >
      {text}
    </label >
  )
}