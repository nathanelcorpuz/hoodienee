import { ButtonVariant } from "@/lib/types";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className = "",
  variant = 1,
  props,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  if (variant === 2) {
    return (
      <button
        className={`mx-auto w-[100%] 
      border border-white bg-none px-6
      py-3 text-lg 
      font-black uppercase
      text-black dark:text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  if (variant === 3) {
    return (
      <button
        className={`mx-auto w-[100%] 
      bg-black px-4 py-2 
      font-black uppercase text-white
      dark:bg-white dark:text-black ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  if (variant === 4) {
    return (
      <button
        className={`mx-auto w-[100%] 
        border border-white bg-none px-4 py-2 
      font-black uppercase 
      text-black dark:text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`mx-auto w-[100%] 
    bg-black px-6 py-3 text-lg
    font-black
    uppercase text-white
    dark:bg-white dark:text-black ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
