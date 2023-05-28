import Image from "next/image";
import img from "@/public/square/12.png";
import StandardText from "@/components/texts/StandardText";
import ReviewStars from "../../_components/ReviewStars";

export default function ReviewDetails({
  id,
  slug,
}: {
  id: string;
  slug: string;
}) {
  return (
    <div className="p-4">
      <div className="flex items-center gap-[10px] border-b border-b-gray-600 pb-4">
        <Image src={img} width={50} height={50} alt="sample" />
        <p>Edna M.</p>
      </div>
      <div className="flex flex-col gap-4 pt-4">
        <ReviewStars />
        <StandardText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          quod assumenda asperiores molestiae repellendus neque suscipit fuga
          enim.
        </StandardText>
        <StandardText className="text-gray-400" variant={4}>
          {new Date().toDateString()}
        </StandardText>
      </div>
    </div>
  );
}
