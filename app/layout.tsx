import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/components/LanguageProvider";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Jason Wang - Web Programmer",
  description: "Personal portfolio website of Jason Wang, Web Programmer",
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
