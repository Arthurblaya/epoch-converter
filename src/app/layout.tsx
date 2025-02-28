import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
