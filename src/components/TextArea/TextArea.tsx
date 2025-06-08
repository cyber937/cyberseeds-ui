import { focusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
}

export function TextArea({
  label,
  scale = "md",
  color = "red",
  require = false,
  isInvalid = false,
  ...props
}: TextAreaProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm/6",
  };

  return (
    <div>
      {label && <Label text={label} className="mb-2" require={require} />}
      <textarea
        className={`w-full dark:bg-gray-800 dark:text-gray-400 rounded-md disabled:bg-amber-100 disabled:text-gray-400 outline-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 ${
          isInvalid
            ? "text-red-400 bg-red-100/50 outline-red-300"
            : "text-gray-900 bg-white outline-gray-300"
        } ${scaleMap[scale]} ${focusOutlineColorMap[color]}`}
        {...props}
      />
    </div>
  );
}
