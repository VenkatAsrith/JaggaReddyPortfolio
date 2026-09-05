import React from "react";
import { ConfidenceLevel } from "@/data/types";
import { CheckCircle2, ShieldCheck, FileText, AlertCircle, HelpCircle } from "lucide-react";

interface VerificationBadgeProps {
  level: ConfidenceLevel;
  className?: string;
  showIcon?: boolean;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  level,
  className = "",
  showIcon = true,
}) => {
  const getBadgeConfig = () => {
    switch (level) {
      case "VERIFIED":
        return {
          label: "Verified Record",
          icon: CheckCircle2,
          bg: "bg-emerald-50 text-emerald-800 border-emerald-300",
        };
      case "CORROBORATED":
        return {
          label: "Corroborated",
          icon: ShieldCheck,
          bg: "bg-[#EAF5EF] text-[#046A38] border-[#046A38]/30",
        };
      case "REPORTED":
        return {
          label: "Reported in Media",
          icon: FileText,
          bg: "bg-[#FFF1E9] text-[#FF671F] border-[#FF671F]/30",
        };
      case "SELF-CLAIMED":
        return {
          label: "Self-Claimed / Party Release",
          icon: AlertCircle,
          bg: "bg-amber-50 text-amber-800 border-amber-300",
        };
      case "ALLEGED":
        return {
          label: "Alleged (Historical Record)",
          icon: AlertCircle,
          bg: "bg-stone-100 text-stone-700 border-stone-300",
        };
      case "UNVERIFIED":
      default:
        return {
          label: "Unverified Reference",
          icon: HelpCircle,
          bg: "bg-gray-100 text-gray-700 border-gray-300",
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${config.bg} ${className}`}
      title={`Information Confidence Standard: ${level}`}
    >
      {showIcon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{config.label}</span>
    </span>
  );
};
