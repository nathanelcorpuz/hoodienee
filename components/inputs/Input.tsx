import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  className = "",
  props,
  labelProps,
  label = "",
}: {
  className?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="flex w-[100%] flex-col">
      <label htmlFor={label} {...labelProps}>
        {label}
      </label>
      <input
        className={twMerge(`
      h-[40px] border border-gray-600
      bg-white p-2
      dark:bg-black ${className}`)}
        id={label}
        {...props}
      />
    </div>
  );
}
