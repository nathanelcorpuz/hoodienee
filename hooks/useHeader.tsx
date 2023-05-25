"use client";

import { useRouter } from "next/navigation";

export default function useHeader() {
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
