"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function TravelPlannerBotProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Travel Planner Bot",
      subtitle: "LINE Bot with ChatGPT - Intelligent Travel Planning Assistant",
      tagline: "Your intelligent travel planning companion powered by AI",
      description:
        "Travel Planner Bot is an intelligent chatbot that integrates LINE Messaging API with OpenAI ChatGPT. Users can communicate and plan trips using natural language through LINE, powered by LLM for intelligent understanding and analysis. The system maintains conversation context (last 30 messages) and provides comprehensive travel planning features including itinerary creation, expense management, and trip queries.",
      features: "Core Features",
      featuresList: [
        "Natural Language Communication: Use natural language to communicate and plan trips via LINE, powered by LLM for intelligent understanding",
        "Travel Itinerary Planning: Multi-turn conversation to collect information (destination, duration, budget) and generate detailed travel plans",
        "Expense Management: Record expenses, query spending, and delete expense records with natural language input",
        "Trip Management: Query trips, edit budgets, and delete trips with interactive Carousel and Flex Message interfaces",
        "Conversation Context: Maintains last 30 conversation messages in MongoDB for coherent AI responses",
        "Rich Menu: Interactive menu with quick access to planning trips, viewing trips, recording expenses, and querying spending",
        "Chinese Number Recognition: Supports Chinese numerals (一、二、兩、三...) and Arabic numbers",
        "Error Handling: Graceful error handling with user-friendly messages for API rate limits and service errors",
      ],
      tech: "Technologies Used",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB Atlas + Mongoose",
        "OpenAI API (ChatGPT)",
        "Zod (Validation)",
        "Tailwind CSS",
      ],
      links: "Links",
      adminDashboard: "Admin Dashboard",
      lineBot: "LINE Bot",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "旅遊規劃助手",
      subtitle: "LINE Bot with ChatGPT - 智慧旅遊規劃助手",
      tagline: "由 AI 驅動的智能旅遊規劃夥伴",
      description:
        "旅遊規劃助手是一個整合 LINE Messaging API 與 OpenAI ChatGPT 的智慧聊天機器人。使用者可以使用自然語言與 LINE 溝通及規劃行程，透過 LLM 進行智能理解與分析。系統維持對話脈絡（最近 30 則訊息）並提供完整的旅遊規劃功能，包括行程創建、支出管理、行程查詢等。",
      features: "核心功能",
      featuresList: [
        "自然語言溝通：使用自然語言與 LINE 溝通及規劃行程，透過 LLM 進行智能理解",
        "旅遊行程規劃：多輪對話收集資訊（目的地、天數、預算），產生詳細旅遊計畫",
        "支出管理：記錄支出、查詢花費、刪除支出記錄，支援自然語言輸入",
        "行程管理：查詢行程、編輯預算、刪除行程，使用互動式 Carousel 和 Flex Message 介面",
        "對話脈絡：在 MongoDB 中維持最近 30 則對話訊息，確保 AI 回應連貫",
        "Rich Menu：互動選單，快速存取規劃行程、查看行程、記錄支出、查詢花費等功能",
        "中文數字識別：支援中文數字（一、二、兩、三...）和阿拉伯數字",
        "錯誤處理：優雅的錯誤處理，針對 API 配額限制和服務錯誤提供友善訊息",
      ],
      tech: "使用的技術",
      techList: [
        "Next.js 16",
        "TypeScript",
        "LINE Bot SDK",
        "MongoDB Atlas + Mongoose",
        "OpenAI API (ChatGPT)",
        "Zod (驗證)",
        "Tailwind CSS",
      ],
      links: "相關連結",
      adminDashboard: "管理後台",
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
                src="/images/travelbot-planning.jpg"
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
                <div className="relative w-full h-96 md:h-[500px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/travelbot-planning.jpg"
                    alt={lang === "en" ? "Travel Planning Interface" : "旅遊規劃介面"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Travel Planning Interface" : "旅遊規劃介面"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-96 md:h-[500px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/travelbot-schedule.jpg"
                    alt={lang === "en" ? "Schedule Management" : "行程管理"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Schedule Management" : "行程管理"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-96 md:h-[500px] bg-gray-200 flex items-center justify-center">
                  <Image
                    src="/images/travelbot-budget.jpg"
                    alt={lang === "en" ? "Budget Management" : "預算管理"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Budget Management" : "預算管理"}
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
                href="https://wp1141-five-chi.vercel.app/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {t.adminDashboard}
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
                href="https://line.me/R/ti/p/@500bqphk"
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

