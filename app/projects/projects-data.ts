export interface ProjectSummary {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  role: string;
  roleEn: string;
  impact: string;
  impactEn: string;
  status: string;
  statusEn: string;
  statusKind: "live" | "local" | "research";
  tech: string[];
  image: string;
  demo: string;
  lineBot?: string;
}

export const webProjects: ProjectSummary[] = [
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
    role: "全端開發 / AI 流程設計",
    roleEn: "Full-stack Developer / AI Workflow",
    impact: "把情緒記錄從表單變成 LINE 對話與 Web dashboard",
    impactEn: "Turns emotion journaling into LINE conversations plus a web dashboard",
    status: "已部署",
    statusEn: "Live",
    statusKind: "live",
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
    role: "全端開發 / LLM 財務助理",
    roleEn: "Full-stack Developer / LLM Finance Assistant",
    impact: "降低記帳摩擦，讓目標與報表可以被 AI 串起來",
    impactEn: "Reduces expense-tracking friction and connects goals, reports, and AI advice",
    status: "已部署",
    statusEn: "Live",
    statusKind: "live",
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
    role: "Bot 開發 / 旅遊規劃流程",
    roleEn: "Bot Developer / Travel Planning Flow",
    impact: "用聊天介面整合行程規劃、預算與查詢",
    impactEn: "Combines itinerary planning, budget tracking, and trip lookup in chat",
    status: "已部署",
    statusEn: "Live",
    statusKind: "live",
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
    role: "全端社群功能實作",
    roleEn: "Full-stack Social Product Implementation",
    impact: "完整練習 OAuth、即時互動與社群資料模型",
    impactEn: "Exercises OAuth, realtime interactions, and social data modeling",
    status: "已部署",
    statusEn: "Live",
    statusKind: "live",
    tech: [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "Prisma",
      "MongoDB",
      "Pusher",
      "Cloudinary",
    ],
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
    role: "全端地圖應用開發",
    roleEn: "Full-stack Maps Application Developer",
    impact: "把地圖搜尋、收藏、評分與路線整合成一個操作流程",
    impactEn: "Unifies map search, bookmarking, ratings, and route planning",
    status: "本機專案",
    statusEn: "Local Project",
    statusKind: "local",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "SQLite",
      "Google Maps API",
      "JWT",
      "Material UI",
    ],
    image: "/images/explorer-dashboard.png",
    demo: "",
  },
  {
    id: "cinema-ticket-system",
    title: "影城售票系統",
    titleEn: "Cinema Ticket System",
    subtitle: "React + Material UI 影城售票系統",
    subtitleEn: "React + Material UI Cinema Ticket System",
    description:
      "一個基於 React TypeScript 和 Material UI 的影城售票系統，提供完整的電影瀏覽、場次選擇、購物車和結帳功能。支援搜尋、篩選、即時座位數顯示等功能。",
    descriptionEn:
      "A cinema ticket system based on React TypeScript and Material UI, providing complete movie browsing, showtime selection, shopping cart, and checkout functionality. Supports search, filtering, real-time seat availability display, and more.",
    role: "前端產品流程開發",
    roleEn: "Frontend Product Flow Developer",
    impact: "完整模擬瀏覽、選場次、購物車與結帳流程",
    impactEn: "Models browsing, showtime selection, cart, and checkout flows end to end",
    status: "本機專案",
    statusEn: "Local Project",
    statusKind: "local",
    tech: ["React", "TypeScript", "Material UI", "Context API", "CSV"],
    image: "/images/cinema-dashboard.png",
    demo: "http://localhost:3001",
  },
  {
    id: "doodle-jump",
    title: "Doodle Jump 遊戲",
    titleEn: "Doodle Jump Game",
    subtitle: "React TypeScript 經典跳躍遊戲",
    subtitleEn: "React TypeScript Classic Jumping Game",
    description:
      "一個使用 React TypeScript 開發的 Doodle Jump 遊戲，包含完整的物理系統、多種平台類型、道具系統和音效系統。支援鍵盤控制、分數記錄、本地儲存等功能。",
    descriptionEn:
      "A Doodle Jump game developed with React TypeScript, featuring a complete physics system, multiple platform types, item system, and sound effects. Supports keyboard controls, score recording, local storage, and more.",
    role: "遊戲互動與物理邏輯",
    roleEn: "Game Interaction / Physics Logic",
    impact: "從 Canvas、物理參數到分數紀錄完整實作遊戲循環",
    impactEn: "Implements the game loop from Canvas and physics to score persistence",
    status: "本機專案",
    statusEn: "Local Project",
    statusKind: "local",
    tech: ["React", "TypeScript", "CSS3", "Canvas", "Physics Engine"],
    image: "/images/doodle-game.png",
    demo: "http://localhost:3001",
  },
  {
    id: "personal-portfolio",
    title: "個人作品集網站",
    titleEn: "Personal Portfolio Website",
    subtitle: "Next.js + TypeScript + Tailwind CSS 個人作品集",
    subtitleEn: "Next.js + TypeScript + Tailwind CSS Personal Portfolio",
    description:
      "一個使用 Next.js、TypeScript 和 Tailwind CSS 構建的現代化個人作品集網站，展示專案、技能、學術背景和興趣。支援中英文雙語切換、響應式設計、優雅的 UI/UX 設計，並整合多個專案的詳細介紹頁面。網站整合了 Resend API 實現聯絡表單的郵件發送功能，使用 Cloudinary 進行照片儲存和管理。",
    descriptionEn:
      "A modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing projects, skills, academic background, and interests. Features bilingual support (English/Chinese), responsive design, elegant UI/UX, and integrated detailed project pages. The site includes a contact form integrated with Resend API for email delivery and a photo gallery powered by Cloudinary for image storage and management.",
    role: "網站設計 / Next.js 開發",
    roleEn: "Site Design / Next.js Development",
    impact: "整合雙語內容、專案敘事、聯絡表單與照片管理",
    impactEn: "Combines bilingual content, project storytelling, contact flow, and photo management",
    status: "已部署",
    statusEn: "Live",
    statusKind: "live",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "App Router",
      "Resend API",
      "Cloudinary",
    ],
    image: "/images/portfolio-dashboard.png",
    demo: "https://jason-wang-portfolio.vercel.app/",
  },
];
