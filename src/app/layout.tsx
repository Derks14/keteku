import type { Metadata } from "next";
import { Dosis, Inter, Magra, Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/services/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
}); //  try work sans here or dosis or Magra

const dosis = Dosis({
  display: "swap",
  subsets: ["latin"],
});

const magra = Magra({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Derrick Kwabena Keteku",
  description: "Software Engineer with over 3 years of building problem solving applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("overflow-hidden", dosis.className)}>
        <div className="h-screen max-h-screen overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
