import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              CogniBot
            </Link>
            <div className="space-x-4">
              <Link href="/terms" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </nav>
        <header className="text-center py-16">
          <h1 className="text-4xl font-bold">Welcome to CogniBot</h1>
          <p className="mt-4 text-lg">
            Your friendly Discord bot powered by OpenAI's API for text and image
            generation.
          </p>
          <Link
            href="/#subscription"
            className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600"
          >
            Subscribe to Updates
          </Link>
        </header>
        {children}
        <footer className="bg-gray-800 text-gray-400 py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 CogniBot. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
