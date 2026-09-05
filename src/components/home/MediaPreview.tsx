import React from "react";
import { Link } from "react-router-dom";
import { mediaArticlesData } from "@/data/media";
import { speechesData } from "@/data/speeches";
import { ArrowRight, Video, ExternalLink } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { MediaCard } from "../sections/MediaCard";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const MediaPreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const recentArticles = mediaArticlesData.slice(0, 3);
  const featuredSpeech = speechesData[0];

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            overline={t.media.overline}
            title={t.media.title}
            subtitle={t.media.subtitle}
            className="mb-0"
          />
          <div className="flex items-center gap-4">
            <Link
              to="/media"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-congress-orange hover:underline transition-colors"
            >
              <span>{isTelugu ? "అన్ని వార్తలు" : "All News"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              to="/speeches"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-congress-orange hover:underline transition-colors"
            >
              <span>{isTelugu ? "ప్రసంగాల ఆర్కైవ్" : "Speeches Archive"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Media Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {recentArticles.map((art) => (
            <MediaCard key={art.id} article={art} />
          ))}
        </div>

        {/* Featured Speech Banner with Congress Identity */}
        {featuredSpeech && (
          <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-md relative overflow-hidden">
            {/* Subtle background Congress hand watermark */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 opacity-5 pointer-events-none">
              <img
                src="/images/branding/congress-hand.png"
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="space-y-2 max-w-2xl relative z-10">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-congress-orange text-white uppercase tracking-wider">
                  <Video className="w-3.5 h-3.5" /> {t.speeches.featuredBadge}
                </span>
                <span className="text-xs text-gray-400">
                  {isTelugu && featuredSpeech.venueOrPlatformTe ? featuredSpeech.venueOrPlatformTe : featuredSpeech.venueOrPlatform}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white leading-snug">
                {isTelugu && featuredSpeech.titleTe ? featuredSpeech.titleTe : featuredSpeech.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-body">
                {isTelugu
                  ? "రాష్ట్ర ప్రజా సంక్షేమ విధానాలు, కాంగ్రెస్ సంస్థాగత నిర్ణయాలపై అధికారిక ప్రసంగాలు & విలేకరుల సమావేశాలు."
                  : `${featuredSpeech.topic} • Documented addresses discussing state welfare policies and constituency coordination.`}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto relative z-10">
              <a
                href={featuredSpeech.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-congress-orange hover:bg-primary-hover text-white shadow-xs transition-all"
              >
                <span>{t.speeches.watchBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/speeches"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors"
              >
                <span>{isTelugu ? "పూర్తి ఆర్కైవ్" : "View Archive"}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
