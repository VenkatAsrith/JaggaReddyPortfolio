import React from "react";
import { Link } from "react-router-dom";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { QuickFacts } from "@/components/home/QuickFacts";
import { Scale, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const About: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.about.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి (జగ్గారెడ్డి)" : "T. Jayaprakash Reddy (Jagga Reddy)"}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.about.subtitle}
          </p>
        </div>

        {/* Top Portrait & Core Summary Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md lg:sticky lg:top-28">
              {/* Top Congress Stripe */}
              <div className="h-1.5 bg-gradient-to-r from-congress-orange via-white to-congress-green w-full" />
              
              <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                <img
                  src="/images/jagga-reddy/hero.png"
                  alt="T. Jayaprakash Reddy (Jagga Reddy)"
                  className="w-full h-full object-cover object-[center_14%]"
                />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/95 p-1.5 shadow-sm border border-gray-200 flex items-center justify-center">
                  <img
                    src="/images/branding/congress-hand.png"
                    alt="Congress Hand"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="p-6 bg-white text-gray-900 space-y-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
                    {isTelugu ? "పార్టీ బాధ్యత" : "Party Responsibility"}
                  </span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-congress-lightGreen text-congress-green border border-green-200">
                    AICC / TPCC
                  </span>
                </div>
                <h3 className="text-lg font-heading font-extrabold text-gray-950">
                  {isTelugu ? "వర్కింగ్ ప్రెసిడెంట్, టీపీసీసీ" : "Working President, TPCC"}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">
                  {isTelugu
                    ? "సంగారెడ్డి శాసనసభ నియోజకవర్గం (AC నెం. 39) నుండి మూడుసార్లు ఎన్నికైన మాజీ ఎమ్మెల్యే."
                    : "Three-term former MLA representing Sangareddy Assembly Constituency (AC No. 39), Telangana."}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {/* Early Life & Beginnings */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-gray-950 pb-2 border-b border-gray-200">
                {t.about.sec1Title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec1Text1}
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec1Text2}
              </p>
            </div>

            {/* Legislative Career */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-gray-950 pb-2 border-b border-gray-200">
                {t.about.sec2Title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec2Text1}
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec2Text2}
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec2Text3}
              </p>
            </div>

            {/* State Leadership & Current Role */}
            <div className="space-y-3">
              <h2 className="text-2xl font-heading font-extrabold text-gray-950 pb-2 border-b border-gray-200">
                {t.about.sec3Title}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec3Text1}
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                {t.about.sec3Text2}
              </p>
            </div>

            {/* Factual Legal Record Section (Prompt Rule 36 & 54) */}
            <div className="bg-[#F8F8F6] border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-gray-700" />
                <h3 className="text-base font-heading font-bold text-gray-950">
                  {t.about.legalTitle}
                </h3>
                <VerificationBadge level="VERIFIED" className="text-[10px]" />
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-body">
                {t.about.legalText}
              </p>
              <p className="text-[11px] text-muted-foreground mt-2 font-body">
                {t.about.legalSource}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts Section */}
        <div className="mb-16">
          <QuickFacts />
        </div>

        {/* Next Route Navigation CTA */}
        <div className="bg-congress-lightOrange border border-orange-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-bold text-gray-950 mb-1">
              {t.about.ctaTitle}
            </h3>
            <p className="text-sm text-gray-700 font-body">
              {t.about.ctaDesc}
            </p>
          </div>
          <Link
            to="/political-journey"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-sm font-bold btn-congress-saffron shadow-xs flex-shrink-0"
          >
            <span>{t.about.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
