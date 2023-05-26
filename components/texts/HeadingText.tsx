import { TextVariant } from "@/lib/types";
import { twMerge } from "tailwind-merge";

export default function HeadingText({
  children,
  variant = 4,
  className,
}: {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}) {
  const commonClasses = "font-extrabold tracking-wide uppercase";

  if (variant === 1) {
    return (
      <h1
        className={twMerge(`${commonClasses} text-4xl
      sm:text-5xl md:text-7xl ${className}`)}
      >
        {children}
      </h1>
    );
  }
  if (variant === 2) {
    return (
      <h2
        className={twMerge(`${commonClasses} text-3xl
      sm:text-4xl md:text-6xl ${className}`)}
      >
        {children}
      </h2>
    );
  }
  if (variant === 3) {
    return (
      <h3
        className={twMerge(`${commonClasses} text-2xl
      sm:text-3xl md:text-5xl ${className}`)}
      >
        {children}
      </h3>
    );
  }
  if (variant === 4) {
    return (
      <h4
        className={twMerge(`${commonClasses} text-xl
      sm:text-2xl md:text-4xl ${className}`)}
      >
        {children}
      </h4>
    );
  }
  if (variant === 5) {
    return (
      <h5
        className={twMerge(`${commonClasses} text-lg
      sm:text-xl md:text-3xl ${className}`)}
      >
        {children}
      </h5>
    );
  }
  return (
    <h6
      className={twMerge(`${commonClasses}
      sm:text-lg md:text-2xl ${className}`)}
    >
      {children}
    </h6>
  );
}
