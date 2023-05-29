"use client";

import HeadingText from "@/components/texts/HeadingText";
import Review from "./Review";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import SupportText from "@/components/texts/SupportText";
import ReviewStars from "./ReviewStars";

const reviews: any[] = [];
const numOfReviews = 7;

for (let i = 0; i < numOfReviews; i++) {
  reviews.push({ id: i });
}

export default function Reviews() {
  const router = useRouter();
  return (
    <div className="p-4">
      <HeadingText className="pb-4">Reviews</HeadingText>
      <div className="border-b border-b-gray-600 pb-4">
        <ReviewStars isMain />
        <SupportText variant={5} className="text-gray-400">
          Out of 182 reviews
        </SupportText>
      </div>
      {reviews.map(({ id }) => (
        <Review key={id} />
      ))}
      <Button
        props={{
          onClick: () =>
            router.push("/products/really-awesome-hoodie/review/new"),
        }}
      >
        Add review
      </Button>
    </div>
  );
}
