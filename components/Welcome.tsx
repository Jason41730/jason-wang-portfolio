"use client";

import Link from "next/link";

interface WelcomeProps {
  lang: "en" | "zh";
}

export default function Welcome({ lang }: WelcomeProps) {
  const content = {
    en: {
      heading: "Welcome To My Site",
      paragraph1:
        "Hello! I'm Wei-Jie Wang, a senior student in the Department of Electrical Engineering at National Taiwan University. I have taken Web Programming courses and completed numerous projects, which have significantly improved my web development skills. For detailed information about my projects, please visit the",
      projectsLink: "Projects",
      paragraph1End: "page.",
      paragraph2:
        "I'm also working on research projects in the EDA Lab, enhancing my professional skills through hands-on projects. I have been accepted to the Graduate Institute of Electronics Engineering (GIEE) at National Taiwan University, EDA group, and will officially begin my graduate studies in September 2026.",
      paragraph3:
        "Beyond academics, my greatest interests are baseball and watching movies. I also enjoy various sports and love to travel and explore new places. You can check out my travel photos in the",
      photosLink: "Photos",
      paragraph3End: "page. If you share these interests, feel free to reach out and connect!",
    },
    zh: {
      heading: "歡迎來到我的網站",
      paragraph1:
        "嗨！我是汪煒杰，目前就讀國立台灣大學電機工程學系大四。我修習了網頁程式設計課程，並完成了許多專案，這些經驗大幅提升了我的網頁開發能力。關於我的專案詳情，請參閱",
      projectsLink: "專案",
      paragraph1End: "頁面。",
      paragraph2:
        "我也在EDA實驗室做專題，透過實際的project來提升自己的專業能力。我已經確定進入國立台灣大學電子工程學研究所（NTU GIEE - Graduate Institute of Electronics Engineering）EDA組，將於2026年9月開始正式就讀。",
      paragraph3:
        "除了課業之外，我最大的興趣就是棒球和看電影，也喜歡各種運動，而且我很愛出去玩。你可以到",
      photosLink: "照片",
      paragraph3End: "頁面看看我的出遊照片。如果你也喜歡棒球或電影，歡迎一起交流！",
    },
  };

  const t = content[lang];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          {t.heading}
        </h2>
        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
          <p>
            {t.paragraph1}{" "}
            <Link
              href="/projects"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              {t.projectsLink}
            </Link>{" "}
            {t.paragraph1End}
          </p>
          <p>{t.paragraph2}</p>
          <p>
            {t.paragraph3}{" "}
            <Link
              href="/photos"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              {t.photosLink}
            </Link>{" "}
            {t.paragraph3End}
          </p>
        </div>
      </div>
    </section>
  );
}

