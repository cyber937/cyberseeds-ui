"use client";

import clsx from "clsx";
import { Children, isValidElement, memo, type ReactElement, type ReactNode } from "react";

interface BreadcrumbProps {
  children: ReactNode;
  /** Custom separator between items. Default is "/". */
  separator?: ReactNode;
  className?: string;
}

interface BreadcrumbItemProps {
  children: ReactNode;
  /** Renders a link when provided; otherwise renders as plain text. */
  href?: string;
  /**
   * Marks the item as the current page (typically the last one).
   * Renders without a link and gets aria-current="page".
   */
  current?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function BreadcrumbRoot({
  children,
  separator = "/",
  className,
}: BreadcrumbProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement[];
  const lastIndex = items.length - 1;

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx("cs:font-sans cs:text-sm", className)}
    >
      <ol className="cs:flex cs:flex-wrap cs:items-center cs:gap-x-2 cs:gap-y-1 cs:list-none cs:p-0 cs:m-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="cs:flex cs:items-center cs:gap-x-2"
          >
            {item}
            {i < lastIndex && (
              <span
                className="cs:text-gray-400 cs:dark:text-gray-500 cs:select-none"
                aria-hidden="true"
              >
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const BreadcrumbItem = memo(function BreadcrumbItem({
  children,
  href,
  current = false,
  className,
  onClick,
}: BreadcrumbItemProps) {
  if (current || !href) {
    return (
      <span
        aria-current={current ? "page" : undefined}
        className={clsx(
          current
            ? "cs:text-gray-900 cs:dark:text-gray-100 cs:font-medium"
            : "cs:text-gray-600 cs:dark:text-gray-400",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        "cs:text-gray-600 cs:dark:text-gray-400 cs:hover:text-gray-900 cs:dark:hover:text-gray-200 cs:hover:underline cs:focus-visible:outline-2 cs:focus-visible:outline-offset-2 cs:focus-visible:outline-blue-600 cs:rounded-sm",
        className,
      )}
    >
      {children}
    </a>
  );
});

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
});
