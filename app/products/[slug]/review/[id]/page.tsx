import PageWrapper from "@/components/wrappers/PageWrapper";

export default function ReviewPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;
  return (
    <PageWrapper>
      Review page for product slug: {slug} and review id: {id}
    </PageWrapper>
  );
}
