"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";
import { webProjects } from "./projects-data";

export default function Projects() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Projects",
      description: "Here are some of my recent projects, including ",
      webProgramming: "web programming",
      and: " and ",
      cadContest: "EDA CAD Contest",
      descriptionEnd: ".",
      webProjectsTitle: "Web Programming Projects",
      cadContestTitle: "CAD Contest Problem B - Excellent Award",
      overviewTitle: "Project Areas",
      overviewDescription:
        "Choose an area first, or keep scrolling to browse every project in detail.",
      viewSection: "View Section",
      projectCount: "projects",
      singleProjectCount: "project",
      webCategoryDescription:
        "Full-stack products, LINE bots, dashboards, and interactive web apps.",
      cadCategoryTitle: "EDA / CAD Contest",
      cadCategoryDescription:
        "Research-oriented EDA work focused on optimization, algorithms, and contest results.",
    },
    zh: {
      heading: "專案",
      description: "以下是我的一些近期專案，包括 ",
      webProgramming: "網頁程式設計",
      and: " 和 ",
      cadContest: "EDA CAD Contest",
      descriptionEnd: "。",
      webProjectsTitle: "網頁程式設計專案",
      cadContestTitle: "CAD Contest Problem B - 優等獎",
      overviewTitle: "專案分類",
      overviewDescription:
        "可以先從分類開始看，也可以繼續往下瀏覽每個專案的詳細介紹。",
      viewSection: "查看分類",
      projectCount: "個專案",
      singleProjectCount: "個專案",
      webCategoryDescription:
        "Full-stack 產品、LINE Bot、Dashboard 與互動式網頁應用。",
      cadCategoryTitle: "EDA / CAD Contest",
      cadCategoryDescription:
        "以最佳化、演算法與競賽成果為核心的 EDA 研究與實作。",
    },
  };

  const t = content[lang];

  const projectCategories = [
    {
      id: "web-projects",
      title: t.webProjectsTitle,
      description: t.webCategoryDescription,
      count: webProjects.length,
      image: "/images/project-journee.jpg",
      imageAlt: lang === "en" ? "Web Programming Projects" : "網頁程式設計專案",
      imageClass: "object-cover",
      accentClass: "border-blue-500",
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
      image: "/images/cad-award.png",
      imageAlt: lang === "en" ? "EDA CAD Contest" : "EDA CAD Contest",
      imageClass: "object-contain p-4",
      accentClass: "border-emerald-500",
      featured:
        lang === "en"
          ? ["Problem B", "Excellent Award", "EDA Optimization"]
          : ["Problem B", "優等獎", "EDA 最佳化"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            {t.heading}
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
            {t.description}
            <a
              href="#web-projects"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("web-projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {t.webProgramming}
            </a>
            {t.and}
            <a
              href="#cad-contest"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("cad-contest");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {t.cadContest}
            </a>
            {t.descriptionEnd}
          </p>

          {/* Project Areas */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {t.overviewTitle}
                </h2>
                <p className="text-gray-700 mt-2">
                  {t.overviewDescription}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className={`group bg-white rounded-lg border border-gray-200 border-l-4 ${category.accentClass} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(category.id);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  <div className="relative h-44 bg-gray-50 border-b border-gray-200">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className={category.imageClass}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                        {category.count}{" "}
                        {category.count === 1
                          ? t.singleProjectCount
                          : t.projectCount}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {category.featured.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                      {t.viewSection}
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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

          {/* Web Programming Projects */}
          <div id="web-projects" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t.webProjectsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
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
                      <div className="w-full h-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
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
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === "en" ? project.titleEn : project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {lang === "en" ? project.subtitleEn : project.subtitle}
                    </p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {lang === "en"
                        ? project.descriptionEn
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium mt-auto"
                    >
                      {lang === "en" ? "See More" : "查看更多"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CAD Contest Project */}
          <div id="cad-contest" className="p-8 bg-gray-50 rounded-lg border-l-4 border-blue-500 shadow-md scroll-mt-20">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {t.cadContestTitle}
              </h2>
              <p className="text-xl text-gray-700 mb-1">
                {lang === "en"
                  ? "Power and Timing Optimization Using Multibit Flip-Flop"
                  : "使用多位元正反器進行功耗與時序最佳化"}
              </p>
              <p className="text-lg font-semibold text-blue-600 mb-1">
                {lang === "en"
                  ? "Excellent Award (優等) - Domestic Competition"
                  : "國內賽優等獎"}
              </p>
              <p className="text-sm text-gray-600">
                {lang === "en" ? "Group ID: cadb1050" : "組別：cadb1050"}
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {lang === "en"
                ? "I participated in the CAD Contest Problem B competition and achieved Excellent Award (優等) in the domestic competition. This project focused on power and timing optimization using multibit flip-flops."
                : "我參與了 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。此專案專注於使用多位元正反器進行功耗與時序最佳化。"}
            </p>
            <Link
              href="/projects/cad-contest"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {lang === "en" ? "See More" : "查看更多"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
