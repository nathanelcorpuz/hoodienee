import Input from "@/components/inputs/Input";
import InputWithIcon from "@/components/inputs/InputWithIcon";
import HeadingText from "@/components/texts/HeadingText";
import LinkText from "@/components/texts/LinkText";
import StandardText from "@/components/texts/StandardText";
import sendIcon from "@/public/icons/send.png";

export default function Newsletter() {
  return (
    <section className="flex flex-col items-center gap-[15px]">
      <HeadingText>Newsletter</HeadingText>
      <StandardText>Get the latest deals straight to your inbox</StandardText>
      <Input
        props={{
          placeholder: "Your email",
          id: "email",
          type: "email",
        }}
        icon={sendIcon}
      />
      <div className="flex justify-center gap-[25px]">
        <LinkText href="/privacy">Privacy</LinkText>
        <LinkText href="/terms">Terms</LinkText>
      </div>
    </section>
  );
}
