"use client";

import { useRef, useState } from "react";
import HeadingText from "@/components/common/texts/HeadingText";
import ProductCard from "@/components/common/ProductCard";
import Image from "next/image";
import arrowLeft from "@/public/icons/arrow-left.png";
import arrowRight from "@/public/icons/arrow-right.png";
import { ProductCarouselProps } from "@/lib/types";

export default function ProductCarousel({
  products,
  heading,
}: ProductCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [num, setNum] = useState(1);

  const handleScrollLeft = () => {
    if (ref.current && num !== 1) {
      const scrollAmount =
        (num - 2) * (ref.current.childNodes[0] as HTMLElement).offsetWidth;
      ref.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setNum(num - 1);
    }
  };

  const handleScrollRight = () => {
    if (ref.current && num !== products.length) {
      ref.current.scrollTo({
        left: num * (ref.current.childNodes[0] as HTMLElement).offsetWidth,
        behavior: "smooth",
      });
      setNum(num + 1);
    }
  };

  return (
    <section className="relative">
      <div className="flex flex-col items-center gap-[20px]">
        <HeadingText>{heading}</HeadingText>
        <div ref={ref} className="flex w-[100%] overflow-hidden py-8">
          {products.map(({ _id, img }) => (
            <ProductCard key={_id} img={img} />
          ))}
        </div>
      </div>
      {num === 1 ? null : (
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
      {num === products.length - 1 ? null : (
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
