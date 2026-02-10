import clsx from "clsx";
import { type ReactNode, useId, useMemo } from "react";
import { resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";
import { useUIColor } from "../UIColorProvider/useUIColor";
import {
  FormFieldContext,
  type FormFieldContextType,
  useFormField,
} from "./FormFieldContext";

interface FormFieldProps {
  children: ReactNode;
  scale?: Scale;
  color?: Color;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
}

interface FormFieldLabelProps {
  children: ReactNode;
  className?: string;
}

interface FormFieldErrorProps {
  children: ReactNode;
  className?: string;
}

interface FormFieldHelpProps {
  children: ReactNode;
  className?: string;
}

const scaleTextMap: Record<Scale, string> = {
  xs: "cs:text-[0.625rem]",
  sm: "cs:text-xs",
  md: "cs:text-sm",
  lg: "cs:text-base",
};

export function FormField({
  children,
  scale,
  color = "blue",
  isInvalid = false,
  isRequired = false,
  isDisabled = false,
}: FormFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;

  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);

  const contextValue = useMemo<FormFieldContextType>(
    () => ({
      id,
      errorId,
      helpId,
      isInvalid,
      isRequired,
      isDisabled,
      scale,
      color: finalColor,
    }),
    [id, errorId, helpId, isInvalid, isRequired, isDisabled, scale, finalColor],
  );

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div
        className={clsx(
          "cs:flex cs:flex-col",
          scale === "sm" ? "cs:gap-0.5" : "cs:gap-1",
        )}
      >
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

function FormFieldLabel({ children, className }: FormFieldLabelProps) {
  const ctx = useFormFieldStrict("FormField.Label");
  return (
    <Label
      htmlFor={ctx.id}
      text={typeof children === "string" ? children : ""}
      scale={ctx.scale}
      require={ctx.isRequired}
      className={clsx("cs:ml-2", className)}
    />
  );
}

function FormFieldError({ children, className }: FormFieldErrorProps) {
  const ctx = useFormFieldStrict("FormField.Error");
  if (!ctx.isInvalid) return null;

  return (
    <p
      id={ctx.errorId}
      role="alert"
      aria-live="polite"
      className={clsx(
        "cs:text-red-500 cs:dark:text-red-400 cs:font-sans cs:ml-2",
        scaleTextMap[ctx.scale ?? "md"],
        className,
      )}
    >
      {children}
    </p>
  );
}

function FormFieldHelp({ children, className }: FormFieldHelpProps) {
  const ctx = useFormFieldStrict("FormField.Help");

  return (
    <p
      id={ctx.helpId}
      className={clsx(
        "cs:text-gray-500 cs:dark:text-gray-400 cs:font-sans cs:ml-2",
        scaleTextMap[ctx.scale ?? "md"],
        className,
      )}
    >
      {children}
    </p>
  );
}

function useFormFieldStrict(componentName: string): FormFieldContextType {
  const ctx = useFormField();
  if (!ctx) {
    throw new Error(`${componentName} must be used within a FormField`);
  }
  return ctx;
}

FormField.Label = FormFieldLabel;
FormField.Error = FormFieldError;
FormField.Help = FormFieldHelp;
