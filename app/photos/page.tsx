"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
  format: string;
  createdAt: string;
  titleEn?: string;
  titleZh?: string;
  captionEn?: string;
  captionZh?: string;
  aspectClass?: string;
}

const localPhotos: Photo[] = [];

export default function Photos() {
  const { lang } = useLanguage();
  const [photos, setPhotos] = useState<Photo[]>(localPhotos);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const content = {
    en: {
      heading: "Photos",
      description:
        "A small visual archive of graduation, travel, and everyday moments.",
      loading: "Loading photos...",
      noPhotos: "No photos yet. Check back soon!",
      loadError:
        "Cloud photos could not be loaded right now, so local highlights are shown first.",
      close: "Close photo",
      photoAlt: "Portfolio photo",
      localFirst: "Photo archive",
    },
    zh: {
      heading: "照片",
      description: "一些畢業、旅行與日常生活的照片紀錄。",
      loading: "載入照片中...",
      noPhotos: "還沒有照片。敬請期待！",
      loadError: "目前無法載入雲端照片，所以先顯示本機精選照片。",
      close: "關閉照片",
      photoAlt: "作品集照片",
      localFirst: "照片集",
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
        const cloudPhotos = Array.isArray(data.photos) ? data.photos : [];
        setPhotos([...localPhotos, ...cloudPhotos]);
      } catch {
        if (controller.signal.aborted) {
          return;
        }

        setLoadError(t.loadError);
        setPhotos(localPhotos);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPhotos();

    return () => controller.abort();
  }, [t.loadError]);

  useEffect(() => {
    if (!selectedPhoto) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  const getPhotoTitle = (photo: Photo) =>
    (lang === "en" ? photo.titleEn : photo.titleZh) || t.photoAlt;

  const getPhotoCaption = (photo: Photo) =>
    (lang === "en" ? photo.captionEn : photo.captionZh) || "";

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
              {t.localFirst}
            </p>
            <h1 className="text-4xl font-bold text-gray-950 md:text-5xl">
              {t.heading}
            </h1>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              {t.description}
            </p>
          </div>

          {loadError && (
            <div className="mb-6 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-900">
              {loadError}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] animate-pulse bg-white shadow-sm"
                />
              ))}
            </div>
          ) : photos.length === 0 ? (
            <div className="border border-gray-200 bg-white py-12 text-center shadow-sm">
              <p className="text-gray-600">{t.noPhotos}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  type="button"
                  className={`group relative overflow-hidden border border-gray-200 bg-gray-100 text-left shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    photo.aspectClass || "aspect-[4/5]"
                  }`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.url}
                    alt={getPhotoTitle(photo)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/85 to-transparent p-4 pt-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">
                      {getPhotoTitle(photo)}
                    </p>
                    {getPhotoCaption(photo) && (
                      <p className="mt-1 text-xs leading-5 text-gray-200">
                        {getPhotoCaption(photo)}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {selectedPhoto && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/85 p-4 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <div
                className="relative max-h-full w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center bg-gray-950/70 text-white transition-colors hover:bg-gray-950"
                  aria-label={t.close}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="relative flex max-h-[88vh] items-center justify-center bg-black">
                  <Image
                    src={selectedPhoto.url}
                    alt={getPhotoTitle(selectedPhoto)}
                    width={selectedPhoto.width || 1600}
                    height={selectedPhoto.height || 1000}
                    className="max-h-[88vh] w-auto max-w-full object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                {(getPhotoTitle(selectedPhoto) || getPhotoCaption(selectedPhoto)) && (
                  <div className="bg-white px-4 py-3">
                    <p className="font-semibold text-gray-950">
                      {getPhotoTitle(selectedPhoto)}
                    </p>
                    {getPhotoCaption(selectedPhoto) && (
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        {getPhotoCaption(selectedPhoto)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
