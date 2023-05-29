"use client";

import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import { profileLinks } from "@/lib/constants";

export default function Layout({
  children,
  profile,
  shipping,
  settings,
}: {
  children: React.ReactNode;
  profile: React.ReactNode;
  shipping: React.ReactNode;
  settings: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <LayoutWrapper className="pt-[40.5px]">
      <Nav links={profileLinks} />
      {pathname === "/profile" && children}
      {pathname === "/profile/information" && profile}
      {pathname === "/profile/shipping" && shipping}
      {pathname === "/profile/settings" && settings}
    </LayoutWrapper>
  );
}
