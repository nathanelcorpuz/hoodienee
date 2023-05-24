import Footer from "@/components/root/Footer";
import RootLayoutWrapper from "@/components/root/RootLayoutWrapper";
import ThemeWrapper from "@/components/root/ThemeWrapper";
import Header from "@/components/root/Header";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "providers/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "HOODiENEE - Premium Hoodies";
const description = "A hoodie shop.";

export const metadata: Metadata = { title, description };

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <ThemeWrapper>
            <RootLayoutWrapper>
              <Header />
              {modal}
              {children}
              <Footer />
            </RootLayoutWrapper>
          </ThemeWrapper>
        </Providers>
      </body>
    </html>
  );
}
