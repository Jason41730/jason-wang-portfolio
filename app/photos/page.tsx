"use client";

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
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const content = {
    en: {
      heading: "Photos",
      description: "A collection of my personal life photos.",
      loading: "Loading photos...",
      noPhotos: "No photos yet. Check back soon!",
    },
    zh: {
      heading: "照片",
      description: "我的個人生活照。",
      loading: "載入照片中...",
      noPhotos: "還沒有照片。敬請期待！",
    },
  };

  const t = content[lang];

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch("/api/photos");
      const data = await response.json();
      if (data.photos) {
        console.log("Fetched photos:", data.photos.length, "photos");
        if (data.photos.length > 0) {
          console.log("First photo data:", data.photos[0]);
          console.log("First photo URL:", data.photos[0].url);
          // Test if URL is accessible
          fetch(data.photos[0].url, { method: 'HEAD' })
            .then(res => {
              console.log("Image URL accessibility test:", res.status, res.ok ? "OK" : "FAILED");
            })
            .catch(err => {
              console.error("Image URL test error:", err);
            });
        }
        setPhotos(data.photos);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

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
          ) : photos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">{t.noPhotos}</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => openModal(photo)}
                  style={{ backgroundColor: '#f3f4f6' }}
                >
                  <img
                    src={photo.url}
                    alt={`Photo ${photo.id}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onLoad={(e) => {
                      console.log("Image loaded successfully:", photo.url, e.target);
                    }}
                    onError={(e) => {
                      console.error("Image load error for URL:", photo.url);
                      console.error("Error event:", e);
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                    }}
                    loading="lazy"
                  />
                  {/* Hover overlay - transparent by default, darkens on hover */}
                  <div 
                    className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
                  />
                </div>
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
                  <img
                    src={selectedPhoto.url}
                    alt={`Photo ${selectedPhoto.id}`}
                    className="object-contain max-h-[90vh] w-auto mx-auto"
                    style={{ maxWidth: "100%" }}
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
