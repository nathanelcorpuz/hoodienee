import Button from "@/components/Button";
import Dropdown from "@/components/inputs/Dropdown";
import HeadingText from "@/components/texts/HeadingText";
import Images from "./Images";
import useDropdown from "@/hooks/useDropdown";
import { DropdownSelection } from "@/lib/types";

export default function Product() {
  const sizeDropdown = useDropdown<DropdownSelection>({
    value: "small",
    label: "S",
  });
  const colorDropdown = useDropdown<DropdownSelection>({
    value: "yellow",
    label: "Yellow",
  });
  return (
    <div className="flex flex-col items-center gap-[30px] p-4">
      <HeadingText>Really awesome hoodie</HeadingText>
      <Images />
      <div className="flex w-[100%] flex-col gap-[15px]">
        <Dropdown label="Size" controls={sizeDropdown.controls} />
        <Dropdown label="Color" controls={colorDropdown.controls} />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button>Add to cart</Button>
    </div>
  );
}
