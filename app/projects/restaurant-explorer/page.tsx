"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function RestaurantExplorerProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Restaurant Explorer",
      subtitle: "Google Maps Restaurant Explorer & Record System",
      tagline: "Explore, bookmark, and rate restaurants on an interactive map",
      description:
        "Restaurant Explorer is a full-stack application based on React + Node.js + Google Maps API. It allows users to explore, bookmark, and rate restaurants on an interactive map. The system integrates Google Maps JavaScript API for map display, Geocoding API for address conversion, and Directions API for route planning. Features include JWT authentication, restaurant management (add, edit, delete), rating system (0-5 stars with half-star support), and personal statistics. Note: This project is currently only available on localhost and has not been deployed.",
      features: "Core Features",
      featuresList: [
        "Interactive Map: Google Maps display and operations with click-to-add restaurant locations",
        "Restaurant Management: Add, edit, and delete restaurant information",
        "Rating System: 0-5 star ratings with half-star support",
        "Statistics: View personal restaurant statistics",
        "User Authentication: JWT-based authentication system",
        "Address Conversion: Bidirectional conversion between coordinates and addresses",
        "Route Planning: Calculate driving routes between locations using Directions API",
        "Geocoding: Convert addresses to coordinates and vice versa",
      ],
      tech: "Technologies Used",
      techList: [
        "React 19",
        "TypeScript",
        "Vite",
        "Material UI",
        "React Router",
        "Node.js",
        "Express",
        "SQLite",
        "JWT",
        "bcryptjs",
        "Google Maps JavaScript API",
        "Google Maps Geocoding API",
        "Google Maps Directions API",
      ],
      links: "Links",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "店家探索與記錄系統",
      subtitle: "Google Maps 店家探索與記錄系統",
      tagline: "在互動式地圖上探索、收藏和評分店家",
      description:
        "店家探索與記錄系統是一個基於 React + Node.js + Google Maps API 的全端應用。讓使用者可以在地圖上探索、收藏和評分店家。系統整合 Google Maps JavaScript API 用於地圖顯示，Geocoding API 用於地址轉換，Directions API 用於路線規劃。功能包括 JWT 認證、店家管理（新增、編輯、刪除）、評分系統（0-5 分，支援半星評分）和個人統計。注意：此專案目前僅在 localhost 運行，尚未發布。",
      features: "核心功能",
      featuresList: [
        "互動式地圖：Google Maps 地圖顯示與操作，點擊地圖新增店家位置",
        "店家管理：新增、編輯、刪除店家資訊",
        "評分系統：0-5 分評分，支援半星評分",
        "統計功能：查看個人店家統計",
        "使用者認證：JWT 認證系統",
        "地址轉換：座標與地址雙向轉換",
        "路線規劃：使用 Directions API 計算兩點間的行車路線",
        "地理編碼：將地址轉換為座標，反之亦然",
      ],
      tech: "使用的技術",
      techList: [
        "React 19",
        "TypeScript",
        "Vite",
        "Material UI",
        "React Router",
        "Node.js",
        "Express",
        "SQLite",
        "JWT",
        "bcryptjs",
        "Google Maps JavaScript API",
        "Google Maps Geocoding API",
        "Google Maps Directions API",
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
                src="/images/explorer-dashboard.png"
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
                    src="/images/explorer-dashboard.png"
                    alt={lang === "en" ? "Dashboard" : "儀表板"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Add Want to Go List" : "新增想去清單"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/explorer-wanttogo.png"
                    alt={lang === "en" ? "Add Want to Go List" : "新增想去清單"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Add Been To List" : "新增已去過清單"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/explorer-beento.png"
                    alt={lang === "en" ? "Add Been To List" : "新增已去過清單"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Statistics" : "統計功能"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/explorer-statistics.png"
                    alt={lang === "en" ? "Statistics" : "統計功能"}
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

