import Navbar from "@/components/navbar";
import clsx from "clsx";
import type { Metadata } from "next";
import { Montserrat, Palanquin } from "next/font/google";
import "./globals.css";

const palanquin = Palanquin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-palanquin",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nike Tailwind Clone",
  description: "Next.js 13.4, Tailwind Css, Nike Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(montserrat.variable, palanquin.variable)}>
        <main className="relative">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
