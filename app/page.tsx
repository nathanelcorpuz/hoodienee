import PageWrapper from "@/components/wrappers/PageWrapper";
import MainHero from "./_components/MainHero";
import Bestsellers from "./_components/Bestsellers";
import CTA1 from "./_components/CTA1";
import Benefits from "./_components/Benefits";
import NewReleases from "./_components/NewReleases";
import CTA2 from "./_components/CTA2";

export default function Home() {
  return (
    <PageWrapper>
      <MainHero />
      <Bestsellers />
      <CTA1 />
      <Benefits />
      <NewReleases />
      <CTA2 />
    </PageWrapper>
  );
}
