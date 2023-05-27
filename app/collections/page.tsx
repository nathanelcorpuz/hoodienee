import ProductCarousel from "@/components/ProductCarousel";
import StandardText from "@/components/texts/StandardText";
import PageWrapper from "@/components/wrappers/PageWrapper";
import { sampleFetchedProducts } from "@/lib/constants";

export default function CollectionsPage() {
  return (
    <PageWrapper className="gap-[100px] pt-[80px]">
      <StandardText className="text-center">
        Check out our trending collections!
      </StandardText>
      <ProductCarousel products={sampleFetchedProducts} heading="Gender" />
      <ProductCarousel products={sampleFetchedProducts} heading="Style" />
      <ProductCarousel products={sampleFetchedProducts} heading="Color" />
    </PageWrapper>
  );
}
