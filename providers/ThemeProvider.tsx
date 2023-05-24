"use client";

import { Theme } from "@/lib/types";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: (_: Theme) => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
