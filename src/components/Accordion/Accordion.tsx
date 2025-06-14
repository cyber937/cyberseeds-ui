"use client";

import { clsx } from "clsx";
import { ReactNode, useState } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cs:border-b cs:border-gray-200 cs:dark:border-gray-500 cs:overflow-hidden">
      <button
        className="cs:w-full cs:flex cs:justify-between cs:items-center cs:text-sm cs:p-4 cs:text-left cs:font-medium cs:focus:outline-none cs:cursor-pointer cs:dark:text-gray-200 cs:hover:bg-gray-100 cs:hover:dark:bg-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={clsx(
          "cs:transform cs:transition-transform cs:duration-300",
          isOpen ? "cs:rotate-180" : "cs:rotate-0"
        )}>▼</span>
      </button>
      <div
        className={clsx(
          "cs:transition-all cs:duration-200 cs:ease-in-out cs:overflow-hidden cs:px-4",
          isOpen ? "cs:max-h-96 cs:opacity-100 cs:py-2" : "cs:max-h-0 cs:opacity-0 cs:py-0"
        )}
      >
        <div className="text-gray-700 cs:dark:text-gray-400">{children}</div>
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