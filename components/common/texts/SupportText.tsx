import { TextComponent } from "@/lib/types";

export default function SupportText({
  children,
  variant = 1,
  className,
}: TextComponent) {
  const commonClasses = "text-gray-300";
  if (variant === 1) {
    return (
      <p className={`${commonClasses} font-bold tracking-widest ${className}`}>
        {children}
      </p>
    );
  }
  if (variant === 2) {
    return (
      <p
        className={`${commonClasses} text-sm font-bold tracking-widest ${className}`}
      >
        {children}
      </p>
    );
  }
  if (variant === 3) {
    return (
      <p
        className={`${commonClasses} text-sm font-bold tracking-wider ${className}`}
      >
        {children}
      </p>
    );
  }
  if (variant === 4) {
    return <p className={`${commonClasses} italic ${className}`}>{children}</p>;
  }
  if (variant === 5) {
    return (
      <p className={`${commonClasses} text-sm italic ${className}`}>
        {children}
      </p>
    );
  }
  return (
    <p className={`${commonClasses} text-xs italic ${className}`}>{children}</p>
  );
}
