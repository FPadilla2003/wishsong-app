import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

export const metadata: Metadata = {
  title: "Wishsong",
  description: "A platform to search and create lists for your favorite music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter 
        ${montserrat.variable} font-montserrat
        ${openSans.variable} font-openSans}`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
