import Input from "@/components/inputs/Input";
import TextArea from "@/components/inputs/TextArea";
import Image from "next/image";
import productImg from "@/public/square/13.png";
import StandardText from "@/components/texts/StandardText";
import Button from "@/components/Button";
import ProductDisplay from "./ProductDisplay";

export default function NewReview() {
  return (
    <div className="flex flex-col gap-[20px] p-4">
      <ProductDisplay />
      <form className="flex flex-col gap-[10px]">
        <Input props={{ type: "number" }} label="Rating / 5" />
        <Input label="Name" />
        <TextArea label="Description" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}
