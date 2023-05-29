"use client";

import FieldDisplay from "@/components/FieldDisplay";
import Input from "@/components/inputs/Input";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useState } from "react";
import send from "@/public/icons/send.png";
import FieldsWrapper from "@/components/wrappers/FieldsWrapper";
import FieldDisplayInput from "@/components/FieldDisplayInput";

export default function ProfileInformationPage() {
  const [isNameFieldOnEdit, setIsNameFieldOnEdit] = useState(false);
  const [isEmailFieldOnEdit, setIsEmailFieldOnEdit] = useState(false);
  return (
    <PageWrapper>
      <FieldsWrapper>
        <FieldDisplayInput
          controls={{
            isOnEdit: isNameFieldOnEdit,
            setIsOnEdit: setIsNameFieldOnEdit,
            label: "Name",
            data: {
              heading: "Name",
              content: "Edna Mode",
            },
          }}
        />
        <FieldDisplayInput
          controls={{
            isOnEdit: isEmailFieldOnEdit,
            setIsOnEdit: setIsEmailFieldOnEdit,
            label: "Email",
            type: "email",
            data: {
              heading: "Email",
              content: "edna@mail.com",
            },
          }}
        />
      </FieldsWrapper>
    </PageWrapper>
  );
}
