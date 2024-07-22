"use client";

import {Inter} from "next/font/google";
import "./lib/globals.css";

import Header from "@/components/header";
import React from "react";
import {useMediaQuery} from "@/hooks/use-media-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let dynamicLayout: string = "sm:px-1 md:px-1 lg:px-4";
  if (!isDesktop) {
    dynamicLayout += " m-4";
  }

  return (
    <html lang="en">
      <body className="{inter.className} bg-slate-100">
        <div className="text-gray-900">
          <div className={dynamicLayout}>
            <Header />
            <main className="sm:py-2 md:py-2 lg:py-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
