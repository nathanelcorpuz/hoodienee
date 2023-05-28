import PageWrapper from "@/components/wrappers/PageWrapper";
import ReviewDetails from "../_components/ReviewDetails";
import Link from "next/link";
import Button from "@/components/Button";

export default function ReviewPage({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;
  return (
    <PageWrapper>
      <div>
        <ReviewDetails slug={slug} id={id} />
        <div className="p-4">
          <Link href="/products/really-awesome-hoodie">
            <Button>Go to product</Button>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
