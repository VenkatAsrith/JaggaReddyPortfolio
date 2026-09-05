import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { timelineData } from "@/data/timeline";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { Flag, ArrowRight, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const PoliticalJourney: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const categoryOptions = [
    { key: "All", label: isTelugu ? "అన్నీ" : "All" },
    { key: "Legislative", label: isTelugu ? "శాసనసభ" : "Legislative" },
    { key: "Party Leadership", label: isTelugu ? "పార్టీ నాయకత్వం" : "Party Leadership" },
    { key: "Civic", label: isTelugu ? "పౌర సేవ" : "Civic" },
    { key: "Legal", label: isTelugu ? "న్యాయ తీర్పులు" : "Legal" },
  ];

  const filteredMilestones =
    selectedCategory === "All"
      ? timelineData
      : timelineData.filter((m) => m.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.journey.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.journey.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-16 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-congress-orange" /> {t.journey.filterLabel}
          </div>
          {categoryOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedCategory(opt.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === opt.key
                  ? "bg-congress-orange text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Timeline Visualization: Alternating on Desktop, Single Vertical on Mobile */}
        <div className="relative mb-20">
          {/* Central Vertical Line for Desktop with Congress Orange-to-Green Gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-congress-orange via-gray-300 to-congress-green -translate-x-1/2" />

          {/* Left Vertical Line for Mobile */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-congress-orange via-gray-300 to-congress-green" />

          <div className="space-y-12 md:space-y-16">
            {filteredMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0"
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-200 hover:border-congress-orange/40">
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
                          {isTelugu && milestone.category === "Legislative"
                            ? "శాసనసభ"
                            : isTelugu && milestone.category === "Party Leadership"
                            ? "పార్టీ నాయకత్వం"
                            : isTelugu && milestone.category === "Civic"
                            ? "పౌర సేవ"
                            : isTelugu && milestone.category === "Legal"
                            ? "న్యాయ తీర్పు"
                            : milestone.category}
                        </span>
                        <span className="text-gray-300">•</span>
                        <VerificationBadge level={milestone.confidence} className="text-[10px]" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-heading font-black text-gray-950 mb-2 leading-snug">
                        {isTelugu && milestone.titleTe ? milestone.titleTe : milestone.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 font-body">
                        {isTelugu && milestone.descriptionTe ? milestone.descriptionTe : milestone.description}
                      </p>

                      <div
                        className={`pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-500 ${
                          isEven ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="flex items-center gap-1.5 font-bold text-gray-800">
                          <Flag className="w-3.5 h-3.5 text-congress-green" />
                          {isTelugu && milestone.partyTe ? milestone.partyTe : milestone.party}
                        </span>
                        <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700 font-medium">
                          {isTelugu && milestone.roleOrContextTe ? milestone.roleOrContextTe : milestone.roleOrContext}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge with Congress Orange */}
                  <div className="absolute left-5 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-congress-orange text-white border-4 border-white shadow-md flex items-center justify-center font-heading font-black text-xs md:text-sm">
                      {milestone.year.substring(2)}'
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className={`hidden md:block w-1/2 ${isEven ? "order-2" : "order-1"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to Elections */}
        <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
              {isTelugu ? "ఎన్నికల వివరాలు" : "ELECTORAL BREAKDOWN"}
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {t.journey.bottomBannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 font-body">
              {t.journey.bottomBannerDesc}
            </p>
          </div>
          <Link
            to="/elections"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-sm font-bold btn-congress-saffron shadow-sm transition-all relative z-10 flex-shrink-0"
          >
            <span>{t.journey.bottomBannerBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
