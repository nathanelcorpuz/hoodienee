import PageWrapper from "@/components/wrappers/PageWrapper";

export default function NewReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  return <PageWrapper>New product review for {params.slug}</PageWrapper>;
}
