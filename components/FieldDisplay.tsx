import Image from "next/image";
import StandardText from "./texts/StandardText";
import SupportText from "./texts/SupportText";
import pen from "@/public/icons/pen.png";

export default function FieldDisplay({
  data,
}: {
  data: { heading: string; content: string };
}) {
  return (
    <div className="flex items-center justify-between gap-[20px] border-b border-b-gray-600 pb-4">
      <div>
        <SupportText variant={3} className="text-xs uppercase">
          {data.heading}
        </SupportText>
        <StandardText variant={2}>{data.content}</StandardText>
      </div>
      <div className="rounded-full bg-gray-800 p-3">
        <Image
          src={pen}
          alt="edit icon"
          width={12}
          height={12}
          className="opacity-[0.7]"
        />
      </div>
    </div>
  );
}
