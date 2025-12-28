"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function PersonalPortfolioProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Personal Portfolio Website",
      subtitle: "Next.js + TypeScript + Tailwind CSS Personal Portfolio",
      tagline: "A modern, responsive portfolio showcasing my projects and skills",
      description:
        "This is my personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It serves as a comprehensive showcase of my projects, skills, academic background, and interests. The website features bilingual support (English/Chinese), responsive design for all devices, elegant UI/UX, and detailed project pages. It demonstrates my full-stack development capabilities and modern web development practices.",
      features: "Core Features",
      featuresList: [
        "Bilingual Support: Seamless switching between English and Chinese",
        "Responsive Design: Optimized for desktop, tablet, and mobile devices",
        "Project Showcase: Detailed pages for each project with screenshots and descriptions",
        "Modern UI/UX: Clean, elegant design with smooth animations and transitions",
        "Fast Performance: Built with Next.js for optimal loading speeds and SEO",
        "Type Safety: Full TypeScript implementation for robust code",
        "Component-Based Architecture: Reusable React components",
        "Dynamic Content: Easy to update and maintain project information",
        "Navigation: Intuitive navigation with smooth scrolling and routing",
        "Accessibility: Semantic HTML and proper ARIA labels",
      ],
      tech: "Technologies Used",
      techList: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "App Router",
        "Server Components",
        "Client Components",
        "Image Optimization",
      ],
      links: "Links",
      liveDemo: "Live Demo",
      github: "GitHub Repository",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "個人作品集網站",
      subtitle: "Next.js + TypeScript + Tailwind CSS 個人作品集",
      tagline: "現代化、響應式的作品集，展示我的專案和技能",
      description:
        "這是我的個人作品集網站，使用 Next.js、TypeScript 和 Tailwind CSS 構建。它作為一個全面的展示平台，展示我的專案、技能、學術背景和興趣。網站具有中英文雙語支援、響應式設計、優雅的 UI/UX 和詳細的專案頁面。它展示了我的全端開發能力和現代網頁開發實踐。",
      features: "核心功能",
      featuresList: [
        "雙語支援：無縫切換中英文",
        "響應式設計：針對桌面、平板和手機優化",
        "專案展示：每個專案的詳細頁面，包含截圖和描述",
        "現代化 UI/UX：簡潔優雅的設計，流暢的動畫和過渡效果",
        "快速性能：使用 Next.js 構建，優化載入速度和 SEO",
        "類型安全：完整的 TypeScript 實現，確保代碼穩健",
        "組件化架構：可重用的 React 組件",
        "動態內容：易於更新和維護專案資訊",
        "導航：直觀的導航，流暢的滾動和路由",
        "無障礙設計：語義化 HTML 和適當的 ARIA 標籤",
      ],
      tech: "使用的技術",
      techList: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "App Router",
        "Server Components",
        "Client Components",
        "圖片優化",
      ],
      links: "相關連結",
      liveDemo: "線上演示",
      github: "GitHub 儲存庫",
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
                src="/images/portfolio-dashboard.png"
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
                    src="/images/portfolio-dashboard.png"
                    alt={lang === "en" ? "Dashboard" : "儀表板"}
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
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-gray-700 font-medium mb-2 text-lg">
                  {lang === "en" ? "🎉 Congratulations! You're already on this website!" : "🎉 恭喜你已經在這個網頁了！"}
                </p>
                <p className="text-gray-600 text-sm">
                  {lang === "en"
                    ? "You're currently viewing this portfolio website. This is the live demo itself!"
                    : "您目前正在瀏覽這個作品集網站。這就是線上演示本身！"}
                </p>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">
                  📦 {t.github}
                </p>
                <a
                  href="https://github.com/Jason41730/jason-wang-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://github.com/Jason41730/jason-wang-portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

