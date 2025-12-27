"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function SmartFinancePlannerProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Planova",
      subtitle: "Smart Finance Planner - LLM-driven Expense Tracking & Financial Planning",
      tagline: "LLM 驅動的全端智能記帳與財務規劃服務",
      description:
        "Planova is an intelligent financial service that combines Web application, LINE Bot, and AI financial planning. It helps users easily track expenses, set goals, and receive personalized financial advice powered by LLM.",
      features: "Core Features",
      featuresList: [
        "Expense Management: Multi-platform tracking (Web app, LINE Bot), automatic category recognition, bidirectional sync between Web and LINE Bot",
        "Data Analysis: Dashboard with income/expense trends, category analysis, and chart visualization",
        "Financial Goals: Set savings goals with completion dates, track progress in real-time, AI prediction of goal achievement time",
        "Smart Planning: LLM-driven personalized financial advice, actionable savings suggestions, AI-recommended goal priority order",
        "Savings Allocation: Total savings pool management, allocate savings to different financial goals, track allocation progress",
        "LINE Bot Features: Natural language expense tracking, query records, view goals via Carousel, generate and view planning reports in LINE, manage savings allocation",
      ],
      tech: "Technologies Used",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB",
        "OpenAI API (LLM)",
        "NextAuth (Authentication)",
        "Recharts (Data Visualization)",
        "React Hook Form",
        "Zod (Validation)",
      ],
      links: "Links",
      webDashboard: "Web Dashboard",
      lineBot: "LINE Bot",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "Planova",
      subtitle: "智選理財家 - LLM 驅動的智能記帳與財務規劃",
      tagline: "LLM 驅動的全端智能記帳與財務規劃服務",
      description:
        "Planova 是一個結合 Web 應用、LINE Bot 和 AI 財務規劃的智能理財服務，幫助使用者輕鬆記帳、設定目標，並獲得個人化的財務建議。",
      features: "核心功能",
      featuresList: [
        "記帳管理：多平台記帳（Web 應用、LINE Bot），智能分類自動識別支出類別，Web 與 LINE Bot 雙向同步",
        "數據分析：Dashboard 收支趨勢、類別分析、圖表展示，財務概覽總收入、總支出、儲蓄率一目了然",
        "財務目標：設定儲蓄目標和完成日期，即時查看目標達成進度，AI 預測目標達成時間",
        "智能規劃：LLM 驅動的個人化財務建議，具體可執行的節省建議，AI 建議目標達成順序",
        "儲蓄分配：總儲蓄池管理，將儲蓄分配給不同財務目標，追蹤每個目標的分配進度",
        "LINE Bot 功能：自然語言記帳，查詢記錄，Carousel 顯示所有財務目標，在 LINE 內生成並查看規劃報告，查看和編輯儲蓄分配狀況",
      ],
      tech: "使用的技術",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB",
        "OpenAI API (LLM)",
        "NextAuth (身份驗證)",
        "Recharts (數據視覺化)",
        "React Hook Form",
        "Zod (驗證)",
      ],
      links: "相關連結",
      webDashboard: "Web 儀表板",
      lineBot: "LINE Bot",
      backToProjects: "返回專案列表",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToProjects}
          </Link>

          {/* Project Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-2xl text-gray-700 mb-2">{t.subtitle}</p>
            <p className="text-lg text-gray-600 italic">{t.tagline}</p>
          </div>

          {/* Project Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-96 bg-gray-200">
              <Image
                src="/images/project-planova.jpg"
                alt={t.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.features}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {t.featuresList.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.tech}
            </h2>
            <div className="flex flex-wrap gap-2">
              {t.techList.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.links}
            </h2>
            <div className="space-y-3">
              <a
                href="https://planova-smart-financial-planner.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {t.webDashboard}
                </span>
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href="https://line.me/R/ti/p/@129sanuz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-green-100 hover:bg-green-200 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">{t.lineBot}</span>
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

