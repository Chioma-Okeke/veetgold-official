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
  metadataBase: new URL('https://tolce-learning-hub.vercel.app/'),
  title: {
    default: "Veetgold Official",
    template: "Veetgold Official | %s",
  },
  authors: [
    {
      name: "Tolce Learning Hub",
      url: "https://tolce-learning-hub.vercel.app/"
    }
  ],
  description:
    "Veetgold a special brand for beauty improvement and body maintenance. It express your beauty beyond imagination. ( Makeup, Skin care, Perfume, Toiletries, baby products, ladies personals etc)",
  keywords: [
    "Veetgold Official",
    "Beauty products",
    "Skin care",
    "Makeup",
    "Perfume",
    "Toiletries",
    "Baby products",
    "Ladies personals",
  ],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://veetgold-official.vercel.app/',
    siteName: 'Veetgold Official',
    title: 'Veetgold Official',
    description:
      "Veetgold a special brand for beauty improvement and body maintenance. It express your beauty beyond imagination. ( Makeup, Skin care, Perfume, Toiletries, baby products, ladies personals etc)",
    images: [
      {
        url: 'https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/logo_ae8tzv.webp',
        width: 1200,
        height: 630,
        alt: 'Veetgold Official Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veetgold Official',
    description:
      "Veetgold a special brand for beauty improvement and body maintenance. It express your beauty beyond imagination. ( Makeup, Skin care, Perfume, Toiletries, baby products, ladies personals etc)",
    creator: '@veetgoldofficialpage',
    images: [
      'https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/logo_ae8tzv.webp',
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  applicationName: 'Veetgold Official',
}

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
