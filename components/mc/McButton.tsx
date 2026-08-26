import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  small?: boolean;
  external?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "button" | "submit";
};

/**
 * The one button in the system. Renders an anchor when given an href so
 * keyboard and middle-click behaviour stay native, a real <button> otherwise.
 */
export default function McButton({
  children,
  href,
  onClick,
  className = "",
  icon = false,
  small = false,
  external = false,
  ariaLabel,
  disabled = false,
  type = "button",
}: Props) {
  const cls = [
    "mc-button",
    icon ? "icon" : "",
    small ? "small" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    if (external || href.startsWith("http") || href.endsWith(".pdf")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
