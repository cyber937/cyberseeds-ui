"use client";

import { createContext, useContext } from "react";
import type { Color, Scale } from "../DesignSystemUtils";

export interface FormFieldContextType {
  id: string;
  errorId: string;
  helpId: string;
  isInvalid: boolean;
  isRequired: boolean;
  isDisabled: boolean;
  scale?: Scale;
  color?: Color;
}

export const FormFieldContext = createContext<FormFieldContextType | undefined>(
  undefined,
);

export function useFormField(): FormFieldContextType | undefined {
  return useContext(FormFieldContext);
}
