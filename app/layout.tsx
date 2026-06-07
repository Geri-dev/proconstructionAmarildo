import type { Metadata } from "next";
import { bebasNeue, fontBody, geist } from "./fonts";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingModalProvider } from "@/components/providers/BookingModalProvider";
import { GlobalStructuredData } from "@/components/seo/GlobalStructuredData";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${geist.variable} h-full antialiased`}
    >
      <body className={`${fontBody} min-h-full flex flex-col`}>
        <GlobalStructuredData />
        <BookingModalProvider>
          {children}
          <SiteChrome />
        </BookingModalProvider>
      </body>
    </html>
  );
}
