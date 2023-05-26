import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import TextArea from "@/components/inputs/TextArea";
import HeadingText from "@/components/texts/HeadingText";
import StandardText from "@/components/texts/StandardText";

export default function ContactUs() {
  return (
    <section className="flex flex-col items-center gap-[25px]">
      <HeadingText>Contact Us</HeadingText>
      <StandardText>Weekdays, 8 AM - 8 PM, PST</StandardText>
      <form className="flex w-[90%] flex-col items-center gap-[10px]">
        <Input label="Email" props={{ type: "email" }} />
        <Input label="Subject" props={{ type: "text" }} />
        <TextArea label="Message" />
        <Button>Submit</Button>
      </form>
    </section>
  );
}
