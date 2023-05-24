import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useHeader() {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const openCart = () => router.push("/cart");

  const openSearch = () => router.push("/search");

  const openMenu = () => router.push("/menu");
  return {
    openCart,
    openSearch,
    openMenu,
  };
}
