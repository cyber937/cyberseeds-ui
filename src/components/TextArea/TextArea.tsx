import { focusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";

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
  color = "blue",
  require = false,
  isInvalid = false,
  ...props
}: TextAreaProps) {
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const scaleMap: Record<Scale, string> = {
    sm: "cs:px-2 cs:py-1 cs:text-xs",
    md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
  };

  return (
    <div>
      {label && <Label text={label} require={require} className="cs:ml-2" />}
      <textarea
        className={`cs:w-full cs:dark:bg-gray-800 cs:dark:text-gray-200 cs:rounded-md cs:disabled:bg-amber-100 cs:disabled:text-gray-400 cs:outline-1 cs:placeholder:text-gray-400 cs:focus:outline-2 cs:focus:-outline-offset-2 cs:transition-colors cs:duration-200 cs:ease-in-out ${isInvalid
          ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
          : "cs:text-gray-900 cs:bg-white cs:outline-gray-300"
          } ${scaleMap[scale]} ${focusOutlineColorMap[finalUIColor]}`}
        {...props}
      />
    </div>
  );
}
