"use client";

import { clsx } from "clsx";
import { ReactNode, useId, useState } from "react";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false, ...props }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <div className="cs:border-b cs:border-gray-200 cs:dark:border-gray-500 cs:overflow-hidden" {...props}>
      <button
        id={buttonId}
        className="cs:w-full cs:flex cs:justify-between cs:items-center cs:text-sm cs:p-4 cs:text-left cs:font-medium cs:focus:outline-none cs:cursor-pointer cs:dark:text-gray-200 cs:hover:bg-gray-100 cs:hover:dark:bg-gray-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {title}
        <span
          className={clsx(
            "cs:transform cs:transition-transform cs:duration-300",
            isOpen ? "cs:rotate-180" : "cs:rotate-0"
          )}
          aria-hidden="true"
        >▼</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={clsx(
          "cs:transition-all cs:duration-200 cs:ease-in-out cs:overflow-hidden cs:px-4",
          isOpen ? "cs:max-h-96 cs:opacity-100 cs:py-2" : "cs:max-h-0 cs:opacity-0 cs:py-0"
        )}
      >
        <div className="cs:text-gray-700 cs:dark:text-gray-400">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="cs:bg-white cs:dark:bg-gray-800 cs:text-sm cs:border cs:border-gray-300 cs:dark:border-gray-600">{children}</div>;
}
