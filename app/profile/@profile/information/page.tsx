"use client";

import FieldDisplay from "@/components/FieldDisplay";
import StandardText from "@/components/texts/StandardText";
import SupportText from "@/components/texts/SupportText";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function ProfileInformationPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-[20px] px-4">
        <FieldDisplay data={{ heading: "Name", content: "Edna Mode" }} />
        <FieldDisplay data={{ heading: "Email", content: "edna@mail.com" }} />
      </div>
    </PageWrapper>
  );
}
