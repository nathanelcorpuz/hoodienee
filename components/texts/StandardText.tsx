import { TextComponent } from "@/lib/types";
import { twMerge } from "tailwind-merge";

export default function StandardText({
  children,
  variant = 3,
  className,
}: TextComponent) {
  const commonClasses = "text-gray-300";
  if (variant === 1) {
    return (
      <p className={twMerge(`${commonClasses} text-lg ${className}`)}>
        {children}
      </p>
    );
  }
  if (variant === 2) {
    return (
      <p className={twMerge(`${commonClasses} ${className}`)}>{children}</p>
    );
  }
  if (variant === 3) {
    return (
      <p className={twMerge(`${commonClasses} text-sm ${className}`)}>
        {children}
      </p>
    );
  }
  if (variant === 4) {
    return (
      <p className={twMerge(`${commonClasses} text-xs ${className}`)}>
        {children}
      </p>
    );
  }
  if (variant === 5) {
    return (
      <p className={twMerge(`${commonClasses} text-sm font-bold ${className}`)}>
        {children}
      </p>
    );
  }
  return (
    <p className={twMerge(`${commonClasses} text-sm italic ${className}`)}>
      {children}
    </p>
  );
}
