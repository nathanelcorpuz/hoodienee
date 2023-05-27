"use client";

import StandardText from "@/components/texts/StandardText";
import Image from "next/image";
import img from "@/public/square/16.png";
import ReviewStars from "./ReviewStars";
import { useRouter } from "next/navigation";

export default function Review() {
  const router = useRouter();
  return (
    <div
      className="flex gap-[15px] border-b border-gray-700 py-4"
      onClick={() =>
        router.push("/products/really-awesome-hoodie/review/r3v13w")
      }
    >
      <div className="flex w-[50px] flex-col justify-between">
        <Image src={img} height={50} width={50} alt="sample" />
        <StandardText className="truncate text-gray-400" variant={4}>
          Edna M.
        </StandardText>
      </div>
      <div className="flex flex-col gap-[10px] overflow-hidden">
        <div className="flex justify-between">
          <ReviewStars />
          <StandardText className="text-gray-400" variant={4}>
            {new Date().toDateString()}
          </StandardText>
        </div>
        <StandardText className="line-clamp-2 italic">
          Sint irure aute minim fugiat do adipisicing et aliquip nulla in aute
          consectetur. Sunt quis velit ut aute amet.
        </StandardText>
      </div>
    </div>
  );
}
