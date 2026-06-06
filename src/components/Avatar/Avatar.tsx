import clsx from "clsx";
import { memo, useState, type ReactNode, type Ref } from "react";
import { colorToCSSVars, resolveColor } from "../Constants/colorUtils";
import type { Color, Scale } from "../DesignSystemUtils";
import { useUIColor } from "../UIColorProvider/useUIColor";

interface AvatarProps {
  /** Image URL. If absent or fails to load, falls back to initials/icon/text. */
  src?: string;
  /** Alt text for the image. Also used by AT when the image fails to load. */
  alt?: string;
  /**
   * Full name. When the image is missing/broken, the first letter of each
   * word (max 2 initials) is rendered as the fallback content.
   */
  name?: string;
  /** Custom fallback content (icon, emoji, etc.). Wins over `name` initials. */
  fallback?: ReactNode;
  scale?: Scale;
  color?: Color;
  /** Apply circular shape (default) vs. square with rounded corners. */
  shape?: "circle" | "square";
  className?: string;
  ref?: Ref<HTMLSpanElement>;
}

const scaleMap: Record<Scale, string> = {
  xs: "cs:size-6 cs:text-[0.625rem]",
  sm: "cs:size-8 cs:text-xs",
  md: "cs:size-10 cs:text-sm",
  lg: "cs:size-12 cs:text-base",
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar = memo(function Avatar({
  src,
  alt,
  name,
  fallback,
  scale = "md",
  color = "gray",
  shape = "circle",
  className,
  ref,
}: AvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { color: contextUIColor } = useUIColor() ?? { color: undefined };
  const finalColor = resolveColor(contextUIColor ?? color);
  const colorStyle = colorToCSSVars(finalColor);

  const showImage = !!src && !imageFailed;
  const fallbackContent = fallback ?? (name ? getInitials(name) : null);

  return (
    <span
      ref={ref}
      // When a real <img> is rendered, it already carries the implicit role
      // and the alt attribute, so we don't double-label the wrapper. For the
      // fallback case the wrapper itself acts as the labelled image.
      role={showImage ? undefined : "img"}
      aria-label={showImage ? undefined : (alt ?? name ?? "Avatar")}
      style={!showImage ? colorStyle : undefined}
      className={clsx(
        "cs:inline-flex cs:items-center cs:justify-center cs:overflow-hidden cs:select-none cs:font-medium cs:font-sans cs:shrink-0",
        shape === "circle" ? "cs:rounded-full" : "cs:rounded-md",
        !showImage && "cs-pill",
        scaleMap[scale],
        className,
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? ""}
          className="cs:w-full cs:h-full cs:object-cover"
          onError={() => setImageFailed(true)}
          draggable={false}
        />
      ) : (
        <span aria-hidden="true">{fallbackContent}</span>
      )}
    </span>
  );
});
