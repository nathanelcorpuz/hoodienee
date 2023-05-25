"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { ref } = useClickOutside(() => router.back());

  return (
    <div
      className="fixed bottom-0 left-0 right-0 top-0
       z-[999] [background:rgb(0,0,0,0.9)]"
    >
      <div
        ref={ref}
        className="ms-auto
        flex min-h-screen
        w-[90%] flex-col
        border-s border-s-gray-700 
        bg-white
        dark:bg-black"
      >
        <div className="flex justify-between">
          <p className="p-2 font-black">Your Cart</p>
          <button
            className="p-2 text-gray-600 dark:text-gray-400"
            onClick={() => router.back()}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
