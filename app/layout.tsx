import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Canada eTA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    template: "%s ‐ Canada eTA Online",
  },
  description:
    "Polskojezyczny kompletny przewodnik Canada eTA 2026. Oplata $7 CAD, waznosc do 5 lat lub do wygasniecia paszportu. Decyzja zwykle w kilka minut, zalecane zlozenie wniosku przed wyjazdem.",
  keywords:
    "Canada eTA, Canada eTA 2026, Kanada, electronic Travel Authorization, wniosek eTA, Polska, oplata 7 CAD",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Canada eTA Online 2026 | Polskojezyczny przewodnik krok po kroku",
    description:
      "Polskojezyczny kompletny przewodnik Canada eTA 2026. Oplata $7 CAD, waznosc do 5 lat lub do wygasniecia paszportu. Decyzja zwykle w kilka minut, zalecane zlozenie wniosku przed wyjazdem.",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}