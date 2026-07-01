"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

type Locale = "en" | "zh";

interface SkillItem {
  category: string;
  skills: string[];
  description: Record<Locale, string>;
}

interface SkillArea {
  title: string;
  eyebrow: string;
  description: string;
  items: SkillItem[];
}

export default function Skills() {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: "Technical toolkit",
      heading: "Skills",
      description:
        "A practical stack shaped by full-stack products, AI integrations, CAD contest work, and an incoming research direction in logic synthesis.",
      projectsCta: "See Related Projects",
      summary: [
        {
          label: "Product stack",
          value: "Next.js / React",
          detail: "Interfaces, dashboards, API routes, and deployment.",
        },
        {
          label: "Research stack",
          value: "EDA / Logic",
          detail: "Algorithms, design files, optimization, and synthesis.",
        },
        {
          label: "Systems style",
          value: "Build to ship",
          detail: "From prototypes to maintained portfolio projects.",
        },
      ],
      webProgramming: "Web Programming",
      webProgrammingEyebrow: "Product engineering",
      webProgrammingDesc:
        "Full-stack web development with modern frameworks, production deployment, and practical AI/service integrations.",
      eda: "EDA (Electronic Design Automation)",
      edaEyebrow: "Algorithms and research",
      edaDesc:
        "Electronic Design Automation tools and methods for VLSI design optimization, with an upcoming research focus on logic synthesis.",
      programmingLanguages: "Programming Languages",
      toolsFrameworks: "Tools & Workflow",
    },
    zh: {
      eyebrow: "技術工具箱",
      heading: "技能",
      description:
        "這些能力來自全端產品、AI 服務整合、CAD Contest 實作，以及即將延伸到邏輯合成的研究方向。",
      projectsCta: "查看相關專案",
      summary: [
        {
          label: "產品技術",
          value: "Next.js / React",
          detail: "介面、Dashboard、API route 與部署。",
        },
        {
          label: "研究技術",
          value: "EDA / Logic",
          detail: "演算法、設計檔案、最佳化與邏輯合成。",
        },
        {
          label: "做事方式",
          value: "Build to ship",
          detail: "從 prototype 到可以長期維護的作品。",
        },
      ],
      webProgramming: "網頁程式設計",
      webProgrammingEyebrow: "產品工程",
      webProgrammingDesc:
        "以現代框架、production deployment、AI/API 服務整合為核心的全端網頁開發。",
      eda: "EDA (電子設計自動化)",
      edaEyebrow: "演算法與研究",
      edaDesc:
        "用於 VLSI 設計最佳化的電子設計自動化工具與方法，接下來也會延伸到邏輯合成研究。",
      programmingLanguages: "程式語言",
      toolsFrameworks: "工具與工作流",
    },
  };

  const skillCatalog: Record<
    Locale,
    {
      webProgramming: SkillArea;
      eda: SkillArea;
      programmingLanguages: string[];
      toolsFrameworks: string[];
    }
  > = {
    en: {
      webProgramming: {
        title: "Web Programming",
        eyebrow: "Product engineering",
        description:
          "Full-stack web development with modern frameworks, production deployment, and practical AI/service integrations.",
        items: [
          {
            category: "Full-stack Frameworks",
            skills: ["Next.js", "React.js", "TypeScript"],
            description: {
              en: "Building responsive interfaces and server-backed product flows.",
              zh: "建立響應式介面與能串接後端的產品流程。",
            },
          },
          {
            category: "Frontend Systems",
            skills: ["Tailwind CSS", "Material UI", "Responsive UI"],
            description: {
              en: "Designing polished layouts, component states, and mobile-friendly screens.",
              zh: "設計精緻版面、元件狀態與行動裝置友善介面。",
            },
          },
          {
            category: "Backend Development",
            skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful API"],
            description: {
              en: "Developing server-side logic, API contracts, and application workflows.",
              zh: "開發伺服器邏輯、API 合約與應用流程。",
            },
          },
          {
            category: "Data & Services",
            skills: ["MongoDB", "SQLite", "Prisma ORM", "Cloudinary"],
            description: {
              en: "Managing persistence, media storage, schemas, and service integrations.",
              zh: "管理資料持久化、媒體儲存、schema 與服務整合。",
            },
          },
          {
            category: "AI & Automation",
            skills: ["OpenAI API", "LLM Integration", "LINE Bot API"],
            description: {
              en: "Connecting LLM workflows and chat-based products to usable interfaces.",
              zh: "把 LLM 工作流程與聊天型產品接到可用介面。",
            },
          },
          {
            category: "Deployment & Ops",
            skills: ["Vercel", "Git", "GitHub"],
            description: {
              en: "Shipping projects, maintaining source control, and iterating in production.",
              zh: "部署作品、維護版本控制，並在 production 中持續迭代。",
            },
          },
        ],
      },
      eda: {
        title: "EDA (Electronic Design Automation)",
        eyebrow: "Algorithms and research",
        description:
          "Electronic Design Automation tools and methods for VLSI design optimization, with an upcoming research focus on logic synthesis.",
        items: [
          {
            category: "Design Optimization",
            skills: [
              "Floorplanning",
              "Legalization",
              "Banking/Debanking",
              "Power Optimization",
              "Timing Optimization",
            ],
            description: {
              en: "Optimizing VLSI designs under power, timing, area, and legality constraints.",
              zh: "在功耗、時序、面積與合法性限制下最佳化 VLSI 設計。",
            },
          },
          {
            category: "Design Formats",
            skills: ["DEF", "LEF", "Verilog"],
            description: {
              en: "Working with common design representations and contest-grade parsing flows.",
              zh: "處理常見設計表示法與競賽等級的 parser 流程。",
            },
          },
          {
            category: "Algorithms",
            skills: ["BFS", "Graph Algorithms", "Placement Algorithms", "Optimization"],
            description: {
              en: "Implementing graph and optimization methods for physical design problems.",
              zh: "實作圖論與最佳化方法，解決 physical design 問題。",
            },
          },
          {
            category: "Research Direction",
            skills: ["Logic Synthesis", "Circuit Optimization", "Quantum Computing"],
            description: {
              en: "Preparing for graduate research in synthesis, optimization, and quantum-aware systems.",
              zh: "準備進入合成、最佳化與量子相關系統研究。",
            },
          },
        ],
      },
      programmingLanguages: ["TypeScript", "Python", "C/C++", "JavaScript", "Verilog"],
      toolsFrameworks: ["HTML/CSS", "Git", "GitHub", "Linux", "Vercel"],
    },
    zh: {
      webProgramming: {
        title: "網頁程式設計",
        eyebrow: "產品工程",
        description:
          "以現代框架、production deployment、AI/API 服務整合為核心的全端網頁開發。",
        items: [
          {
            category: "全端框架",
            skills: ["Next.js", "React.js", "TypeScript"],
            description: {
              en: "Building responsive interfaces and server-backed product flows.",
              zh: "建立響應式介面與能串接後端的產品流程。",
            },
          },
          {
            category: "前端系統",
            skills: ["Tailwind CSS", "Material UI", "Responsive UI"],
            description: {
              en: "Designing polished layouts, component states, and mobile-friendly screens.",
              zh: "設計精緻版面、元件狀態與行動裝置友善介面。",
            },
          },
          {
            category: "後端開發",
            skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful API"],
            description: {
              en: "Developing server-side logic, API contracts, and application workflows.",
              zh: "開發伺服器邏輯、API 合約與應用流程。",
            },
          },
          {
            category: "資料與服務",
            skills: ["MongoDB", "SQLite", "Prisma ORM", "Cloudinary"],
            description: {
              en: "Managing persistence, media storage, schemas, and service integrations.",
              zh: "管理資料持久化、媒體儲存、schema 與服務整合。",
            },
          },
          {
            category: "AI 與自動化",
            skills: ["OpenAI API", "LLM 整合", "LINE Bot API"],
            description: {
              en: "Connecting LLM workflows and chat-based products to usable interfaces.",
              zh: "把 LLM 工作流程與聊天型產品接到可用介面。",
            },
          },
          {
            category: "部署與維運",
            skills: ["Vercel", "Git", "GitHub"],
            description: {
              en: "Shipping projects, maintaining source control, and iterating in production.",
              zh: "部署作品、維護版本控制，並在 production 中持續迭代。",
            },
          },
        ],
      },
      eda: {
        title: "EDA (電子設計自動化)",
        eyebrow: "演算法與研究",
        description:
          "用於 VLSI 設計最佳化的電子設計自動化工具與方法，接下來也會延伸到邏輯合成研究。",
        items: [
          {
            category: "設計最佳化",
            skills: [
              "Floorplanning",
              "Legalization",
              "Banking/Debanking",
              "功耗最佳化",
              "時序最佳化",
            ],
            description: {
              en: "Optimizing VLSI designs under power, timing, area, and legality constraints.",
              zh: "在功耗、時序、面積與合法性限制下最佳化 VLSI 設計。",
            },
          },
          {
            category: "設計檔案格式",
            skills: ["DEF", "LEF", "Verilog"],
            description: {
              en: "Working with common design representations and contest-grade parsing flows.",
              zh: "處理常見設計表示法與競賽等級的 parser 流程。",
            },
          },
          {
            category: "演算法",
            skills: ["BFS", "圖形演算法", "擺放演算法", "最佳化"],
            description: {
              en: "Implementing graph and optimization methods for physical design problems.",
              zh: "實作圖論與最佳化方法，解決 physical design 問題。",
            },
          },
          {
            category: "研究方向",
            skills: ["邏輯合成", "電路最佳化", "量子運算"],
            description: {
              en: "Preparing for graduate research in synthesis, optimization, and quantum-aware systems.",
              zh: "準備進入合成、最佳化與量子相關系統研究。",
            },
          },
        ],
      },
      programmingLanguages: ["TypeScript", "Python", "C/C++", "JavaScript", "Verilog"],
      toolsFrameworks: ["HTML/CSS", "Git", "GitHub", "Linux", "Vercel"],
    },
  };

  const t = content[lang];
  const catalog = skillCatalog[lang];

  const skillAreas = [
    {
      ...catalog.webProgramming,
      accentClass: "border-l-cyan-500",
      badgeClass: "border-cyan-100 bg-cyan-50 text-cyan-700",
      headerClass: "bg-cyan-950 text-white",
    },
    {
      ...catalog.eda,
      accentClass: "border-l-emerald-500",
      badgeClass: "border-emerald-100 bg-emerald-50 text-emerald-700",
      headerClass: "bg-emerald-950 text-white",
    },
  ];

  const compactSections = [
    {
      title: t.programmingLanguages,
      items: catalog.programmingLanguages,
      className: "border-gray-900 bg-gray-950 text-white",
    },
    {
      title: t.toolsFrameworks,
      items: catalog.toolsFrameworks,
      className: "border-slate-200 bg-white text-gray-800",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold text-cyan-700">
                {t.eyebrow}
              </p>
              <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">
                {t.heading}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
                {t.description}
              </p>
              <Link
                href="/projects"
                className="mt-7 inline-flex items-center justify-center bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {t.projectsCta}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {t.summary.map((item) => (
                <article
                  key={item.label}
                  className="border border-gray-200 bg-slate-50 p-5"
                >
                  <p className="text-sm font-semibold text-gray-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-bold text-gray-950">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {skillAreas.map((area) => (
              <section
                key={area.title}
                className={`overflow-hidden border border-gray-200 border-l-4 bg-white shadow-sm ${area.accentClass}`}
              >
                <div className={`p-6 md:p-8 ${area.headerClass}`}>
                  <p className="text-sm font-semibold text-white/70">
                    {area.eyebrow}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold">{area.title}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-white/80">
                    {area.description}
                  </p>
                </div>

                <div className="grid gap-px bg-gray-200 md:grid-cols-2">
                  {area.items.map((item) => (
                    <article key={item.category} className="bg-white p-6">
                      <h3 className="text-xl font-bold text-gray-950">
                        {item.category}
                      </h3>
                      <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">
                        {item.description[lang]}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`border px-2.5 py-1 text-xs font-semibold ${area.badgeClass}`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {compactSections.map((section) => (
              <section
                key={section.title}
                className={`border p-6 shadow-sm ${section.className}`}
              >
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="border border-current/20 px-3 py-1.5 text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
