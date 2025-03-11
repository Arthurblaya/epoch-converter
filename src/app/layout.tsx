import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";
import { TimeZoneProvider } from "@/context/timeZoneContext";
import Sidebar from "@/components/sideBar";
import { DateFormatProvider } from "@/context/dateFormatContext";
import DateFormatSelector from "@/components/dateFormatSelector";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Timestamp Converter",
    template: "%s - Timestamp Converter",
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
            <DateFormatProvider>
              <div className="flex min-h-screen">
                <div className="flex-1 flex flex-col w-full min-w-0">
                  <Header />
                  <main className="flex-1 w-full">{children}</main>
                  <Footer />
                </div>
                <Sidebar>
                  <DateFormatSelector />
                </Sidebar>
              </div>
            </DateFormatProvider>
          </TimeZoneProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
