"use client";

import FieldDisplay from "@/components/FieldDisplay";
import Input from "@/components/inputs/Input";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { useState } from "react";
import send from "@/public/icons/send.png";

export default function ProfileInformationPage() {
  const [isNameFieldOnEdit, setIsNameFieldOnEdit] = useState(false);
  const [isEmailFieldOnEdit, setIsEmailFieldOnEdit] = useState(false);
  return (
    <PageWrapper>
      <div className="flex flex-col gap-[20px] px-4">
        {isNameFieldOnEdit ? (
          <Input
            label="Name"
            icon={send}
            props={{ type: "text" }}
            onIconClick={() => setIsNameFieldOnEdit(false)}
          />
        ) : (
          <FieldDisplay
            data={{ heading: "Name", content: "Edna Mode" }}
            toggleEdit={setIsNameFieldOnEdit}
          />
        )}
        {isEmailFieldOnEdit ? (
          <Input
            label="Email"
            icon={send}
            props={{ type: "text" }}
            onIconClick={() => setIsEmailFieldOnEdit(false)}
          />
        ) : (
          <FieldDisplay
            data={{ heading: "Email", content: "edna@mail.com" }}
            toggleEdit={setIsEmailFieldOnEdit}
          />
        )}
      </div>
    </PageWrapper>
  );
}
