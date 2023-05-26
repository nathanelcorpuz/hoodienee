import sample from "@/public/square/3.png";
import Image, { StaticImageData } from "next/image";
import StandardText from "@/components/texts/StandardText";
import SupportText from "@/components/texts/SupportText";
import addToCartIcon from "@/public/icons/add-to-cart.png";
import { useRouter } from "next/navigation";

export default function ProductCard({
  img = sample,
}: {
  img?: StaticImageData | string;
}) {
  const router = useRouter();
  return (
    <div className="flex w-[100%] shrink-0 flex-col items-center gap-[5px]">
      <div
        className="relative h-[150px] w-[80%] 
        border border-gray-700"
        onClick={() => router.push("/products/really-awesome-hoodie")}
      >
        <Image
          src={img}
          alt="sample product photo"
          fill
          className="object-contain object-center"
        />
        <button
          className="absolute 
          right-[-15px] top-[-15px] 
          flex h-[45px] w-[45px] items-center justify-center 
          rounded-full border dark:bg-black"
        >
          <Image
            src={addToCartIcon}
            width={19}
            height={19}
            alt="add to cart icon"
          />
        </button>
      </div>
      <div className="flex w-[80%] gap-[10px]">
        <StandardText className="grow">Really Awesome Hoodie</StandardText>
        <SupportText>$70</SupportText>
      </div>
    </div>
  );
}
