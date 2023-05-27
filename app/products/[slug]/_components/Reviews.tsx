// WIP

import HeadingText from "@/components/texts/HeadingText";
import Review from "./Review";

const reviews: any[] = [];
const numOfReviews = 7;

for (let i = 0; i < numOfReviews; i++) {
  reviews.push({ id: i });
}

export default function Reviews() {
  return (
    <div className="p-4">
      <HeadingText className="pb-4">Reviews</HeadingText>
      {reviews.map(({ id }) => (
        <Review key={id} />
      ))}
    </div>
  );
}
