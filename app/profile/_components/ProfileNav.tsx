"use client";

import LinkText from "@/components/texts/LinkText";

export default function ProfileNav() {
  // WIP
  return (
    <nav className="flex border-b border-b-gray-700">
      <LinkText className="px-8 py-4 no-underline" href="/profile/information">
        Profile
      </LinkText>
      {/* change name, email */}
      <LinkText className="px-8 py-4 no-underline" href="/profile/shipping">
        Shipping
      </LinkText>
      {/* change address */}
      <LinkText className="px-8 py-4 no-underline" href="/profile/settings">
        Settings
      </LinkText>
      {/* change pass, set theme preference */}
    </nav>
  );
}
