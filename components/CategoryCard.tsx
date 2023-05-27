import sample from "@/public/square/3.png";
import Image, { StaticImageData } from "next/image";
import SupportText from "@/components/texts/SupportText";
import { useRouter } from "next/navigation";
import CardWrapper from "./wrappers/CardWrapper";

export default function CategoryCard({
  img = sample,
}: {
  img?: StaticImageData | string;
}) {
  const router = useRouter();
  return (
    <CardWrapper>
      <div
        className="relative h-[150px] w-[80%] 
        border border-gray-700"
        onClick={() => router.push("/collections/sporty")}
      >
        <Image
          src={img}
          alt="sample product photo"
          fill
          className="object-contain object-center"
        />
      </div>
      <SupportText>Sporty</SupportText>
    </CardWrapper>
  );
}
