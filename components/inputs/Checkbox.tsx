import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

export default function Checkbox({
  divProps = {},
  inputProps = {},
  labelProps = {},
  label = "",
  id = "",
  value = "",
}: {
  divProps?: HTMLAttributes<HTMLDivElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label: string;
  id: string;
  value: any;
}) {
  return (
    <div
      className={twMerge(`flex items-center gap-[10px] ${divProps.className}`)}
      {...divProps}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        className={twMerge(
          `h-[20px] w-[20px] bg-black ${inputProps.className}`
        )}
        {...inputProps}
      />
      <label htmlFor="collection1" {...labelProps}>
        {label}
      </label>
    </div>
  );
}
