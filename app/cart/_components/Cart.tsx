"use client";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import Button from "@/components/Button";
import SupportText from "@/components/texts/SupportText";

export default function Cart({
  toggleCart = () => {},
  shouldUseRouter = false,
}: {
  toggleCart?: () => void;
  shouldUseRouter?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="flex items-center justify-between p-4">
        <SupportText
          className="underline underline-offset-4"
          // orig until github issue gets fixed
          // onClick={() => router.back()}
          props={{
            onClick: () => {
              if (shouldUseRouter) {
                router.back();
                return;
              }
              toggleCart();
            },
          }}
        >
          Back
        </SupportText>
        <div className="flex items-center gap-[10px] p-2">
          <p
            className="text-gray-600 
          dark:text-gray-400"
          >
            Subtotal
          </p>
          <p className="text-2xl font-black">$500</p>
        </div>
      </div>
      <div className="mx-auto flex w-[80%]">
        <Button
          props={{
            onClick: () => {
              if (shouldUseRouter) {
                router.push("/checkout/shipping");
                return;
              }
              router.push("/checkout/cart");
              // temp until github issue gets fixed
              toggleCart();
            },
          }}
        >
          {shouldUseRouter ? "Shipping" : "Checkout"}
        </Button>
      </div>
    </>
  );
}
