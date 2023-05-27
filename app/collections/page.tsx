"use client";

import Carousel from "@/components/Carousel";
import StandardText from "@/components/texts/StandardText";
import PageWrapper from "@/components/wrappers/PageWrapper";
import useCarousel from "@/hooks/useCarousel";
import { sampleFetchedProducts } from "@/lib/constants";

export default function CollectionsPage() {
  const genderControls = useCarousel({ list: sampleFetchedProducts });
  const styleControls = useCarousel({ list: sampleFetchedProducts });
  const colorControls = useCarousel({ list: sampleFetchedProducts });
  return (
    <PageWrapper className="gap-[100px] pt-[80px]">
      <StandardText className="text-center">
        Check out our trending collections!
      </StandardText>
      <Carousel controls={genderControls} heading="Gender" isCategory />
      <Carousel controls={styleControls} heading="Style" isCategory />
      <Carousel controls={colorControls} heading="Color" isCategory />
    </PageWrapper>
  );
}
