import Button from "@/components/Button";
import HeadingText from "@/components/texts/HeadingText";
import StandardText from "@/components/texts/StandardText";
import HeroWrapper from "@/components/wrappers/HeroWrapper";
import img from "@/public/wide/9.png";

export default function ExpressHero() {
  return (
    <HeroWrapper img={img}>
      <HeadingText>Express</HeadingText>
      <StandardText>Your cloaked personality</StandardText>
      <Button>Collections</Button>
    </HeroWrapper>
  );
}
