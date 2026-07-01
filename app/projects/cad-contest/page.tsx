"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import Image from "next/image";

export default function CADContestProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "2025 CAD Contest Problem B",
      subtitle: "Power and Timing Optimization Using Multibit Flip-Flop",
      award: "2025 Excellent Award (優等) - Domestic Competition",
      group: "Group ID: cadb1050",
      description:
        "I participated in the 2025 CAD Contest Problem B competition and achieved Excellent Award (優等) in the domestic competition. This project focused on power and timing optimization using multibit flip-flops.",
      caseStudyTitle: "Case Study Snapshot",
      caseStudyItems: [
        {
          label: "Problem",
          text: "Reduce the weighted cost of power, timing, and area while respecting placement legality constraints.",
        },
        {
          label: "Approach",
          text: "Built a C++ flow with DEF/LEF parsing, flip-flop management, legalization, and Verilog/DEF export.",
        },
        {
          label: "Outcome",
          text: "Achieved 2025 Excellent Award, Beta test rank 2, and final STA reports with setup/hold WNS at 0.",
        },
      ],
      metrics: [
        { label: "Award", value: "Excellent", detail: "2025 Domestic Competition" },
        { label: "Beta Test", value: "Rank 2", detail: "Score + runtime comparison" },
        { label: "Timing", value: "WNS 0", detail: "Setup and hold after final STA" },
        { label: "Core", value: "C++", detail: "DEF / LEF / Verilog flow" },
      ],
      evidenceTitle: "Engineering Evidence",
      evidenceList: [
        "Custom parsers for LEF, DEF, Verilog, SDC, and weight files",
        "Legalizer and flip-flop management modules for overlap resolution",
        "Generated .def, .v, and .list outputs through the final executable",
        "STA/QoR reports used to verify timing closure across corners",
      ],
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
      awardLink: "2025 Official Results",
      awardLinkText: "View 2025 Official Competition Results",
      certificateTitle: "Award Certificate",
      certificateDescription:
        "Ministry of Education certificate for the 2025 Integrated Circuits Computer Aided Design Contest Award.",
      artifactTitle: "Implementation Artifact",
      artifactDescription:
        "Visualization from the 2025ntubeer project showing the grid-based placement view used to inspect DEF component distribution and debug legalization behavior.",
      researchInfo: "Research Information",
      researchTopic: "Research Topic",
      advisor: "Advisor",
      advisorName: "Prof. Iris Hui-Ru Jiang (江蕙如教授)",
      abstract: "Abstract",
      abstractContent:
        "This research focuses on 2025 CAD Contest Problem B, which aims to reduce the weighted sum of power, timing, and area through banking and debanking of single-bit flip-flops and multi-bit flip-flops (each test case has different coefficients as weights for each parameter). This belongs to optimization problems in EDA.",
      researchProcess: "Research Process",
      researchProcessContent: [
        "At the beginning of the semester when I joined Prof. Hui-Ru Jiang's lab, I first read multiple research papers related to floorplanning to establish foundational knowledge and accumulate more algorithms.",
        "After taking the Introduction to EDA course in the same semester, I further explored and began challenging 2025 CAD Contest Problem B, focusing my research direction on this topic.",
        "During the research process, I not only studied multiple reference papers provided by CAD Contest officials to understand the direction the competition hoped we would pursue, but also deeply studied legalization papers provided by the professor to maintain good timing while handling overlap issues.",
      ],
      implementation: "Implementation Process",
      implementationContent: [
        "Initially, we developed our understanding of the problem and familiarized ourselves with GitHub collaboration and established the overall code architecture.",
        "Parser development was our first step. Without prior knowledge of various file formats in the test data, we completed all parsers after reading extensive materials and guidance from the professor.",
        "After discussion with the professor, we decided to write a program that could visualize the placement of components in DEF files. This visualization helped us understand the problem faster and was very helpful for checking algorithm functionality and effectiveness.",
        "We then began working on the legalization problem. The algorithm in the reference paper provided by the professor was excellent, but since the paper assumed both flip-flops and logic gates could be moved, while the competition rules specified that logic gates cannot be moved, certain steps in the algorithm were not applicable to our problem.",
        "After several days of thinking and discussion, we modified the paper's algorithm. In the final step, we used BFS to directly search for empty areas around all flip-flops that still had overlaps, and the results were excellent, successfully combining the paper's methods with the problem's requirements.",
        "We then began designing and testing banking and debanking algorithms. We managed data structures extensively to facilitate subsequent management and ensure that operations on flip-flops would not cause too many problems. We also wrote many files to handle banking and debanking decisions.",
      ],
      visualizationExample: "Visualization Example",
      visualizationDescription: {
        en: "This is an example visualization of the official testcase1. This is the result drawn by the program mentioned in the research process that can visualize the placement of components in DEF files (the figure below shows the original placement of testcase1). It quickly helped us understand the current placement situation and accelerated the verification of algorithm results.",
        zh: "這是官方 testcase1 的視覺化範例。這是在專題研究中提到可以畫出測資 DEF 檔擺放的程式所繪出之成果（下圖舉例 testcase1 之原始擺放）。可以快速幫助我們了解目前的擺放情形，加快演算法成果的檢驗。",
      },
      visualizationNote: {
        en: "By the way, testcase1's placement is quite unusual - the competition organizers were really testing our code! No one would actually design a placement like this in real-world scenarios.",
        zh: "順帶一提，testcase1 的擺放方式蠻奇特的，大會真的在考驗我們的程式碼，不然真正不會有人設計的擺放方式長這樣。",
      },
      achievements: "Achievements & Learning",
      achievementsContent: [
        "Achieved ranking 2 in the Beta test stage, demonstrating the feasibility and effectiveness of the research.",
        "After the Beta test, we continued to refine methods and programs, optimizing for efficiency and correctness, and successfully submitted the final submission.",
        "A particularly memorable experience: After the Beta test, although we ranked second, testcase1 had legality issues. We immediately began finding the violation parts and fixed the code within approximately two days. During this period, I suddenly realized that I truly understood the problem and gained a great sense of achievement. The final submission's testcase1 results were also correct.",
        "Through this research journey, I not only developed problem modeling and programming abilities but also gained valuable experience in literature reading, algorithm optimization, and teamwork.",
        "More importantly, I learned how to build a large-scale project and program architecture from scratch, and independently learned many things I didn't know before, such as GitHub development collaboration and becoming more familiar with Linux systems.",
        "I also gradually became familiar with and learned to understand many industry-common file formats, such as DEF, LEF, and parts of Verilog files, which have become important foundations for my future research and learning.",
      ],
    },
    zh: {
      title: "2025 CAD Contest Problem B",
      subtitle: "使用多位元正反器進行功耗與時序最佳化",
      award: "2025 國內賽優等獎",
      group: "組別：cadb1050",
      description:
        "我參與了 2025 CAD Contest Problem B 競賽，在國內賽中獲得優等獎。此專案專注於使用多位元正反器進行功耗與時序最佳化。",
      caseStudyTitle: "Case Study 摘要",
      caseStudyItems: [
        {
          label: "問題",
          text: "在滿足 placement legality 的限制下，降低 power、timing 與 area 的加權成本。",
        },
        {
          label: "方法",
          text: "以 C++ 建立包含 DEF/LEF parser、flip-flop 管理、legalization、Verilog/DEF export 的流程。",
        },
        {
          label: "成果",
          text: "獲得 2025 國內賽優等獎、Beta test ranking 2，final STA 報告中 setup/hold WNS 皆為 0。",
        },
      ],
      metrics: [
        { label: "獎項", value: "優等獎", detail: "2025 國內賽" },
        { label: "Beta Test", value: "Rank 2", detail: "分數與 runtime 比較" },
        { label: "Timing", value: "WNS 0", detail: "Final STA setup/hold" },
        { label: "核心", value: "C++", detail: "DEF / LEF / Verilog flow" },
      ],
      evidenceTitle: "工程證據",
      evidenceList: [
        "自行撰寫 LEF、DEF、Verilog、SDC、weight file parser",
        "以 Legalizer 與 flip-flop 管理模組處理 overlap resolution",
        "透過 final executable 產生 .def、.v、.list 輸出",
        "使用 STA/QoR reports 驗證多 corner timing closure",
      ],
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
      awardLink: "2025 官方結果",
      awardLinkText: "查看 2025 官方競賽結果",
      certificateTitle: "獎狀",
      certificateDescription:
        "2025 積體電路電腦輔助設計（CAD）軟體製作競賽教育部獎狀。",
      artifactTitle: "實作佐證",
      artifactDescription:
        "這張圖來自 2025ntubeer 專案，用 grid-based placement view 檢查 DEF components 分布，並輔助 debug legalization 行為。",
      researchInfo: "研究資訊",
      researchTopic: "研究題目",
      advisor: "指導老師",
      advisorName: "江蕙如教授",
      abstract: "摘要",
      abstractContent:
        "本專題研究聚焦於 2025 CAD Contest Problem B，主題為透過 single-bit flip-flop 與 multi-bit flip-flop 的 banking 與 debanking 來降低 power, timing 及 area 加權後之和（每個測資會有不同係數當作各參數之加權），屬於 EDA 中最佳化的問題。",
      researchProcess: "研究歷程",
      researchProcessContent: [
        "在學期初剛進入江蕙如教授的實驗室時，我先閱讀了多篇與 floorplanning 相關的研究論文，建立基礎認識及累積更多的演算法。",
        "隨後因為同一學期修習了 EDA 導論課程，進一步接觸並著手挑戰 2025 CAD Contest 的 B 題，並將專題方向聚焦於此。",
        "專題過程中，我不僅研讀了多篇 CAD Contest 官方提供的 reference 論文，掌握大會希望我們努力的方向；亦深入學習了老師提供的 legalization 論文，在處理 overlap 問題時同時維持 timing 在不錯的狀態。",
      ],
      implementation: "實作過程",
      implementationContent: [
        "在實作上，起初我們先培養對問題的理解，並熟悉 GitHub 協作及我們對於 code 的整個大架構建立。",
        "另外 parser 也是我們的第一步，對於測資裡各種檔案沒有概念的我們在讀了許多資料和老師的指導下完成了所有 parser。",
        "接著我們在和老師討論後決定先寫一個可以畫出 DEF 檔 components 擺放情形的程式，畫出來後也更快的讓我們理解題目，對後續演算法功能及效果的檢查也非常有幫助。",
        "再來我們開始處理 legalization 的問題。老師給我們參考的 paper 有著非常棒的演算法，不過由於論文中假設無論是 flipflop 及 logic gates 都可以被移動，但比賽的題目是規定不能動 logic gates，因此演算法中的某些流程在我們的問題中無法適用。",
        "經過幾天的思考及討論後我們修改了論文的演算法，在演算法的最後一步利用 BFS 直接對所有還有 overlap 的 flipflop 往周圍尋找可以放的空白區域，也順利的在成果跑出來後效果非常好，同時兼融了論文的方法及問題的要求。",
        "緊接著我們開始了 banking 與 debanking 的演算法設計與測試，我們對資料結構做了不少管理，方便後續管理及對 flipflop 操作後不會出太多問題，我們也寫了蠻多檔案來處理 banking 及 debanking 的判斷。",
      ],
      visualizationExample: "視覺化範例",
      visualizationDescription: {
        en: "This is an example visualization of the official testcase1. This is the result drawn by the program mentioned in the research process that can visualize the placement of components in DEF files (the figure below shows the original placement of testcase1). It quickly helped us understand the current placement situation and accelerated the verification of algorithm results.",
        zh: "這是官方 testcase1 的視覺化範例。這是在專題研究中提到可以畫出測資 DEF 檔擺放的程式所繪出之成果（下圖舉例 testcase1 之原始擺放）。可以快速幫助我們了解目前的擺放情形，加快演算法成果的檢驗。",
      },
      visualizationNote: {
        en: "By the way, testcase1's placement is quite unusual - the competition organizers were really testing our code! No one would actually design a placement like this in real-world scenarios.",
        zh: "順帶一提，testcase1 的擺放方式蠻奇特的，大會真的在考驗我們的程式碼，不然真正不會有人設計的擺放方式長這樣。",
      },
      achievements: "成果與學習",
      achievementsContent: [
        "在 beta test 階段我們取得排行榜第二名的成績，展現了專題的可行性與成效。",
        "在 beta test 之後，我們也持續精進方法與程式，針對效率與正確性進行優化，最終也順利繳交了 final submission。",
        "另外在此專題中我認為有一段經歷最特別，在 beta test 結束後我們雖然是第二名，不過我們的 testcase1 合法性出了問題，我們立刻開始找 violation 的部分，並在大約兩天內就修好了這部分的程式碼，在這期間我突然發覺自己已經對題目真的了解了，也從中得到非常多成就感。最後 final submission 的 testcase1 結果也是沒有問題的。",
        "透過這段研究歷程，我不僅培養了問題建模與程式設計能力，也在文獻閱讀、演算法優化與團隊合作上獲得寶貴經驗。",
        "此外我認為更重要的是我學會了怎麼樣從 0 開始建構一個大型 project 及程式架構，也自己學習了很多原本不會的東西，例如 GitHub 的開發協作及更熟悉 Linux 系統。",
        "同時，我也逐步熟悉並學會理解許多業界常見的檔案格式，例如 DEF、LEF，以及部分 Verilog 檔案，這些都成為我未來進一步研究與學習的重要基礎。",
      ],
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
          <div className="mb-8 border-l-4 border-cyan-600 bg-gray-50 p-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {lang === "en" ? "2025 Research / Competition" : "2025 研究 / 競賽"}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              {t.title}
            </h1>
            <p className="text-xl text-gray-700 mb-1">{t.subtitle}</p>
            <p className="text-lg font-semibold text-blue-600 mb-1">
              {t.award}
            </p>
            <p className="text-sm text-gray-600">{t.group}</p>
          </div>

          {/* Case Study Snapshot */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.caseStudyTitle}
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {t.caseStudyItems.map((item) => (
                <div key={item.label} className="border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    {item.label}
                  </p>
                  <p className="mt-3 leading-7 text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.metrics.map((metric) => (
              <div key={metric.label} className="border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-gray-950">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-600">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Award Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/cad-award.png"
                alt={t.award}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Engineering Evidence */}
          <div className="mb-8 border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.evidenceTitle}
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {t.evidenceList.map((item) => (
                <div key={item} className="border-l-4 border-cyan-500 bg-gray-50 px-4 py-3 text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Artifact */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {t.artifactTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.artifactDescription}
            </p>
            <div className="overflow-hidden border border-gray-200 bg-gray-50 shadow-sm">
              <div className="relative w-full aspect-[1400/1000]">
                <Image
                  src="/images/cad-def-grid-visualization.png"
                  alt={t.artifactTitle}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>

          {/* Award Certificate */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {t.certificateTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {t.certificateDescription}
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-50 border border-gray-200">
              <div className="relative w-full aspect-[3500/2521]">
                <Image
                  src="/images/cadcerti.JPG"
                  alt={t.certificateTitle}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>

          {/* Research Information */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.researchInfo}
            </h2>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">{t.researchTopic}:</span>{" "}
                {t.title}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">{t.advisor}:</span>{" "}
                {t.advisorName}
              </p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.abstract}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.abstractContent}
            </p>
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

          {/* Research Process */}
          <div className="mb-8 p-6 bg-purple-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.researchProcess}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              {t.researchProcessContent.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Implementation Process */}
          <div className="mb-8 p-6 bg-green-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.implementation}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              {t.implementationContent.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Visualization Example */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.visualizationExample}
            </h2>
            <div className="mb-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                {t.visualizationDescription[lang]}
              </p>
              <p className="text-gray-600 italic leading-relaxed">
                {t.visualizationNote[lang]}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-64 md:h-96">
                <Image
                  src="/images/cad-example.png"
                  alt={lang === "en" ? "Testcase1 Visualization Example" : "Testcase1 視覺化範例"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Achievements & Learning */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.achievements}
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              {t.achievementsContent.map((item, index) => (
                <li key={index} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.skills}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              {t.skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Award Link */}
          <div className="p-6 bg-white border-2 border-gray-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.awardLink}
            </h2>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">
                {t.awardLinkText}
              </p>
              <a
                href="https://www.iccad-contest.org/tw/05_results.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.iccad-contest.org/tw/05_results.html
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
