"use client";

import Navigation from "@/components/Navigation";
import { useLanguage } from "@/components/LanguageProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang, setLang } = useLanguage();

  return (
    <>
      <Navigation currentLang={lang} onLangChange={setLang} />
      <main className="pt-16">{children}</main>
    </>
  );
}

