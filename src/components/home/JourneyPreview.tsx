import React from "react";
import { Link } from "react-router-dom";
import { timelineData } from "@/data/timeline";
import { ArrowRight, Calendar, Flag } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { VerificationBadge } from "../sections/VerificationBadge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const JourneyPreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const previewMilestones = timelineData.filter((m) =>
    ["1986", "2004", "2009", "2012", "2018", "2021", "2023"].includes(m.year)
  );

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            overline={t.journey.overline}
            title={t.journey.title}
            subtitle={t.journey.subtitle}
            className="mb-0"
          />
          <Link
            to="/political-journey"
            className="inline-flex items-center gap-2 text-sm font-bold text-congress-orange hover:underline self-start md:self-auto"
          >
            <span>{t.journey.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewMilestones.map((milestone) => (
            <div
              key={milestone.year + milestone.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 hover:border-congress-orange/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-3xl font-heading font-black text-gray-950 flex items-center gap-1.5">
                    <Calendar className="w-5 h-5 text-congress-orange" />
                    {milestone.year}
                  </span>
                  <VerificationBadge level={milestone.confidence} className="text-[10px]" />
                </div>

                <h3 className="text-base font-heading font-bold text-gray-900 mb-2 leading-snug">
                  {isTelugu && milestone.titleTe ? milestone.titleTe : milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 font-body">
                  {isTelugu && milestone.descriptionTe ? milestone.descriptionTe : milestone.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-gray-800 flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5 text-congress-green" />
                  {isTelugu && milestone.partyTe ? milestone.partyTe : milestone.party}
                </span>
                <span className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                  {isTelugu && milestone.roleOrContextTe ? milestone.roleOrContextTe : milestone.roleOrContext}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/political-journey"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 shadow-xs transition-all"
          >
            <span>{isTelugu ? "నాలుగు దశాబ్దాల పూర్తి ప్రస్థానాన్ని వీక్షించండి" : "Explore Complete Decade-by-Decade Timeline"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
