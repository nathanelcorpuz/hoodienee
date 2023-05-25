"use client";

import HeaderLinks1 from "./HeaderLinks1";
import HeaderLinks2 from "./HeaderLinks2";
import useHeader from "hooks/useHeader";

export default function Header() {
  const headerControls = useHeader();
  return (
    <header
      className="fixed z-[999] flex w-[100%] 
    justify-between 
    border-b border-b-gray-700 
    bg-white dark:bg-black"
    >
      <HeaderLinks1 />
      <HeaderLinks2 headerControls={headerControls} />
    </header>
  );
}
