import productImg1 from "@/public/square/1.png";
import productImg2 from "@/public/square/2.png";
import productImg3 from "@/public/square/3.png";
import productImg4 from "@/public/square/4.png";
import productImg5 from "@/public/square/5.png";
import productImg6 from "@/public/square/6.png";
import productImg7 from "@/public/square/7.png";
import triangle from "@/public/icons/triangle.png";
import circle from "@/public/icons/circle.png";
import square from "@/public/icons/square.png";
import { CommonLink } from "./types";

export const sampleFetchedProducts = [
  {
    _id: 1,
    img: productImg1,
  },
  {
    _id: 2,
    img: productImg2,
  },
  {
    _id: 3,
    img: productImg3,
  },
  {
    _id: 4,
    img: productImg4,
  },
  {
    _id: 5,
    img: productImg5,
  },
  {
    _id: 6,
    img: productImg6,
  },
  {
    _id: 7,
    img: productImg7,
  },
];

export const benefits = [
  {
    img: triangle,
    alt: "triangle icon",
    title: "Premium Quality",
    subtitle: "Unparalleled comfort",
  },
  {
    img: circle,
    alt: "circle icon",
    title: "Finest Materials",
    subtitle: "Breathable fabrics",
  },
  {
    img: square,
    alt: "triangle icon",
    title: "Expert Craftmanship",
    subtitle: "Meticulously made",
  },
];

export const headerMenuLinks: CommonLink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/products",
    text: "Products",
  },
  {
    href: "/collections",
    text: "Collections",
  },
  {
    href: "/cart",
    text: "Cart",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/branches",
    text: "Branches",
  },
  {
    href: "/profile/information",
    text: "Profile",
  },
];

export const footerLink1: CommonLink[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/branches",
    text: "Branches",
  },
  {
    href: "/contact",
    text: "Contact",
  },
];

export const footerLink2: CommonLink[] = [
  {
    href: "/hoodies",
    text: "Hoodies",
  },
  {
    href: "/collections",
    text: "Collections",
  },
  {
    href: "/collections/featured",
    text: "Featured",
  },
  {
    href: "/collections/bestsellers",
    text: "Bestsellers",
  },
];

export const footerLink3: CommonLink[] = [
  {
    href: "/terms",
    text: "Terms",
  },
  {
    href: "/privacy",
    text: "Privacy",
  },
  {
    href: "/faqs",
    text: "FAQs",
  },
  {
    href: "/login",
    text: "Login",
  },
];

export const socialLinks: CommonLink[] = [
  {
    href: "/",
    text: "Twitter",
  },
  {
    href: "/",
    text: "LinkedIn",
  },
  {
    href: "/",
    text: "Instagram",
  },
];

export const profileLinks: CommonLink[] = [
  {
    href: "/profile/information",
    text: "Profile",
  },
  {
    href: "/profile/shipping",
    text: "Shipping",
  },
  {
    href: "/profile/settings",
    text: "Settings",
  },
];

export const checkoutLinks: CommonLink[] = [
  {
    href: "/checkout/cart",
    text: "Cart",
  },
  {
    href: "/checkout/shipping",
    text: "Shipping",
  },
  {
    href: "/checkout/payment",
    text: "Payment",
  },
];
