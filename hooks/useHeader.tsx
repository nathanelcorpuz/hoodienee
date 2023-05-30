"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // temp state-based cart modal until github issue gets fixed: https://github.com/vercel/next.js/issues/49662
  const [isCartOpen, setIsCartOpen] = useState(false);

  // url-based cart modal until github issue gets fixed: https://github.com/vercel/next.js/issues/49662
  const openCart = () => router.push("/cart");
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const openSearch = () => router.push("/search");
  const openMenu = () => router.push("/menu");
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return {
    openCart,
    isCartOpen,
    toggleCart,
    openSearch,
    openMenu,
    isMenuOpen,
    toggleMenu,
  };
}
