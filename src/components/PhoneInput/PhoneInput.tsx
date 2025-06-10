import React, { useRef } from "react";
import { focusOutlineColorMap } from "../Constants/colorMap";
import type { Color, Scale } from "../DesignSystemUtils";
import { Label } from "../Label/Label";
import { useUIColor } from "../useUIColor";

const formatPhoneNumber = (value: string) => {
  if (value === undefined) return "";
  const numbers = value.replace(/\D/g, "");
  if (numbers.length === 0) return "";
  if (numbers.length <= 2) return `(${numbers}`;
  if (numbers.length <= 5)
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
    6,
    10
  )}`;
};

interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  label?: string;
  scale?: Scale;
  color?: Color;
  require?: boolean;
  isInvalid?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export function PhoneInput({
  label,
  scale = "md",
  color = "red",
  require = false,
  isInvalid = false,
  value,
  onChange,
  ...props
}: PhoneInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { color: contextUIColor } = useUIColor() ?? { color: undefined };

  const finalUIColor = contextUIColor ?? color;

  const scaleMap: Record<Scale, string> = {
    sm: "cs:px-2 cs:py-1 cs:text-xs",
    md: "cs:px-3 cs:py-1.5 cs:text-sm/6",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const originalFormatted = input.value;
    const originalCursor = input.selectionStart || 0;

    const rawDigits = originalFormatted.replace(/\D/g, "").slice(0, 10);
    const newFormatted = formatPhoneNumber(rawDigits);

    // --- カーソル補正ロジック ---
    let digitIndex = 0;
    for (let j = 0; j < originalCursor; j++) {
      if (/\d/.test(originalFormatted[j])) {
        digitIndex++;
      }
    }

    let newCursor = 0;
    let digitCount = 0;
    while (newCursor < newFormatted.length && digitCount < digitIndex) {
      if (/\d/.test(newFormatted[newCursor])) {
        digitCount++;
      }
      newCursor++;
    }

    while (
      newCursor < newFormatted.length &&
      /[)\s-]/.test(newFormatted[newCursor])
    ) {
      newCursor++;
    }

    onChange?.(rawDigits);

    // カーソル位置補正は次フレームで
    setTimeout(() => {
      inputRef.current?.setSelectionRange(newCursor, newCursor);
    }, 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      const input = e.currentTarget;
      const cursorPos = input.selectionStart ?? 0;
      const raw = input.value;

      // 記号の直後（例えば ")" や "-" の直前）でBackspaceされたとき、数字も消すように調整
      if (cursorPos > 0 && [")", "-"].includes(raw[cursorPos - 1])) {
        e.preventDefault();

        // カーソルを1つ前に戻して数字を削除
        const newPos = cursorPos - 1;
        const newRaw = raw.slice(0, newPos - 1) + raw.slice(cursorPos);
        const numeric = newRaw.replace(/\D/g, "");
        onChange?.(numeric.slice(0, 10));

        // カーソルを調整（次の render で）
        setTimeout(() => {
          inputRef.current?.setSelectionRange(newPos - 1, newPos - 1);
        }, 0);
      }

      if (
        cursorPos > 0 &&
        " " === raw[cursorPos - 1] &&
        ")" === raw[cursorPos - 2]
      ) {
        e.preventDefault();

        // カーソルを2つ前に戻して数字を削除
        const newPos = cursorPos - 2;
        const newRaw = raw.slice(0, newPos - 1) + raw.slice(cursorPos);
        const numeric = newRaw.replace(/\D/g, "");
        onChange?.(numeric.slice(0, 10));

        // カーソルを調整（次の render で）
        setTimeout(() => {
          inputRef.current?.setSelectionRange(newPos - 1, newPos - 1);
        }, 0);
      }
    }
  };

  return (
    <div>
      {label && (
        <Label
          text={label}
          scale={scale}
          className="cs:mb-2"
          require={require}
        />
      )}
      <input
        ref={inputRef}
        type="tel"
        value={value ? formatPhoneNumber(String(value)) : ""}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="(123) 456-7890"
        maxLength={16}
        className={`cs:block cs:w-full cs:rounded-md cs:disabled:bg-amber-100 cs:disabled:text-gray-400 cs:font-sans cs:outline-1 placeholder:cs:text-gray-400 cs:dark:bg-gray-800 cs:text-gray-900 cs:dark:text-gray-200 cs:-outline-offset-1 cs:outline-gray-300 cs:placeholder:text-gray-400 cs:focus:outline-2 cs:focus:-outline-offset-2  cs:dark:disabled:text-gray-800 ${
          isInvalid
            ? "cs:text-red-400 cs:bg-red-100/50 cs:outline-red-300 cs:dark:bg-red-200 cs:dark:text-red-500"
            : "cs:text-gray-900 cs:bg-white cs:dark:bg-gray-800 cs:outline-gray-300"
        } ${scaleMap[scale]} ${focusOutlineColorMap[finalUIColor]}`}
        {...props}
      />
    </div>
  );
}
