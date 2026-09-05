import React from "react";
import { motion } from "framer-motion";
import { ConfidenceLevel } from "@/data/types";
import { VerificationBadge } from "./VerificationBadge";

interface StatCardProps {
  value: string;
  label: string;
  subtext: string;
  confidence?: ConfidenceLevel;
  index?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subtext,
  confidence = "VERIFIED",
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-100 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight">
            {value}
          </span>
          <VerificationBadge level={confidence} showIcon={false} className="text-[10px] px-2 py-0.5" />
        </div>
        <h3 className="text-base font-heading font-semibold text-gray-900 mb-1.5">
          {label}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {subtext}
        </p>
      </div>
    </motion.div>
  );
};
