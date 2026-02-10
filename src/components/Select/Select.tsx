import type { ReactNode } from "react";
import React, { useId } from "react";
import { FOCUS_RING_INSET } from "../Constants/designTokens";
import type { Scale } from "../DesignSystemUtils";
import { useFormField } from "../FormField/FormFieldContext";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id?: string;
  scale?: Scale;
  isInvalid?: boolean;
  children: ReactNode;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:pl-1.5 cs:pr-5 cs:py-0.5 cs:text-[0.625rem] cs:h-5",
  sm: "cs:pl-2 cs:pr-6 cs:py-1 cs:text-xs cs:h-6",
  md: "cs:pl-3 cs:pr-10 cs:py-1.5 cs:text-sm/6 cs:h-9",
  lg: "cs:pl-4 cs:pr-12 cs:py-2 cs:text-base cs:h-11",
};

const iconScaleMap: Record<Scale, string> = {
  xs: "cs:h-2.5 cs:w-2.5 cs:-ml-4 cs:mt-1",
  sm: "cs:h-3 cs:w-3 cs:-ml-4.5 cs:mt-1.5",
  md: "cs:h-4 cs:w-4 cs:-ml-7 cs:mt-3",
  lg: "cs:h-5 cs:w-5 cs:-ml-8 cs:mt-3.5",
};

export function Select({ scale = "md", isInvalid = false, children, id: externalId, ...props }: SelectProps) {
  const generatedId = useId();
  const formField = useFormField();
  const id = externalId ?? formField?.id ?? generatedId;
  const mergedInvalid = isInvalid || formField?.isInvalid || false;
  const mergedDisabled = props.disabled || formField?.isDisabled || false;
  const mergedScale = scale ?? formField?.scale ?? "md";

  const describedBy = formField
    ? [formField.errorId, formField.helpId].join(" ")
    : undefined;

  return (
    <div className="cs:flex">
      <select
        id={id}
        aria-invalid={mergedInvalid || undefined}
        aria-describedby={describedBy}
        disabled={mergedDisabled || undefined}
        className={`cs:appearance-none cs:rounded-md cs:border-gray-300 cs:dark:text-gray-400 cs:dark:bg-gray-800 cs:font-sans ${FOCUS_RING_INSET} cs:border-1 cs:disabled:bg-gray-300
          ${mergedInvalid
            ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
            : "cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:outline-gray-300"
          } ${scaleMap[mergedScale]}`}
        {...props}
      >
        {children}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`cs:pointer-events-none cs:dark:text-gray-400 ${iconScaleMap[mergedScale]}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
}

type SelectOptionProps = {
  label: string;
  value: string;
} & React.OptionHTMLAttributes<HTMLOptionElement>;

export function SelectOption({ label, value, ...props }: SelectOptionProps) {
  return (
    <option value={value} {...props}>
      {label}
    </option>
  );
}
