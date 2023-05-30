"use client";

import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import SupportText from "@/components/texts/SupportText";
import FormWrapper from "@/components/wrappers/FormWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useRouter } from "next/navigation";

export default function ShippingPage() {
  const router = useRouter();
  return (
    <PageWrapper>
      <FormWrapper props={{ onClick: (e) => e.preventDefault() }}>
        <Input label="Street Address" />
        <Input label="City" />
        <Input label="State" />
        <Input label="Contact Number" />
        <div className="flex items-center justify-between">
          <SupportText
            props={{ onClick: () => router.back() }}
            className="underline underline-offset-4"
          >
            Back
          </SupportText>
          <Button
            className="m-0 w-[fit-content]"
            props={{
              onClick: () => router.push("/checkout/payment"),
            }}
          >
            Payment
          </Button>
        </div>
      </FormWrapper>
    </PageWrapper>
  );
}
