import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./lib/globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LiftMore",
  description: "Strength Training Focused Workout Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <body className="text-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <main className="max-w-3xl mx-auto py-8">
              {children}
            </main>
          </div>
        </body>
      </body>
    </html>
  );
}
