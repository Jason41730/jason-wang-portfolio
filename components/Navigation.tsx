"use client";

import Link from "next/link";
import { useState } from "react";

interface NavigationProps {
  currentLang: "en" | "zh";
  onLangChange: (lang: "en" | "zh") => void;
}

export default function Navigation({ currentLang, onLangChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      interests: "Interests",
      skills: "Technologies",
      photos: "Photos",
      contact: "Contact",
      siteName: "Jason",
    },
    zh: {
      home: "首頁",
      about: "關於",
      projects: "專案",
      interests: "興趣",
      skills: "技術",
      photos: "照片",
      contact: "聯絡",
      siteName: "Jason",
    },
  };

  const t = navItems[currentLang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-semibold">
            {t.siteName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.home}
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.about}
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.projects}
            </Link>
            <Link
              href="/interests"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.interests}
            </Link>
            <Link
              href="/skills"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.skills}
            </Link>
            <Link
              href="/photos"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.photos}
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t.contact}
            </Link>
            {/* Language Toggle */}
            <button
              onClick={() => onLangChange(currentLang === "en" ? "zh" : "en")}
              className="text-white hover:text-gray-300 transition-colors px-2 py-1 border border-white/30 rounded ml-2"
            >
              {currentLang === "en" ? "中文" : "EN"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.about}
              </Link>
              <Link
                href="/projects"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.projects}
              </Link>
              <Link
                href="/interests"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.interests}
              </Link>
              <Link
                href="/skills"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.skills}
              </Link>
              <Link
                href="/photos"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.photos}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.contact}
              </Link>
              <button
                onClick={() => {
                  onLangChange(currentLang === "en" ? "zh" : "en");
                  setIsMobileMenuOpen(false);
                }}
                className="text-white hover:text-gray-300 transition-colors px-2 py-1 border border-white/30 rounded w-fit"
              >
                {currentLang === "en" ? "中文" : "EN"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

