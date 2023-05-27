import PageWrapper from "@/components/wrappers/PageWrapper";
import capitalize from "utils/capitalize";

export default function Collection({ params }: { params: { slug: string } }) {
  return (
    <PageWrapper>
      <div>{capitalize(params.slug)}</div>
    </PageWrapper>
  );
}
