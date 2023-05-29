import PageWrapper from "@/components/wrappers/PageWrapper";
import NewReview from "../_components/NewReview";
import HeadingText from "@/components/texts/HeadingText";

export default function NewReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <PageWrapper className="gap-[20px]">
      <HeadingText className="px-4 pt-[20px]">New review</HeadingText>
      <NewReview />
    </PageWrapper>
  );
}
