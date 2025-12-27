"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

interface Interest {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  color: string;
  hasLink?: boolean;
  linkText?: string;
  linkTextEn?: string;
}

const interests: Interest[] = [
  {
    name: "棒球",
    nameEn: "Baseball",
    description: "熱愛棒球運動，參與系棒隊，具備良好的溝通能力和團隊合作精神。關注職棒賽事，享受棒球帶來的熱血與激情。",
    descriptionEn: "I love baseball and participate in the department baseball team, which has helped me develop strong communication skills and teamwork. I follow professional baseball games and enjoy the passion and excitement that baseball brings.",
    icon: "⚾",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "電影",
    nameEn: "Movies",
    description: "喜歡看電影，享受不同類型電影帶來的視覺與情感體驗，從中獲得靈感與啟發。",
    descriptionEn: "I enjoy watching movies and appreciate the visual and emotional experiences that different genres bring, gaining inspiration and insights from them.",
    icon: "🎬",
    color: "bg-purple-100 text-purple-800",
  },
  {
    name: "運動",
    nameEn: "Sports",
    description: "喜歡各種運動，保持健康的生活方式，享受運動帶來的活力與挑戰。",
    descriptionEn: "I enjoy various sports and maintain a healthy lifestyle, embracing the energy and challenges that sports bring.",
    icon: "🏃",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "出遊旅行",
    nameEn: "Travel",
    description: "很愛出去玩，探索不同的地方，體驗不同的文化與風景。",
    descriptionEn: "I love to travel and explore different places, experiencing diverse cultures and landscapes.",
    icon: "✈️",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "志工服務",
    nameEn: "Volunteer Service",
    description: "加入慈幼山友社服務隊，寒暑假到花蓮山上陪伴小朋友學習，透過服務他人獲得成就感。",
    descriptionEn: "I joined the volunteer service team and spend summers and winters in Hualien mountains accompanying children in their learning, gaining fulfillment through helping others.",
    icon: "❤️",
    color: "bg-red-100 text-red-800",
  },
  {
    name: "網頁開發",
    nameEn: "Web Development",
    description: "進行全端開發，從前端到後端，享受創造美觀且實用的網頁應用程式的完整過程。詳情見",
    descriptionEn: "I do full-stack development, from frontend to backend, enjoying the complete process of creating beautiful and practical web applications. For details, see",
    icon: "💻",
    color: "bg-indigo-100 text-indigo-800",
    hasLink: true,
    linkText: "專案",
    linkTextEn: "Projects",
  },
  {
    name: "程式設計",
    nameEn: "Programming",
    description: "探索各種程式語言與技術，解決問題並創造創新的解決方案。",
    descriptionEn: "I explore various programming languages and technologies, solving problems and creating innovative solutions.",
    icon: "⌨️",
    color: "bg-teal-100 text-teal-800",
  },
  {
    name: "電子工程",
    nameEn: "Electronics Engineering",
    description: "對硬體設計與嵌入式系統有濃厚興趣，結合軟硬體知識解決實際問題。",
    descriptionEn: "I have a strong interest in hardware design and embedded systems, combining software and hardware knowledge to solve practical problems.",
    icon: "🔌",
    color: "bg-orange-100 text-orange-800",
  },
];

export default function Interests() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "Interests",
      description: "Things I'm passionate about and enjoy doing in my free time.",
      photosLink: "Check out my travel photos",
      photosLinkText: "here",
    },
    zh: {
      heading: "興趣",
      description: "我熱衷的事物以及閒暇時喜歡從事的活動。",
      photosLink: "查看我的出遊照片",
      photosLinkText: "這裡",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            {t.heading}
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            {t.description}
          </p>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-200 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{interest.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {lang === "en" ? interest.nameEn : interest.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {lang === "en"
                        ? interest.descriptionEn
                        : interest.description}
                      {interest.hasLink && (
                        <>
                          {" "}
                          <Link
                            href="/projects"
                            className="text-blue-600 hover:text-blue-800 underline font-medium"
                          >
                            {lang === "en"
                              ? interest.linkTextEn
                              : interest.linkText}
                          </Link>
                          {lang === "zh" ? "。" : "."}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Photos Link */}
          <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              {t.photosLink}{" "}
              <Link
                href="/photos"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {t.photosLinkText}
              </Link>
              {lang === "zh" ? "！" : "!"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
