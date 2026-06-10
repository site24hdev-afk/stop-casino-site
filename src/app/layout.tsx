import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stop Casino — Reprends le contrôle de ta vie",
  description:
    "Stop Casino est l'application qui t'aide à arrêter le casino. Compteur de jours, suivi des économies, exercices de gestion des envies, badges de récompenses. 100% privé, gratuit.",
  keywords: [
    "stop casino",
    "arrêter casino",
    "addiction jeux",
    "ludopathie",
    "arrêter de jouer",
    "anti gambling",
    "sobriété jeux",
  ],
  authors: [{ name: "Stop Casino" }],
  openGraph: {
    title: "Stop Casino — Reprends le contrôle de ta vie",
    description:
      "L'app qui t'aide à arrêter le casino. Compteur, économies, badges, SOS envies. 100% privé.",
    type: "website",
    locale: "fr_FR",
    url: "https://stopcasino.app",
    siteName: "Stop Casino",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Casino — Reprends le contrôle de ta vie",
    description:
      "L'app qui t'aide à arrêter le casino. Compteur, économies, badges, SOS envies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
