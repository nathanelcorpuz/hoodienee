"use client";

import HeaderLinks1 from "./HeaderLinks1";
import HeaderLinks2 from "./HeaderLinks2";

export default function Header() {
  return (
    <header className="flex justify-between">
      <HeaderLinks1 />
      <HeaderLinks2 />
    </header>
  );
}
