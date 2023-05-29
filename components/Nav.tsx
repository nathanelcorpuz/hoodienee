"use client";

import LinkText from "@/components/texts/LinkText";
import { CommonLink } from "@/lib/types";
import { usePathname } from "next/navigation";

export default function Nav({ links }: { links: CommonLink[] }) {
  const pathname = usePathname();
  const className = "px-8 py-4 no-underline";
  const activeClassName = `${className} border-b-8 border-b-white`;

  return (
    <nav className="flex overflow-x-auto border-b border-b-gray-700">
      {links.map((link) =>
        pathname == link.href ? (
          <LinkText
            key={link.href}
            className={activeClassName}
            href={link.href}
          >
            {link.text}
          </LinkText>
        ) : (
          <LinkText key={link.href} className={className} href={link.href}>
            {link.text}
          </LinkText>
        )
      )}
    </nav>
  );
}
