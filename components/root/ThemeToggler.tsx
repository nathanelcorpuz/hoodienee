"use client";

import moon from "../../public/icons/moon.png";
import sun from "../../public/icons/sun.png";
import Image from "next/image";
import { ThemeContext } from "providers/ThemeProvider";
import { useContext } from "react";

export default function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 dark:hover:bg-gray-700"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Image src={moon} alt="dark mode icon" width={15} height={15} />
      ) : (
        <Image src={sun} alt="light mode icon" width={15} height={15} />
      )}
    </button>
  );
}
