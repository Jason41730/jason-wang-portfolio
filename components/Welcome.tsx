"use client";

import Link from "next/link";

interface WelcomeProps {
  lang: "en" | "zh";
}

export default function Welcome({ lang }: WelcomeProps) {
  const content = {
    en: {
      heading: "Welcome To My Site",
      paragraph:
        "I'm Wei-Jie Wang, a senior student in the Department of Electrical Engineering at National Taiwan University. I have taken Web Programming courses and completed numerous projects, which have significantly improved my web development skills. I'm also working on research projects in the EDA Lab. For detailed information about my projects, please visit the",
      projectsLink: "Projects",
      paragraphEnd: "page.",
    },
    zh: {
      heading: "歡迎來到我的網站",
      paragraph:
        "我是汪煒杰，目前就讀國立台灣大學電機工程學系大四。我修習了網頁程式設計課程並完成了許多專案，這些經驗大幅提升了我的網頁開發能力。我也在EDA實驗室做專題。關於我的專案詳情，請參閱",
      projectsLink: "專案",
      paragraphEnd: "頁面。",
    },
  };

  const t = content[lang];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          {t.heading}
        </h2>
        <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed">
          {t.paragraph}{" "}
          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            {t.projectsLink}
          </Link>{" "}
          {t.paragraphEnd}
        </p>
      </div>
    </section>
  );
}

