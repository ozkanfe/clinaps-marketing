import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lab Eğitim — Akademik eğitim ve program yönetimi | Clinaps",
  description:
    "Haftalık laboratuvar eğitim programı, çok merkezli yapı ve bildirimlerle akademik koordinasyonu tek platformda toplayın.",
  keywords: [
    "laboratuvar eğitimi",
    "patoloji eğitim",
    "akademik program",
    "Clinaps",
    "Lab Eğitim",
  ],
  openGraph: {
    title: "Lab Eğitim — Clinaps",
    description: "Akademik eğitim ve program yönetim platformu",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
