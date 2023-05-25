import PageWrapper from "@/components/common/wrappers/PageWrapper";
import MainHero from "./_components/MainHero";
import Bestsellers from "./_components/Bestsellers";
import ExpressHero from "./_components/ExpressHero";
import Benefits from "./_components/Benefits";

export default function Home() {
  return (
    <PageWrapper>
      <MainHero />
      <Bestsellers />
      <ExpressHero />
      <Benefits />
    </PageWrapper>
  );
}
