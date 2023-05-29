import StandardText from "@/components/texts/StandardText";
import Image from "next/image";
import productImg from "@/public/square/13.png";

export default function ProductDisplay() {
  return (
    <div className="flex items-center gap-[10px]">
      <Image src={productImg} alt="sample product" width={50} height={50} />
      <StandardText>Really awesome hoodie</StandardText>
    </div>
  );
}
