import Link from "next/link";
import ThemeToggler from "./ThemeToggler";

export default function HeaderLinks1() {
  return (
    <div className="flex">
      <Link
        className="block px-4 py-2 font-black dark:hover:bg-gray-700"
        href="/"
      >
        H
      </Link>
      <ThemeToggler />
    </div>
  );
}
