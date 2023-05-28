import ModalWrapper from "@/components/wrappers/ModalWrapper";
import ReviewDetails from "../../../review/_components/ReviewDetails";
import Button from "@/components/Button";
import Link from "next/link";

export default function ReviewModal({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const { slug, id } = params;
  return (
    <ModalWrapper>
      <ReviewDetails id={id} slug={slug} />
    </ModalWrapper>
  );
}
