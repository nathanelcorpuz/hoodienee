import { TextVariant } from "@/lib/types";

export default function HeadingText({
  children,
  variant = 6,
  className,
}: {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}) {
  const commonClasses = "font-black";
  if (variant === 1) {
    return (
      <h1
        className={`${commonClasses} text-4xl
      sm:text-5xl md:text-7xl ${className}`}
      >
        {children}
      </h1>
    );
  }
  if (variant === 2) {
    return (
      <h2
        className={`${commonClasses} text-3xl
      sm:text-4xl md:text-6xl ${className}`}
      >
        {children}
      </h2>
    );
  }
  if (variant === 3) {
    return (
      <h3
        className={`${commonClasses} text-2xl
      sm:text-3xl md:text-5xl ${className}`}
      >
        {children}
      </h3>
    );
  }
  if (variant === 4) {
    return (
      <h4
        className={`${commonClasses} text-xl
      sm:text-2xl md:text-4xl ${className}`}
      >
        {children}
      </h4>
    );
  }
  if (variant === 5) {
    return (
      <h5
        className={`${commonClasses} text-lg
      sm:text-xl md:text-3xl ${className}`}
      >
        {children}
      </h5>
    );
  }
  return (
    <h6
      className={`${commonClasses}
      sm:text-lg md:text-2xl ${className}`}
    >
      {children}
    </h6>
  );
}
