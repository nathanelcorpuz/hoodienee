"use client";

import { ThemeContext } from "providers/ThemeProvider";
import { useContext } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
}
