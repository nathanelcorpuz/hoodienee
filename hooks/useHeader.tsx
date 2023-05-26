"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = () => router.push("/cart");
  const openSearch = () => router.push("/search");
  const openMenu = () => router.push("/menu");
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return {
    openCart,
    openSearch,
    openMenu,
    isMenuOpen,
    toggleMenu,
  };
}
