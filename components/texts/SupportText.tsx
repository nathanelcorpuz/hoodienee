import { TextComponent } from "@/lib/types";
import { twMerge } from "tailwind-merge";

export default function SupportText({
  children,
  variant = 1,
  className,
  props,
}: TextComponent) {
  const commonClasses = "text-gray-300";
  if (variant === 1) {
    return (
      <p
        className={twMerge(
          `${commonClasses} font-bold tracking-widest ${className}`
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
  if (variant === 2) {
    return (
      <p
        className={twMerge(
          `${commonClasses} text-sm font-bold tracking-widest ${className}`
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
  if (variant === 3) {
    return (
      <p
        className={twMerge(
          `${commonClasses} text-sm font-bold tracking-wider ${className}`
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
  if (variant === 4) {
    return (
      <p className={twMerge(`${commonClasses} italic ${className}`)} {...props}>
        {children}
      </p>
    );
  }
  if (variant === 5) {
    return (
      <p
        className={twMerge(`${commonClasses} text-sm italic ${className}`)}
        {...props}
      >
        {children}
      </p>
    );
  }
  return (
    <p
      className={twMerge(`${commonClasses} text-xs italic ${className}`)}
      {...props}
    >
      {children}
    </p>
  );
}
