import ModalWrapper from "@/components/wrappers/ModalWrapper";

export default function NewReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ModalWrapper>New product review for {params.slug}</ModalWrapper>;
}
