import Button from "@/components/common/Button";
import HeadingText from "@/components/common/texts/HeadingText";
import StandardText from "@/components/common/texts/StandardText";
import HeroWrapper from "@/components/common/wrappers/HeroWrapper";
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
