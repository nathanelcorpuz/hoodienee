// WIP

import Input from "@/components/Input";
import icon from "@/public/icons/search.png";
import Image from "next/image";

export default function Search() {
  return (
    <div>
      <div className="flex p-2">
        <Input
          props={{
            type: "text",
            id: "search",
            placeholder: "Search for anything",
          }}
        />
        <div
          className="
        flex h-[40px] w-[40px] 
        items-center justify-center
        border border-s-0 border-gray-600"
        >
          <Image src={icon} alt="search icon" width={15} height={15} />
        </div>
      </div>
    </div>
  );
}
