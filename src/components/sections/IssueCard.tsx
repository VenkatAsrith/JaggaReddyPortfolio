import React from "react";
import { PublicIssue } from "@/data/types";
import { VerificationBadge } from "./VerificationBadge";
import { Droplets, Wheat, Route, Building2, FileCheck, Calendar, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface IssueCardProps {
  issue: PublicIssue;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const { language, isTelugu } = useLanguage();

  const getCategoryIcon = () => {
    switch (issue.category) {
      case "Water":
        return Droplets;
      case "Farmers":
        return Wheat;
      case "Infrastructure":
        return Route;
      case "Urban Development":
        return Building2;
      case "Policy":
      default:
        return FileCheck;
    }
  };

  const getCategoryLabel = () => {
    if (!isTelugu) return issue.category;
    switch (issue.category) {
      case "Water":
        return "నీటి వనరులు & తాగునీరు";
      case "Farmers":
        return "రైతు సంక్షేమం";
      case "Infrastructure":
        return "మౌలిక సదుపాయాలు";
      case "Urban Development":
        return "పట్టణాభివృద్ధి";
      case "Policy":
      default:
        return "విధానపరమైన అంశాలు";
    }
  };

  const Icon = getCategoryIcon();
  const title = isTelugu && issue.titleTe ? issue.titleTe : issue.title;
  const summary = isTelugu && issue.summaryTe ? issue.summaryTe : issue.summary;
  const details = isTelugu && issue.detailsTe ? issue.detailsTe : issue.details;
  const statusNote = isTelugu && issue.statusNoteTe ? issue.statusNoteTe : issue.statusNote;

  return (
    <div className="topnotch-card rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-congress-lightGreen text-congress-green flex items-center justify-center border border-green-200">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-congress-green">
                {getCategoryLabel()}
              </span>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {issue.period}
              </p>
            </div>
          </div>
          <VerificationBadge level={issue.confidence} className="text-[10px]" />
        </div>

        <h3 className="text-lg font-heading font-bold text-gray-950 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed mb-4 font-body">
          {summary}
        </p>

        <div className="space-y-2 mb-4 bg-[#F8F8F6] rounded-xl p-4 border border-gray-100">
          <p className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
            {isTelugu ? "ముఖ్య పోరాటాలు & ప్రాతినిధ్యాలు:" : "Key Representations & Actions:"}
          </p>
          <ul className="space-y-1.5 text-xs text-gray-600 font-body">
            {details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-congress-green font-bold">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-start gap-2 text-[11px] text-muted-foreground font-body">
        <Info className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <span className="font-semibold text-gray-700">
            {isTelugu ? "పరిశీలన నేపథ్యం:" : "Status Context:"}
          </span>{" "}
          {statusNote}
          <div className="text-[10px] text-gray-400 mt-0.5">
            {isTelugu ? "మూలాల రికార్డు:" : "Source indicator:"} {issue.sourceIndicator}
          </div>
        </div>
      </div>
    </div>
  );
};
