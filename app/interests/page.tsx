"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

type Locale = "en" | "zh";

interface Interest {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  mark: string;
  tags: Record<Locale, string[]>;
  accentClass: string;
  featured?: boolean;
  linkHref?: string;
  linkText?: string;
  linkTextEn?: string;
}

const interests: Interest[] = [
  {
    id: "baseball",
    name: "棒球",
    nameEn: "Baseball",
    description:
      "參與系棒隊，也長期關注職棒賽事。棒球讓我練習溝通、節奏感，以及在壓力下做出穩定判斷。",
    descriptionEn:
      "I play on the department baseball team and follow professional games. Baseball trains communication, rhythm, and steady decisions under pressure.",
    mark: "BB",
    tags: {
      en: ["Teamwork", "Competition", "Rhythm"],
      zh: ["團隊合作", "競賽", "節奏感"],
    },
    accentClass: "border-l-blue-500",
  },
  {
    id: "movies",
    name: "電影",
    nameEn: "Movies",
    description:
      "喜歡電影裡的敘事、鏡頭與情緒推進。好的故事常常會讓我重新思考產品、介面和人的連結。",
    descriptionEn:
      "I enjoy storytelling, cinematography, and emotional pacing. Good films often reshape how I think about products, interfaces, and people.",
    mark: "MV",
    tags: {
      en: ["Stories", "Visuals", "Pacing"],
      zh: ["敘事", "影像", "節奏"],
    },
    accentClass: "border-l-violet-500",
  },
  {
    id: "sports",
    name: "運動",
    nameEn: "Sports",
    description:
      "運動是讓生活維持穩定的方式，也讓我保有體力、耐心和面對長期目標的韌性。",
    descriptionEn:
      "Sports keep my life grounded and help me maintain energy, patience, and resilience for long-term goals.",
    mark: "SP",
    tags: {
      en: ["Energy", "Discipline", "Health"],
      zh: ["活力", "紀律", "健康"],
    },
    accentClass: "border-l-emerald-500",
  },
  {
    id: "travel",
    name: "出遊旅行",
    nameEn: "Travel",
    description:
      "很喜歡出去走走，探索不同城市、風景和生活方式。旅行照片也慢慢變成我記錄階段變化的方式。",
    descriptionEn:
      "I love exploring cities, landscapes, and ways of living. Travel photos have become a way for me to document different seasons of life.",
    mark: "TR",
    tags: {
      en: ["Places", "Photos", "Perspective"],
      zh: ["地方", "照片", "視角"],
    },
    accentClass: "border-l-amber-500",
    featured: true,
    linkHref: "/photos",
    linkText: "查看照片",
    linkTextEn: "See Photos",
  },
  {
    id: "volunteer",
    name: "志工服務",
    nameEn: "Volunteer Service",
    description:
      "加入慈幼山友社服務隊，寒暑假到花蓮山上陪伴小朋友學習。服務讓我更珍惜長期陪伴的力量。",
    descriptionEn:
      "I joined a volunteer service team and spend summers and winters in the Hualien mountains accompanying children in their learning.",
    mark: "SV",
    tags: {
      en: ["Service", "Education", "Hualien"],
      zh: ["服務", "教育", "花蓮"],
    },
    accentClass: "border-l-rose-500",
  },
  {
    id: "web-development",
    name: "網頁開發",
    nameEn: "Web Development",
    description:
      "從前端到後端，把想法變成真的能使用的產品。這也是我整理個人作品集與公開筆記的主要工具。",
    descriptionEn:
      "I enjoy turning ideas into usable products from frontend to backend. It is also my main tool for this portfolio and public notes.",
    mark: "WEB",
    tags: {
      en: ["Full-stack", "Products", "Interfaces"],
      zh: ["全端", "產品", "介面"],
    },
    accentClass: "border-l-cyan-500",
    linkHref: "/projects",
    linkText: "查看專案",
    linkTextEn: "View Projects",
  },
  {
    id: "programming",
    name: "程式設計",
    nameEn: "Programming",
    description:
      "喜歡用程式拆解問題，也喜歡把抽象想法變成可以測試、可以迭代的系統。",
    descriptionEn:
      "I like using code to break down problems and turn abstract ideas into systems that can be tested and iterated.",
    mark: "PG",
    tags: {
      en: ["Problem solving", "Systems", "Iteration"],
      zh: ["問題拆解", "系統", "迭代"],
    },
    accentClass: "border-l-teal-500",
  },
  {
    id: "electrical-engineering",
    name: "電子工程",
    nameEn: "Electrical Engineering",
    description:
      "對硬體設計、EDA/CAD 與邏輯合成有興趣，也期待把軟體工程能力帶進研究工作。",
    descriptionEn:
      "I am interested in hardware design, EDA/CAD, and logic synthesis, and I hope to bring software engineering habits into research.",
    mark: "EE",
    tags: {
      en: ["EDA", "Logic synthesis", "Hardware"],
      zh: ["EDA", "邏輯合成", "硬體"],
    },
    accentClass: "border-l-orange-500",
  },
];

export default function Interests() {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: "Outside engineering",
      heading: "Interests",
      description:
        "The things that keep me curious, grounded, and connected to people outside the screen.",
      snapshotTitle: "What This Adds",
      snapshot: [
        {
          label: "Team sense",
          value: "Baseball and service",
        },
        {
          label: "Observation",
          value: "Movies and travel",
        },
        {
          label: "Long-term energy",
          value: "Sports and craft",
        },
      ],
    },
    zh: {
      eyebrow: "工程之外",
      heading: "興趣",
      description:
        "這些是讓我保持好奇、穩定，也持續和人產生連結的事情。",
      snapshotTitle: "它們帶給我的能力",
      snapshot: [
        {
          label: "團隊感",
          value: "棒球與服務",
        },
        {
          label: "觀察力",
          value: "電影與旅行",
        },
        {
          label: "長期能量",
          value: "運動與創作",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold text-cyan-700">
                {t.eyebrow}
              </p>
              <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">
                {t.heading}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                {t.description}
              </p>
            </div>

            <div className="border border-gray-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-gray-950">
                {t.snapshotTitle}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {t.snapshot.map((item) => (
                  <div key={item.label} className="bg-white p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-2 font-bold leading-6 text-gray-950">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest) => (
              <article
                key={interest.id}
                className={`flex min-h-72 flex-col border border-gray-200 border-l-4 bg-white p-6 shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg ${interest.accentClass} ${
                  interest.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      {interest.tags[lang][0]}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-950">
                      {lang === "en" ? interest.nameEn : interest.name}
                    </h2>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-100 text-xs font-bold text-gray-700"
                  >
                    {interest.mark}
                  </span>
                </div>

                <p className="mt-5 flex-1 leading-7 text-gray-700">
                  {lang === "en"
                    ? interest.descriptionEn
                    : interest.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {interest.tags[lang].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {interest.linkHref && (
                  <Link
                    href={interest.linkHref}
                    className="mt-6 inline-flex w-fit items-center justify-center bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {lang === "en" ? interest.linkTextEn : interest.linkText}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
