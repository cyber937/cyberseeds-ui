"use client";

import clsx from "clsx";
import { useMemo, useState } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";
import { Popover } from "../Popover/Popover";
import { Select, SelectOption } from "../Select/Select";

interface DatePickerProps {
  /** Controlled selected date. */
  value?: Date | null;
  /** Uncontrolled initial date. */
  defaultValue?: Date | null;
  onChange?: (date: Date | null) => void;
  min?: Date;
  max?: Date;
  scale?: Scale;
  color?: Color;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const triggerScale: Record<Scale, string> = {
  xs: "cs:text-xs cs:px-2 cs:h-7",
  sm: "cs:text-xs cs:px-3 cs:h-8",
  md: "cs:text-sm cs:px-3 cs:h-9",
  lg: "cs:text-base cs:px-4 cs:h-11",
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function addMonths(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}
function formatDate(d: Date): string {
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}, ${d.getFullYear()}`;
}

// 6 weeks of 7 days covering the view month, padded with adjacent-month days.
function buildGrid(viewMonth: Date): Date[][] {
  const first = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const gridStart = new Date(first);
  gridStart.setDate(1 - first.getDay());
  const weeks: Date[][] = [];
  const cursor = new Date(gridStart);
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

export function DatePicker({
  value: controlledValue,
  defaultValue = null,
  onChange,
  min,
  max,
  scale = "md",
  color = "blue",
  disabled = false,
  placeholder = "Select a date",
  className,
}: DatePickerProps) {
  const { color: contextColor } = useUIColor() ?? { color: undefined };
  const colorStyle = colorToCSSVars(resolveColor(contextColor ?? color));

  const isControlled = controlledValue !== undefined;
  const [uncontrolled, setUncontrolled] = useState<Date | null>(defaultValue);
  const selected = isControlled ? controlledValue : uncontrolled;

  const [viewMonth, setViewMonth] = useState<Date>(
    () => startOfDay(selected ?? new Date()),
  );
  const [open, setOpen] = useState(false);

  const weeks = useMemo(() => buildGrid(viewMonth), [viewMonth]);
  const today = startOfDay(new Date());

  // Year options for the dropdown: min..max when bounded, otherwise a window
  // around today, always widened to include the month being viewed.
  const viewYear = viewMonth.getFullYear();
  const years = useMemo(() => {
    const todayYear = new Date().getFullYear();
    const lo = Math.min(min ? min.getFullYear() : todayYear - 10, viewYear);
    const hi = Math.max(max ? max.getFullYear() : todayYear + 10, viewYear);
    const list: number[] = [];
    for (let y = lo; y <= hi; y++) list.push(y);
    return list;
  }, [min, max, viewYear]);

  function isDisabledDay(day: Date): boolean {
    if (min && startOfDay(day) < startOfDay(min)) return true;
    if (max && startOfDay(day) > startOfDay(max)) return true;
    return false;
  }

  function pick(day: Date) {
    const next = startOfDay(day);
    if (!isControlled) setUncontrolled(next);
    onChange?.(next);
    setOpen(false);
  }

  function clear() {
    if (!isControlled) setUncontrolled(null);
    onChange?.(null);
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen} placement="bottom" align="start">
      <Popover.Trigger asChild>
        <button
          type="button"
          disabled={disabled}
          aria-label={selected ? formatDate(selected) : placeholder}
          className={clsx(
            "cs:inline-flex cs:items-center cs:justify-between cs:gap-2 cs:min-w-44",
            "cs:rounded-md cs:border cs:border-gray-300 cs:dark:border-gray-600",
            "cs:bg-white cs:dark:bg-gray-800 cs:font-sans cs:text-left",
            "cs:text-gray-900 cs:dark:text-gray-200",
            "cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-[var(--cs-ui-focus)]",
            "cs:disabled:opacity-50 cs:disabled:cursor-not-allowed cs:cursor-pointer",
            triggerScale[scale],
            className,
          )}
          style={colorStyle}
        >
          <span className={selected ? "" : "cs:text-gray-400 cs:dark:text-gray-500"}>
            {selected ? formatDate(selected) : placeholder}
          </span>
          <svg
            className="cs:h-4 cs:w-4 cs:text-gray-400 cs:shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0V11.25A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        </button>
      </Popover.Trigger>

      <Popover.Content aria-label="Choose date" className="cs:p-3">
        <div style={colorStyle}>
          <div className="cs:mb-2 cs:flex cs:items-center cs:gap-1.5">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setViewMonth((m) => addMonths(m, -1))}
              className="cs:rounded-sm cs:p-1 cs:text-gray-600 cs:dark:text-gray-300 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700 cs:cursor-pointer"
            >
              ‹
            </button>
            <div className="cs:flex cs:flex-1 cs:gap-1.5">
              <Select
                scale="sm"
                aria-label="Month"
                value={String(viewMonth.getMonth())}
                onChange={(e) =>
                  setViewMonth(new Date(viewMonth.getFullYear(), Number(e.target.value), 1))
                }
              >
                {MONTHS.map((m, i) => (
                  <SelectOption key={m} value={String(i)} label={m} />
                ))}
              </Select>
              <Select
                scale="sm"
                aria-label="Year"
                value={String(viewMonth.getFullYear())}
                onChange={(e) =>
                  setViewMonth(new Date(Number(e.target.value), viewMonth.getMonth(), 1))
                }
              >
                {years.map((y) => (
                  <SelectOption key={y} value={String(y)} label={String(y)} />
                ))}
              </Select>
            </div>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewMonth((m) => addMonths(m, 1))}
              className="cs:rounded-sm cs:p-1 cs:text-gray-600 cs:dark:text-gray-300 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700 cs:cursor-pointer"
            >
              ›
            </button>
          </div>

          <table
            role="grid"
            aria-label={`${MONTHS[viewMonth.getMonth()]} ${viewMonth.getFullYear()}`}
            className="cs:border-collapse"
          >
            <thead>
              <tr>
                {WEEKDAYS.map((wd) => (
                  <th
                    key={wd}
                    scope="col"
                    className="cs:h-8 cs:w-9 cs:text-xs cs:font-medium cs:text-gray-400 cs:dark:text-gray-500"
                  >
                    {wd}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, wi) => (
                <tr key={wi}>
                  {week.map((day) => {
                    const inMonth = day.getMonth() === viewMonth.getMonth();
                    const isSelected = selected != null && sameDay(day, selected);
                    const isToday = sameDay(day, today);
                    const dayDisabled = isDisabledDay(day);
                    return (
                      <td key={day.toISOString()} className="cs:p-0">
                        <button
                          type="button"
                          disabled={dayDisabled}
                          aria-pressed={isSelected}
                          aria-current={isToday ? "date" : undefined}
                          onClick={() => pick(day)}
                          className={clsx(
                            "cs:h-9 cs:w-9 cs:rounded-md cs:text-sm cs:cursor-pointer",
                            "cs:focus-visible:outline-2 cs:focus-visible:outline-[var(--cs-ui-focus)]",
                            !inMonth && "cs:text-gray-300 cs:dark:text-gray-600",
                            inMonth &&
                              !isSelected &&
                              "cs:text-gray-900 cs:dark:text-gray-200 cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",
                            isSelected && "cs-btn-primary cs:text-white",
                            isToday && !isSelected && "cs:font-bold cs:underline",
                            dayDisabled &&
                              "cs:opacity-30 cs:cursor-not-allowed cs:hover:bg-transparent",
                          )}
                        >
                          {day.getDate()}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cs:mt-2 cs:flex cs:justify-between">
            <button
              type="button"
              onClick={() => {
                setViewMonth(startOfDay(new Date()));
              }}
              className="cs:text-xs cs:text-gray-600 cs:dark:text-gray-300 cs:hover:underline cs:cursor-pointer"
            >
              Today
            </button>
            <button
              type="button"
              onClick={clear}
              className="cs:text-xs cs:text-gray-600 cs:dark:text-gray-300 cs:hover:underline cs:cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}
