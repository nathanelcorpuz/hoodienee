import Input from "@/components/inputs/Input";
import InputWithIcon from "@/components/inputs/InputWithIcon";
import icon from "@/public/icons/search.png";

export default function Search() {
  return (
    <div>
      <Input
        props={{
          type: "text",
          id: "search",
          placeholder: "Search for anything",
        }}
        icon={icon}
      />
    </div>
  );
}
