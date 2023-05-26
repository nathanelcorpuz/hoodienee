// WIP

import HeadingText from "@/components/texts/HeadingText";
import Image from "next/image";
import img from "@/public/square/16.png";
import starFilled from "@/public/icons/star-filled.png";
import starEmpty from "@/public/icons/star-empty.png";
import starQuarterEmpty from "@/public/icons/star-quarter-empty.png";

export default function Reviews() {
  return (
    <div className="p-4">
      <HeadingText>Reviews</HeadingText>
      <div className="flex">
        <div>
          <Image src={img} height={50} width={50} alt="sample" />
        </div>
        <div className="px-4">
          <div className="flex items-center justify-center gap-[5px]">
            <div>
              <Image src={starFilled} width={20} height={20} alt="star icon" />
            </div>
            <div>
              <Image src={starFilled} width={20} height={20} alt="star icon" />
            </div>
            <div>
              <Image src={starFilled} width={20} height={20} alt="star icon" />
            </div>
            <div>
              <Image
                src={starQuarterEmpty}
                width={20}
                height={20}
                alt="star icon"
              />
            </div>
            <div>
              <Image src={starFilled} width={20} height={20} alt="star icon" />
            </div>
          </div>
          <div>Name</div>
        </div>
      </div>
    </div>
  );
}
