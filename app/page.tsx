"use client";

import PageWrapper from "@/components/wrappers/PageWrapper";
import MainHero from "./_components/MainHero";
import CTA1 from "./_components/CTA1";
import Benefits from "./_components/Benefits";
import CTA2 from "./_components/CTA2";
import Carousel from "@/components/Carousel";
import useCarousel from "@/hooks/useCarousel";
import { sampleFetchedProducts } from "@/lib/constants";

export default function Home() {
  const bestsellersControls = useCarousel({ list: sampleFetchedProducts });
  const newArrivalsControls = useCarousel({ list: sampleFetchedProducts });
  return (
    <PageWrapper>
      <MainHero />
      <Carousel heading="Bestsellers" controls={bestsellersControls} />
      <CTA1 />
      <Benefits />
      <Carousel heading="New arrivals" controls={newArrivalsControls} />
      <CTA2 />
    </PageWrapper>
  );
}
