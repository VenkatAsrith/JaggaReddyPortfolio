import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Calendar, Briefcase } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const AboutPreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading
              overline={t.about.overline}
              title={t.about.title}
              subtitle={t.about.subtitle}
            />

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8 font-body">
              <p>{t.about.bioP1}</p>
              <p>{t.about.bioP2}</p>
              <p>{t.about.bioP3}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-congress-orange hover:bg-primary-hover text-white shadow-xs transition-all"
              >
                <span>{t.about.readFull}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/sangareddy"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200 transition-all"
              >
                <span>{t.about.connectionBtn}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Supporting Portrait & Information Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F8F6] p-6 sm:p-8 rounded-3xl border border-gray-200 relative shadow-xs">
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-2 border border-gray-200 shadow-xs flex items-center justify-center">
                    <img
                      src="/images/branding/congress-hand.png"
                      alt="Congress Hand"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-extrabold text-gray-950">
                      {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి" : "T. Jayaprakash Reddy"}
                    </h3>
                    <p className="text-xs font-bold text-congress-orange">
                      {isTelugu ? "జగ్గారెడ్డి" : '"Jagga Reddy"'}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-congress-lightGreen text-congress-green border border-green-200">
                  {isTelugu ? "కాంగ్రెస్ నాయకులు" : "INC Leader"}
                </span>
              </div>

              {/* Candid Photograph */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-gray-200 shadow-xs bg-gray-200">
                <img
                  src="/images/jagga-reddy/portrait.png"
                  alt="T. Jayaprakash Reddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3 pb-6 border-b border-gray-200 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-congress-orange flex-shrink-0" />
                  <span>{isTelugu ? "జననం: 7 జూలై 1966, సంగారెడ్డి, తెలంగాణ" : "Born 7 July 1966 in Sangareddy, Telangana"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-congress-orange flex-shrink-0" />
                  <span>{isTelugu ? "సంగారెడ్డి అసెంబ్లీ నియోజకవర్గం (AC నెం. 39)" : "Sangareddy Assembly Constituency (AC No. 39)"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-congress-green flex-shrink-0" />
                  <span>{isTelugu ? "శాసనసభ ప్రభుత్వ విప్, ఆంధ్రప్రదేశ్ (2012)" : "Government Whip, AP Legislative Assembly (2012)"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-congress-green flex-shrink-0" />
                  <span>{isTelugu ? "ఎమ్మెల్యేగా ఎన్నిక: 2004, 2009, 2018 (3 సార్లు)" : "Elected MLA in 2004, 2009, and 2018 (3 Mandates)"}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span>{isTelugu ? "వర్కింగ్ ప్రెసిడెంట్, టీపీసీసీ" : "Working President, TPCC"}</span>
                <span className="font-bold text-congress-orange">
                  {isTelugu ? "ఇండియన్ నేషనల్ కాంగ్రెస్" : "Indian National Congress"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
