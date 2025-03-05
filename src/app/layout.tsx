import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import { TimeZoneProvider } from "@/context/timeZoneContext";
import Sidebar from "@/components/sideBar";

export const metadata: Metadata = {
  title: {
    default: "Epoch Converter",
    template: "%s - Epoch Converter",
  },
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
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider defaultTheme="light">
          <TimeZoneProvider>
            <div className="flex min-h-screen">
              <div className="flex-1 flex flex-col w-full min-w-0">
                <Header />
                <main className="flex-1 w-full">{children}</main>
              </div>
              <Sidebar>
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </Sidebar>
            </div>
          </TimeZoneProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
