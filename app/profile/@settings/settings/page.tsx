"use client";

import Button from "@/components/Button";
import Dropdown from "@/components/inputs/Dropdown";
import FieldsWrapper from "@/components/wrappers/FieldsWrapper";
import PageWrapper from "@/components/wrappers/PageWrapper";
import useDropdown from "@/hooks/useDropdown";

export default function SettingsPage() {
  const { controls } = useDropdown({ label: "Dark", value: "dark" });
  return (
    <PageWrapper>
      <FieldsWrapper>
        <Dropdown controls={controls} label="Preferred theme" />
        <Button>Reset Password</Button>
      </FieldsWrapper>
    </PageWrapper>
  );
}
