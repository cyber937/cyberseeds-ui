import {
  type HTMLAttributes,
  type ReactElement,
  type Ref,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
} from "react";
import clsx from "clsx";

type SlotProps = HTMLAttributes<HTMLElement> & { children: ReactElement };

function composeRefs<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
  return (node: T | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}

function composeHandlers<E>(
  ...handlers: (((event: E) => void) | undefined)[]
): (event: E) => void {
  return (event: E) => {
    for (const handler of handlers) {
      handler?.(event);
    }
  };
}

/**
 * Slot merges its props onto its single child element.
 * Used internally to implement the `asChild` pattern.
 */
export const Slot = forwardRef<HTMLElement, SlotProps>(function Slot(props, forwardedRef) {
  const { children, ...slotProps } = props;

  if (!isValidElement(children)) {
    console.warn("Slot: expected a single React element child");
    return null;
  }

  const child = Children.only(children) as ReactElement<Record<string, unknown>>;
  const childProps = child.props;

  // Merge event handlers (onClick, onKeyDown, etc.)
  const mergedProps: Record<string, unknown> = { ...slotProps };
  for (const key of Object.keys(childProps)) {
    if (key.startsWith("on") && typeof childProps[key] === "function") {
      if (typeof slotProps[key as keyof typeof slotProps] === "function") {
        mergedProps[key] = composeHandlers(
          slotProps[key as keyof typeof slotProps] as (event: unknown) => void,
          childProps[key] as (event: unknown) => void,
        );
      } else {
        mergedProps[key] = childProps[key];
      }
    }
  }

  // Merge className
  mergedProps.className = clsx(slotProps.className, childProps.className as string);

  // Merge style
  if (slotProps.style || childProps.style) {
    mergedProps.style = { ...(slotProps.style ?? {}), ...((childProps.style as object) ?? {}) };
  }

  // Compose refs
  const childRef = (child as unknown as { ref?: Ref<HTMLElement> }).ref;
  mergedProps.ref = composeRefs(forwardedRef, childRef);

  return cloneElement(child, mergedProps);
});
