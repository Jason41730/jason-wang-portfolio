"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  createdAt: string;
}

export default function Photos() {
  const { lang } = useLanguage();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const content = {
    en: {
      heading: "Photos",
      description: "A collection of my personal life photos.",
      loading: "Loading photos...",
      noPhotos: "No photos yet. Check back soon!",
      loadError: "Unable to load photos right now. Please try again later.",
    },
    zh: {
      heading: "照片",
      description: "我的個人生活照。",
      loading: "載入照片中...",
      noPhotos: "還沒有照片。敬請期待！",
      loadError: "目前無法載入照片，請稍後再試。",
    },
  };

  const t = content[lang];

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPhotos() {
      try {
        setLoading(true);
        setLoadError("");
        const response = await fetch("/api/photos", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }

        const data = (await response.json()) as { photos?: Photo[] };
        setPhotos(Array.isArray(data.photos) ? data.photos : []);
      } catch {
        if (controller.signal.aborted) {
          return;
        }

        setLoadError(t.loadError);
        setPhotos([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => controller.abort();
  }, [t.loadError]);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.heading}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.description}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t.loading}</p>
            </div>
          ) : loadError ? (
            <div className="text-center py-12">
              <p className="text-red-600">{loadError}</p>
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t.noPhotos}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group bg-gray-100"
                  onClick={() => openModal(photo)}
                >
                  <Image
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Modal for full-size image */}
          {selectedPhoto && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div
                className="relative max-w-7xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity z-10"
                  aria-label="Close"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative w-full h-full max-h-[90vh]">
                  <Image
                    src={selectedPhoto.url}
                    alt={`Photo ${selectedPhoto.id}`}
                    width={selectedPhoto.width || 1600}
                    height={selectedPhoto.height || 1000}
                    className="object-contain max-h-[90vh] w-auto max-w-full mx-auto"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
