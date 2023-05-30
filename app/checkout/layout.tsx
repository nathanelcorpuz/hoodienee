"use client";

import Nav from "@/components/Nav";
import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import { checkoutLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Layout({
  cart,
  shipping,
  payment,
}: {
  cart: React.ReactNode;
  shipping: React.ReactNode;
  payment: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <LayoutWrapper className="pt-[40.5px]">
      <Nav links={checkoutLinks} />
      {pathname === "/checkout/cart" && cart}
      {pathname === "/checkout/shipping" && shipping}
      {pathname === "/checkout/payment" && payment}
    </LayoutWrapper>
  );
}
