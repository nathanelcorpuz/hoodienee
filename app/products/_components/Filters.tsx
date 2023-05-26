import IconButton from "@/components/IconButton";
import Image from "next/image";
import { useState } from "react";
import arrowDown from "@/public/icons/arrow-down.png";
import StandardText from "@/components/texts/StandardText";
import Checkbox from "@/components/inputs/Checkbox";

export default function Filters() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div
      className={`overflow-hidden 
  border-b border-t border-b-gray-600 border-t-gray-600
  transition-all duration-300 
  ${isFiltersOpen ? "h-[300px]" : "h-[40.5px]"}`}
    >
      <div
        className="z-[6] flex items-center justify-between"
        onClick={() => setIsFiltersOpen((prev) => !prev)}
      >
        <StandardText className="ps-4">Filters</StandardText>
        <IconButton className="p-4">
          <Image src={arrowDown} width={15} height={15} alt="arrow down icon" />
        </IconButton>
      </div>
      <div
        className={`
    relative flex w-[100%]
    flex-col gap-[10px]
    border-t border-t-gray-600 p-4
  `}
      >
        <Checkbox id="category1" label="Category 1" value="category1" />
        <Checkbox id="category2" label="Category 2" value="category2" />
        <Checkbox id="category3" label="Category 3" value="category3" />
        <Checkbox id="category4" label="Category 4" value="category4" />
        <Checkbox id="category5" label="Category 5" value="category5" />
        <Checkbox id="category6" label="Category 6" value="category6" />
        <Checkbox id="category7" label="Category 7" value="category7" />
      </div>
    </div>
  );
}
