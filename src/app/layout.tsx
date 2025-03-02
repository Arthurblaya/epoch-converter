import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Inconsolata } from "next/font/google";

export const consoleFont = Inconsolata({
  weight: "700",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Epoch Converter",
  description:
    "Convert Unix timestamps to human-readable dates with timezone support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
