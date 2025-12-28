"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function CinemaTicketSystemProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Cinema Ticket System",
      subtitle: "React + Material UI Cinema Ticket System",
      tagline: "Complete movie browsing, showtime selection, and checkout experience",
      description:
        "Cinema Ticket System is a comprehensive ticket booking application built with React TypeScript and Material UI. It provides a complete movie browsing experience with search and filtering capabilities, showtime selection with real-time seat availability, shopping cart management, and a streamlined checkout process. The system uses CSV files for data storage with hot-reload support, making it easy to update movie and showtime information.",
      features: "Core Features",
      featuresList: [
        "Movie Browsing: Movie cards with posters, ratings, genres, and duration information",
        "Search Functionality: Search movies by name or description",
        "Filtering: Filter by genre (Action, Sci-Fi, Comedy, etc.) and rating (8+, 7+, etc.)",
        "Showtime Selection: Grouped by date, showing theater, time, price, and special types (IMAX 3D, 4DX)",
        "Real-time Seat Availability: Display remaining seats for each showtime",
        "Shopping Cart: Sidebar cart design with quantity adjustment and real-time total calculation",
        "Checkout Process: Three-step checkout flow with order confirmation, customer information, and completion",
        "Hot Reload: CSV data updates without server restart",
      ],
      tech: "Technologies Used",
      techList: [
        "React 18",
        "TypeScript",
        "Material UI (MUI)",
        "React Context",
        "useReducer",
        "Material Icons",
        "CSV Data",
        "Hot Reload",
      ],
      links: "Links",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "影城售票系統",
      subtitle: "React + Material UI 影城售票系統",
      tagline: "完整的電影瀏覽、場次選擇和結帳體驗",
      description:
        "影城售票系統是一個使用 React TypeScript 和 Material UI 構建的完整售票應用。提供完整的電影瀏覽體驗，包含搜尋和篩選功能、即時座位數顯示的場次選擇、購物車管理和流暢的結帳流程。系統使用 CSV 檔案進行資料儲存，支援熱重載，方便更新電影和場次資訊。",
      features: "核心功能",
      featuresList: [
        "電影瀏覽：電影卡片展示，包含海報、評分、類型、時長等資訊",
        "搜尋功能：支援搜尋電影名稱或描述",
        "篩選功能：按類型（動作、科幻、喜劇等）和評分（8分以上、7分以上等）篩選",
        "場次選擇：按日期分組顯示場次，顯示廳別、時間、價格、特殊類型（IMAX 3D、4DX）",
        "即時座位數：顯示每個場次的剩餘座位數",
        "購物車系統：側邊欄購物車設計，支援數量調整和即時總價計算",
        "結帳流程：三步驟結帳流程，包含訂單確認、客戶資料填寫和完成確認",
        "熱重載：CSV 資料更新無需重啟伺服器",
      ],
      tech: "使用的技術",
      techList: [
        "React 18",
        "TypeScript",
        "Material UI (MUI)",
        "React Context",
        "useReducer",
        "Material Icons",
        "CSV 資料",
        "熱重載",
      ],
      links: "相關連結",
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
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/cinema-dashboard.png"
                alt={t.title}
                fill
                className="object-cover"
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

          {/* Project Screenshots */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {lang === "en" ? "Project Screenshots" : "專案截圖"}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Dashboard" : "儀表板"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-dashboard.png"
                    alt={lang === "en" ? "Dashboard" : "儀表板"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Movie Selection" : "電影選擇"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-buy.png"
                    alt={lang === "en" ? "Movie Selection" : "電影選擇"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Shopping Cart" : "購物車"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-cart.png"
                    alt={lang === "en" ? "Shopping Cart" : "購物車"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Checkout Step 1: Order Confirmation" : "結帳步驟 1：訂單確認"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-checkout1.png"
                    alt={lang === "en" ? "Checkout Step 1" : "結帳步驟 1"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Checkout Step 2: Customer Information" : "結帳步驟 2：客戶資料"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-checkout2.png"
                    alt={lang === "en" ? "Checkout Step 2" : "結帳步驟 2"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Checkout Step 3: Order Complete" : "結帳步驟 3：訂單完成"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/cinema-checkout3.png"
                    alt={lang === "en" ? "Checkout Step 3" : "結帳步驟 3"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.links}
            </h2>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">
                {lang === "en" ? "⚠️ Local Development Only" : "⚠️ 僅限本地開發"}
              </p>
              <p className="text-gray-600 text-sm">
                {lang === "en"
                  ? "This project is currently only available on localhost and has not been deployed. Please refer to the GitHub repository for setup instructions."
                  : "此專案目前僅在 localhost 運行，尚未發布。請參考 GitHub 儲存庫了解設定說明。"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

