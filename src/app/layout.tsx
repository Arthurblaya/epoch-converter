import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import { TimeZoneProvider } from "@/context/timeZoneContext";

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
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider defaultTheme="light">
          <TimeZoneProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-1">{children}</div>
            </div>
          </TimeZoneProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
