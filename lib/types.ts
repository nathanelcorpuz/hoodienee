import { StaticImageData } from "next/image";
import { RefObject } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextInterface {
  theme: Theme;
  setTheme: (str: Theme) => void;
}

export interface ProductsContextInterface {
  filters: string[];
  setFilters: (stringArray: string[]) => void;
}

export interface HeaderControls {
  openCart: () => void;
  openSearch: () => void;
  openMenu: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export type ButtonVariant = 1 | 2 | 3 | 4;

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

export interface CarouselHookProps {
  list: FetchedProduct[];
}

export interface CarouselHook {
  ref: RefObject<HTMLDivElement>;
  focusedItemIndex: number;
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
  list: any[];
}

export interface CarouselProps {
  controls: CarouselHook;
  heading: string;
  isCollection?: boolean;
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

export interface DropdownSelection {
  value: string;
  label: string;
}
