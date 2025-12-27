"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Projects",
      description: "Here are some of my recent projects.",
      webProjectsTitle: "Web Programming Projects",
      cadContestTitle: "CAD Contest Problem B - Excellent Award",
    },
    zh: {
      heading: "專案",
      description: "以下是我的一些近期專案。",
      webProjectsTitle: "網頁程式設計專案",
      cadContestTitle: "CAD Contest Problem B - 優等獎",
    },
  };

  const t = content[lang];

  const webProjects = [
    {
      id: "journee",
      title: "Journee",
      titleEn: "Journee",
      subtitle: "AI 情緒日記 LINE Chatbot",
      subtitleEn: "AI Emotion Diary LINE Chatbot",
      description:
        "一個整合 LINE Bot 與 Web 儀表板的情緒日記系統，支援使用自然語言與 LINE 溝通及記錄，透過 LLM 進行 AI 情緒分析、多重登入、圖片上傳等功能。",
      descriptionEn:
        "An emotion diary system integrating LINE Bot and Web dashboard, supporting natural language communication and recording via LINE, with LLM-powered AI emotion analysis, multiple login methods, image upload, and more.",
      tech: ["Next.js", "TypeScript", "LINE Bot", "MongoDB", "Cloudinary", "AI"],
      image: "/images/project-journee.jpg",
      demo: "https://journee-three.vercel.app/",
      lineBot: "https://line.me/R/ti/p/@811wwuca",
    },
    {
      id: "smart-finance-planner",
      title: "Planova",
      titleEn: "Planova",
      subtitle: "智選理財家 - LLM 驅動的智能記帳與財務規劃",
      subtitleEn: "Smart Finance Planner - LLM-driven Expense Tracking & Financial Planning",
      description:
        "一個結合 Web 應用、LINE Bot 和 AI 財務規劃的智能理財服務，支援使用自然語言與 LINE 溝通及記錄，透過 LLM 幫助使用者輕鬆記帳、設定目標，並獲得個人化的財務建議。",
      descriptionEn:
        "An intelligent financial service combining Web app, LINE Bot, and AI financial planning, supporting natural language communication and recording via LINE, powered by LLM to help users easily track expenses, set goals, and receive personalized financial advice.",
      tech: ["Next.js", "TypeScript", "LINE Bot", "MongoDB", "OpenAI", "LLM"],
      image: "/images/planova.png",
      demo: "https://planova-smart-financial-planner.vercel.app/",
      lineBot: "https://line.me/R/ti/p/@129sanuz",
    },
    {
      id: "travel-planner-bot",
      title: "旅遊規劃助手",
      titleEn: "Travel Planner Bot",
      subtitle: "LINE Bot with ChatGPT - 智慧旅遊規劃助手",
      subtitleEn: "LINE Bot with ChatGPT - Intelligent Travel Planning Assistant",
      description:
        "整合 LINE Messaging API 與 OpenAI ChatGPT 的智慧聊天機器人，支援使用自然語言與 LINE 溝通，透過 LLM 進行旅遊行程規劃、支出管理、行程查詢等功能，並維持對話脈絡。",
      descriptionEn:
        "An intelligent chatbot integrating LINE Messaging API with OpenAI ChatGPT, supporting natural language communication via LINE, powered by LLM for travel itinerary planning, expense management, trip queries, and maintaining conversation context.",
      tech: ["Next.js", "TypeScript", "LINE Bot", "MongoDB", "OpenAI", "LLM"],
      image: "/images/travelbot-planning.jpg",
      demo: "https://wp1141-five-chi.vercel.app/admin",
      lineBot: "https://line.me/R/ti/p/@500bqphk",
    },
    {
      id: "social-media-app",
      title: "社群網站",
      titleEn: "Social Media App",
      subtitle: "X Clone - 社群媒體平台",
      subtitleEn: "X Clone - Social Media Platform",
      description:
        "一個類似 Twitter/X 的社群網站，支援 OAuth 登入、發文、回覆、轉發、按讚、追蹤等完整社群功能，並使用 Pusher 實現即時更新，提供流暢的社群互動體驗。",
      descriptionEn:
        "A Twitter/X-like social media platform with complete social features including OAuth login, posts, replies, reposts, likes, follows, and real-time updates powered by Pusher for seamless social interactions.",
      tech: ["Next.js", "TypeScript", "NextAuth", "Prisma", "MongoDB", "Pusher", "Cloudinary"],
      image: "/images/social-profile.png",
      demo: "https://hw5-lyart.vercel.app/",
    },
    {
      id: "restaurant-explorer",
      title: "店家探索與記錄系統",
      titleEn: "Restaurant Explorer",
      subtitle: "Google Maps 店家探索與記錄系統",
      subtitleEn: "Google Maps Restaurant Explorer & Record System",
      description:
        "一個基於 React + Node.js + Google Maps API 的全端應用，讓使用者可以在地圖上探索、收藏和評分店家。整合 Google Maps JavaScript API、Geocoding API、Directions API 實現互動式地圖、地址轉換、路線規劃等功能。",
      descriptionEn:
        "A full-stack application based on React + Node.js + Google Maps API, allowing users to explore, bookmark, and rate restaurants on a map. Integrates Google Maps JavaScript API, Geocoding API, and Directions API for interactive maps, address conversion, route planning, and more.",
      tech: ["React", "TypeScript", "Node.js", "Express", "SQLite", "Google Maps API", "JWT", "Material UI"],
      image: "/images/explorer-dashboard.png",
      demo: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            {t.heading}
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
            {t.description}
          </p>

          {/* Web Programming Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.webProjectsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
                >
                  <div className="relative h-48 bg-gray-200">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={lang === "en" ? project.titleEn : project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === "en" ? project.titleEn : project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {lang === "en" ? project.subtitleEn : project.subtitle}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {lang === "en"
                        ? project.descriptionEn
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-auto"
                    >
                      {lang === "en" ? "See More" : "查看更多"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAD Contest Project */}
          <div className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-md">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {t.cadContestTitle}
              </h2>
              <p className="text-xl text-gray-700 mb-1">
                {lang === "en"
                  ? "Power and Timing Optimization Using Multibit Flip-Flop"
                  : "使用多位元正反器進行功耗與時序最佳化"}
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-1">
                {lang === "en"
                  ? "Excellent Award (優等) - Domestic Competition"
                  : "國內賽優等獎"}
              </p>
              <p className="text-sm text-gray-600">
                {lang === "en" ? "Group ID: cadb1050" : "組別：cadb1050"}
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {lang === "en"
                ? "I participated in the CAD Contest Problem B competition and achieved Excellent Award (優等) in the domestic competition. This project focused on power and timing optimization using multibit flip-flops."
                : "我參與了 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。此專案專注於使用多位元正反器進行功耗與時序最佳化。"}
            </p>
            <Link
              href="/projects/cad-contest"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {lang === "en" ? "See More" : "查看更多"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
