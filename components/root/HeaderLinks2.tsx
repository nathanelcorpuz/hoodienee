"use client";

import Image from "next/image";
import cart from "../../public/icons/cart.png";
import cartDark from "../../public/icons/cart-dark.png";
import search from "../../public/icons/search.png";
import searchDark from "../../public/icons/search-dark.png";
import { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import IconButton from "../common/IconButton";

export default function HeaderLinks2() {
  const { theme } = useContext(ThemeContext);

  const isThemeDark = theme === "dark";

  return (
    <div className="flex">
      <IconButton>
        {isThemeDark ? (
          <Image src={cart} alt="cart icon" width={15} height={15} />
        ) : (
          <Image src={cartDark} alt="cart dark icon" width={15} height={15} />
        )}
      </IconButton>
      <IconButton>
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
        className="px-4 py-2 
      dark:hover:bg-gray-700 
      hover:bg-gray-300
      cursor-pointer"
      >
        Menu
      </p>
    </div>
  );
}
