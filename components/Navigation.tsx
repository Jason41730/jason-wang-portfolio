"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavigationProps {
  currentLang: "en" | "zh";
  onLangChange: (lang: "en" | "zh") => void;
}

export default function Navigation({ currentLang, onLangChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      interests: "Interests",
      skills: "Skills",
      photos: "Photos",
      contact: "Contact",
      siteName: "Jason",
    },
    zh: {
      home: "首頁",
      about: "關於",
      projects: "專案",
      interests: "興趣",
      skills: "技能",
      photos: "照片",
      contact: "聯絡",
      siteName: "Jason",
    },
  };

  const t = navItems[currentLang];
  const links = [
    { href: "/", label: t.home, exact: true },
    { href: "/about", label: t.about },
    { href: "/projects", label: t.projects },
    { href: "/interests", label: t.interests },
    { href: "/skills", label: t.skills },
    { href: "/photos", label: t.photos },
    { href: "/contact", label: t.contact },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-gray-950/85 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white transition-colors hover:text-cyan-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.siteName}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href, item.exact)
                    ? "bg-white/10 text-cyan-100"
                    : "text-white/85 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => onLangChange(currentLang === "en" ? "zh" : "en")}
              className="ml-3 border border-white/25 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-200 hover:text-cyan-100"
              aria-label={currentLang === "en" ? "Switch to Chinese" : "Switch to English"}
            >
              {currentLang === "en" ? "ZH" : "EN"}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-3 text-sm font-medium transition-colors ${
                    isActive(item.href, item.exact)
                      ? "bg-white/10 text-cyan-100"
                      : "text-white/85 hover:bg-white/5 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  onLangChange(currentLang === "en" ? "zh" : "en");
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-fit border border-white/25 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-200 hover:text-cyan-100"
                aria-label={currentLang === "en" ? "Switch to Chinese" : "Switch to English"}
              >
                {currentLang === "en" ? "ZH" : "EN"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
