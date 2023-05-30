"use client";

import Cart from "@/app/cart/_components/Cart";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function Page() {
  return (
    <PageWrapper className="pt-[0px]">
      <div className="flex flex-col">
        <Cart isFromCheckout />
      </div>
    </PageWrapper>
  );
}
