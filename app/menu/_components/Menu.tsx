"use client";

import LinkText from "@/components/texts/LinkText";
import { headerMenuLinks } from "@/lib/constants";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      {headerMenuLinks.map((link) => (
        // <LinkText key={link.href} href={link.href} className="p-3">
        //   {link.text}
        // </LinkText>
        <p
          key={link.href}
          className="p-3"
          onClick={() => router.push(link.href)}
        >
          {link.text}
        </p>
      ))}
    </div>
  );
}
