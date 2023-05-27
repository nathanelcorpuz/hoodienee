import ProductCarousel from "@/components/ProductCarousel";
import { sampleFetchedProducts } from "@/lib/constants";

export default function Related() {
  return (
    <section>
      <ProductCarousel products={sampleFetchedProducts} heading="Related" />
    </section>
  );
}
