import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Icons } from "./components/icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Common classes
const containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
const cardClass = "bg-white rounded-lg shadow-sm";

export const metadata: Metadata = {
  title: "Supply Chain Tracker",
  description: "Track and manage your supply chain items efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <header className={`${cardClass} border-b border-gray-200 sticky top-0 z-50 shadow-sm`}>
          <div className={containerClass}>
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className="flex items-center space-x-2"
                >
                  <Icons.Logo />
                  <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">
                    Supply Chain Tracker
                  </h1>
                </Link>
              </div>

              <nav className="flex space-x-4">
                <Link 
                  href="/items" 
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <Icons.Items />
                  <span>Items</span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className={`${containerClass} py-8`}>
          <div className={`${cardClass} p-6`}>
            {children}
          </div>
        </main>

        <footer className={`${cardClass} border-t border-gray-200 mt-auto`}>
          <div className={`${containerClass} py-6`}>
            <div className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Supply Chain Tracker. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
