"use client";

import Link from "next/link";

interface WelcomeProps {
  lang: "en" | "zh";
}

export default function Welcome({ lang }: WelcomeProps) {
  const content = {
    en: {
      heading: "What I Am Building Toward",
      intro:
        "I am Wei-Jie Wang, a graduate of Electrical Engineering at National Taiwan University. I care about building things that are technically solid, understandable to users, and useful beyond a class assignment.",
      projectsLink: "Projects",
      contactLink: "Contact",
      photosLink: "Photos",
      focusTitle: "Current Focus",
      focusItems: [
        {
          title: "Full-stack product engineering",
          text: "I build dashboards, user flows, authentication, media upload, and API integrations with Next.js and TypeScript.",
        },
        {
          title: "AI-assisted workflows",
          text: "Several projects combine LINE Bot, LLM analysis, and web dashboards so users can interact through natural language.",
        },
        {
          title: "Logic synthesis research",
          text: "I will begin graduate study in NTU GIEE in September 2026, joining Prof. Jie-Hong Jiang's ALCom Lab in the Logic Synthesis group.",
        },
        {
          title: "Quantum + EDA public knowledge",
          text: "After being selected for the Youth Billion IBM Quantum program, I am turning the plan into public writing, technical notes, and an open-source learning example.",
        },
      ],
      closing:
        "Outside engineering, I spend a lot of time on baseball, movies, sports, and travel. The personal side matters too, because good tools are still made by people with a point of view.",
    },
    zh: {
      heading: "我正在累積的方向",
      intro:
        "我是汪煒杰，畢業於國立台灣大學電機工程學系。我在意的不只是把功能做出來，也希望作品在技術上可靠、對使用者清楚，而且不只是課堂作業。",
      projectsLink: "專案",
      contactLink: "聯絡",
      photosLink: "照片",
      focusTitle: "目前專注",
      focusItems: [
        {
          title: "全端產品工程",
          text: "我使用 Next.js 與 TypeScript 建構 dashboard、使用者流程、登入、媒體上傳與 API 整合。",
        },
        {
          title: "AI 輔助工作流程",
          text: "多個專案結合 LINE Bot、LLM 分析與 Web dashboard，讓使用者能用自然語言完成記錄與查詢。",
        },
        {
          title: "邏輯合成研究",
          text: "我將於 2026 年 9 月進入台大電子所，加入江介宏教授的 ALCom Lab 邏輯合成組。",
        },
        {
          title: "量子 + EDA 公開知識",
          text: "錄取青年百億 IBM Quantum 計畫後，我會把這份計畫延伸成公開文章、技術筆記與開源學習範例。",
        },
      ],
      closing:
        "工程之外，我很喜歡棒球、電影、運動和旅行。這些個人興趣也讓我更在意產品背後的使用情境與人的感受。",
    },
  };

  const t = content[lang];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-950 md:text-4xl">
              {t.heading}
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-700 md:text-lg">
              {t.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="border border-gray-950 bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                {t.projectsLink}
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-gray-950"
              >
                {t.contactLink}
              </Link>
              <Link
                href="/photos"
                className="border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-gray-950"
              >
                {t.photosLink}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">
              {t.focusTitle}
            </h3>
            <div className="grid gap-4">
              {t.focusItems.map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-cyan-500 bg-gray-50 p-5"
                >
                  <h4 className="text-lg font-bold text-gray-950">
                    {item.title}
                  </h4>
                  <p className="mt-2 leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-8 text-gray-700">
              {t.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
