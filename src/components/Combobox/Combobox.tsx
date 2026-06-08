import clsx from "clsx";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type ReactNode,
  type Ref,
} from "react";

import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import { FOCUS_RING } from "../Constants/designTokens";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

/**
 * A single, selectable option in a {@link Combobox}.
 *
 * Project-specific records (e.g. `{ id, name }`) should be mapped into this
 * shape before being passed in. The mapping is intentional — keeping
 * Combobox's storage shape narrow avoids a generic-heavy API surface and
 * keeps TypeScript inference predictable for the 90% case.
 */
export interface ComboboxOption {
  /** Stable identifier persisted to the parent's `value`. */
  value: string;
  /** Human-readable label shown in the input and dropdown list. */
  label: string;
  /** When true, the option is rendered but cannot be selected. */
  disabled?: boolean;
}

interface ComboboxProps {
  options: ComboboxOption[];
  /** Selected value (controlled). Pass `null` or `undefined` for no selection. */
  value?: string | null;
  /** Initial selection in uncontrolled mode. */
  defaultValue?: string | null;
  /** Fires with the new selected value (or `null` when cleared). */
  onChange?: (value: string | null) => void;
  /**
   * Custom filter. Receives every option and the current search string;
   * return `true` to keep the option visible. Default: case-insensitive
   * substring match against `option.label`.
   */
  filter?: (option: ComboboxOption, search: string) => boolean;
  placeholder?: string;
  /** Shown inside the open dropdown when nothing matches. */
  emptyMessage?: ReactNode;
  /**
   * Show the clear button when a value is selected. Default: `true`. Set
   * `false` to lock the combobox to one of the listed options (no null state).
   */
  clearable?: boolean;
  scale?: Scale;
  color?: Color;
  /** When true, marks the input with `aria-invalid` and red ring styling. */
  isInvalid?: boolean;
  disabled?: boolean;
  /** Outer `<div>` className for layout-level overrides. */
  className?: string;
  id?: string;
  /**
   * When set, a hidden `<input name>` is rendered so the value is included
   * in standard form submissions.
   */
  name?: string;
  /** Forwarded to the search `<input>`. */
  ref?: Ref<HTMLInputElement>;
}

const inputScaleMap: Record<Scale, string> = {
  xs: "cs:h-7 cs:px-2 cs:text-[0.625rem]",
  sm: "cs:h-8 cs:px-3 cs:text-xs",
  md: "cs:h-9 cs:px-3 cs:text-sm/6",
  lg: "cs:h-11 cs:px-4 cs:text-base",
};

const optionScaleMap: Record<Scale, string> = {
  xs: "cs:px-2 cs:py-1 cs:text-[0.625rem]",
  sm: "cs:px-3 cs:py-1.5 cs:text-xs",
  md: "cs:px-3 cs:py-2 cs:text-sm",
  lg: "cs:px-4 cs:py-2.5 cs:text-base",
};

const defaultFilter = (option: ComboboxOption, search: string): boolean => {
  if (search.length === 0) return true;
  return option.label.toLowerCase().includes(search.toLowerCase());
};

/**
 * Searchable single-select combobox following the WAI-ARIA 1.2 combobox
 * pattern. Options are filtered live as the user types; keyboard navigation
 * works without the mouse (Arrow ↑/↓, Home, End, Enter, Escape).
 *
 * @example Controlled with project-specific data
 * ```tsx
 * const items = [
 *   { id: "a", name: "Apple" },
 *   { id: "b", name: "Banana" },
 * ];
 * const options = items.map(i => ({ value: i.id, label: i.name }));
 *
 * <Combobox
 *   options={options}
 *   value={selectedId}
 *   onChange={setSelectedId}
 * />
 * ```
 *
 * Out of scope for this v1 (deferred to future PRs):
 * - Multi-select
 * - Async / server-driven option loading
 * - Free-text values not in `options`
 * - Grouped options
 * - Virtualization for very large lists (> ~1k)
 * - Floating-UI-driven flip when near the viewport edge
 */
export function Combobox({
  options,
  value: controlledValue,
  defaultValue = null,
  onChange,
  filter = defaultFilter,
  placeholder = "Search…",
  emptyMessage = "No matches",
  clearable = true,
  scale = "md",
  color,
  isInvalid = false,
  disabled = false,
  className,
  id: externalId,
  name,
  ref,
}: ComboboxProps) {
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue);
  const selectedValue = isControlled ? controlledValue ?? null : internalValue;

  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const generatedId = useId();
  const id = externalId ?? generatedId;
  const listboxId = `${id}-listbox`;
  const getOptionId = (value: string) => `${id}-option-${value}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Keep the internal inputRef (used for focus management) while also
  // forwarding the node to a consumer-provided ref.
  const setInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref)
        (ref as { current: HTMLInputElement | null }).current = node;
    },
    [ref],
  );

  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalUIColor = resolveColor(contextUIColor ?? color ?? "blue");
  const colorStyle = colorToCSSVars(finalUIColor);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === selectedValue) ?? null,
    [options, selectedValue],
  );

  const filteredOptions = useMemo(
    () => options.filter((o) => filter(o, inputValue)),
    [options, inputValue, filter],
  );

  // Restore the input's display label whenever the dropdown closes or the
  // selection changes from outside (controlled updates).
  useEffect(() => {
    if (!isOpen) {
      setInputValue(selectedOption?.label ?? "");
    }
  }, [selectedOption, isOpen]);

  // Click-outside closes the dropdown and rolls the input back to the
  // selected label (preventing the input from being left mid-search).
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
        setInputValue(selectedOption?.label ?? "");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, selectedOption]);

  // Scroll the active (keyboard-highlighted) option into view as it moves.
  // jsdom doesn't implement scrollIntoView, so the call is feature-detected.
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const target = listRef.current.children[activeIndex] as
      | HTMLElement
      | undefined;
    if (target && typeof target.scrollIntoView === "function") {
      target.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const commitValue = useCallback(
    (nextValue: string | null) => {
      if (!isControlled) setInternalValue(nextValue);
      onChange?.(nextValue);
    },
    [isControlled, onChange],
  );

  const selectOption = useCallback(
    (option: ComboboxOption) => {
      if (option.disabled) return;
      commitValue(option.value);
      setInputValue(option.label);
      setIsOpen(false);
      setActiveIndex(-1);
    },
    [commitValue],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value;
    setInputValue(next);
    if (!isOpen) setIsOpen(true);
    // Reset highlight to the first match after each filter pass; users
    // can press Enter to select the most relevant match immediately.
    setActiveIndex(0);
  };

  const handleInputFocus = () => {
    if (disabled) return;
    setIsOpen(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(0);
        } else if (filteredOptions.length > 0) {
          setActiveIndex((prev) =>
            Math.min(prev + 1, filteredOptions.length - 1),
          );
        }
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        if (isOpen && filteredOptions.length > 0) {
          setActiveIndex((prev) => Math.max(prev - 1, 0));
        }
        break;
      }
      case "Home": {
        if (isOpen && filteredOptions.length > 0) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;
      }
      case "End": {
        if (isOpen && filteredOptions.length > 0) {
          event.preventDefault();
          setActiveIndex(filteredOptions.length - 1);
        }
        break;
      }
      case "Enter": {
        if (
          isOpen &&
          activeIndex >= 0 &&
          activeIndex < filteredOptions.length
        ) {
          event.preventDefault();
          selectOption(filteredOptions[activeIndex]);
        }
        break;
      }
      case "Escape": {
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
          setActiveIndex(-1);
          setInputValue(selectedOption?.label ?? "");
        }
        break;
      }
      case "Tab": {
        // Allow native focus movement, just close the dropdown.
        if (isOpen) {
          setIsOpen(false);
          setActiveIndex(-1);
          setInputValue(selectedOption?.label ?? "");
        }
        break;
      }
      default:
        break;
    }
  };

  const handleClear = () => {
    commitValue(null);
    setInputValue("");
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  const activeOptionId =
    isOpen && activeIndex >= 0 && filteredOptions[activeIndex]
      ? getOptionId(filteredOptions[activeIndex].value)
      : undefined;

  const showClear = clearable && !disabled && selectedValue != null;

  return (
    <div
      ref={containerRef}
      className={clsx("cs:relative cs:w-full cs:font-sans", className)}
      style={colorStyle}
    >
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        // aria-controls / aria-owns reference the listbox only while it's
        // actually mounted; axe correctly flags dangling references otherwise.
        aria-controls={isOpen ? listboxId : undefined}
        aria-owns={isOpen ? listboxId : undefined}
        className="cs:relative"
      >
        <input
          ref={setInputRef}
          id={id}
          type="text"
          role="searchbox"
          autoComplete="off"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          aria-autocomplete="list"
          aria-activedescendant={activeOptionId}
          aria-invalid={isInvalid || undefined}
          aria-controls={isOpen ? listboxId : undefined}
          className={clsx(
            "cs:w-full cs:rounded-md cs:border cs:font-sans",
            "cs:bg-white cs:dark:bg-gray-800",
            "cs:text-gray-900 cs:dark:text-gray-100",
            "cs:placeholder:text-gray-400",
            "cs:transition-colors cs:duration-200 cs:ease-in-out cs:motion-reduce:transition-none",
            "cs:disabled:bg-gray-100 cs:disabled:text-gray-400",
            "cs:dark:disabled:bg-gray-700 cs:dark:disabled:text-gray-500",
            FOCUS_RING,
            "cs-focus-visible",
            isInvalid
              ? "cs:border-red-500 cs:dark:border-red-500"
              : "cs:border-gray-300 cs:dark:border-gray-600",
            // Reserve space for the clear button + chevron.
            showClear ? "cs:pr-14" : "cs:pr-8",
            inputScaleMap[scale],
          )}
        />
        {showClear && (
          <button
            type="button"
            aria-label="Clear selection"
            tabIndex={-1}
            onClick={handleClear}
            className={clsx(
              "cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-7",
              "cs:flex cs:items-center cs:justify-center",
              "cs:rounded-full cs:size-5",
              "cs:text-gray-400 cs:hover:text-gray-700",
              "cs:dark:text-gray-500 cs:dark:hover:text-gray-200",
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="cs:size-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
        <span
          aria-hidden
          className={clsx(
            "cs:absolute cs:top-1/2 cs:-translate-y-1/2 cs:right-2.5 cs:pointer-events-none",
            "cs:text-gray-400 cs:dark:text-gray-500",
            "cs:transition-transform",
            isOpen && "cs:rotate-180",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="cs:size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          className={clsx(
            "cs:absolute cs:top-full cs:left-0 cs:right-0 cs:z-10 cs:mt-1",
            "cs:max-h-60 cs:overflow-y-auto",
            "cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700",
            "cs:bg-white cs:dark:bg-gray-800",
            "cs:shadow-lg",
            "cs:py-1",
          )}
        >
          {filteredOptions.length === 0 ? (
            <li
              role="presentation"
              className={clsx(
                "cs:text-gray-500 cs:dark:text-gray-400 cs:italic",
                optionScaleMap[scale],
              )}
            >
              {emptyMessage}
            </li>
          ) : (
            filteredOptions.map((option, index) => {
              const isSelected = option.value === selectedValue;
              const isActive = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={getOptionId(option.value)}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled}
                  onMouseDown={(event) => {
                    // Prevent the input from losing focus, which would close
                    // the dropdown before our click handler runs.
                    event.preventDefault();
                    selectOption(option);
                  }}
                  onMouseEnter={() => {
                    if (!option.disabled) setActiveIndex(index);
                  }}
                  className={clsx(
                    "cs:flex cs:items-center cs:justify-between",
                    "cs:cursor-pointer cs:select-none",
                    option.disabled && "cs:cursor-not-allowed cs:opacity-50",
                    isActive &&
                      !option.disabled &&
                      "cs-bg cs:text-white",
                    !isActive && "cs:text-gray-900 cs:dark:text-gray-100",
                    isSelected && !isActive && "cs:font-semibold",
                    optionScaleMap[scale],
                  )}
                >
                  <span>{option.label}</span>
                  {isSelected && (
                    <svg
                      aria-hidden
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="cs:size-4 cs:ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}

      {name && (
        <input type="hidden" name={name} value={selectedValue ?? ""} />
      )}
    </div>
  );
}
