"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";

export default function IBMQuantumDreamProject() {
  const { lang } = useLanguage();

  const content = {
    en: {
      backToProjects: "Back to Projects",
      eyebrow: "Youth Billion Overseas Dream Fund | Accepted July 1, 2026",
      title: "IBM Quantum Dream: NYC Research Program",
      subtitle:
        "A public learning and research-writing project connecting quantum computing, EDA, and logic synthesis.",
      summary:
        "This program is part of my transition from NTUEE into NTU GIEE and Prof. Jie-Hong Jiang's ALCom Lab. The core goal is to turn an overseas quantum-computing experience into public technical writing, reusable examples, and a longer-term knowledge base for students interested in quantum systems and EDA.",
      metrics: [
        { label: "Program", value: "I-9-10", detail: "IBM Quantum Dream" },
        { label: "Status", value: "Selected", detail: "Confirmed on 2026/07/01" },
        { label: "Main Output", value: "Knowledge Base", detail: "Quantum + EDA notes" },
        { label: "Code Output", value: "Open Source", detail: "Quantum optimization demo" },
      ],
      roadmapTitle: "Publication Roadmap",
      roadmap: [
        {
          phase: "Before the program",
          title: "Preparation and application sharing",
          text: "Publish three guide-style posts on Dcard and this portfolio, covering application strategy, technical preparation, and how to use Youth Billion resources.",
        },
        {
          phase: "During the program",
          title: "On-site technical observation",
          text: "Write five professional observation reports and daily notes about quantum hardware constraints, software tooling, research culture, and industry applications.",
        },
        {
          phase: "Within one year",
          title: "Quantum Industry Observation knowledge base",
          text: "Organize the material into a public knowledge base, hold an online sharing session, and release one GitHub example for quantum optimization.",
        },
      ],
      bridgeTitle: "Why It Belongs Here",
      bridgeText:
        "The project sits at the same intersection as my portfolio: practical software systems, EDA research, and public documentation. It also connects naturally to my upcoming logic synthesis work, where algorithmic modeling, optimization, and circuit representation are central.",
      bridgeItems: [
        "Use portfolio infrastructure to publish technical notes and program reports.",
        "Translate quantum-computing observations into EDA and logic-synthesis questions.",
        "Build an open-source example that makes the learning reusable beyond the trip.",
      ],
      researchTitle: "Research Direction",
      researchText:
        "I will begin graduate study at NTU GIEE in September 2026 and join the ALCom Lab Logic Synthesis group. This program gives me an early lens into how quantum hardware constraints, compilation, and optimization problems are handled in real research and industry settings.",
      labLink: "ALCom Lab official site",
    },
    zh: {
      backToProjects: "返回專案列表",
      eyebrow: "青年百億海外圓夢基金計畫 | 2026 年 7 月 1 日錄取",
      title: "I-9-10 IBM 量子夢：紐約研習營",
      subtitle:
        "串接量子運算、EDA 與邏輯合成的公開學習與研究寫作專案。",
      summary:
        "這個計畫也承接我從台大電機進入台大電子所、加入江介宏教授 ALCom Lab 的下一步。我希望不只是完成一次海外研習，而是把量子運算現場觀察整理成公開技術文章、可重用範例，以及給未來學生參考的長期知識庫。",
      metrics: [
        { label: "計畫", value: "I-9-10", detail: "IBM 量子夢" },
        { label: "狀態", value: "已錄取", detail: "2026/07/01 確認" },
        { label: "主要成果", value: "知識庫", detail: "量子 + EDA 筆記" },
        { label: "程式成果", value: "開源", detail: "量子最佳化範例" },
      ],
      roadmapTitle: "公開產出規劃",
      roadmap: [
        {
          phase: "計畫前",
          title: "申請與準備經驗分享",
          text: "在 Dcard 與個人網站發布三篇圖文文章，整理青年百億資源、申請策略與技術準備方式。",
        },
        {
          phase: "計畫中",
          title: "現場技術觀察",
          text: "撰寫五篇專業觀察報告，並每日記錄量子硬體限制、軟體工具、研究文化與產業應用觀察。",
        },
        {
          phase: "一年內",
          title: "《量子產業觀察》知識庫",
          text: "把研習內容整理成公開知識庫，舉辦線上分享，並在 GitHub 開源一個量子最佳化範例。",
        },
      ],
      bridgeTitle: "為什麼放在 Projects",
      bridgeText:
        "這不是單純的活動紀錄，而是和這份作品集同一條主線：實作型軟體系統、EDA 研究與公開文件化。它也自然銜接我接下來的邏輯合成研究，因為演算法建模、最佳化與電路表示都會是核心能力。",
      bridgeItems: [
        "用個人網站作為技術筆記與研習報告的公開發布平台。",
        "把量子運算觀察轉譯成 EDA 與邏輯合成可以思考的問題。",
        "建立開源範例，讓這趟研習的學習成果可以被重複使用。",
      ],
      researchTitle: "研究方向銜接",
      researchText:
        "我將於 2026 年 9 月開始就讀台大電子所，加入 ALCom Lab 邏輯合成組。這個計畫能讓我更早觀察量子硬體限制、編譯與最佳化問題在真實研究與產業場域中的處理方式。",
      labLink: "ALCom Lab 官方網站",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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

          <div className="overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative min-h-[320px] border-b border-gray-200 bg-gray-100">
              <Image
                src="/images/about1.jpg"
                alt={lang === "en" ? "Personal travel portrait" : "個人旅行照片"}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gray-950/35" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  {t.eyebrow}
                </p>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-5xl">
                  {t.title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg font-medium leading-8 text-gray-100">
                  {t.subtitle}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="max-w-4xl text-lg leading-8 text-gray-700">
                {t.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {t.metrics.map((metric) => (
                  <div key={metric.label} className="border border-gray-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-gray-950">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-gray-950">
                  {t.roadmapTitle}
                </h2>
                <div className="mt-5 grid gap-4">
                  {t.roadmap.map((item) => (
                    <div
                      key={item.phase}
                      className="border-l-4 border-cyan-600 bg-slate-50 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                        {item.phase}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-gray-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-gray-700">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <h2 className="text-2xl font-bold text-gray-950">
                    {t.bridgeTitle}
                  </h2>
                  <p className="mt-3 leading-8 text-gray-700">
                    {t.bridgeText}
                  </p>
                  <ul className="mt-5 space-y-3 leading-7 text-gray-700">
                    {t.bridgeItems.map((item) => (
                      <li key={item} className="border-l-4 border-amber-500 pl-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-gray-200 bg-gray-950 p-6 text-white">
                  <h2 className="text-2xl font-bold">{t.researchTitle}</h2>
                  <p className="mt-3 leading-8 text-gray-200">
                    {t.researchText}
                  </p>
                  <a
                    href="https://alcom.ee.ntu.edu.tw/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-cyan-200 underline underline-offset-4 transition-colors hover:text-white"
                  >
                    {t.labLink}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
