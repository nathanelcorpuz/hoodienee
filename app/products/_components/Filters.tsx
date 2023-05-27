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
        <Checkbox id="collection1" label="Collection 1" value="collection1" />
        <Checkbox id="collection2" label="Collection 2" value="collection2" />
        <Checkbox id="collection3" label="Collection 3" value="collection3" />
        <Checkbox id="collection4" label="Collection 4" value="collection4" />
        <Checkbox id="collection5" label="Collection 5" value="collection5" />
        <Checkbox id="collection6" label="Collection 6" value="collection6" />
        <Checkbox id="collection7" label="Collection 7" value="collection7" />
      </div>
    </div>
  );
}
