"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function SocialMediaAppProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Social Media App",
      subtitle: "X Clone - Social Media Platform",
      tagline: "A complete social media platform inspired by Twitter/X",
      description:
        "Social Media App is a full-featured social media platform similar to Twitter/X, built with Next.js 14. It supports OAuth authentication (Google, GitHub), complete social interactions including posts, replies, reposts, likes, and follows. The platform features real-time updates using Pusher, image uploads with Cloudinary, and a modern UI with Tailwind CSS.",
      features: "Core Features",
      featuresList: [
        "OAuth Authentication: Support Google and GitHub OAuth login, with UserID system for easy login",
        "Post Management: Create posts with text, images, hashtags, and @mentions, with draft functionality",
        "Social Interactions: Reply to posts, repost content, like/unlike posts, and follow/unfollow users",
        "Profile Management: Edit profile information, avatar, banner image with drag-to-adjust position",
        "Real-time Updates: Live updates for likes and new posts using Pusher WebSocket",
        "Image Handling: Upload and manage images (avatar, banner, post images) with Cloudinary, click to enlarge",
        "Personal Profile: View posts, replies, and likes (likes only visible to yourself)",
        "Following Feed: Display posts and reposts from followed users",
        "Post Details: View individual posts with all replies",
        "Character Counting: Accurate character counting (links count as 23 chars, hashtags and @mentions excluded)",
        "Post Sorting: All posts sorted from newest to oldest",
        "@mention Links: Click @mentions to navigate to user profiles",
      ],
      tech: "Technologies Used",
      techList: [
        "Next.js 14 (App Router)",
        "TypeScript",
        "NextAuth.js (OAuth)",
        "Prisma ORM",
        "MongoDB",
        "Pusher (Real-time)",
        "Cloudinary (Image Storage)",
        "Tailwind CSS",
        "Radix UI",
      ],
      links: "Links",
      liveDemo: "Web",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "社群網站",
      subtitle: "X Clone - 社群媒體平台",
      tagline: "一個完整的社群媒體平台，靈感來自 Twitter/X",
      description:
        "社群網站是一個功能完整的社群媒體平台，類似於 Twitter/X，使用 Next.js 14 建構。支援 OAuth 認證（Google、GitHub）、完整的社群互動功能包括發文、回覆、轉發、按讚、追蹤等。平台使用 Pusher 實現即時更新，使用 Cloudinary 處理圖片上傳，並使用 Tailwind CSS 打造現代化 UI。",
      features: "核心功能",
      featuresList: [
        "OAuth 認證：支援 Google 和 GitHub OAuth 登入，提供 UserID 系統方便登入",
        "貼文管理：創建包含文字、圖片、Hashtag 和 @mention 的貼文，支援草稿功能",
        "社群互動：回覆貼文、轉發內容、按讚/取消按讚、追蹤/取消追蹤用戶",
        "個人資料管理：編輯個人資料、頭像、橫幅圖片，支援拖動調整橫幅位置",
        "即時更新：使用 Pusher WebSocket 實現按讚和新貼文的即時更新",
        "圖片處理：使用 Cloudinary 上傳和管理圖片（頭像、橫幅、貼文圖片），點擊放大查看",
        "個人檔案：查看貼文、回覆和按讚（按讚僅自己可見）",
        "追蹤動態牆：顯示追蹤用戶的貼文和轉發",
        "貼文詳情：查看單一貼文及其所有回覆",
        "字元數計算：正確計算貼文字元數（連結佔 23 字元，Hashtag 和 @mention 不計入）",
        "貼文排序：所有貼文從最新到最舊排序",
        "@mention 連結：點擊 @mention 可跳轉到該用戶的個人檔案",
      ],
      tech: "使用的技術",
      techList: [
        "Next.js 14 (App Router)",
        "TypeScript",
        "NextAuth.js (OAuth)",
        "Prisma ORM",
        "MongoDB",
        "Pusher (即時更新)",
        "Cloudinary (圖片儲存)",
        "Tailwind CSS",
        "Radix UI",
      ],
      links: "相關連結",
      liveDemo: "Web",
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
                src="/images/social-profile.png"
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
                    src="/images/social-profile.png"
                    alt={lang === "en" ? "Profile Page" : "個人檔案頁面"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Profile Page" : "個人檔案頁面"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80 md:h-96 bg-gray-200">
                  <Image
                    src="/images/social-home.png"
                    alt={lang === "en" ? "Home Page" : "首頁"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Home Page" : "首頁"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80 md:h-96 bg-gray-200">
                  <Image
                    src="/images/social-posting.png"
                    alt={lang === "en" ? "Posting Interface" : "發文介面"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Posting Interface" : "發文介面"}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80 md:h-96 bg-gray-200">
                  <Image
                    src="/images/social-comment.png"
                    alt={lang === "en" ? "Comment Interface" : "回覆介面"}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {lang === "en" ? "Comment Interface" : "回覆介面"}
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
                href="https://hw5-lyart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <span className="font-medium text-gray-900">
                  {t.liveDemo}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

