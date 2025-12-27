"use client";

import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <>
      <Hero lang={lang} />
      <Welcome lang={lang} />
    </>
  );
}
