"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import Link from "next/link";

interface UploadResult {
  url: string;
  publicId: string;
  width: number;
  height: number;
}

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  createdAt: string;
}

export default function PhotosAdmin() {
  const { lang } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResults, setUploadResults] = useState<UploadResult[]>([]);
  const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const content = {
    en: {
      title: "Photos Admin",
      loginTitle: "Admin Login",
      passwordPlaceholder: "Enter admin password",
      loginButton: "Login",
      uploadTitle: "Upload Photos",
      dragDrop: "Drag and drop images here, or click to select",
      selectFiles: "Select Files",
      uploading: "Uploading...",
      uploadSuccess: "Upload successful!",
      backToPhotos: "Back to Photos",
      logout: "Logout",
    },
    zh: {
      title: "照片管理",
      loginTitle: "管理員登入",
      passwordPlaceholder: "輸入管理員密碼",
      loginButton: "登入",
      uploadTitle: "上傳照片",
      dragDrop: "拖放圖片到此處，或點擊選擇",
      selectFiles: "選擇檔案",
      uploading: "上傳中...",
      uploadSuccess: "上傳成功！",
      backToPhotos: "返回照片",
      logout: "登出",
    },
  };

  const t = content[lang];

  // Fetch all photos from Cloudinary
  const fetchAllPhotos = async () => {
    setLoadingPhotos(true);
    try {
      const response = await fetch("/api/photos");
      const data = await response.json();
      if (data.photos) {
        setAllPhotos(data.photos);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoadingPhotos(false);
    }
  };

  // Fetch photos when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchAllPhotos();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError(data.error || "Invalid password");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUploadResults([]);
    // Clear cookie by setting it to expire
    document.cookie =
      "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setError("");
    setUploadProgress(0);

    const results: UploadResult[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("/api/photos/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          results.push(data);
          setUploadProgress(((i + 1) / files.length) * 100);
        } else {
          setError(data.error || `Failed to upload ${file.name}`);
        }
      } catch (error) {
        setError(`Failed to upload ${file.name}`);
      }
    }

    setUploadResults((prev) => [...prev, ...results]);
    setUploading(false);
    setUploadProgress(0);

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Refresh photos list after successful upload
    if (results.length > 0) {
      setTimeout(() => {
        fetchAllPhotos();
      }, 1000); // Wait 1 second for Cloudinary to process
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 md:py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">
              {t.loginTitle}
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.loginButton}
              </button>
            </form>
            <div className="mt-6 text-center">
              <Link
                href="/photos"
                className="text-blue-600 hover:text-blue-800"
              >
                {t.backToPhotos}
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {t.title}
            </h1>
            <div className="flex gap-4">
              <Link
                href="/photos"
                className="text-blue-600 hover:text-blue-800"
              >
                {t.backToPhotos}
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800"
              >
                {t.logout}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t.uploadTitle}
            </h2>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                multiple
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
              <p className="text-gray-600 mb-2">{t.dragDrop}</p>
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.selectFiles}
              </button>
            </div>

            {uploading && (
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{t.uploading}</p>
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}

            {uploadResults.length > 0 && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 font-semibold">
                  {t.uploadSuccess} ({uploadResults.length} {lang === "en" ? "photos" : "張照片"})
                </p>
              </div>
            )}
          </div>

          {/* All Photos from Cloudinary */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {lang === "en" ? "All Photos" : "所有照片"}
              </h2>
              <button
                onClick={fetchAllPhotos}
                disabled={loadingPhotos}
                className="text-blue-600 hover:text-blue-800 disabled:text-gray-400"
              >
                {loadingPhotos 
                  ? (lang === "en" ? "Loading..." : "載入中...")
                  : (lang === "en" ? "Refresh" : "重新整理")
                }
              </button>
            </div>
            {loadingPhotos ? (
              <p className="text-gray-600">{lang === "en" ? "Loading photos..." : "載入照片中..."}</p>
            ) : allPhotos.length === 0 ? (
              <p className="text-gray-600">{lang === "en" ? "No photos yet." : "還沒有照片。"}</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-square rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={photo.url}
                      alt={`Photo ${photo.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

