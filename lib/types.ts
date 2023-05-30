import { StaticImageData } from "next/image";
import {
  AllHTMLAttributes,
  Dispatch,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  RefObject,
  SetStateAction,
} from "react";

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
  // temp state-based cart until https://github.com/vercel/next.js/issues/49662 gets fixed
  isCartOpen: boolean;
  toggleCart: () => void;
  openSearch: () => void;
  openMenu: () => void;
  // temp state-based menu until https://github.com/vercel/next.js/issues/49662 gets fixed
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export type ButtonVariant = 1 | 2 | 3 | 4;

export type TextVariant = 1 | 2 | 3 | 4 | 5 | 6;

export interface TextComponent {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  props?: AllHTMLAttributes<HTMLParagraphElement>;
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

export interface InputProps {
  className?: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  label?: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
  icon?: StaticImageData | string;
  onIconClick?: () => any;
}

export interface FieldDisplayProps {
  data: { heading: string; content: string };
  toggleEdit: Dispatch<SetStateAction<boolean>>;
}

export interface FieldDisplayInputProps {
  controls: {
    isOnEdit: boolean;
    setIsOnEdit: Dispatch<SetStateAction<boolean>>;
    type?: HTMLInputTypeAttribute;
    label: string;
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    data: FieldDisplayProps["data"];
  };
}
