"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: "About",
      heading: "Wei-Jie Wang",
      intro:
        "I am a graduate of Electrical Engineering at National Taiwan University, preparing to begin graduate study at NTU GIEE in September 2026.",
      body:
        "My work sits between full-stack software, AI-assisted workflows, and EDA/CAD research. I like building systems that are usable enough for real users and rigorous enough to connect back to algorithms, optimization, and circuit design.",
      research:
        "My next research step is joining Prof. Jie-Hong Jiang's ALCom Lab, where I will work in the Logic Synthesis group.",
      projectCta: "View Projects",
      photoCta: "View Photos",
      contactCta: "Contact",
      highlightsTitle: "Current Snapshot",
      highlights: [
        {
          label: "Education",
          value: "NTUEE Graduate",
          detail: "Incoming NTU GIEE student in September 2026",
        },
        {
          label: "Research",
          value: "Logic Synthesis",
          detail: "Incoming ALCom Lab member under Prof. Jie-Hong Jiang",
        },
        {
          label: "Award",
          value: "2025 CAD Contest",
          detail: "Problem B Excellent Award in the domestic competition",
        },
        {
          label: "Program",
          value: "Youth Billion",
          detail: "Selected for the IBM Quantum Dream program on July 1, 2026",
        },
      ],
      researchTitle: "Research Direction",
      researchText:
        "I am especially interested in how optimization, formal reasoning, and circuit representations can make hardware and software systems more reliable. My CAD Contest work gave me a practical foundation in DEF/LEF parsing, placement legality, timing, and power optimization; my next step is bringing that mindset into logic synthesis research.",
      personalTitle: "Outside Engineering",
      personalText:
        "I spend a lot of time on baseball, movies, sports, and travel. The personal archive matters to me too, because a portfolio should show the person behind the work, not only the output.",
      githubText: "You can also find my code and experiments on GitHub.",
      labLink: "ALCom Lab official site",
      projectsLink: "Projects",
      photosLink: "Photos",
    },
    zh: {
      eyebrow: "關於",
      heading: "汪煒杰",
      intro:
        "我畢業於國立台灣大學電機工程學系，將於 2026 年 9 月開始就讀台大電子所。",
      body:
        "我的作品介於全端軟體、AI 輔助工作流程與 EDA/CAD 研究之間。我喜歡做真正能被使用的系統，也在意它背後能不能連回演算法、最佳化與電路設計。",
      research:
        "接下來我會進入台大電子所江介宏教授的 ALCom Lab，加入邏輯合成組繼續做研究。",
      projectCta: "查看專案",
      photoCta: "查看照片",
      contactCta: "聯絡我",
      highlightsTitle: "目前狀態",
      highlights: [
        {
          label: "學歷",
          value: "台大電機畢業",
          detail: "2026 年 9 月將開始就讀台大電子所",
        },
        {
          label: "研究",
          value: "邏輯合成",
          detail: "即將加入江介宏教授 ALCom Lab",
        },
        {
          label: "獎項",
          value: "2025 CAD Contest",
          detail: "Problem B 國內賽優等獎",
        },
        {
          label: "計畫",
          value: "青年百億",
          detail: "2026 年 7 月 1 日錄取 IBM 量子夢計畫",
        },
      ],
      researchTitle: "研究方向",
      researchText:
        "我特別關心最佳化、形式化推理與電路表示如何讓硬體與軟體系統更可靠。CAD Contest 讓我實際接觸 DEF/LEF parser、placement legality、timing 與 power optimization；下一步我會把這樣的問題意識帶進邏輯合成研究。",
      personalTitle: "工程之外",
      personalText:
        "我很喜歡棒球、電影、運動和旅行。個人的照片紀錄對我也很重要，因為作品集不應該只呈現成果，也應該讓人看見作品背後的人。",
      githubText: "我的程式碼與實驗也可以在 GitHub 上看到。",
      labLink: "ALCom Lab 官方網站",
      projectsLink: "專案",
      photosLink: "照片",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden border border-gray-200 bg-gray-100 shadow-sm">
              <Image
                src="/images/about1.jpg"
                alt={lang === "en" ? "Wei-Jie Wang personal photo" : "汪煒杰個人照片"}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                {t.eyebrow}
              </p>
              <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">
                {t.heading}
              </h1>
              <p className="mt-5 text-xl font-medium leading-8 text-gray-800">
                {t.intro}
              </p>
              <p className="mt-5 leading-8 text-gray-700">{t.body}</p>
              <p className="mt-5 leading-8 text-gray-700">
                {t.research}{" "}
                <a
                  href="https://alcom.ee.ntu.edu.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                >
                  {t.labLink}
                </a>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700"
                >
                  {t.projectCta}
                </Link>
                <Link
                  href="/photos"
                  className="border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-gray-950"
                >
                  {t.photoCta}
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-950 transition-colors hover:border-gray-950"
                >
                  {t.contactCta}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="mb-5 text-2xl font-bold text-gray-950">
              {t.highlightsTitle}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {t.highlights.map((item) => (
                <div key={item.label} className="border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-bold text-gray-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <section className="border-l-4 border-cyan-600 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-950">
                {t.researchTitle}
              </h2>
              <p className="mt-3 leading-8 text-gray-700">{t.researchText}</p>
              <Link
                href="/projects"
                className="mt-5 inline-flex font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
              >
                {t.projectsLink}
              </Link>
            </section>

            <section className="border-l-4 border-amber-500 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-950">
                {t.personalTitle}
              </h2>
              <p className="mt-3 leading-8 text-gray-700">{t.personalText}</p>
              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="/photos"
                  className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                >
                  {t.photosLink}
                </Link>
                <a
                  href="https://github.com/Jason41730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                >
                  GitHub
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-600">{t.githubText}</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
