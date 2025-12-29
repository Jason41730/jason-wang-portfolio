import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/components/LanguageProvider";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Jason Wang",
  description: "Personal portfolio website of Jason Wang",
  openGraph: {
    title: "Jason Wang",
    description: "Personal portfolio website of Jason Wang",
    url: "https://jason-wang-portfolio.vercel.app",
    siteName: "Jason Wang Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Wang",
    description: "Personal portfolio website of Jason Wang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
