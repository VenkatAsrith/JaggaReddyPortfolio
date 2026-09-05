import React, { useState } from "react";
import { galleryData } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { Filter, Maximize2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Gallery: React.FC = () => {
  const { isTelugu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: "All", label: isTelugu ? t.categories.all : "All" },
    { key: "Portraits", label: isTelugu ? t.categories.portraits : "Portraits" },
    { key: "Assembly", label: isTelugu ? t.categories.assembly : "Assembly" },
    { key: "Public Meetings", label: isTelugu ? t.categories.publicMeetings : "Public Meetings" },
    { key: "Campaigns", label: isTelugu ? t.categories.campaigns : "Campaigns" },
    { key: "Constituency", label: isTelugu ? t.categories.constituency : "Constituency" },
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.gallery.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.gallery.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-congress-orange" /> {t.gallery.filterCollection}
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.key
                  ? "bg-congress-orange text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPhotos.map((photo, idx) => {
            const title = isTelugu && photo.titleTe ? photo.titleTe : photo.title;
            const caption = isTelugu && photo.captionTe ? photo.captionTe : photo.caption;

            return (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative bg-[#111111] rounded-3xl overflow-hidden border border-gray-200 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container Preserving Aspect Ratio */}
                <div
                  className={`relative w-full overflow-hidden bg-gray-900 flex items-center justify-center ${
                    photo.aspectRatio === "portrait"
                      ? "aspect-[3/4]"
                      : photo.aspectRatio === "square"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover Expand Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-xs border border-white/10">
                      {photo.category}
                    </span>
                  </div>
                </div>

                {/* Caption Card */}
                <div className="p-5 bg-white border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-heading font-bold text-gray-950 mb-1 group-hover:text-congress-orange transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 font-body">
                      {caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-muted-foreground font-body">
                    <span>{t.gallery.credit} {photo.creditOrSource}</span>
                    <VerificationBadge level={photo.confidence} className="text-[10px]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Attribution & Sourcing Statement */}
        <div className="p-6 rounded-3xl bg-[#F8F8F6] border border-gray-200 flex items-start gap-3 text-xs text-muted-foreground font-body">
          <ShieldCheck className="w-4 h-4 text-congress-green flex-shrink-0 mt-0.5" />
          <p>{t.gallery.disclaimer}</p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        photos={filteredPhotos}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </div>
  );
};

