"use client";

import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="flex">
        <Link
          className="px-4 py-2 font-black block dark:hover:bg-gray-700"
          href="/"
        >
          H
        </Link>
        <ThemeToggler />
      </div>
    </header>
  );
}
