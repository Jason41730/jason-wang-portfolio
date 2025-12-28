"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Photos() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Photos",
      description: "A collection of my photography work.",
    },
    zh: {
      heading: "照片",
      description: "我的攝影作品集。",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            {t.heading}
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {t.description}
          </p>
        </div>
      </section>
    </div>
  );
}



