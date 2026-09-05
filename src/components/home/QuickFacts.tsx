import React from "react";
import { User, BadgeCheck, Calendar, Flag, MapPin, Briefcase, Award, Clock } from "lucide-react";
import { VerificationBadge } from "../sections/VerificationBadge";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const QuickFacts: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const factsList = [
    {
      icon: User,
      label: t.quickFacts.labels.fullName,
      value: t.quickFacts.values.fullName,
    },
    {
      icon: BadgeCheck,
      label: t.quickFacts.labels.knownAs,
      value: t.quickFacts.values.knownAs,
    },
    {
      icon: Calendar,
      label: t.quickFacts.labels.dob,
      value: t.quickFacts.values.dob,
    },
    {
      icon: Flag,
      label: t.quickFacts.labels.party,
      value: t.quickFacts.values.party,
    },
    {
      icon: MapPin,
      label: t.quickFacts.labels.constituency,
      value: t.quickFacts.values.constituency,
    },
    {
      icon: Briefcase,
      label: t.quickFacts.labels.office,
      value: t.quickFacts.values.office,
    },
    {
      icon: Award,
      label: t.quickFacts.labels.terms,
      value: t.quickFacts.values.terms,
    },
    {
      icon: Clock,
      label: t.quickFacts.labels.start,
      value: t.quickFacts.values.start,
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between gap-2 pb-5 border-b border-gray-100 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-congress-lightOrange p-1.5 flex items-center justify-center">
            <img
              src="/images/branding/congress-hand.png"
              alt="Congress Hand"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-congress-orange">
              {t.quickFacts.subtitle}
            </span>
            <h3 className="text-xl font-heading font-extrabold text-gray-950">
              {t.quickFacts.title}
            </h3>
          </div>
        </div>
        <VerificationBadge level="VERIFIED" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {factsList.map((fact) => {
          const Icon = fact.icon;
          return (
            <div
              key={fact.label}
              className="p-4 rounded-xl bg-[#F8F8F6] border border-gray-200/80 hover:bg-white hover:border-congress-orange/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center gap-2 text-congress-orange mb-1.5">
                <Icon className="w-4 h-4" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </span>
              </div>
              <p className="text-sm sm:text-base font-heading font-bold text-gray-900 leading-snug">
                {fact.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
