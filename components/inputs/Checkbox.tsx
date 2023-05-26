import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";

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
      className={`flex items-center gap-[10px] ${divProps.className}`}
      {...divProps}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        className={`h-[20px] w-[20px] bg-black ${inputProps.className}`}
        {...inputProps}
      />
      <label htmlFor="category1" {...labelProps}>
        {label}
      </label>
    </div>
  );
}
