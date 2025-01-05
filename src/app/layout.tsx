import type { Metadata } from "next";
import { Dosis, Inter, Magra, Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import { cn } from "@/services/utils";
import { dank } from "@/services/font";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
}); //  try work sans here or dosis or Magra

const dosis = Dosis({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Derrick Kwabena Keteku",
  description: "Software Engineer with over 3 years of building problem solving applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("overflow-hidden tracking-tight dark", dank.className)}>
        <ThemeProvider>
          <div className="h-screen max-h-screen overflow-hidden">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
