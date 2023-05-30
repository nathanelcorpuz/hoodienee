"use client";

import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import FormWrapper from "@/components/wrappers/FormWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function PaymentPage() {
  return (
    <PageWrapper>
      <FormWrapper>
        <Input label="Card Number" />
        <Input label="CVC" />
        <Input label="Expiration Date" />
        <Button props={{ onClick: (e) => e.preventDefault() }}>
          Submit Order
        </Button>
      </FormWrapper>
    </PageWrapper>
  );
}
