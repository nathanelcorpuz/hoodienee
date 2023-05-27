"use client";

import Dropdown from "@/components/inputs/Dropdown";
import HeadingText from "@/components/texts/HeadingText";
import StandardText from "@/components/texts/StandardText";
import SupportText from "@/components/texts/SupportText";
import PageWrapper from "@/components/wrappers/PageWrapper";
import useDropdown from "@/hooks/useDropdown";
import { DropdownSelection } from "@/lib/types";

const selections: DropdownSelection[] = [
  {
    value: "loc1",
    label: "Loc 1",
  },
  {
    value: "loc2",
    label: "Loc 2",
  },
  {
    value: "loc3",
    label: "Loc 3",
  },
];
export default function BranchesPage() {
  const { controls: dropdownControls } = useDropdown<DropdownSelection>(
    selections[0]
  );

  return (
    <PageWrapper className="gap-[50px] px-4 pt-[60px]">
      <Dropdown
        controls={dropdownControls}
        selections={selections}
        label="Select a branch"
      />
      <div className="flex flex-col gap-[10px]">
        <SupportText variant={3}>
          123 Drive, Los Angeles, California
        </SupportText>
        <StandardText variant={3}>Weekdays, 8 AM - 8 PM</StandardText>
        <SupportText variant={3}>202-404-8080</SupportText>
      </div>
    </PageWrapper>
  );
}
