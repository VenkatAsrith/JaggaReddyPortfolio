import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  overline,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className={`mb-10 ${align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}
    >
      {overline && (
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-congress-orange" />
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-congress-orange">
            {overline}
          </p>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-gray-950 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-base md:text-lg text-gray-600 leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
