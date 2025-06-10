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
    sm: "cs:px-2 cs:py-1 cs:text-xs",
    md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
  };

  const activeColorMap: Record<Color, string> = {
    red: "cs:hover:bg-red-500 cs:active:bg-red-400",
    orange: "cs:hover:bg-orange-500 cs:active:bg-orange-400",
    amber: "cs:hover:bg-amber-500 cs:active:bg-amber-400",
    yellow: "cs:hover:bg-yellow-500 cs:active:bg-yellow-400",
    lime: "cs:hover:bg-lime-500 cs:active:bg-lime-400",
    green: "cs:hover:bg-green-500 cs:active:bg-green-400",
    emerald: "cs:hover:bg-emerald-500 cs:active:bg-emerald-400",
    teal: "cs:hover:bg-teal-500 cs:active:bg-teal-400",
    cyan: "cs:hover:bg-cyan-500 cs:active:bg-cyan-400",
    sky: "cs:hover:bg-sky-500 cs:active:bg-sky-400",
    blue: "cs:hover:bg-blue-500 cs:active:bg-blue-400",
    indigo: "cs:hover:bg-indigo-500 cs:active:bg-indigo-400",
    violet: "cs:hover:bg-violet-500 cs:active:bg-violet-400",
    purple: "cs:hover:bg-purple-500 cs:active:bg-purple-400",
    fuchsia: "cs:hover:bg-fuchsia-500 cs:active:bg-fuchsia-400",
    pink: "cs:hover:bg-pink-500 cs:active:bg-pink-400",
    rose: "cs:hover:bg-rose-500 cs:active:bg-rose-400",
    slate: "cs:hover:bg-slate-500 cs:active:bg-slate-400",
    gray: "cs:hover:bg-gray-500 cs:active:bg-gray-400",
    zinc: "cs:hover:bg-zinc-500 cs:active:bg-zinc-400",
    neutral: "cs:hover:bg-neutral-500 cs:active:bg-neutral-400",
    stone: "cs:hover:bg-stone-500 cs:active:bg-stone-400",
  };

  const variantMap: Record<Variant, string> = {
    primary: `cs:text-white ${backgroundColorMap[color]} ${activeColorMap[color]}`,
    secondary: `cs:dark:text-white cs:ring-gray-500/80 cs:ring-1 cs:ring-inset cs:text-black cs:hover:bg-gray-400 cs:active:bg-gray-300`,
  };

  return (
    <ButtonContext.Provider value={{ scale }}>
      <button
        className={`cs:inline-flex cs:items-center cs:rounded-md cs:font-sans cs:justify-center cs:font-semibold cs:cursor-pointer cs:text-nowrap cs:self-start cs:align-middle cs:gap-1.5 ${scaleMap[scale]} ${variantMap[variant]} ${className}`}
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
    sm: "cs:size-4",
    md: "cs:size-5",
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
