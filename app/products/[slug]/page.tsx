"use client";

import PageWrapper from "@/components/wrappers/PageWrapper";
import Product from "./_components/Product";
import Reviews from "./_components/Reviews";
import Related from "./_components/Related";

export default function ProductPage() {
  return (
    <PageWrapper>
      <Product />
      <Reviews />
      <Related />
    </PageWrapper>
  );
}
