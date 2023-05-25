import Footer from "@/app/_root-layout-components/Footer";
import RootLayoutWrapper from "@/app/_root-layout-components/RootLayoutWrapper";
import ThemeWrapper from "@/app/_root-layout-components/ThemeWrapper";
import Header from "@/app/_root-layout-components/Header";
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
