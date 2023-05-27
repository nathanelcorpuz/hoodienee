import ModalWrapper from "@/components/wrappers/ModalWrapper";

export default function ReviewModal({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;
  return (
    <ModalWrapper>
      Review page for product slug: {slug} and review id: {id}
    </ModalWrapper>
  );
}
