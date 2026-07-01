"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";
import { ProjectSummary, webProjects } from "./projects-data";

const statusStyles: Record<ProjectSummary["statusKind"], string> = {
  live: "border-emerald-200 bg-emerald-50 text-emerald-700",
  local: "border-amber-200 bg-amber-50 text-amber-800",
  research: "border-cyan-200 bg-cyan-50 text-cyan-700",
};

export default function Projects() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Projects",
      descriptionLead: "Recent work across ",
      webProgramming: "web programming",
      separatorOne: ", ",
      cadContest: "2025 EDA CAD Contest",
      separatorTwo: ", and ",
      youthBillion: "Youth Billion / IBM Quantum",
      descriptionEnd: ".",
      webProjectsTitle: "Web Programming Projects",
      cadContestTitle: "2025 CAD Contest Problem B - Excellent Award",
      overviewTitle: "Project Areas",
      overviewDescription:
        "Start with the three main threads, then keep scrolling for deeper project notes.",
      viewSection: "View Section",
      roleLabel: "Role",
      impactLabel: "Impact",
      techLabel: "Stack",
      moreTech: "more",
      projectCount: "projects",
      singleProjectCount: "project",
      webCategoryDescription:
        "Full-stack products, LINE bots, dashboards, and interactive web apps.",
      cadCategoryTitle: "2025 EDA / CAD Contest",
      cadCategoryDescription:
        "Award-winning EDA work focused on optimization, algorithms, and contest results.",
      quantumCategoryTitle: "Youth Billion / IBM Quantum",
      quantumCategoryDescription:
        "A 2026 selected overseas program plan connecting quantum computing, EDA, and public technical writing.",
      quantumSectionEyebrow: "2026 Selected Program",
      quantumSectionTitle: "IBM Quantum Dream: NYC Research Program",
      quantumSectionSubtitle:
        "A long-term public learning project around quantum computing, EDA, and software systems.",
      quantumSectionDescription:
        "Selected for the Youth Billion Overseas Dream Fund on July 1, 2026. The plan turns the program into a public knowledge base: pre-trip preparation posts, on-site observation reports, daily technical notes, and an open-source quantum optimization example.",
      quantumStatus: "Accepted on July 1, 2026",
      quantumLink: "Read Program Plan",
      quantumMetrics: [
        { label: "Program", value: "I-9-10", detail: "IBM Quantum Dream" },
        { label: "Public writing", value: "5+", detail: "Professional reports" },
        { label: "Open source", value: "1", detail: "Quantum optimization demo" },
      ],
      quantumCommitmentsTitle: "Public Commitments",
      quantumCommitments: [
        "Publish pre-program guides on Dcard and this portfolio.",
        "Write professional observation reports during the overseas program.",
        "Build a Quantum Industry Observation knowledge base within one year.",
      ],
    },
    zh: {
      heading: "專案",
      descriptionLead: "以下是我的近期專案，包括 ",
      webProgramming: "網頁程式設計",
      separatorOne: "、",
      cadContest: "2025 EDA CAD Contest",
      separatorTwo: "，以及 ",
      youthBillion: "青年百億 / IBM Quantum",
      descriptionEnd: "。",
      webProjectsTitle: "網頁程式設計專案",
      cadContestTitle: "2025 CAD Contest Problem B - 優等獎",
      overviewTitle: "專案分類",
      overviewDescription:
        "先看三個主要方向，再往下瀏覽每個專案的詳細介紹。",
      viewSection: "查看分類",
      roleLabel: "角色",
      impactLabel: "成果",
      techLabel: "技術",
      moreTech: "更多",
      projectCount: "個專案",
      singleProjectCount: "個專案",
      webCategoryDescription:
        "Full-stack 產品、LINE Bot、Dashboard 與互動式網頁應用。",
      cadCategoryTitle: "2025 EDA / CAD Contest",
      cadCategoryDescription:
        "2025 年以最佳化、演算法與競賽成果為核心的 EDA 研究與實作。",
      quantumCategoryTitle: "青年百億 / IBM Quantum",
      quantumCategoryDescription:
        "2026 年錄取的海外圓夢計畫，串接量子運算、EDA 與公開技術寫作。",
      quantumSectionEyebrow: "2026 錄取計畫",
      quantumSectionTitle: "I-9-10 IBM 量子夢：紐約研習營",
      quantumSectionSubtitle:
        "以量子運算、EDA 與軟體系統為核心的長期公開學習專案。",
      quantumSectionDescription:
        "我於 2026 年 7 月 1 日確認錄取青年百億海外圓夢基金計畫。這不只是一次海外研習，而是會延伸成公開知識庫：行前申請與技術準備文章、研習期間的專業觀察報告、每日技術筆記，以及一個開源量子最佳化範例。",
      quantumStatus: "2026 年 7 月 1 日已確認錄取",
      quantumLink: "查看計畫內容",
      quantumMetrics: [
        { label: "計畫", value: "I-9-10", detail: "IBM 量子夢" },
        { label: "公開寫作", value: "5+", detail: "專業觀察報告" },
        { label: "開源", value: "1", detail: "量子最佳化範例" },
      ],
      quantumCommitmentsTitle: "公開承諾",
      quantumCommitments: [
        "在 Dcard 與個人網站整理行前申請策略與準備文章。",
        "研習期間撰寫專業觀察報告與每日技術／生活筆記。",
        "一年內建立《量子產業觀察》知識庫並開源量子最佳化範例。",
      ],
    },
  };

  const t = content[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const projectCategories = [
    {
      id: "web-projects",
      title: t.webProjectsTitle,
      description: t.webCategoryDescription,
      count: webProjects.length,
      image: "/images/project-journee.jpg",
      imageAlt: lang === "en" ? "Web programming project preview" : "網頁程式設計專案預覽",
      imageClass: "object-cover",
      accentClass: "border-blue-500",
      tagClass: "bg-blue-50 text-blue-700",
      featured:
        lang === "en"
          ? ["Journee", "Planova", "Travel Planner Bot"]
          : ["Journee", "Planova", "旅遊規劃助手"],
    },
    {
      id: "cad-contest",
      title: t.cadCategoryTitle,
      description: t.cadCategoryDescription,
      count: 1,
      image: "/images/cadcerti.JPG",
      imageAlt:
        lang === "en"
          ? "2025 CAD Contest award certificate"
          : "2025 CAD Contest 獎狀",
      imageClass: "object-contain p-2",
      accentClass: "border-emerald-500",
      tagClass: "bg-emerald-50 text-emerald-700",
      featured:
        lang === "en"
          ? ["2025", "Problem B", "Excellent Award"]
          : ["2025", "Problem B", "優等獎"],
    },
    {
      id: "youth-billion",
      title: t.quantumCategoryTitle,
      description: t.quantumCategoryDescription,
      count: 1,
      image: "/images/about1.jpg",
      imageAlt:
        lang === "en"
          ? "Personal travel portrait"
          : "個人旅行照片",
      imageClass: "object-cover",
      accentClass: "border-amber-500",
      tagClass: "bg-amber-50 text-amber-800",
      featured:
        lang === "en"
          ? ["2026 Selected", "IBM Quantum", "Knowledge Base"]
          : ["2026 錄取", "IBM Quantum", "知識庫"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Portfolio Work
            </p>
            <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              {t.descriptionLead}
              <a
                href="#web-projects"
                className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("web-projects");
                }}
              >
                {t.webProgramming}
              </a>
              {t.separatorOne}
              <a
                href="#cad-contest"
                className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("cad-contest");
                }}
              >
                {t.cadContest}
              </a>
              {t.separatorTwo}
              <a
                href="#youth-billion"
                className="font-semibold text-cyan-700 underline underline-offset-4 transition-colors hover:text-cyan-900"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("youth-billion");
                }}
              >
                {t.youthBillion}
              </a>
              {t.descriptionEnd}
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-950">
                  {t.overviewTitle}
                </h2>
                <p className="mt-2 text-gray-700">{t.overviewDescription}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {projectCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`group overflow-hidden border border-gray-200 border-l-4 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${category.accentClass}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(category.id);
                  }}
                >
                  <div className="relative h-40 border-b border-gray-200 bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className={category.imageClass}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold leading-snug text-gray-950">
                        {category.title}
                      </h3>
                      <span className="shrink-0 bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                        {category.count}{" "}
                        {category.count === 1
                          ? t.singleProjectCount
                          : t.projectCount}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-6 text-gray-700">
                      {category.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {category.featured.map((item) => (
                        <span
                          key={item}
                          className={`px-2 py-1 text-xs font-medium ${category.tagClass}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-gray-950 transition-colors group-hover:text-cyan-700">
                      {t.viewSection}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <section id="web-projects" className="mb-16 scroll-mt-24">
            <h2 className="mb-8 text-3xl font-bold text-gray-950">
              {t.webProjectsTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {webProjects.map((project) => (
                <article
                  key={project.id}
                  className="flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 bg-gray-200">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={lang === "en" ? project.titleEn : project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-900">
                        <svg
                          className="h-16 w-16 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span
                        className={`border px-2.5 py-1 text-xs font-semibold ${statusStyles[project.statusKind]}`}
                      >
                        {lang === "en" ? project.statusEn : project.status}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                        {t.techLabel}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-gray-950">
                      {lang === "en" ? project.titleEn : project.title}
                    </h3>
                    <p className="mb-3 text-sm text-gray-600">
                      {lang === "en" ? project.subtitleEn : project.subtitle}
                    </p>
                    <dl className="mb-4 space-y-3 border-y border-gray-100 py-4">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          {t.roleLabel}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-gray-950">
                          {lang === "en" ? project.roleEn : project.role}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                          {t.impactLabel}
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700">
                          {lang === "en" ? project.impactEn : project.impact}
                        </dd>
                      </div>
                    </dl>
                    <p className="mb-4 line-clamp-2 text-gray-700">
                      {lang === "en"
                        ? project.descriptionEn
                        : project.description}
                    </p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 px-2 py-1 text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="bg-gray-50 px-2 py-1 text-xs text-gray-500">
                          +{project.tech.length - 4} {t.moreTech}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-auto inline-flex items-center justify-center bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {lang === "en" ? "See More" : "查看更多"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="cad-contest"
            className="mb-16 scroll-mt-24 border-l-4 border-cyan-600 bg-white p-8 shadow-sm"
          >
            <div className="mb-5">
              <span className="mb-3 inline-block border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                {lang === "en" ? "2025 Research / Award" : "2025 研究 / 競賽獲獎"}
              </span>
              <h2 className="mb-2 text-3xl font-bold text-gray-950">
                {t.cadContestTitle}
              </h2>
              <p className="mb-1 text-xl text-gray-700">
                {lang === "en"
                  ? "Power and Timing Optimization Using Multibit Flip-Flop"
                  : "使用多位元正反器進行功耗與時序最佳化"}
              </p>
              <p className="mb-1 text-lg font-semibold text-cyan-700">
                {lang === "en"
                  ? "2025 Excellent Award (優等) - Domestic Competition"
                  : "2025 國內賽優等獎"}
              </p>
              <p className="text-sm text-gray-600">
                {lang === "en" ? "Group ID: cadb1050" : "組別：cadb1050"}
              </p>
            </div>
            <p className="mb-5 leading-7 text-gray-700">
              {lang === "en"
                ? "I participated in the 2025 CAD Contest Problem B competition and achieved Excellent Award (優等) in the domestic competition. This project focused on power and timing optimization using multibit flip-flops."
                : "我參與了 2025 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。此專案專注於使用多位元正反器進行功耗與時序最佳化。"}
            </p>
            <div className="mb-6 grid gap-3 md:grid-cols-3">
              {[
                lang === "en"
                  ? "Role: Algorithm + implementation"
                  : "角色：演算法與實作",
                lang === "en"
                  ? "Evidence: 2025 Beta rank 2"
                  : "證據：2025 Beta ranking 2",
                lang === "en"
                  ? "Stack: C++, DEF/LEF, STA"
                  : "技術：C++, DEF/LEF, STA",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-gray-200 bg-slate-50 px-4 py-3 text-sm font-medium text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/projects/cad-contest"
              className="inline-flex items-center justify-center bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              {lang === "en" ? "See More" : "查看更多"}
            </Link>
          </section>

          <section
            id="youth-billion"
            className="scroll-mt-24 overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[300px] border-b border-gray-200 bg-gray-100 lg:border-b-0 lg:border-r">
                <Image
                  src="/images/about1.jpg"
                  alt={lang === "en" ? "Personal travel portrait" : "個人旅行照片"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="p-8">
                <span className="mb-3 inline-block border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
                  {t.quantumSectionEyebrow}
                </span>
                <h2 className="mb-3 text-3xl font-bold text-gray-950">
                  {t.quantumSectionTitle}
                </h2>
                <p className="mb-4 text-lg font-medium leading-7 text-gray-700">
                  {t.quantumSectionSubtitle}
                </p>
                <p className="mb-5 leading-7 text-gray-700">
                  {t.quantumSectionDescription}
                </p>
                <div className="mb-6 grid gap-3 sm:grid-cols-3">
                  {t.quantumMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-gray-200 bg-slate-50 p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                        {metric.label}
                      </p>
                      <p className="mt-2 text-2xl font-bold text-gray-950">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {metric.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mb-6 border-l-4 border-amber-500 bg-amber-50/70 p-5">
                  <p className="mb-3 text-sm font-semibold text-amber-900">
                    {t.quantumCommitmentsTitle}
                  </p>
                  <ul className="space-y-2 text-sm leading-6 text-gray-700">
                    {t.quantumCommitments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/projects/ibm-quantum-dream"
                    className="inline-flex items-center justify-center bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {t.quantumLink}
                  </Link>
                  <span className="text-sm font-medium text-gray-600">
                    {t.quantumStatus}
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
