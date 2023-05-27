"use client";

import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import HeadingText from "@/components/texts/HeadingText";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { sampleFetchedProducts } from "@/lib/constants";

export default function Collection({ params }: { params: { slug: string } }) {
  return (
    <PageWrapper className="gap-[100px]">
      <div className="sticky top-[40.5px] z-[100] border-b border-gray-700 py-2 text-center dark:bg-black">
        <HeadingText>{params.slug}</HeadingText>
      </div>
      <div className="flex flex-col items-center gap-[50px]">
        {sampleFetchedProducts.map((product) => (
          <ProductCard />
        ))}
      </div>
      <Button className="w-[fit-content]">Load more</Button>
    </PageWrapper>
  );
}
