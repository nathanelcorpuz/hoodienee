"use client";

import LayoutWrapper from "@/components/wrappers/LayoutWrapper";
import ProfileNav from "./_components/ProfileNav";
import { usePathname } from "next/navigation";

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
      <ProfileNav />
      {pathname === "/profile" && children}
      {pathname === "/profile/information" && profile}
      {pathname === "/profile/shipping" && shipping}
      {pathname === "/profile/settings" && settings}
    </LayoutWrapper>
  );
}
