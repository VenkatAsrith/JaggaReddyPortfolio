import React from "react";
import { speechesData } from "@/data/speeches";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { ExternalLink, Play, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Speeches: React.FC = () => {
  const { isTelugu, t } = useLanguage();

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.speeches.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.speeches.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.speeches.subtitle}
          </p>
        </div>

        {/* Speeches Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {speechesData.map((speech) => {
            const title = isTelugu && speech.titleTe ? speech.titleTe : speech.title;
            const venue = isTelugu && speech.venueOrPlatformTe ? speech.venueOrPlatformTe : speech.venueOrPlatform;
            const points = isTelugu && speech.keyPointsTe ? speech.keyPointsTe : speech.keyPoints;

            return (
              <div
                key={speech.id}
                className="topnotch-card rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Video Thumbnail Banner */}
                  <div className="relative aspect-video w-full bg-[#111111] flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent z-10" />

                    {/* Play Button & Topic Banner */}
                    <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center">
                      <a
                        href={speech.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 rounded-full bg-congress-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary-hover transition-all duration-200 mb-3"
                        aria-label={`Watch ${title}`}
                      >
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </a>
                      <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
                        {isTelugu ? "ప్రసంగ ప్రసారం" : "Public Address"} • {speech.duration || "Recorded Broadcast"}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 z-20">
                      <VerificationBadge level={speech.confidence} className="text-[10px]" />
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-2 font-body">
                      <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <Calendar className="w-3.5 h-3.5 text-congress-orange" /> {speech.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-congress-green" /> {venue}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-950 mb-2 leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-congress-orange mb-4">
                      {isTelugu ? "అంశం" : "Topic"}: {speech.topic}
                    </p>

                    <div className="bg-[#F8F8F6] rounded-2xl p-4 border border-gray-100 mb-4">
                      <p className="text-[11px] font-bold text-gray-800 uppercase tracking-wider mb-2">
                        {t.speeches.keyPointsTitle}
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-600 font-body">
                        {points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-congress-orange font-bold">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span className="text-xs text-muted-foreground">
                    {isTelugu ? "మూలం: బహిరంగ ప్రసారం" : "Source: Public Broadcast"}
                  </span>
                  <a
                    href={speech.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] rounded-xl text-xs font-bold uppercase tracking-wider btn-congress-saffron shadow-xs"
                  >
                    <span>{t.speeches.watchBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Fallback & Public Archive Disclaimer */}
        <div className="p-6 rounded-3xl bg-[#F8F8F6] border border-gray-200 text-xs text-muted-foreground font-body">
          <p className="font-bold text-gray-950 text-sm mb-1">
            {t.speeches.disclosureTitle}
          </p>
          <p>{t.speeches.disclosureText}</p>
        </div>
      </div>
    </div>
  );
};

