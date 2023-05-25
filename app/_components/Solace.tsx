import Button from "@/components/Button";
import SupportText from "@/components/texts/SupportText";
import HeroWrapper from "@/components/wrappers/HeroWrapper";
import img from "@/public/wide/4.png";

export default function Solace() {
  return (
    <HeroWrapper img={img}>
      <SupportText variant={4}>Discover fabric solace</SupportText>
      <Button>About us</Button>
    </HeroWrapper>
  );
}
