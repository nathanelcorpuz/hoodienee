import { TextareaHTMLAttributes, LabelHTMLAttributes } from "react";

export default function TextArea({
  className = "",
  props,
  labelProps,
  label = "",
}: {
  className?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  props?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}) {
  return (
    <div className="flex w-[100%] flex-col">
      <label htmlFor={label} {...labelProps}>
        {label}
      </label>
      <textarea
        className={`
      border border-gray-600
      bg-white p-2
      dark:bg-black ${className}`}
        rows={8}
        id={label}
        {...props}
      />
    </div>
  );
}
