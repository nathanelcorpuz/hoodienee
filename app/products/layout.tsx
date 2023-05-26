import { ProductsContext } from "@/providers/ProductsProvider";
import { useContext } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { filters } = useContext(ProductsContext);
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 top-0 bg-red-500">
        Filters
      </div>
      {children}
    </div>
  );
}
