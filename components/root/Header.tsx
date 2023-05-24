"use client";

import HeaderLinks1 from "./HeaderLinks1";
import HeaderLinks2 from "./HeaderLinks2";
import useHeader from "hooks/useHeader";

export default function Header() {
  const headerControls = useHeader();
  return (
    <header className="flex justify-between border-b border-b-gray-700">
      <HeaderLinks1 />
      <HeaderLinks2 headerControls={headerControls} />
    </header>
  );
}
