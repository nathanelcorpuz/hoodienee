import Image from "next/image";
import starFilled from "@/public/icons/star-filled.png";
import starEmpty from "@/public/icons/star-empty.png";
import starQuarterEmpty from "@/public/icons/star-quarter-empty.png";
import SupportText from "@/components/texts/SupportText";

export default function ReviewStars({ isMain = false }: { isMain?: boolean }) {
  const starPixelSize = isMain ? 16 : 12;
  const className = isMain
    ? "flex items-center gap-[7px]"
    : "flex items-center gap-[3px]";
  return (
    <div className={className}>
      {isMain ? (
        <SupportText className="pe-2">4.78</SupportText>
      ) : (
        <SupportText variant={6} className="pe-2 font-bold">
          4.78
        </SupportText>
      )}
      <div>
        <Image
          src={starFilled}
          width={starPixelSize}
          height={starPixelSize}
          alt="star icon"
        />
      </div>
      <div>
        <Image
          src={starFilled}
          width={starPixelSize}
          height={starPixelSize}
          alt="star icon"
        />
      </div>
      <div>
        <Image
          src={starFilled}
          width={starPixelSize}
          height={starPixelSize}
          alt="star icon"
        />
      </div>
      <div>
        <Image
          src={starQuarterEmpty}
          width={starPixelSize}
          height={starPixelSize}
          alt="star icon"
        />
      </div>
      <div>
        <Image
          src={starEmpty}
          width={starPixelSize}
          height={starPixelSize}
          alt="star icon"
        />
      </div>
    </div>
  );
}
