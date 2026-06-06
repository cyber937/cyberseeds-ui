"use client";

import clsx from "clsx";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Popover, type PopoverAlign, type PopoverPlacement } from "../Popover/Popover";

interface MenuContextType {
  open: boolean;
  closeMenu: () => void;
  closeOnSelect: boolean;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

function useMenuContext(component: string): MenuContextType {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error(`${component} must be used within a <Menu>`);
  }
  return ctx;
}

interface MenuProps {
  children: ReactNode;
  placement?: PopoverPlacement;
  align?: PopoverAlign;
  /** Close the menu after an item is selected. Defaults to `true`. */
  closeOnSelect?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Menu({
  children,
  placement = "bottom",
  align = "start",
  closeOnSelect = true,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: MenuProps) {
  const isControlled = controlledOpen !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const closeMenu = useCallback(() => setOpen(false), [setOpen]);

  const contextValue = useMemo<MenuContextType>(
    () => ({ open, closeMenu, closeOnSelect }),
    [open, closeMenu, closeOnSelect],
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Popover
        open={open}
        onOpenChange={setOpen}
        placement={placement}
        align={align}
      >
        {children}
      </Popover>
    </MenuContext.Provider>
  );
}

// ----------------------------------------------------------------- Trigger

interface MenuTriggerProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

function MenuTrigger({ children, asChild = false, className }: MenuTriggerProps) {
  return (
    <Popover.Trigger asChild={asChild} haspopup="menu" className={className}>
      {children}
    </Popover.Trigger>
  );
}

// ----------------------------------------------------------------- Content

interface MenuContentProps {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

// Roving focus across the menu items, per the WAI-ARIA menu pattern.
function handleMenuKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
  const items = Array.from(
    e.currentTarget.querySelectorAll<HTMLElement>(
      '[role="menuitem"]:not([aria-disabled="true"])',
    ),
  );
  if (items.length === 0) return;

  const currentIndex = items.indexOf(document.activeElement as HTMLElement);
  let nextIndex: number | null = null;

  switch (e.key) {
    case "ArrowDown":
      nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
      break;
    case "ArrowUp":
      nextIndex =
        currentIndex < 0
          ? items.length - 1
          : (currentIndex - 1 + items.length) % items.length;
      break;
    case "Home":
      nextIndex = 0;
      break;
    case "End":
      nextIndex = items.length - 1;
      break;
    default:
      return;
  }

  e.preventDefault();
  items[nextIndex].focus();
}

function MenuContent({ children, className, "aria-label": ariaLabel }: MenuContentProps) {
  return (
    <Popover.Content
      role="menu"
      autoFocus
      aria-label={ariaLabel}
      onKeyDown={handleMenuKeyDown}
      className={clsx("cs:py-1", className)}
    >
      {children}
    </Popover.Content>
  );
}

// ----------------------------------------------------------------- Item

interface MenuItemProps {
  children: ReactNode;
  /** Called when the item is activated (click or Enter/Space). */
  onSelect?: () => void;
  disabled?: boolean;
  /** Render in the destructive (red) style. */
  destructive?: boolean;
  /** Optional leading icon / element. */
  icon?: ReactNode;
  className?: string;
}

function MenuItem({
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  className,
}: MenuItemProps) {
  const { closeMenu, closeOnSelect } = useMenuContext("Menu.Item");

  const activate = useCallback(() => {
    if (disabled) return;
    onSelect?.();
    if (closeOnSelect) closeMenu();
  }, [disabled, onSelect, closeOnSelect, closeMenu]);

  return (
    <button
      type="button"
      role="menuitem"
      tabIndex={-1}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      onClick={activate}
      className={clsx(
        "cs:flex cs:w-full cs:items-center cs:gap-2 cs:rounded-sm cs:px-2 cs:py-1.5",
        "cs:text-left cs:text-sm cs:font-sans cs:cursor-pointer",
        "cs:border-0 cs:bg-transparent cs:outline-none",
        "cs:focus-visible:bg-gray-100 cs:dark:focus-visible:bg-gray-700",
        "cs:hover:bg-gray-100 cs:dark:hover:bg-gray-700",
        destructive
          ? "cs:text-red-600 cs:dark:text-red-400"
          : "cs:text-gray-900 cs:dark:text-gray-200",
        disabled && "cs:opacity-50 cs:cursor-not-allowed cs:pointer-events-none",
        className,
      )}
    >
      {icon && <span className="cs:shrink-0 cs:inline-flex">{icon}</span>}
      <span className="cs:flex-1">{children}</span>
    </button>
  );
}

// ----------------------------------------------------------------- Label / Separator

function MenuLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "cs:px-2 cs:py-1 cs:text-xs cs:font-semibold cs:uppercase cs:tracking-wider",
        "cs:text-gray-500 cs:dark:text-gray-400 cs:select-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MenuSeparator({ className }: { className?: string }) {
  return (
    <div
      role="separator"
      className={clsx(
        "cs:my-1 cs:h-px cs:bg-gray-200 cs:dark:bg-gray-700",
        className,
      )}
    />
  );
}

Menu.Trigger = MenuTrigger;
Menu.Content = MenuContent;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.Separator = MenuSeparator;
