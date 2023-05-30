import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import LinkText from "@/components/texts/LinkText";
import FormWrapper from "@/components/wrappers/FormWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function ShippingPage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <Input label="Street Address" />
        <Input label="City" />
        <Input label="State" />
        <Input label="Contact Number" />
        <div className="flex items-center justify-between">
          <LinkText href="/checkout/cart">Back</LinkText>
          <Button className="m-0 w-[fit-content]">Payment</Button>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}
