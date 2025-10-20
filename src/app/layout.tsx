import type { Metadata } from "next";
import { Open_Sans, Orbitron } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/shared/back-to-top";

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-orbitron'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Veetgold Official",
  description: "Veetgold a special brand for beauty improvement and body maintenance. It express your beauty beyond imagination. ( Makeup, Skin care, Perfume, Toiletries, baby products, ladies personals etc)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${openSans.variable} antialiased text-greyscale-text-title`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
