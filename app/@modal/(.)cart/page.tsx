import Cart from "@/app/cart/_components/Cart";
import ModalWrapper from "@/components/wrappers/ModalWrapper";

export default function CartModal() {
  return (
    <ModalWrapper heading="Your Cart">
      <Cart />
    </ModalWrapper>
  );
}
