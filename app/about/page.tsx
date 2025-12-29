"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "About Me",
      paragraph1:
        "Hello! I'm Wei-Jie Wang, currently a senior student in the Department of Electrical Engineering at National Taiwan University.",
      paragraph2:
        "I have taken Web Programming courses and completed numerous projects, which have significantly improved my web development skills. For detailed information about my projects, please visit the",
      paragraph3:
        "I'm also working on research projects in the EDA Lab, enhancing my professional skills through hands-on projects.",
      cadContestMention: "I participated in CAD Contest Problem B and achieved Excellent Award (優等) in the domestic competition. For detailed information, please visit the",
      paragraph4:
        "I have been accepted to the Graduate Institute of Electronics Engineering (GIEE) at National Taiwan University, EDA group, and will officially begin my graduate studies in September 2026.",
      paragraph5:
        "Beyond academics, my greatest interests are baseball and watching movies. I also enjoy various sports and love to travel and explore new places. You can check out my travel photos in the",
      paragraph6:
        "This is my GitHub link, welcome to check it out!",
    },
    zh: {
      heading: "關於我",
      paragraph1:
        "嗨！我是汪煒杰，目前就讀國立台灣大學電機工程學系大四。",
      paragraph2:
        "我修習了網頁程式設計課程，並完成了許多專案，這些經驗大幅提升了我的網頁開發能力。關於我的專案詳情，請參閱",
      paragraph3:
        "我也在EDA實驗室做專題，透過實際的project來提升自己的專業能力。",
      cadContestMention: "我參與了 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。詳細資訊請參閱",
      paragraph4:
        "我已經確定進入國立台灣大學電子工程學研究所（NTU GIEE - Graduate Institute of Electronics Engineering）EDA組，將於2026年9月開始正式就讀。",
      paragraph5:
        "除了課業之外，我最大的興趣就是棒球和看電影，也喜歡各種運動，而且我很愛出去玩。你可以到",
      paragraph6:
        "這是我的GitHub連結，歡迎大家點進來看看！",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Image at the top */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about1.jpg"
                alt="About me"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
            {t.heading}
          </h1>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>{t.paragraph1}</p>
            <p>
              {t.paragraph2}{" "}
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {lang === "en" ? "Projects" : "專案"}
              </a>
              {lang === "zh" ? "頁面。" : " page."}
            </p>
            <p>
              {t.paragraph3} {t.cadContestMention}{" "}
              <a
                href="/projects"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {lang === "en" ? "Projects" : "專案"}
              </a>
              {lang === "zh" ? "頁面。" : " page."}
            </p>
            <p className="font-medium text-gray-900">{t.paragraph4}</p>
            <p>
              {t.paragraph5}{" "}
              <a
                href="/photos"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {lang === "en" ? "Photos" : "照片"}
              </a>
              {lang === "en" ? " page. If you share these interests, feel free to reach out and connect!" : "頁面看看我的出遊照片。如果你也喜歡棒球或電影，歡迎一起交流！"}
            </p>
            <p className="mt-8">
              {t.paragraph6}{" "}
              <a
                href="https://github.com/Jason41730"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                GitHub
              </a>
              {lang === "en" ? ". Feel free to reach out via " : "。歡迎透過 "}
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {lang === "en" ? "contact" : "聯絡"}
              </a>
              {lang === "zh" ? " 與我聯繫。" : "."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
