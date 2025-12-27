"use client";

import Image from "next/image";

interface HeroProps {
  lang: "en" | "zh";
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Jason Wang",
      profession: "NTUEE Senior",
    },
    zh: {
      greeting: "你好，我是",
      name: "汪煒杰",
      profession: "台大電機系大四",
    },
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-gray-700 flex items-center justify-center">
            <Image
              src="/images/profile.jpg"
              alt={t.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          {t.greeting} {t.name}
        </h1>

        {/* Profession */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-light">
          {t.profession}
        </p>
      </div>
    </section>
  );
}
