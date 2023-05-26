"use client";

import PageWrapper from "@/components/wrappers/PageWrapper";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";

export default function ProductPage() {
  return (
    <PageWrapper>
      <Product />
      <Reviews />
    </PageWrapper>
  );
}
