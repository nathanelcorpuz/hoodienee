"use client";

import PageWrapper from "@/components/wrappers/PageWrapper";
import Filters from "./_components/Filters";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

export default function Products() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-[50px]">
        <Filters />
        <div className="flex flex-col gap-[50px]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <Button className="w-[auto]" variant={3}>
          Load more
        </Button>
      </div>
    </PageWrapper>
  );
}
