import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";
import "@/app/global.css";
import Header from "@/ui/layout/Header";
import FixedHeader from "@/ui/layout/FixedHeader";
import { fontNormal } from "@/ui/font";
import Footer from "@/ui/layout/Footer";

config.autoAddCss = false;
export const metadata: Metadata = {
  title: "Hentori Bespoke",
  description: "Bespoke Veston",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" type="image/ico" href="./hentori.ico" />
      <body className={fontNormal.className + " scroll-behavior: smooth;"}>
        <Header />
        <FixedHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
