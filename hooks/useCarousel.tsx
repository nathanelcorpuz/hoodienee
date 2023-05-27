"use client";

import { useRef, useState } from "react";
import { CarouselHook, CarouselHookProps } from "@/lib/types";

export default function useCarousel({ list }: CarouselHookProps): CarouselHook {
  const ref = useRef<HTMLDivElement>(null);
  const [focusedItemIndex, setFocusedItemIndex] = useState(1);

  const handleScrollLeft = () => {
    if (ref.current && focusedItemIndex !== 1) {
      const scrollAmount =
        (focusedItemIndex - 2) *
        (ref.current.childNodes[0] as HTMLElement).offsetWidth;
      ref.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setFocusedItemIndex(focusedItemIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (ref.current && focusedItemIndex !== list.length) {
      ref.current.scrollTo({
        left:
          focusedItemIndex *
          (ref.current.childNodes[0] as HTMLElement).offsetWidth,
        behavior: "smooth",
      });
      setFocusedItemIndex(focusedItemIndex + 1);
    }
  };

  return { ref, focusedItemIndex, handleScrollLeft, handleScrollRight, list };
}
