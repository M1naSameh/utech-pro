import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "UTech Pro | Smart Technology Solutions",
  description:
    "UTech Pro provides websites, mobile apps, AI automation, data analysis, graphic design, and video editing services for modern businesses.",
  openGraph: {
    title: "UTech Pro",
    description: "Smart technology solutions that make a difference in your business.",
    images: ["/images/utech-cover.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col overflow-hidden">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
