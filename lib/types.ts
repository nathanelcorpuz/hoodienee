import { StaticImageData } from "next/image";

export type Theme = "dark" | "light";

export interface ThemeContextInterface {
  theme: Theme;
  setTheme: (str: Theme) => void;
}

export interface HeaderControls {
  openCart: () => void;
  openSearch: () => void;
  openMenu: () => void;
}

export type TextVariant = 1 | 2 | 3 | 4 | 5 | 6;

export interface TextComponent {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
}

export interface FetchedProduct {
  _id: string | number;
  img: StaticImageData | string;
}

export interface ProductCarouselProps {
  products: FetchedProduct[];
  heading: string;
}

export interface BenefitProps {
  benefit: {
    alt: string;
    img: StaticImageData | string;
    title: string;
    subtitle: string;
  };
}

export interface CommonLink {
  href: string;
  text: string;
}
