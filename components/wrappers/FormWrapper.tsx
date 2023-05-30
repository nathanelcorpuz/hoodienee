import { FormHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function FormWrapper({
  children,
  className = "",
  props,
}: {
  children: React.ReactNode;
  className?: string;
  props?: FormHTMLAttributes<HTMLFormElement>;
}) {
  return (
    <form
      className={twMerge(`flex flex-col gap-[20px] px-4 ${className}`)}
      {...props}
    >
      {children}
    </form>
  );
}
