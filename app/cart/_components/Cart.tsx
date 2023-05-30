"use client";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import Button from "@/components/Button";

export default function Cart({
  toggleCart = () => {},
  isFromCheckout = false,
}: {
  toggleCart?: () => void;
  isFromCheckout?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="flex justify-between p-4">
        <p
          className="p-2 text-gray-600 
          underline dark:text-gray-400"
          // orig until github issue gets fixed
          // onClick={() => router.back()}
          onClick={() => toggleCart()}
        >
          Back
        </p>
        <div className="flex gap-[10px] p-2">
          <p
            className="text-gray-600 
          dark:text-gray-400"
          >
            Subtotal
          </p>
          <p className="font-black">$500</p>
        </div>
      </div>
      <div className="mx-auto flex w-[80%]">
        <Button
          props={{
            onClick: () => {
              if (isFromCheckout) {
                router.push("/checkout/shipping");
                return;
              }
              router.push("/checkout/cart");
              // temp until github issue gets fixed
              toggleCart();
            },
          }}
        >
          {isFromCheckout ? "Shipping" : "Checkout"}
        </Button>
      </div>
    </>
  );
}
