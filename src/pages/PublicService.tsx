import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicIssuesData } from "@/data/issues";
import { IssueCard } from "@/components/sections/IssueCard";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { ShieldCheck, Filter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const PublicService: React.FC = () => {
  const { isTelugu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { key: "All", label: isTelugu ? t.categories.all : "All" },
    { key: "Water", label: isTelugu ? t.categories.water : "Water" },
    { key: "Farmers", label: isTelugu ? t.categories.farmers : "Farmers" },
    { key: "Infrastructure", label: isTelugu ? t.categories.infrastructure : "Infrastructure" },
    { key: "Urban Development", label: isTelugu ? t.categories.urbanDev : "Urban Development" },
    { key: "Policy", label: isTelugu ? t.categories.policy : "Policy" },
  ];

  const filteredIssues =
    selectedCategory === "All"
      ? publicIssuesData
      : publicIssuesData.filter((i) => i.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.publicService.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.publicService.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.publicService.subtitle}
          </p>
        </div>

        {/* Factual Integrity Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-congress-lightGreen/60 border border-green-200 flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-white text-congress-green flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-200 shadow-xs">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-heading font-bold text-gray-950">
              {t.publicService.ethicsBannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
              {t.publicService.ethicsBannerText}
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-congress-orange" /> {t.publicService.filterSector}
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

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>

        {/* Development Claims Spotlight (e.g. Sangareddy-Patancheru Road) */}
        <div className="bg-[#F8F8F6] border border-gray-200 rounded-3xl p-8 sm:p-10 mb-16">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
              {t.publicService.caseStudyOverline}
            </span>
            <VerificationBadge level="SELF-CLAIMED" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-gray-950 mb-3">
            {t.publicService.caseStudyTitle}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-gray-600 leading-relaxed font-body">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider">
                {t.publicService.caseStudyContextTitle}
              </h4>
              <p>{t.publicService.caseStudyContextText}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider">
                {t.publicService.caseStudyStatusTitle}
              </h4>
              <p>{t.publicService.caseStudyStatusText}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-950 text-xs uppercase tracking-wider">
                {t.publicService.caseStudyImpactTitle}
              </h4>
              <p>{t.publicService.caseStudyImpactText}</p>
            </div>
          </div>
        </div>

        {/* Public Grievance Interaction Process */}
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-heading font-bold text-gray-950">
              {t.publicService.submitGrievanceTitle}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-body">
              {t.publicService.submitGrievanceDesc}
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold btn-congress-green shadow-xs whitespace-nowrap"
          >
            <span>{t.publicService.submitGrievanceBtn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

