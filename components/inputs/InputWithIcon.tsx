import { InputHTMLAttributes } from "react";
import Input from "./Input";
import Image, { StaticImageData } from "next/image";

export default function InputWithIcon({
  props,
  className = "",
  icon,
}: {
  props?: InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  icon: StaticImageData | string;
}) {
  return (
    <div className="flex p-2">
      <Input props={{ ...props }} className={className} />
      <div
        className="
  flex h-[40px] w-[40px] 
  items-center justify-center
  border border-s-0 border-gray-600"
      >
        <Image src={icon} alt="search icon" width={15} height={15} />
      </div>
    </div>
  );
}
