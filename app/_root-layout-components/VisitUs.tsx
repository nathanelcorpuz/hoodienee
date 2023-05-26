import HeadingText from "@/components/texts/HeadingText";
import Image from "next/image";
import pin from "@/public/icons/pin.png";
import clock from "@/public/icons/clock.png";
import StandardText from "@/components/texts/StandardText";
import Button from "@/components/Button";

export default function VisitUs() {
  return (
    <section className="flex flex-col items-center gap-[15px]">
      <HeadingText>Visit Us</HeadingText>
      <div className="flex items-center gap-[10px]">
        <div>
          <Image src={pin} alt="location pin icon" width={15} height={15} />
        </div>
        <StandardText>123 Drive, Los Angeles, California</StandardText>
      </div>
      <div className="flex items-center gap-[10px]">
        <div>
          <Image src={clock} alt="clock icon" width={15} height={15} />
        </div>
        <StandardText>Weekdays, 8 AM - 8 PM, PST</StandardText>
      </div>
      <Button className="w-[fit-content]">Branches</Button>
    </section>
  );
}
