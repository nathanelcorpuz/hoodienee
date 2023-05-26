import img from "../../public/wide/3.png";
import Button from "@/components/Button";
import HeroWrapper from "@/components/wrappers/HeroWrapper";

export default function MainHero() {
  return (
    <HeroWrapper isMainHero img={img}>
      <h1 className="text-4xl font-black">HOODiENEE</h1>
      <Button className="w-[fit-content]" variant={2}>
        Shop
      </Button>
    </HeroWrapper>
  );
}
