import type { ReactElement, ReactNode } from "react";
import React, { createContext, useContext } from "react";
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

  const colorMap: Record<Color, string> = {
    red: "bg-red-600 hover:bg-red-500 active:bg-red-400",
    orange: "bg-orange-600 hover:bg-orange-500 active:bg-orange-400",
    amber: "bg-amber-600 hover:bg-amber-500 active:bg-amber-400",
    yellow: "bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-400",
    lime: "bg-lime-600 hover:bg-lime-500 active:bg-lime-400",
    green: "bg-green-600 hover:bg-green-500 active:bg-green-400",
    emerald: "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-400",
    teal: "bg-teal-600 hover:bg-teal-500 active:bg-teal-400",
    cyan: "bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-400",
    sky: "bg-sky-600 hover:bg-sky-500 active:bg-sky-400",
    blue: "bg-blue-600 hover:bg-blue-500 active:bg-blue-400",
    indigo: "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-400",
    violet: "bg-violet-600 hover:bg-violet-500 active:bg-violet-400",
    purple: "bg-purple-600 hover:bg-purple-500 active:bg-purple-400",
    fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-500 active:bg-fuchsia-400",
    pink: "bg-pink-600 hover:bg-pink-500 active:bg-pink-400",
    rose: "bg-rose-600 hover:bg-rose-500 active:bg-rose-400",
    slate: "bg-slate-600 hover:bg-slate-500 active:bg-slate-400",
    gray: "bg-gray-600 hover:bg-gray-500 active:bg-gray-400",
    zinc: "bg-zinc-600 hover:bg-zinc-500 active:bg-zinc-400",
    neutral: "bg-neutral-600 hover:bg-neutral-500 active:bg-neutral-400",
    stone: "bg-stone-600 hover:bg-stone-500 active:bg-stone-400",
  };

  const variantMap: Record<Variant, string> = {
    primary: `text-white ${colorMap[color]}`,
    secondary: `dark:text-white ring-gray-500/80 ring-1 ring-inset text-black hover:bg-gray-400 active: active:bg-gray-300`,
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
