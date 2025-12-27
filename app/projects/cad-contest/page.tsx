"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

export default function CADContestProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "CAD Contest Problem B",
      subtitle: "Power and Timing Optimization Using Multibit Flip-Flop",
      award: "Excellent Award (優等) - Domestic Competition",
      group: "Group ID: cadb1050",
      description:
        "I participated in the CAD Contest Problem B competition and achieved Excellent Award (優等) in the domestic competition. This project focused on power and timing optimization using multibit flip-flops.",
      details: "Project Details",
      detailsList: [
        "Applied EDA floorplanning and algorithm knowledge to solve flipflop placement problems",
        "Optimized power, timing, and area through flipflop banking and debanking based on test parameters",
        "Ensured design compliance with no overlap rules through legalization",
        "Achieved Beta test ranking 2 (based on score and runtime comparison)",
        "Successfully fixed violations and submitted final submission within deadline",
      ],
      skills: "Skills and Abilities Learned",
      skillsList: [
        "Project Construction: Built large-scale projects from scratch, learned GitHub collaboration and Linux system usage, and mastered DEF, LEF, and Verilog file formats",
        "Team Collaboration: Effectively communicated with team members, took on leadership roles to accelerate project progress, and made collaborative decisions",
        "Project Planning: Planned 4-month workflows, systematically advanced projects, and continuously adjusted processes, greatly enhancing research and independent thinking abilities",
      ],
      backToProjects: "Back to Projects",
    },
    zh: {
      title: "CAD Contest Problem B",
      subtitle: "使用多位元正反器進行功耗與時序最佳化",
      award: "國內賽優等獎",
      group: "組別：cadb1050",
      description:
        "我參與了 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。此專案專注於使用多位元正反器進行功耗與時序最佳化。",
      details: "專案細節",
      detailsList: [
        "運用 EDA floorplanning 與演算法知識解決 flipflop 擺放問題",
        "依據測資給的參數透過 flipflop 的 banking 及 debanking 優化 power, timing 及 area",
        "透過 legalization 確保設計符合沒有 overlap 的規則",
        "獲得 Beta test ranking 2（經由分數及 runtime 比對）",
        "成功在期限內修正 violation 並提交 final submission",
      ],
      skills: "學到的研究方法與能力",
      skillsList: [
        "專案建構能力：從零開始建構大型專案，學會 GitHub 協作及更會使用 Linux 系統，也在沒有接觸過的情況下學習怎麼看 DEF, LEF 及 Verilog 檔案",
        "團隊協作：與組員有效溝通，擔任領導者的角色加速專案進度，並與組員共同決策專案方向",
        "專案規劃：規劃長達4個月的工作流程，系統性推進專案，並在過程中不斷調整我們的流程及專案方向，大大的增強了我們的研究及獨立思考能力",
      ],
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
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-xl text-gray-700 mb-1">{t.subtitle}</p>
            <p className="text-lg font-semibold text-blue-600 mb-1">
              {t.award}
            </p>
            <p className="text-sm text-gray-600">{t.group}</p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Details */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.details}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {t.detailsList.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.skills}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {t.skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


