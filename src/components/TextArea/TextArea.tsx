import type { Scale, Color } from "../DesignSystemUtils"
import { Label } from "../Label/Label"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  scale?: Scale
  color?: Color
  require?: boolean
  isInvalid?: boolean
}

export function TextArea({
  label,
  scale = 'md',
  color = 'red',
  require = false,
  isInvalid = false,
  ...props }: TextAreaProps) {

  const scaleMap: Record<Scale, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm/6',
  }

  const colorMap: Record<Color, string> = {
    red: "focus:outline-red-600",
    orange: "focus:outline-orange-600",
    amber: "focus:outline-amber-600",
    yellow: "focus:outline-yellow-600",
    lime: "focus:outline-lime-600",
    green: "focus:outline-green-600",
    emerald: "focus:outline-emerald-600",
    teal: "focus:outline-teal-600",
    cyan: "focus:outline-cyan-600",
    sky: "focus:outline-sky-600",
    blue: "focus:outline-blue-600",
    indigo: "focus:outline-indigo-600",
    violet: "focus:outline-violet-600",
    purple: "focus:outline-purple-600",
    fuchsia: "focus:outline-fuchsia-600",
    pink: "focus:outline-pink-600",
    rose: "focus:outline-rose-600",
    slate: "focus:outline-slate-600",
    gray: "focus:outline-gray-600",
    zinc: "focus:outline-zinc-600",
    neutral: "focus:outline-neutral-600",
    stone: "focus:outline-stone-600",
  }

  return (
    <div>
      {label &&
        <Label text={label} className="mb-2" require={require} />
      }
      <textarea
        className={`w-full rounded-md disabled:bg-amber-100 disabled:text-gray-400 outline-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${isInvalid ? 'text-red-400 bg-red-100/50 outline-red-300' : 'text-gray-900 bg-white outline-gray-300'} ${scaleMap[scale]} ${colorMap[color]}`}
        {...props}
      />
    </div>
  )
}