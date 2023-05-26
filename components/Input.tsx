import { InputHTMLAttributes } from "react";

export default function Input({
  className = "",
  props,
}: {
  className?: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <input
      className={`
    h-[40px] border border-gray-600
    bg-white p-2
    dark:bg-black ${className}`}
      {...props}
    />
  );
}
