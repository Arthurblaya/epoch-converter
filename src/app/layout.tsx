import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Epoch Converter",
  description:
    "Convert Unix timestamps to human-readable dates with timezone support.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="epochTheme" lang="en">
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
