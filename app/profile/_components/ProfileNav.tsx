"use client";

import LinkText from "@/components/texts/LinkText";
import { usePathname } from "next/navigation";

export default function ProfileNav() {
  // WIP
  const pathname = usePathname();
  const className = "px-8 py-4 no-underline";
  const activeClassName = `${className} border-b-8 border-b-white`;

  return (
    <nav className="flex overflow-x-auto border-b border-b-gray-700">
      {pathname.includes("information") ? (
        <LinkText className={activeClassName} href="/profile/information">
          Profile
        </LinkText>
      ) : (
        <LinkText className={className} href="/profile/information">
          Profile
        </LinkText>
      )}
      {/* change name, email */}
      {pathname.includes("shipping") ? (
        <LinkText className={activeClassName} href="/profile/shipping">
          Shipping
        </LinkText>
      ) : (
        <LinkText className={className} href="/profile/shipping">
          Shipping
        </LinkText>
      )}
      {/* change address */}

      {pathname.includes("settings") ? (
        <LinkText className={activeClassName} href="/profile/settings">
          Settings
        </LinkText>
      ) : (
        <LinkText className={className} href="/profile/settings">
          Settings
        </LinkText>
      )}
      {/* change pass, set theme preference */}
    </nav>
  );
}
