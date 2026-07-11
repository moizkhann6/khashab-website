import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { DbProvider } from "@/context/DbContext";
import NewsletterPopup from "@/components/NewsletterPopup";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KhashabSA | Premium Wood Manufacturing & Bespoke Woodwork Saudi Arabia",
    template: "%s | KhashabSA"
  },
  description: "KhashabSA is Saudi Arabia's premium wood manufacturer (est. 2015). We engineer bespoke doors, luxury windows, kitchens, premium wardrobes, B2B office furniture, and MoH-compliant healthcare wood solutions.",
  keywords: ["wood manufacturing saudi arabia", "premium carpentry jeddah", "bespoke doors saudi", "commercial furniture saudi", "healthcare woodwork moh compliant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        <DbProvider>
          <CustomCursor />
          <NewsletterPopup />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </DbProvider>
      </body>
    </html>
  );
}

