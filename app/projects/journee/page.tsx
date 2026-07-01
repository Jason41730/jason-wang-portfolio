"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function JourneeProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Journee",
      subtitle: "AI Emotion Diary LINE Chatbot",
      tagline: "Where moments find their meaning.",
      description:
        "Journee is an AI-powered emotion diary system that integrates LINE Bot and Web dashboard. Users can communicate and record emotions using natural language through LINE, powered by LLM for intelligent understanding and analysis. It allows users to record their emotions, analyze emotional trends, and browse/search/edit diaries on a web dashboard. The platform also features social functionality where users can share diaries, interact with the community, and chat with other users in real-time. Supports Google / GitHub / LINE Login binding, allowing multiple login methods for the same account.",
      caseStudyItems: [
        {
          label: "Role",
          text: "Full-stack development across LINE Bot, dashboard, authentication, media upload, and AI analysis flows.",
        },
        {
          label: "Problem",
          text: "Traditional diary apps make daily emotional tracking easy to abandon because users must open a separate app and write structured entries.",
        },
        {
          label: "Outcome",
          text: "Journee lets users record naturally in LINE, then review trends, diaries, and social interactions through a web dashboard.",
        },
      ],
      projectStats: [
        { label: "Interface", value: "LINE + Web" },
        { label: "Auth", value: "3 providers" },
        { label: "AI", value: "Emotion analysis" },
      ],
      features: "Core Features",
      featuresList: [
        "Natural Language Communication: Use natural language to communicate and record emotions directly in LINE, powered by LLM for intelligent understanding and automatic emotion analysis and tagging",
        "Web Dashboard: Browse, search, and edit diaries with image upload support (Cloudinary)",
        "Multiple Login Binding: Google / GitHub / LINE Login can be bound to the same account",
        "Statistical Analysis: View emotional trends, tag distribution, and daily emotion averages",
        "Rich Menu Shortcuts: One-click access to dashboard and quick navigation to common features",
        "Social Features: Share diaries, interact with community, and connect with other users",
        "Chat Functionality: Real-time chat system within the community for users to communicate and support each other",
      ],
      tech: "Technologies Used",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB Atlas",
        "Cloudinary",
        "GROQ API (AI Emotion Analysis)",
        "LIFF (LINE Frontend Framework)",
        "OAuth (Google, GitHub, LINE Login)",
      ],
      links: "Links",
      webDashboard: "Web Dashboard",
      lineBot: "LINE Bot",
      demoVideo: "Demo Video",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "Journee",
      subtitle: "AI 情緒日記 LINE Chatbot",
      tagline: "Where moments find their meaning.",
      description:
        "Journee 是一個整合 LINE Bot 與 Web 儀表板的 AI 情緒日記系統。使用者可以使用自然語言與 LINE 溝通及記錄，透過 LLM 進行智能理解與分析。讓使用者在 LINE 上隨手記錄心情、分析情緒趨勢，並在網頁儀表板上瀏覽、搜尋、編輯日記。平台還包含社群功能，使用者可以分享日記、與社群互動，並在社群內即時聊天與其他使用者交流。支援 Google / GitHub / LINE Login 綁定，同一帳號可串多個登入方式。",
      caseStudyItems: [
        {
          label: "角色",
          text: "負責 LINE Bot、dashboard、authentication、圖片上傳與 AI 分析流程的全端開發。",
        },
        {
          label: "問題",
          text: "傳統日記 App 需要使用者另外開啟並填寫結構化內容，長期情緒記錄很容易中斷。",
        },
        {
          label: "成果",
          text: "Journee 讓使用者在 LINE 自然記錄，再透過 Web dashboard 回顧趨勢、日記與社群互動。",
        },
      ],
      projectStats: [
        { label: "介面", value: "LINE + Web" },
        { label: "登入", value: "3 providers" },
        { label: "AI", value: "情緒分析" },
      ],
      features: "核心功能",
      featuresList: [
        "自然語言溝通：使用自然語言與 LINE 溝通及記錄，透過 LLM 進行智能理解，附帶自動情緒分析與標籤",
        "Web 儀表板：瀏覽/搜尋/編輯日記，支援圖片上傳（Cloudinary）",
        "多重登入綁定：Google / GitHub / LINE Login 可綁到同一個帳號",
        "統計分析：查看情緒趨勢、標籤分布、每日情緒平均",
        "Rich Menu 快捷：一鍵開啟儀表板、快速導覽常用功能",
        "社群功能：分享日記、與社群互動，與其他使用者連結",
        "聊天功能：社群內的即時聊天系統，讓使用者可以互相交流與支持",
      ],
      tech: "使用的技術",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB Atlas",
        "Cloudinary",
        "GROQ API (AI 情緒分析)",
        "LIFF (LINE Frontend Framework)",
        "OAuth (Google, GitHub, LINE Login)",
      ],
      links: "相關連結",
      webDashboard: "Web 儀表板",
      lineBot: "LINE Bot",
      demoVideo: "Demo 影片",
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {lang === "en" ? "Full-stack AI Product" : "全端 AI 產品"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-2xl text-gray-700 mb-2">{t.subtitle}</p>
            <p className="text-lg text-gray-600 italic">{t.tagline}</p>
          </div>

          {/* Case Study Snapshot */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {t.caseStudyItems.map((item) => (
              <div
                key={item.label}
                className="border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">
                  {item.label}
                </p>
                <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {t.projectStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-200 bg-gray-50 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-bold text-gray-950">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Project Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-96 bg-gray-200">
              <Image
                src="/images/project-journee.jpg"
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

          {/* Project Screenshots */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {lang === "en" ? "Project Screenshots" : "專案截圖"}
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80 md:h-96 bg-gray-200">
                  <Image
                    src="/images/projects-journee-sns.png"
                    alt={lang === "en" ? "Social Network Features" : "社群功能"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Social Network Features" : "社群功能"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80 md:h-96 bg-gray-200">
                  <Image
                    src="/images/projects-journee-diary.png"
                    alt={lang === "en" ? "Diary Dashboard" : "日記儀表板"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Diary Dashboard" : "日記儀表板"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-96 md:h-[500px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/projects-journee-line.jpg"
                    alt={lang === "en" ? "LINE Bot Interface" : "LINE Bot 介面"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "LINE Bot Interface" : "LINE Bot 介面"}
                </p>
              </div>
            </div>
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
                href="https://journee-three.vercel.app/"
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
                href="https://line.me/R/ti/p/@811wwuca"
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
              <a
                href="https://youtu.be/8hG2lMeYhBE?si=FW4ovAc7tqtAniWq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-red-100 hover:bg-red-200 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">{t.demoVideo}</span>
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
