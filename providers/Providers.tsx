import ProductsProvider from "./ProductsProvider";
import ThemeProvider from "./ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  );
}
