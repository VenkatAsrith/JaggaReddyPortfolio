import React, { useEffect, useCallback } from "react";
import { GalleryPhoto } from "@/data/types";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { VerificationBadge } from "../sections/VerificationBadge";
import { useLanguage } from "@/context/LanguageContext";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const { isTelugu, t } = useLanguage();
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else if (currentIndex === 0) {
      onNavigate(photos.length - 1);
    }
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && currentIndex < photos.length - 1) {
      onNavigate(currentIndex + 1);
    } else if (currentIndex === photos.length - 1) {
      onNavigate(0);
    }
  }, [currentIndex, photos.length, onNavigate]);

  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    // 50px threshold for swipe
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentPhoto) return null;

  const title = isTelugu && currentPhoto.titleTe ? currentPhoto.titleTe : currentPhoto.title;
  const caption = isTelugu && currentPhoto.captionTe ? currentPhoto.captionTe : currentPhoto.caption;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 min-w-[44px] min-h-[44px] rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-congress-orange"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev Button - Accessible on all screen sizes */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous Photo"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-full bg-black/60 sm:bg-white/10 hover:bg-white/25 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-congress-orange flex items-center justify-center border border-white/10"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Button - Accessible on all screen sizes */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next Photo"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-full bg-black/60 sm:bg-white/10 hover:bg-white/25 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-congress-orange flex items-center justify-center border border-white/10"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Content Modal with max-height containment */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-[#111111] rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="w-full h-full object-contain select-none"
          />
        </div>

        <div className="p-4 sm:p-6 bg-[#111111] border-t border-white/10 text-white">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
              {currentPhoto.category} • {currentIndex + 1} {isTelugu ? "/" : "of"} {photos.length}
            </span>
            <VerificationBadge level={currentPhoto.confidence} className="text-[10px]" />
          </div>
          <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 font-body">
            {caption}
          </p>
          <div className="text-xs text-gray-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 pt-2 border-t border-white/10 font-body">
            <span>{t.gallery.credit} {currentPhoto.creditOrSource}</span>
            <span className="text-[11px] text-gray-500">
              {isTelugu ? "స్వైప్ చేయండి / బాణాలు ఉపయోగించండి • Esc ద్వారా మూసివేయండి" : "Swipe / arrows to navigate • Esc to exit"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

