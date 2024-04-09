import { Metadata } from "next";
import "@/app/global.css";
import Header from "@/ui/layout/Header";
import FixedHeader from "@/ui/layout/FixedHeader";
import { fontNormal } from "@/ui/font";

export const metadata: Metadata = {
  title: "Hentori",
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
      <body className={fontNormal.className}>
        <Header />
        <FixedHeader />
        {children}
      </body>
    </html>
  );
}
