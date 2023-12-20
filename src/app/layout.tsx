import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montserrat",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebasNeue",
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
        ${nunito.variable} font-nunito}
        ${bebasNeue.variable} font-bebasNeue`}
      >
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <div className="flex-grow bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
