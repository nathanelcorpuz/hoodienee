"use client";

import FieldDisplay from "@/components/FieldDisplay";
import Input from "@/components/inputs/Input";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useState } from "react";
import send from "@/public/icons/send.png";
import FieldsWrapper from "@/components/wrappers/FieldsWrapper";
import FieldDisplayInput from "@/components/FieldDisplayInput";

export default function ProfileInformationPage() {
  const [isNameOnEdit, setIsNameOnEdit] = useState(false);
  const [isEmailOnEdit, setIsEmailOnEdit] = useState(false);
  const [isContactNumberOnEdit, setIsContactNumberOnEdit] = useState(false);
  return (
    <PageWrapper>
      <FieldsWrapper>
        <FieldDisplayInput
          controls={{
            isOnEdit: isNameOnEdit,
            setIsOnEdit: setIsNameOnEdit,
            label: "Name",
            data: {
              heading: "Name",
              content: "Edna Mode",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            isOnEdit: isEmailOnEdit,
            setIsOnEdit: setIsEmailOnEdit,
            label: "Email",
            type: "email",
            data: {
              heading: "Email",
              content: "edna@mail.com",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            isOnEdit: isContactNumberOnEdit,
            setIsOnEdit: setIsContactNumberOnEdit,
            label: "Contact Number",
            type: "text",
            data: {
              heading: "Contact Number",
              content: "202-404-8080",
            },
          }}
        />
      </FieldsWrapper>
    </PageWrapper>
  );
}
