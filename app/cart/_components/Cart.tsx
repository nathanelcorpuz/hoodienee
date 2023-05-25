"use client";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import Button from "@/components/Button";

export default function Cart() {
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
          onClick={() => router.back()}
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
      <Button>Checkout</Button>
    </>
  );
}
