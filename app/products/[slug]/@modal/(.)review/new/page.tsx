import ModalWrapper from "@/components/wrappers/ModalWrapper";
import NewReview from "../../../review/_components/NewReview";

export default function NewReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <ModalWrapper heading="New review">
      <NewReview />
    </ModalWrapper>
  );
}
