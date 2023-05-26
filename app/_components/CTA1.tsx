import Button from "@/components/Button";
import StandardText from "@/components/texts/StandardText";
import HeroWrapper from "@/components/wrappers/HeroWrapper";
import img from "@/public/wide/9.png";

export default function ExpressHero() {
  return (
    <HeroWrapper img={img}>
      <Button className="w-[fit-content]" variant={2}>
        Collections
      </Button>
    </HeroWrapper>
  );
}
