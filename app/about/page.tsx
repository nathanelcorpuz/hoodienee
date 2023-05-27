import Button from "@/components/Button";
import StandardText from "@/components/texts/StandardText";
import SupportText from "@/components/texts/SupportText";
import PageWrapper from "@/components/wrappers/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper className="gap-[50px] px-4 py-[80px] text-center">
      <StandardText>
        Welcome to Hoodienee, the ultimate online shop for hoodie enthusiasts.
        Discover our diverse collection of stylish and comfortable hoodies,
        curated to reflect your unique style. With our user-friendly website and
        commitment to customer satisfaction, finding your perfect hoodie has
        never been easier. Elevate your hoodie game with Hoodienee and embrace
        the perfect blend of comfort and style.
      </StandardText>
      <StandardText>
        At Hoodienee, we believe a hoodie is more than just clothing—it's a
        statement of individuality. Explore our range of classic zip-ups, trendy
        tie-dyes, and sporty color blocks. With the latest styles and secure
        checkout, shopping for your favorite hoodies is a breeze. Join us at
        Hoodienee, where comfort meets style, and redefine your hoodie
        experience today.
      </StandardText>
      <div className="flex flex-col gap-[10px]">
        <SupportText>Explore our products today</SupportText>
        <Button>Shop</Button>
      </div>
    </PageWrapper>
  );
}
