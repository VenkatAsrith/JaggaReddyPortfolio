import React from "react";
import { Link } from "react-router-dom";
import { electionsData, electionSummary } from "@/data/elections";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { ElectionCard } from "../sections/ElectionCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const ElectionPreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const keyElections = electionsData.filter((e) =>
    [2004, 2009, 2018, 2023].includes(e.year)
  );

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeading
            overline={t.elections.overline}
            title={t.elections.title}
            subtitle={t.elections.subtitle}
            className="mb-0"
          />
          <Link
            to="/elections"
            className="inline-flex items-center gap-2 text-sm font-bold text-congress-orange hover:underline self-start md:self-auto"
          >
            <span>{isTelugu ? "పూర్తి ఎన్నికల పట్టిక" : "View Full Electoral Table"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Metric Summary Ribbon */}
        <div className="bg-[#F8F8F6] border border-gray-200 rounded-3xl p-6 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <span className="text-3xl sm:text-4xl font-heading font-black text-gray-950 block">
                {electionSummary.totalContests}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t.elections.contestsCount}
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-heading font-black text-congress-green block">
                {electionSummary.totalWins}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-congress-green">
                {t.elections.winsCount}
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-heading font-black text-gray-600 block">
                {electionSummary.totalLosses}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t.elections.lossesCount}
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-heading font-black text-congress-orange block">
                {electionSummary.highestMargin.toLocaleString()}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {t.elections.highestMargin}
              </span>
            </div>
          </div>
        </div>

        {/* Election Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyElections.map((election) => (
            <ElectionCard key={election.year + election.electionType} election={election} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/elections"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-congress-orange hover:bg-primary-hover text-white shadow-xs transition-all"
          >
            <span>{isTelugu ? "ఎన్నికల చరిత్ర & ఓట్ల వాటాల సంపూర్ణ విశ్లేషణ" : "Analyze Full Electoral History & Vote Shares"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
