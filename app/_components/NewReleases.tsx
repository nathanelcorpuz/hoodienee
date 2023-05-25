import ProductCarousel from "@/components/common/ProductCarousel";
import { sampleFetchedProducts } from "@/lib/constants";

export default function NewReleases() {
  return (
    <ProductCarousel products={sampleFetchedProducts} heading="New Releases" />
  );
}
