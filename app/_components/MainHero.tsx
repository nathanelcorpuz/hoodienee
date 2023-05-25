import img from "../../public/wide/3.png";
import Button from "@/components/common/Button";
import HeroWrapper from "@/components/common/wrappers/HeroWrapper";

export default function MainHero() {
  return (
    <HeroWrapper img={img}>
      <h1 className="text-4xl font-black">HOODiENEE</h1>
      <p className="text-gray-300">Only the best hoodies</p>
      <Button className="w-[auto]">Shop</Button>
    </HeroWrapper>
  );
}
