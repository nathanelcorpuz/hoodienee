import Button from "@/components/Button";
import HeroWrapper from "@/components/wrappers/HeroWrapper";
import img from "@/public/wide/4.png";

export default function Solace() {
  return (
    <HeroWrapper img={img}>
      <Button variant={2}>Explore</Button>
    </HeroWrapper>
  );
}
