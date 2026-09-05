import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { leaderData } from "@/data/leader";
import { ArrowRight, ChevronRight, ShieldCheck, MapPin, Award } from "lucide-react";
import { VerificationBadge } from "../sections/VerificationBadge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const HeroSection: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const statsData = [
    { value: "3", label: t.hero.stats.mlaTerms },
    { value: "6", label: t.hero.stats.contests },
    { value: "3", label: t.hero.stats.victories },
    { value: "1986", label: t.hero.stats.beginnings },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-12 md:py-20 lg:py-24 border-b border-gray-200">
      {/* Subtle Editorial Background Grid & Congress Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Congress Hand Watermark in background */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[550px] h-[700px] opacity-[0.035] pointer-events-none hidden lg:block">
        <img
          src="/images/branding/congress-hand.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1">
            {/* 1. Congress Identity & Hand Brand Mark */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2.5 mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-congress-lightOrange border border-orange-200 text-xs font-bold text-congress-orange tracking-widest uppercase">
                <img
                  src="/images/branding/congress-hand.png"
                  alt="Congress Hand"
                  className="w-3.5 h-3.5 object-contain"
                />
                <span>{t.hero.congressParty}</span>
              </div>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="text-xs font-bold uppercase tracking-wider text-congress-green bg-congress-lightGreen px-2.5 py-1 rounded-full border border-green-200">
                {t.hero.publicLeadership}
              </span>
              <VerificationBadge level="VERIFIED" className="text-[11px]" />
            </motion.div>

            {/* 2. Primary Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-3"
            >
              <h1 className="text-[clamp(1.85rem,5vw,3.75rem)] font-heading font-black text-gray-950 tracking-tight leading-[1.12] break-words">
                {t.hero.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                <span className="text-[clamp(1.35rem,3.8vw,2.25rem)] font-heading font-extrabold text-congress-orange tracking-tight break-words">
                  {t.hero.popularName}
                </span>
                {!isTelugu && (
                  <span className="text-sm sm:text-base font-semibold text-gray-500 font-body">
                    ({leaderData.nativeNameTelugu})
                  </span>
                )}
              </div>
            </motion.div>

            {/* 3. Roles & Designation */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1.5 mb-6 text-gray-800"
            >
              <div className="flex items-center gap-2 text-base sm:text-lg font-heading font-bold text-gray-950">
                <span className="w-2.5 h-2.5 rounded-full bg-congress-orange flex-shrink-0" />
                <span>{t.hero.role1}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700">
                <MapPin className="w-4 h-4 text-congress-green flex-shrink-0" />
                <span>{t.hero.role2}</span>
              </div>
            </motion.div>

            {/* 4. Factual Editorial Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mb-8 font-body"
            >
              {t.hero.summary}
            </motion.p>

            {/* 5. CTAs with Congress Color Hierarchy & Stacking on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
            >
              <Link
                to="/political-journey"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-sm font-bold btn-congress-saffron shadow-sm hover:shadow-md focus:ring-2 focus:ring-congress-orange"
              >
                <span>{t.hero.exploreJourney}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/public-service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl text-sm font-bold btn-congress-light-green"
              >
                <span>{t.hero.publicServiceCta}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* 6. Verified Statistics Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-200"
            >
              {statsData.map((st) => (
                <div key={st.label} className="p-3.5 bg-gray-50 rounded-xl border border-gray-200/80">
                  <span className="block text-2xl sm:text-3xl font-heading font-black text-gray-950 leading-none mb-1">
                    {st.value}
                  </span>
                  <span className="block text-xs font-bold text-gray-700 uppercase tracking-tight">
                    {st.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Authentic 4K Jagga Reddy Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 order-2 flex justify-center"
          >
            <div className="relative max-w-md w-full">
              {/* Premium Congress Card Container */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl relative">
                {/* Top Congress-Orange Accent Stripe */}
                <div className="h-2 bg-gradient-to-r from-congress-orange via-orange-400 to-congress-orange w-full" />

                {/* The 4K Authentic Photograph */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src="/images/jagga-reddy/hero.png"
                    alt="T. Jayaprakash Reddy (Jagga Reddy) — Official Portrait"
                    className="w-full h-full object-cover object-[center_14%] hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Corner Congress Hand Emblem */}
                  <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-white/95 backdrop-blur-xs p-2 shadow-md border border-gray-200 flex items-center justify-center">
                    <img
                      src="/images/branding/congress-hand.png"
                      alt="Congress Hand"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Bottom Card Identity Panel */}
                <div className="p-5 bg-white border-t border-gray-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-gray-950">
                        {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి" : "T. Jayaprakash Reddy"}
                      </h3>
                      <p className="text-xs font-bold text-congress-orange uppercase tracking-wider">
                        {isTelugu ? "జగ్గారెడ్డి • సంగారెడ్డి మాజీ ఎమ్మెల్యే" : "Jagga Reddy • Former MLA Sangareddy"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-congress-lightGreen text-congress-green border border-green-200 text-xs font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>{isTelugu ? "3 సార్లు ఎమ్మెల్యే" : "3x MLA"}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Congress-Green Accent Stripe */}
                <div className="h-1.5 bg-gradient-to-r from-congress-green via-emerald-600 to-congress-green w-full" />
              </div>

              {/* Verified Attribution Note */}
              <div className="mt-3 flex items-center justify-between px-3 text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-congress-green" />
                  {t.hero.portraitLabel}
                </span>
                <span>{t.hero.leadershipAnchor}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
