import React, { useState } from "react";
import { electionsData, electionSummary } from "@/data/elections";
import { ElectionCard } from "@/components/sections/ElectionCard";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { CheckCircle2, XCircle, Table as TableIcon, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Elections: React.FC = () => {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.elections.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.elections.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.elections.subtitle}
          </p>
        </div>

        {/* Visual Summary Counters (6 Contests -> 3 Wins, 3 Losses) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-[#F8F8F6] border border-gray-200 rounded-3xl p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
              {t.elections.contestsCount}
            </span>
            <span className="text-4xl sm:text-5xl font-heading font-black text-gray-950 block">
              {electionSummary.totalContests}
            </span>
            <span className="text-xs text-muted-foreground mt-2 block font-body">
              {isTelugu ? "5 అసెంబ్లీ + 1 లోక్‌సభ" : "5 Assembly + 1 Lok Sabha"}
            </span>
          </div>

          <div className="bg-congress-lightGreen border border-green-200 rounded-3xl p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-congress-green block mb-1">
              {t.elections.winsCount}
            </span>
            <span className="text-4xl sm:text-5xl font-heading font-black text-congress-green block">
              {electionSummary.totalWins}
            </span>
            <span className="text-xs text-congress-green font-medium mt-2 block font-body">
              {isTelugu ? "2004, 2009, 2018 విజయాలు" : "2004, 2009, 2018 Mandates"}
            </span>
          </div>

          <div className="bg-[#F8F8F6] border border-gray-200 rounded-3xl p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-1">
              {t.elections.lossesCount}
            </span>
            <span className="text-4xl sm:text-5xl font-heading font-black text-gray-700 block">
              {electionSummary.totalLosses}
            </span>
            <span className="text-xs text-muted-foreground mt-2 block font-body">
              {isTelugu ? "2014 (అసెంబ్లీ & లోక్‌సభ), 2023" : "2014 (AC & PC), 2023 AC"}
            </span>
          </div>

          <div className="bg-congress-lightOrange border border-orange-200 rounded-3xl p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-congress-orange block mb-1">
              {t.elections.highestMargin}
            </span>
            <span className="text-4xl sm:text-5xl font-heading font-black text-congress-orange block">
              {electionSummary.highestMargin.toLocaleString()}
            </span>
            <span className="text-xs text-congress-orange font-medium mt-2 block font-body">
              {isTelugu ? "2004 అసెంబ్లీ మెజారిటీ ఓట్లు" : "Votes in 2004 Assembly"}
            </span>
          </div>
        </div>

        {/* View Switcher (Desktop) */}
        <div className="hidden md:flex items-center justify-between pb-6 mb-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-950">
              {isTelugu ? "ఎన్నికల చరిత్ర పట్టిక (2004 – 2023)" : "Electoral History Table (2004 – 2023)"}
            </h3>
            <p className="text-xs text-muted-foreground font-body">
              {isTelugu
                ? "భారత ఎన్నికల సంఘం (ఈసీఐ) అధికారిక ఫలితాల ఆధారంగా."
                : "All figures sourced directly from official Election Commission of India (ECI) records."}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "table" ? "bg-white text-gray-950 shadow-xs" : "text-gray-600 hover:text-gray-950"
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" /> {t.elections.tableView}
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === "cards" ? "bg-white text-gray-950 shadow-xs" : "text-gray-600 hover:text-gray-950"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> {t.elections.cardView}
            </button>
          </div>
        </div>

        {/* Responsive Desktop Table */}
        {viewMode === "table" ? (
          <div className="hidden md:block overflow-x-auto rounded-3xl border border-gray-200 shadow-xs mb-16">
            <table className="w-full min-w-[700px] text-left text-sm">
              <thead className="bg-[#F8F8F6] text-xs font-bold uppercase tracking-wider text-gray-600 border-b border-gray-200">
                <tr>
                  <th className="py-4 px-5">{t.elections.colYear}</th>
                  <th className="py-4 px-5">{t.elections.colContest}</th>
                  <th className="py-4 px-5">{t.elections.colParty}</th>
                  <th className="py-4 px-5 text-right">{t.elections.colVotes}</th>
                  <th className="py-4 px-5 text-right">{t.elections.colVoteShare}</th>
                  <th className="py-4 px-5 text-center">{t.elections.colResult}</th>
                  <th className="py-4 px-5 text-right">{t.elections.colMargin}</th>
                  <th className="py-4 px-5">{t.elections.colOpponent}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-body">
                {electionsData.map((el) => {
                  const isWon = el.result === "Won";
                  return (
                    <tr
                      key={el.year + el.electionType}
                      className="hover:bg-congress-lightOrange/30 transition-colors"
                    >
                      <td className="py-4 px-5 font-heading font-black text-gray-950 text-base">
                        {el.year}
                      </td>
                      <td className="py-4 px-5">
                        <span className="font-bold text-gray-950 block">
                          {isTelugu && el.constituencyTe ? el.constituencyTe : el.constituency}
                        </span>
                        <span className="text-xs text-gray-500 block">
                          {isTelugu && el.electionTypeTe ? el.electionTypeTe : el.electionType}
                        </span>
                      </td>
                      <td className="py-4 px-5 font-semibold text-gray-800">
                        {isTelugu && el.partyTe ? el.partyTe : el.party}
                      </td>
                      <td className="py-4 px-5 text-right font-extrabold text-gray-950">
                        {el.votes.toLocaleString()}
                      </td>
                      <td className="py-4 px-5 text-right text-gray-600 font-medium">
                        {el.votePercentage ? `${el.votePercentage}%` : "—"}
                      </td>
                      <td className="py-4 px-5 text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            isWon
                              ? "bg-congress-lightGreen text-congress-green border border-green-200"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {isWon ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isWon ? t.elections.wonBadge : t.elections.lostBadge}
                        </span>
                      </td>
                      <td
                        className={`py-4 px-5 text-right font-extrabold ${
                          isWon ? "text-congress-green" : "text-gray-700"
                        }`}
                      >
                        {isWon ? `+${el.margin.toLocaleString()}` : `-${el.margin.toLocaleString()}`}
                      </td>
                      <td className="py-4 px-5 text-xs text-gray-600">
                        <span className="font-bold text-gray-800 block">
                          {isTelugu && el.opponentTe ? el.opponentTe : el.opponent}
                        </span>
                        <span className="text-gray-400">
                          {isTelugu && el.opponentPartyTe ? el.opponentPartyTe : el.opponentParty} ({el.opponentVotes.toLocaleString()} {isTelugu ? "ఓట్లు" : "votes"})
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}

        {/* Mobile View & Card Grid Fallback */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${viewMode === "table" ? "md:hidden" : ""}`}>
          {electionsData.map((election) => (
            <ElectionCard key={election.year + election.electionType} election={election} />
          ))}
        </div>

        {/* Informational Context & Sources Note */}
        <div className="p-6 rounded-2xl bg-[#F8F8F6] border border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-gray-600 font-body">
          <div>
            <p className="font-bold text-gray-950 text-sm mb-1">
              {t.elections.disclosureTitle}
            </p>
            <p>
              {t.elections.disclosureText}
            </p>
          </div>
          <VerificationBadge level="VERIFIED" className="text-xs" />
        </div>
      </div>
    </div>
  );
};
