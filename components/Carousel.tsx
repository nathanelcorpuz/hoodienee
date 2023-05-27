import { CarouselProps } from "@/lib/types";
import HeadingText from "./texts/HeadingText";
import ProductCard from "./ProductCard";
import arrowLeft from "@/public/icons/arrow-left.png";
import arrowRight from "@/public/icons/arrow-right.png";
import Image from "next/image";
import CollectionCard from "./CollectionCard";

export default function Carousel({
  controls,
  heading,
  isCollection = false,
}: CarouselProps) {
  const { ref, focusedItemIndex, handleScrollLeft, handleScrollRight, list } =
    controls;

  return (
    <section className="relative">
      <div className="flex flex-col items-center gap-[20px]">
        <HeadingText>{heading}</HeadingText>
        <div ref={ref} className="flex w-[100%] overflow-hidden py-8">
          {list.map(({ _id, img }) =>
            isCollection ? (
              <CollectionCard key={_id} img={img} />
            ) : (
              <ProductCard key={_id} img={img} />
            )
          )}
        </div>
      </div>
      {focusedItemIndex === 1 ? null : (
        <div
          className="absolute left-3 top-[50%] grid 
      h-[35px] w-[35px] place-items-center 
      rounded-full border border-white 
      dark:bg-black"
          onClick={handleScrollLeft}
        >
          <div>
            <Image src={arrowLeft} width={8} height={8} alt="left arrow icon" />
          </div>
        </div>
      )}
      {focusedItemIndex === list.length - 1 ? null : (
        <div
          className="absolute right-3 top-[50%] grid 
      h-[35px] w-[35px] place-items-center 
      rounded-full border border-white 
      dark:bg-black"
          onClick={handleScrollRight}
        >
          <div>
            <Image
              src={arrowRight}
              width={8}
              height={8}
              alt="right arrow icon"
            />
          </div>
        </div>
      )}
    </section>
  );
}
