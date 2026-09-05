import React from "react";
import { ElectionRecord } from "@/data/types";
import { VerificationBadge } from "./VerificationBadge";
import { Award, Vote, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface ElectionCardProps {
  election: ElectionRecord;
}

export const ElectionCard: React.FC<ElectionCardProps> = ({ election }) => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];
  const isWon = election.result === "Won";

  return (
    <div className="topnotch-card rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <span className="text-2xl sm:text-3xl font-heading font-black text-gray-950">
              {election.year}
            </span>
            <p className="text-xs font-bold text-congress-orange uppercase tracking-wider mt-0.5">
              {isTelugu && election.electionTypeTe ? election.electionTypeTe : election.electionType}
            </p>
          </div>
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isWon
                ? "bg-congress-lightGreen text-congress-green border border-green-200"
                : "bg-gray-100 text-gray-700 border border-gray-200"
            }`}
          >
            {isWon && <Award className="w-3.5 h-3.5" />}
            {isWon ? (isTelugu ? "విజయం" : "Won") : (isTelugu ? "ఓటమి" : "Lost")}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-sm font-bold text-gray-900">
            {isTelugu && election.constituencyTe ? election.constituencyTe : election.constituency}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            {isTelugu ? "పార్టీ:" : "Party:"}{" "}
            <span className="font-semibold text-gray-800">
              {isTelugu && election.partyTe ? election.partyTe : election.party}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 mb-4 bg-[#F8F8F6] rounded-xl px-3.5">
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider flex items-center gap-1 font-semibold">
              <Vote className="w-3 h-3 text-congress-orange" />{" "}
              {isTelugu ? "సాధించిన ఓట్లు" : "Votes Secured"}
            </p>
            <p className="text-base font-extrabold text-gray-950 mt-0.5">
              {election.votes.toLocaleString()}
            </p>
            {election.votePercentage && (
              <p className="text-[11px] text-muted-foreground">
                ({election.votePercentage}% {isTelugu ? "ఓట్ల వాటా" : "vote share"})
              </p>
            )}
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider flex items-center gap-1 font-semibold">
              <TrendingUp className="w-3 h-3 text-congress-green" />{" "}
              {isWon
                ? (isTelugu ? "విజయ మెజారిటీ" : "Victory Margin")
                : (isTelugu ? "ఓట్ల తేడా" : "Deficit Margin")}
            </p>
            <p className={`text-base font-extrabold mt-0.5 ${isWon ? "text-congress-green" : "text-gray-700"}`}>
              {isWon ? `+${election.margin.toLocaleString()}` : `-${election.margin.toLocaleString()}`}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {isTelugu ? "ప్రత్యర్థి:" : "vs"}{" "}
              {isTelugu && election.opponentPartyTe ? election.opponentPartyTe : election.opponentParty}
            </p>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-gray-600 mb-4">
          <p className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <span>
              {isTelugu ? "ప్రధాన ప్రత్యర్థి:" : "Contender:"}{" "}
              <strong>{isTelugu && election.opponentTe ? election.opponentTe : election.opponent}</strong> (
              {isTelugu && election.opponentPartyTe ? election.opponentPartyTe : election.opponentParty} —{" "}
              {election.opponentVotes.toLocaleString()} {isTelugu ? "ఓట్లు" : "votes"})
            </span>
          </p>
          <p className="italic text-gray-700 leading-relaxed pt-1 font-body">
            "{isTelugu && election.significanceTe ? election.significanceTe : election.significance}"
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{isTelugu ? "మూలం:" : "Source:"} {election.source}</span>
        <VerificationBadge level={election.confidence} className="text-[10px]" />
      </div>
    </div>
  );
};
