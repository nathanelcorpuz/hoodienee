"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";
import HeadingText from "../texts/HeadingText";

export default function ModalWrapper({
  children,
  heading,
  isIntercept = true,
  closeModal,
}: {
  children: React.ReactNode;
  heading?: string;
  isIntercept?: boolean;
  closeModal?: () => void;
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
          <HeadingText className="p-2">{heading}</HeadingText>
          <button
            className="p-2 text-gray-600 dark:text-gray-400"
            onClick={() =>
              isIntercept ? router.back() : closeModal && closeModal()
            }
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
