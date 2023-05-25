import Search from "@/app/search/_components/Search";
import ModalWrapper from "@/components/wrappers/ModalWrapper";

export default function SearchModal() {
  return (
    <ModalWrapper heading="Search">
      <Search />
    </ModalWrapper>
  );
}
