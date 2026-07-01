"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  lang: "en" | "zh";
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    en: {
      name: "Jason Wang",
      eyebrow: "NTUEE Senior | Incoming NTU GIEE EDA Group",
      headline: "I build full-stack products, AI tools, and EDA/CAD systems.",
      intro:
        "My work sits between software engineering and electronic design automation: shipping usable web products, experimenting with LLM workflows, and building optimization tools for IC design problems.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      proofPoints: [
        "CAD Contest Excellent Award",
        "AI + LINE Bot products",
        "Next.js dashboards",
      ],
    },
    zh: {
      name: "汪煒杰",
      eyebrow: "台大電機大四 | 將就讀台大電子所 EDA 組",
      headline: "我做全端產品、AI 工具，也做 EDA/CAD 系統。",
      intro:
        "我喜歡把軟體工程和電子設計自動化放在一起思考：從能真正使用的 Web 產品、LLM 工作流程，到 IC 設計最佳化問題的演算法實作。",
      primaryCta: "查看專案",
      secondaryCta: "聯絡我",
      proofPoints: [
        "CAD Contest 優等獎",
        "AI + LINE Bot 產品",
        "Next.js Dashboard",
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="relative min-h-[76vh] flex items-center bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about1.jpg"
          alt=""
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/65" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl py-8 sm:py-12 md:py-16">
          <div className="mb-5 h-16 w-16 overflow-hidden rounded-full border border-white/35 bg-white/10 shadow-2xl sm:h-20 sm:w-20 md:h-24 md:w-24">
            <Image
              src="/images/profile.jpg"
              alt={t.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 sm:text-sm">
            {t.eyebrow}
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
            {t.name}
          </h1>

          <p className="mt-3 max-w-4xl text-2xl font-semibold leading-snug text-white md:mt-4 md:text-4xl">
            {t.headline}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-100 sm:text-base md:mt-5 md:text-lg md:leading-8">
            {t.intro}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3 md:mt-6">
            {t.proofPoints.map((item) => (
              <span
                key={item}
                className="border border-white/25 bg-white/10 px-2.5 py-2 text-xs font-medium text-white backdrop-blur sm:px-3 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-white px-4 py-3 font-semibold text-gray-950 transition-colors hover:bg-cyan-100 sm:px-6"
            >
              {t.primaryCta}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/45 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:px-6"
            >
              {t.secondaryCta}
            </Link>
          </div>

          <a
            href="mailto:jason41730@gmail.com"
            className="mt-6 hidden text-sm font-medium text-gray-100 underline underline-offset-4 transition-colors hover:text-white sm:inline-block"
          >
            jason41730@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
