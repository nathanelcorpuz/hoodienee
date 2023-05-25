import Image from "next/image";
import { BenefitProps } from "@/lib/types";
import HeadingText from "@/components/common/texts/HeadingText";
import StandardText from "@/components/common/texts/StandardText";

export default function Benefit({ benefit }: BenefitProps) {
  return (
    <div className="flex flex-col items-center gap-[15px]">
      <div>
        <Image src={benefit.img} width={25} height={25} alt="triangle icon" />
      </div>
      <div className="flex flex-col items-center">
        <HeadingText variant={6}>{benefit.title}</HeadingText>
        <StandardText>{benefit.subtitle}</StandardText>
      </div>
    </div>
  );
}
