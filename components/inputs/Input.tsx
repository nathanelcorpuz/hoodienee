import { InputProps } from "@/lib/types";
import Image, { StaticImageData } from "next/image";
import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import SupportText from "../texts/SupportText";

export default function Input({
  className = "",
  props,
  labelProps,
  label = "",
  icon = "",
  onIconClick,
}: InputProps) {
  return (
    <div className="flex w-[100%] flex-col">
      <label htmlFor={label} {...labelProps}>
        <SupportText
          variant={3}
          className="pb-1 text-xs uppercase text-gray-400"
        >
          {label}
        </SupportText>
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
