"use client";

import Image from "next/image";
import cart from "../../public/icons/cart.png";
import cartDark from "../../public/icons/cart-dark.png";
import search from "../../public/icons/search.png";
import searchDark from "../../public/icons/search-dark.png";
import { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import IconButton from "../../components/IconButton";
import { HeaderControls } from "@/lib/types";

export default function HeaderLinks2({
  headerControls,
}: {
  headerControls: HeaderControls;
}) {
  const { theme } = useContext(ThemeContext);

  const isThemeDark = theme === "dark";

  return (
    <>
      <div className="flex">
        <IconButton props={{ onClick: headerControls.openCart }}>
          {isThemeDark ? (
            <Image src={cart} alt="cart icon" width={15} height={15} />
          ) : (
            <Image src={cartDark} alt="cart dark icon" width={15} height={15} />
          )}
        </IconButton>
        <IconButton props={{ onClick: headerControls.openSearch }}>
          {isThemeDark ? (
            <Image src={search} alt="search icon" width={15} height={15} />
          ) : (
            <Image
              src={searchDark}
              alt="search dark icon"
              width={15}
              height={15}
            />
          )}
        </IconButton>
        <p
          className="cursor-pointer px-4 py-2 
        hover:bg-gray-300
        dark:hover:bg-gray-700"
          onClick={() => headerControls.openMenu()}
        >
          Menu
        </p>
      </div>
    </>
  );
}
