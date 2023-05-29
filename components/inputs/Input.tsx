import Image, { StaticImageData } from "next/image";
import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Input({
  className = "",
  props,
  labelProps,
  label = "",
  icon = "",
  onIconClick,
}: {
  className?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
  icon?: StaticImageData | string;
  onIconClick: () => any;
}) {
  return (
    <div className="flex w-[100%] flex-col">
      <label htmlFor={label} {...labelProps}>
        {label}
      </label>
      <div className="flex">
        <input
          className={twMerge(`
      h-[40px] grow border
      border-gray-600 bg-white p-2
      dark:bg-black ${className}`)}
          id={label}
          {...props}
        />
        <div
          className="flex w-[40px] items-center justify-center border border-gray-600"
          onClick={onIconClick}
        >
          <Image src={icon} alt="input icon" width={12} height={12} />
        </div>
      </div>
    </div>
  );
}
