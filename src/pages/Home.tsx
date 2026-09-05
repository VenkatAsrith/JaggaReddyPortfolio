import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickFacts } from "@/components/home/QuickFacts";
import { AboutPreview } from "@/components/home/AboutPreview";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { ElectionPreview } from "@/components/home/ElectionPreview";
import { SangareddyPreview } from "@/components/home/SangareddyPreview";
import { PublicServicePreview } from "@/components/home/PublicServicePreview";
import { MediaPreview } from "@/components/home/MediaPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { galleryData } from "@/data/gallery";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { ArrowRight, Maximize2 } from "lucide-react";

export const Home: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const homeGallery = galleryData.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. High-Impact Editorial Hero with 4K Jagga Reddy Photo */}
      <HeroSection />

      {/* 2. Quick Facts Dossier Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-20">
        <QuickFacts />
      </section>

      {/* 3. About Snapshot */}
      <AboutPreview />

      {/* 4. Political Journey Milestones */}
      <JourneyPreview />

      {/* 5. Electoral Record Summary */}
      <ElectionPreview />

      {/* 6. Sangareddy Connection */}
      <SangareddyPreview />

      {/* 7. Public Service & Key Issues */}
      <PublicServicePreview />

      {/* 8. Media & Speeches Teaser */}
      <MediaPreview />

      {/* 9. Photo Feature Gallery Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              overline="VISUAL CHRONICLE"
              title="Public Archive & Moments from the Field"
              subtitle="Curated photographs capturing legislative debates, constituency inspections, and public conventions."
              className="mb-0"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-congress-orange hover:underline self-start md:self-auto"
            >
              <span>View Full Gallery ({galleryData.length} items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeGallery.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-congress-orange block mb-1">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-heading font-bold text-gray-950 line-clamp-1 group-hover:text-congress-orange transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 font-body">
                    {photo.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact Call to Action */}
      <ContactCTA />

      {/* Lightbox for homepage gallery */}
      <GalleryLightbox
        photos={homeGallery}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </div>
  );
};
