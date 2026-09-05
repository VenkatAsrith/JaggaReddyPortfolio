import React from "react";
import { Link } from "react-router-dom";
import { publicIssuesData } from "@/data/issues";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { IssueCard } from "../sections/IssueCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const PublicServicePreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const topIssues = publicIssuesData.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            overline={t.publicService.overline}
            title={isTelugu ? "జల సాధన, రైతు సంక్షేమం & మౌలిక వసతుల ఉద్యమాలు" : "Advocating for Water, Farmers & Infrastructure"}
            subtitle={t.publicService.subtitle}
            className="mb-0"
          />
          <Link
            to="/public-service"
            className="inline-flex items-center gap-2 text-sm font-bold text-congress-orange hover:underline self-start md:self-auto"
          >
            <span>{isTelugu ? "అన్ని ప్రజా సమస్యలు & పోరాటాలు" : "View All Issues & Claims"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#F8F8F6] border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-congress-lightGreen text-congress-green flex items-center justify-center flex-shrink-0 border border-green-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-gray-950">
                {t.publicService.ethicsBannerTitle}
              </h4>
              <p className="text-xs text-muted-foreground font-body">
                {t.publicService.ethicsBannerText}
              </p>
            </div>
          </div>
          <Link
            to="/public-service"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors whitespace-nowrap shadow-xs"
          >
            <span>{isTelugu ? "ప్రమాణాల పరిశీలన" : "Examine Standards"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
