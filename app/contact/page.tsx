"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const content = {
    en: {
      heading: "Contact",
      description: "Get in touch with me. I'd love to hear from you!",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "your.email@example.com",
      subject: "Subject",
      subjectPlaceholder: "What is this about?",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      submitting: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Failed to send message. Please try again.",
      required: "This field is required",
      invalidEmail: "Please enter a valid email address",
    },
    zh: {
      heading: "聯絡",
      description: "與我聯繫。我很樂意聽到您的消息！",
      name: "姓名",
      namePlaceholder: "您的姓名",
      email: "電子郵件",
      emailPlaceholder: "your.email@example.com",
      subject: "主題",
      subjectPlaceholder: "這是關於什麼？",
      message: "訊息",
      messagePlaceholder: "您的訊息...",
      submit: "發送訊息",
      submitting: "發送中...",
      success: "訊息發送成功！我會盡快回覆您。",
      error: "發送失敗。請再試一次。",
      required: "此欄位為必填",
      invalidEmail: "請輸入有效的電子郵件地址",
    },
  };

  const t = content[lang];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t.success,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Ensure error message is always a string
        const errorMessage = typeof data.error === 'string' 
          ? data.error 
          : data.error?.message || JSON.stringify(data.error) || t.error;
        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t.error,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            {t.heading}
          </h1>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
            {t.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.subjectPlaceholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submitting ? t.submitting : t.submit}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
