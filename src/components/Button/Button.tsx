import type { ReactElement, ReactNode } from "react";
import React, { createContext, useContext } from "react";
import { backgroundColorMap } from "../Constants/colorMap";
import type { Color, Scale, Variant } from "../DesignSystemUtils";

type ButtonContextType = {
  scale: Scale;
};

const ButtonContext = createContext<ButtonContextType | null>(null);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  scale?: Scale;
  variant?: Variant;
  color?: Color;
  children: ReactNode;
}

export function Button({
  scale = "md",
  variant = "primary",
  color = "red",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const scaleMap: Record<Scale, string> = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm/6",
  };

  const activeColorMap: Record<Color, string> = {
    red: "hover:bg-red-500 active:bg-red-400",
    orange: "hover:bg-orange-500 active:bg-orange-400",
    amber: "hover:bg-amber-500 active:bg-amber-400",
    yellow: "hover:bg-yellow-500 active:bg-yellow-400",
    lime: "hover:bg-lime-500 active:bg-lime-400",
    green: "hover:bg-green-500 active:bg-green-400",
    emerald: "hover:bg-emerald-500 active:bg-emerald-400",
    teal: "hover:bg-teal-500 active:bg-teal-400",
    cyan: "hover:bg-cyan-500 active:bg-cyan-400",
    sky: "hover:bg-sky-500 active:bg-sky-400",
    blue: "hover:bg-blue-500 active:bg-blue-400",
    indigo: "hover:bg-indigo-500 active:bg-indigo-400",
    violet: "hover:bg-violet-500 active:bg-violet-400",
    purple: "hover:bg-purple-500 active:bg-purple-400",
    fuchsia: "hover:bg-fuchsia-500 active:bg-fuchsia-400",
    pink: "hover:bg-pink-500 active:bg-pink-400",
    rose: "hover:bg-rose-500 active:bg-rose-400",
    slate: "hover:bg-slate-500 active:bg-slate-400",
    gray: "hover:bg-gray-500 active:bg-gray-400",
    zinc: "hover:bg-zinc-500 active:bg-zinc-400",
    neutral: "hover:bg-neutral-500 active:bg-neutral-400",
    stone: "hover:bg-stone-500 active:bg-stone-400",
  };

  const variantMap: Record<Variant, string> = {
    primary: `text-white ${backgroundColorMap[color]} ${activeColorMap[color]}`,
    secondary: `dark:text-white ring-gray-500/80 ring-1 ring-inset text-black hover:bg-gray-400 active:bg-gray-300`,
  };

  return (
    <ButtonContext.Provider value={{ scale }}>
      <button
        className={`inline-flex items-center rounded-md font-sans justify-center font-semibold cursor-pointer text-nowrap self-start align-middle gap-1.5 ${scaleMap[scale]} ${variantMap[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  );
}

Button.Icon = function ButtonIcon({
  children,
}: {
  children: ReactElement<{ className?: string }>;
}) {
  const iconScaleMap = {
    sm: "size-4",
    md: "size-5",
  };

  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("Button.Icon must be used within a <Button>");
  }

  return React.cloneElement(children, {
    className: `${children.props.className ?? ""} ${
      iconScaleMap[context.scale]
    }`.trim(),
  });
};
