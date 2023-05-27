import Image from "next/image";
import starFilled from "@/public/icons/star-filled.png";
import starEmpty from "@/public/icons/star-empty.png";
import starQuarterEmpty from "@/public/icons/star-quarter-empty.png";

export default function ReviewStars() {
  const starPixelSize = 12;
  return (
    <div className="flex items-center gap-[5px]">
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
