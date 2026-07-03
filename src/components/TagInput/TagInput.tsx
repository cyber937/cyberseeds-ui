"use client";

import clsx from "clsx";
import { type Ref, useId, useState } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface TagInputProps {
  value?: string[];
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  scale?: Scale;
  color?: Color;
  disabled?: boolean;
  /** Reject duplicate tags (case-insensitive). Defaults to true. */
  dedupe?: boolean;
  /** Cap the number of tags. */
  maxTags?: number;
  /** Marks the field invalid: red border + `aria-invalid` on the input. */
  isInvalid?: boolean;
  /** Forwarded to the inner text `<input>` (label association / error linking). */
  id?: string;
  "aria-describedby"?: string;
  className?: string;
  "aria-label"?: string;
  /** Forwarded to the inner text `<input>`. */
  ref?: Ref<HTMLInputElement>;
}

const fieldScale: Record<Scale, string> = {
  xs: "cs:text-xs cs:gap-1 cs:p-1",
  sm: "cs:text-xs cs:gap-1 cs:p-1.5",
  md: "cs:text-sm cs:gap-1.5 cs:p-2",
  lg: "cs:text-base cs:gap-2 cs:p-2.5",
};

export function TagInput({
  value: controlledValue,
  defaultValue = [],
  onChange,
  placeholder = "Add a tag…",
  scale = "md",
  color = "blue",
  disabled = false,
  dedupe = true,
  maxTags,
  isInvalid = false,
  id,
  "aria-describedby": ariaDescribedby,
  className,
  "aria-label": ariaLabel,
  ref,
}: TagInputProps) {
  const internalId = useId();
  const inputId = id ?? internalId;
  const { color: contextColor } = useUIColor() ?? { color: undefined };
  const colorStyle = colorToCSSVars(resolveColor(contextColor ?? color));

  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState<string[]>(defaultValue);
  const tags = isControlled ? controlledValue : uncontrolled;

  const [draft, setDraft] = useState("");

  function commit(next: string[]) {
    if (!isControlled) setUncontrolled(next);
    onChange?.(next);
  }

  function addTag(raw: string) {
    const tag = raw.trim();
    if (!tag) return;
    if (maxTags !== undefined && tags.length >= maxTags) return;
    if (dedupe && tags.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      setDraft("");
      return;
    }
    commit([...tags, tag]);
    setDraft("");
  }

  function removeAt(index: number) {
    commit(tags.filter((_, i) => i !== index));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(draft);
    } else if (e.key === "Backspace" && draft === "" && tags.length > 0) {
      removeAt(tags.length - 1);
    }
  }

  return (
    <div
      className={clsx(
        "cs:flex cs:flex-wrap cs:items-center cs:font-sans",
        "cs:rounded-md cs:border",
        isInvalid
          ? "cs:border-red-500 cs:dark:border-red-500"
          : "cs:border-gray-300 cs:dark:border-gray-600",
        "cs:bg-white cs:dark:bg-gray-800",
        "cs:focus-within:outline-2 cs:focus-within:outline-offset-2 cs:focus-within:outline-[var(--cs-ui-focus)]",
        disabled && "cs:opacity-50",
        fieldScale[scale],
        className,
      )}
      style={colorStyle}
      onClick={() => {
        if (!disabled) document.getElementById(inputId)?.focus();
      }}
    >
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="cs-pill cs:inline-flex cs:items-center cs:gap-1 cs:rounded-full cs:px-2 cs:py-0.5 cs:text-white"
        >
          {tag}
          {!disabled && (
            <button
              type="button"
              aria-label={`Remove ${tag}`}
              onClick={(e) => {
                e.stopPropagation();
                removeAt(index);
              }}
              className="cs:cursor-pointer cs:leading-none cs:opacity-80 cs:hover:opacity-100"
            >
              ×
            </button>
          )}
        </span>
      ))}
      <input
        ref={ref}
        id={inputId}
        type="text"
        value={draft}
        disabled={disabled}
        placeholder={tags.length === 0 ? placeholder : ""}
        aria-label={ariaLabel ?? "Add a tag"}
        aria-invalid={isInvalid || undefined}
        aria-describedby={ariaDescribedby}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => addTag(draft)}
        className="cs:min-w-[6rem] cs:flex-1 cs:bg-transparent cs:text-gray-900 cs:dark:text-gray-200 cs:outline-none cs:placeholder:text-gray-400"
      />
    </div>
  );
}
