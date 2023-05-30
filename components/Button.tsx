"use client";

import { ButtonVariant } from "@/lib/types";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

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
  const commonClasses = "mx-auto w-[100%] uppercase font-black";

  let classes = `${commonClasses} 
  bg-black px-6 py-3 text-lg text-white
  dark:bg-white dark:text-black ${className}`;

  if (variant === 2) {
    classes = `${commonClasses} 
    border border-white bg-none px-6
    py-3 text-lg text-black dark:text-white ${className}`;
  }
  if (variant === 3) {
    classes = `${commonClasses}  
    bg-black px-4 py-2 text-white 
    dark:bg-white dark:text-black ${className}`;
  }
  if (variant === 4) {
    classes = `${commonClasses} 
    border border-white bg-none px-4 py-2
    text-black dark:text-white ${className}`;
  }
  return (
    <button className={twMerge(classes)} {...props}>
      {children}
    </button>
  );
}
