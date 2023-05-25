import { sampleFetchedProducts as items } from "@/lib/constants";
import ProductCarousel from "@/components/common/ProductCarousel";

export default function Bestsellers() {
  return <ProductCarousel products={items} heading="Bestsellers" />;
}
