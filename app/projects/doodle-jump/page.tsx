"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function DoodleJumpProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Doodle Jump Game",
      subtitle: "React TypeScript Classic Jumping Game",
      tagline: "Complete physics system, multiple platform types, and engaging gameplay",
      description:
        "Doodle Jump Game is a classic jumping game developed with React TypeScript. It features a complete physics system with realistic gravity and collision detection, multiple platform types (normal, moving, breaking, temporary), star collection system, sound effects, and responsive design. The game supports keyboard controls, score recording, and local storage for high scores.",
      features: "Core Features",
      featuresList: [
        "Complete Game Mechanics: Recreates the core gameplay of Doodle Jump",
        "Precise Physics System: Realistic gravity, velocity, and collision detection",
        "Multiple Platform Types: Normal, moving, breaking, and temporary platforms",
        "Star Collection: Collect stars for extra points (50 points per star)",
        "Sound System: Background music and game sound effects",
        "Responsive Design: Supports desktop and mobile devices",
        "Score System: Records highest score with local storage",
        "Game State Management: Start, pause, end, and restart functionality",
        "Keyboard Controls: Arrow keys or WASD for movement, P for pause, R for restart",
        "Visual Effects: Gradient backgrounds, floating clouds, platform animations",
      ],
      tech: "Technologies Used",
      techList: [
        "React 18",
        "TypeScript",
        "CSS3",
        "HTML5 Canvas",
        "Physics Engine",
        "Web Audio API",
        "Local Storage",
        "requestAnimationFrame",
      ],
      links: "Links",
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "Doodle Jump 遊戲",
      subtitle: "React TypeScript 經典跳躍遊戲",
      tagline: "完整的物理系統、多種平台類型和引人入勝的遊戲玩法",
      description:
        "Doodle Jump 遊戲是一個使用 React TypeScript 開發的經典跳躍遊戲。具有完整的物理系統（真實重力和碰撞檢測）、多種平台類型（普通、移動、破碎、臨時）、星星收集系統、音效系統和響應式設計。遊戲支援鍵盤控制、分數記錄和本地儲存最高分。",
      features: "核心功能",
      featuresList: [
        "完整遊戲機制：重現 Doodle Jump 的核心玩法",
        "精確物理系統：真實的重力、速度、碰撞檢測",
        "多種平台類型：普通、移動、破碎、臨時平台",
        "星星收集：收集星星獲得額外分數（每顆星星 50 分）",
        "音效系統：背景音樂和遊戲音效",
        "響應式設計：支援桌面和移動設備",
        "分數系統：記錄最高分，使用本地儲存",
        "遊戲狀態管理：開始、暫停、結束、重新開始功能",
        "鍵盤控制：方向鍵或 WASD 移動，P 暫停，R 重新開始",
        "視覺效果：漸變背景、浮動雲朵、平台動畫",
      ],
      tech: "使用的技術",
      techList: [
        "React 18",
        "TypeScript",
        "CSS3",
        "HTML5 Canvas",
        "物理引擎",
        "Web Audio API",
        "本地儲存",
        "requestAnimationFrame",
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
                src="/images/doodle-game.png"
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
                  {lang === "en" ? "Gameplay" : "遊戲畫面"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/doodle-game.png"
                    alt={lang === "en" ? "Gameplay" : "遊戲畫面"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Pause Menu" : "暫停選單"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/doodle-pause.png"
                    alt={lang === "en" ? "Pause Menu" : "暫停選單"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Sound Off" : "靜音模式"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/doodle-soundoff.png"
                    alt={lang === "en" ? "Sound Off" : "靜音模式"}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {lang === "en" ? "Game Over" : "遊戲結束"}
                </h3>
                <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/doodle-gameover.png"
                    alt={lang === "en" ? "Game Over" : "遊戲結束"}
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

