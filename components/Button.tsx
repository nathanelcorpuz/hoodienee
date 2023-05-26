import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export default function Button({
  children,
  className = "",
  divClassName = "",
  divProps,
  buttonProps,
}: {
  children: React.ReactNode;
  className?: string;
  divClassName?: string;
  divProps?: HTMLAttributes<HTMLElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <button
      className={`mx-auto w-[100%] 
    bg-black px-6 py-3 text-lg
    font-black
    uppercase text-white
    dark:bg-white dark:text-black ${className}`}
    >
      {children}
    </button>
  );
}
