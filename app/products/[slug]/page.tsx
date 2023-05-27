"use client";

import PageWrapper from "@/components/wrappers/PageWrapper";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";
import useCarousel from "@/hooks/useCarousel";
import { sampleFetchedProducts } from "@/lib/constants";
import Carousel from "@/components/Carousel";

export default function ProductPage() {
  const relatedControls = useCarousel({ list: sampleFetchedProducts });
  return (
    <PageWrapper>
      <Product />
      <Reviews />
      <Carousel controls={relatedControls} heading="Related" />
    </PageWrapper>
  );
}
