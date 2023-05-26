"use client";

import { ProductsContextInterface } from "@/lib/types";
import { createContext, useState } from "react";

export const ProductsContext = createContext<ProductsContextInterface>({
  filters: [],
  setFilters: (stringArray: string[]) => {},
});

export default function ProductsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filters, setFilters] = useState<any[]>([]);
  return (
    <ProductsContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductsContext.Provider>
  );
}
