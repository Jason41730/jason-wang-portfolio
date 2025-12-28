"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Skills() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Technologies & Learning",
      description: "Technologies and tools I've used and am currently learning.",
      webProgramming: "Web Programming",
      webProgrammingDesc:
        "Full-stack web development with modern frameworks and technologies. I've worked with these technologies in various projects and continue to learn and improve my skills.",
      programmingLanguages: "Programming Languages",
      toolsFrameworks: "Tools & Frameworks",
      databases: "Databases",
      apisServices: "APIs & Services",
      deployment: "Deployment",
      other: "Other Skills",
    },
    zh: {
      heading: "技術與學習",
      description: "我使用過且正在學習的技術和工具。",
      webProgramming: "網頁程式設計",
      webProgrammingDesc:
        "全端網頁開發，使用各種現代框架與技術。我在多個專案中使用過這些技術，並持續學習和提升技能。",
      programmingLanguages: "程式語言",
      toolsFrameworks: "工具與框架",
      databases: "資料庫",
      apisServices: "API 與服務",
      deployment: "部署",
      other: "其他技能",
    },
  };

  const t = content[lang];

  const skills = {
    webProgramming: {
      en: {
        title: "Web Programming",
        description:
          "Full-stack web development with modern frameworks and technologies. I've worked with these technologies in various projects and continue to learn and improve my skills.",
        items: [
          {
            category: "Full-stack Frameworks",
            skills: ["Next.js"],
            description: {
              en: "Building full-stack applications with integrated frontend and backend capabilities",
              zh: "構建整合前端和後端功能的全端應用程式",
            },
          },
          {
            category: "Frontend Frameworks",
            skills: ["React.js", "TypeScript"],
            description: {
              en: "Building responsive and interactive user interfaces",
              zh: "構建響應式和互動式用戶界面",
            },
          },
          {
            category: "Frontend UI Libraries",
            skills: ["Tailwind CSS", "Material UI"],
            description: {
              en: "Styling and UI component libraries for building modern interfaces",
              zh: "用於構建現代界面的樣式和 UI 組件庫",
            },
          },
          {
            category: "Backend Development",
            skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful API"],
            description: {
              en: "Developing server-side applications, APIs, and backend logic",
              zh: "開發伺服器端應用程式、API 和後端邏輯",
            },
          },
          {
            category: "Database & Storage",
            skills: ["MongoDB", "SQLite", "Prisma ORM"],
            description: {
              en: "Designing and managing database schemas and data persistence",
              zh: "設計和管理資料庫架構與資料持久化",
            },
          },
          {
            category: "Cloud Services & APIs",
            skills: ["Cloudinary", "OpenAI API", "LLM Integration", "LINE Bot API"],
            description: {
              en: "Integrating third-party services and AI capabilities",
              zh: "整合第三方服務和 AI 功能",
            },
          },
          {
            category: "Deployment & DevOps",
            skills: ["Vercel", "Git", "GitHub"],
            description: {
              en: "Deploying and managing production applications",
              zh: "部署和管理生產環境應用程式",
            },
          },
          {
            category: "Admin & Management",
            skills: ["Admin Dashboard", "User Management", "Data Visualization"],
            description: {
              en: "Building comprehensive admin interfaces for application management",
              zh: "構建完整的應用程式管理介面",
            },
          },
        ],
      },
      zh: {
        title: "網頁程式設計",
        description:
          "全端網頁開發，使用各種現代框架與技術。我在多個專案中使用過這些技術，並持續學習和提升技能。",
        items: [
          {
            category: "全端框架",
            skills: ["Next.js"],
            description: {
              en: "Building full-stack applications with integrated frontend and backend capabilities",
              zh: "構建整合前端和後端功能的全端應用程式",
            },
          },
          {
            category: "前端框架",
            skills: ["React.js", "TypeScript"],
            description: {
              en: "Building responsive and interactive user interfaces",
              zh: "構建響應式和互動式用戶界面",
            },
          },
          {
            category: "前端 UI 庫",
            skills: ["Tailwind CSS", "Material UI"],
            description: {
              en: "Styling and UI component libraries for building modern interfaces",
              zh: "用於構建現代界面的樣式和 UI 組件庫",
            },
          },
          {
            category: "後端開發",
            skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful API"],
            description: {
              en: "Developing server-side applications, APIs, and backend logic",
              zh: "開發伺服器端應用程式、API 和後端邏輯",
            },
          },
          {
            category: "資料庫與儲存",
            skills: ["MongoDB", "SQLite", "Prisma ORM"],
            description: {
              en: "Designing and managing database schemas and data persistence",
              zh: "設計和管理資料庫架構與資料持久化",
            },
          },
          {
            category: "雲端服務與 API",
            skills: ["Cloudinary", "OpenAI API", "LLM 整合", "LINE Bot API"],
            description: {
              en: "Integrating third-party services and AI capabilities",
              zh: "整合第三方服務和 AI 功能",
            },
          },
          {
            category: "部署與 DevOps",
            skills: ["Vercel", "Git", "GitHub"],
            description: {
              en: "Deploying and managing production applications",
              zh: "部署和管理生產環境應用程式",
            },
          },
          {
            category: "管理介面",
            skills: ["管理儀表板", "使用者管理", "資料視覺化"],
            description: {
              en: "Building comprehensive admin interfaces for application management",
              zh: "構建完整的應用程式管理介面",
            },
          },
        ],
      },
    },
    programmingLanguages: {
      en: ["TypeScript", "Python", "C/C++", "JavaScript"],
      zh: ["TypeScript", "Python", "C/C++", "JavaScript"],
    },
    toolsFrameworks: {
      en: ["HTML/CSS", "Git", "GitHub", "Linux"],
      zh: ["HTML/CSS", "Git", "GitHub", "Linux"],
    },
  };

  const webSkills = skills.webProgramming[lang];
  const programmingLangs = skills.programmingLanguages[lang];
  const tools = skills.toolsFrameworks[lang];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.heading}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Web Programming - Main Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {webSkills.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {webSkills.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {webSkills.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.category}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">
                    {item.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.programmingLanguages}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                {programmingLangs.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.toolsFrameworks}
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
