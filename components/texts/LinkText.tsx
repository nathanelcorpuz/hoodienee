import { TextVariant } from "@/lib/types";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

export default function LinkText({
  children,
  props,
  href = "",
  className,
  variant = 5,
}: {
  children: React.ReactNode;
  props?: Omit<LinkProps, "href">;
  href: string;
  className?: string | undefined;
  variant?: TextVariant;
}) {
  const commonClasses = "underline font-bold text-gray-400";

  if (variant === 1) {
    return (
      <Link
        className={twMerge(
          `${commonClasses} text-lg underline-offset-8 ${className}`
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (variant === 2) {
    return (
      <Link
        className={twMerge(
          `${commonClasses} text-lg underline-offset-4 ${className}`
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (variant === 3) {
    return (
      <Link
        className={twMerge(`${commonClasses} underline-offset-8 ${className}`)}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (variant === 4) {
    return (
      <Link
        className={twMerge(`${commonClasses} underline-offset-4 ${className}`)}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (variant === 5) {
    return (
      <Link
        className={twMerge(
          `${commonClasses} text-sm underline-offset-8 ${className}`
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={twMerge(
        `${commonClasses} text-xs underline-offset-4 ${className}`
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
