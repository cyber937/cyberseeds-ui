"use client";

import clsx from "clsx";
import {
  type ReactNode,
  useCallback,
  useId,
  useRef,
  useState,
} from "react";
import type { Scale } from "../DesignSystemUtils";

export interface FileRejection {
  file: File;
  reason: "size" | "type";
}

interface FileUploadProps {
  /** Comma-separated accept list, e.g. `".xlsx,.csv"` or `"image/*"`. */
  accept?: string;
  multiple?: boolean;
  /** Max bytes per file. Files larger than this are rejected. */
  maxSize?: number;
  disabled?: boolean;
  scale?: Scale;
  /** Controlled selected files. Pair with `onChange`. */
  value?: File[];
  /** Called with the full selected list whenever files are added or removed. */
  onChange?: (files: File[]) => void;
  /** Called with files that failed `accept` / `maxSize` validation. */
  onReject?: (rejections: FileRejection[]) => void;
  /** Primary call-to-action text inside the dropzone. */
  label?: ReactNode;
  /** Secondary hint text under the label. */
  hint?: ReactNode;
  /** Marks the field invalid: red dropzone border + `aria-invalid`. */
  isInvalid?: boolean;
  /** Forwarded to the dropzone (label association / error linking). */
  id?: string;
  "aria-describedby"?: string;
  className?: string;
}

const zonePaddingMap: Record<Scale, string> = {
  xs: "cs:p-3",
  sm: "cs:p-4",
  md: "cs:p-6",
  lg: "cs:p-8",
};

const labelTextMap: Record<Scale, string> = {
  xs: "cs:text-xs",
  sm: "cs:text-sm",
  md: "cs:text-sm",
  lg: "cs:text-base",
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const size = bytes / Math.pow(1024, i);
  return `${size >= 10 || i === 0 ? Math.round(size) : size.toFixed(1)} ${units[i]}`;
}

// Matches a file against a comma-separated accept list (extensions, exact
// MIME types, or wildcard MIME types like `image/*`).
function matchesAccept(file: File, accept: string): boolean {
  const tokens = accept
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
  if (tokens.length === 0) return true;

  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();

  return tokens.some((token) => {
    if (token.startsWith(".")) return name.endsWith(token);
    if (token.endsWith("/*")) return type.startsWith(token.slice(0, -1));
    return type === token;
  });
}

export function FileUpload({
  accept,
  multiple = false,
  maxSize,
  disabled = false,
  scale = "md",
  value,
  onChange,
  onReject,
  label = "Click to choose a file or drag it here",
  hint,
  isInvalid = false,
  id,
  "aria-describedby": ariaDescribedby,
  className,
}: FileUploadProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const isControlled = value !== undefined;
  const [internalFiles, setInternalFiles] = useState<File[]>([]);
  const files = isControlled ? value : internalFiles;

  const commit = useCallback(
    (next: File[]) => {
      if (!isControlled) setInternalFiles(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const addFiles = useCallback(
    (incoming: FileList | File[]) => {
      if (disabled) return;
      const list = Array.from(incoming);
      const accepted: File[] = [];
      const rejected: FileRejection[] = [];

      for (const file of list) {
        if (accept && !matchesAccept(file, accept)) {
          rejected.push({ file, reason: "type" });
        } else if (maxSize !== undefined && file.size > maxSize) {
          rejected.push({ file, reason: "size" });
        } else {
          accepted.push(file);
        }
      }

      if (rejected.length > 0) onReject?.(rejected);
      if (accepted.length === 0) return;

      commit(multiple ? [...files, ...accepted] : accepted.slice(0, 1));
    },
    [disabled, accept, maxSize, onReject, commit, multiple, files],
  );

  const removeFile = useCallback(
    (index: number) => {
      commit(files.filter((_, i) => i !== index));
    },
    [commit, files],
  );

  const openPicker = useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPicker();
      }
    },
    [openPicker],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragActive(false);
      if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
    },
    [addFiles],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!disabled) setDragActive(true);
    },
    [disabled],
  );

  return (
    <div className={clsx("cs:font-sans", className)}>
      <div
        role="button"
        id={id}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        aria-label={typeof label === "string" ? label : "Upload file"}
        aria-invalid={isInvalid || undefined}
        aria-describedby={ariaDescribedby}
        onClick={openPicker}
        onKeyDown={handleKeyDown}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={() => setDragActive(false)}
        className={clsx(
          "cs:flex cs:flex-col cs:items-center cs:justify-center cs:gap-1 cs:text-center",
          "cs:rounded-lg cs:border-2 cs:border-dashed cs:transition-colors",
          "cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-blue-500",
          zonePaddingMap[scale],
          dragActive
            ? "cs:border-blue-500 cs:bg-blue-50 cs:dark:bg-blue-950/30"
            : isInvalid
              ? "cs:border-red-500 cs:dark:border-red-500 cs:bg-gray-50 cs:dark:bg-gray-800/40"
              : "cs:border-gray-300 cs:dark:border-gray-600 cs:bg-gray-50 cs:dark:bg-gray-800/40",
          disabled
            ? "cs:opacity-50 cs:cursor-not-allowed"
            : "cs:cursor-pointer cs:hover:border-gray-400 cs:dark:hover:border-gray-500",
        )}
      >
        <svg
          className="cs:h-6 cs:w-6 cs:text-gray-400 cs:dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12 12 7.5 7.5 12M12 7.5v9"
          />
        </svg>
        <p className={clsx("cs:font-medium cs:text-gray-700 cs:dark:text-gray-200", labelTextMap[scale])}>
          {label}
        </p>
        {hint && (
          <p className="cs:text-xs cs:text-gray-500 cs:dark:text-gray-400">{hint}</p>
        )}
      </div>

      {/* Sibling (not nested in the role="button" zone) to avoid nested
          interactive controls; opened programmatically via the ref. */}
      <input
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        aria-label={typeof label === "string" ? label : "File upload"}
        tabIndex={-1}
        className="cs:sr-only"
        onChange={(e) => {
          if (e.target.files?.length) addFiles(e.target.files);
          // Reset so selecting the same file again re-fires onChange.
          e.target.value = "";
        }}
      />

      {files.length > 0 && (
        <ul className="cs:mt-3 cs:space-y-2">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${file.size}-${index}`}
              className="cs:flex cs:items-center cs:justify-between cs:gap-3 cs:rounded-md cs:border cs:border-gray-200 cs:dark:border-gray-700 cs:bg-white cs:dark:bg-gray-800 cs:px-3 cs:py-2"
            >
              <div className="cs:min-w-0">
                <p className="cs:truncate cs:text-sm cs:text-gray-800 cs:dark:text-gray-200">
                  {file.name}
                </p>
                <p className="cs:text-xs cs:text-gray-500 cs:dark:text-gray-400">
                  {formatBytes(file.size)}
                </p>
              </div>
              {!disabled && (
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  aria-label={`Remove ${file.name}`}
                  className="cs:shrink-0 cs:rounded-sm cs:p-1 cs:text-gray-400 cs:hover:text-gray-700 cs:dark:hover:text-gray-200 cs:focus-visible:outline-2 cs:focus-visible:outline-blue-500 cs:cursor-pointer"
                >
                  <svg
                    className="cs:h-4 cs:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
