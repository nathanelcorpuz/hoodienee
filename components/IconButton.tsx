import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

export default function IconButton({
  children,
  props,
  className,
}: {
  children: React.ReactNode;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        `p-2 hover:bg-gray-400 dark:hover:bg-gray-700 ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
}
