"use client";

import FieldDisplay from "@/components/FieldDisplay";
import Input from "@/components/inputs/Input";
import FieldsWrapper from "@/components/wrappers/FieldsWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useState } from "react";
import send from "@/public/icons/send.png";
import FieldDisplayInput from "@/components/FieldDisplayInput";

export default function ShippingPage() {
  const [isStreetAddressOnEdit, setIsStreetAddressOnEdit] = useState(false);
  const [isCityOnEdit, setIsCityOnEdit] = useState(false);
  const [isStateOnEdit, setIsStateOnEdit] = useState(false);
  const [isZipOnEdit, setIsZipOnEdit] = useState(false);
  return (
    <PageWrapper>
      <FieldsWrapper>
        <FieldDisplayInput
          controls={{
            label: "Street Address",
            isOnEdit: isStreetAddressOnEdit,
            setIsOnEdit: setIsStreetAddressOnEdit,
            data: {
              heading: "Street Address",
              content: "123 Drive",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            label: "City",
            isOnEdit: isCityOnEdit,
            setIsOnEdit: setIsCityOnEdit,
            data: {
              heading: "City",
              content: "Los Angeles",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            label: "State",
            isOnEdit: isStateOnEdit,
            setIsOnEdit: setIsStateOnEdit,
            data: {
              heading: "State",
              content: "California",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            label: "Zip",
            isOnEdit: isZipOnEdit,
            setIsOnEdit: setIsZipOnEdit,
            data: {
              heading: "Zip",
              content: "12345",
            },
          }}
        />
      </FieldsWrapper>
    </PageWrapper>
  );
}
