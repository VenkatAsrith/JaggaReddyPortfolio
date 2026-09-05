import React, { useState } from "react";
import { mediaArticlesData } from "@/data/media";
import { MediaCard } from "@/components/sections/MediaCard";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { Filter, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Media: React.FC = () => {
  const { isTelugu, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { key: "All", label: isTelugu ? t.categories.all : "All" },
    { key: "Politics", label: isTelugu ? t.categories.politics : "Politics" },
    { key: "Sangareddy", label: isTelugu ? t.categories.sangareddy : "Sangareddy" },
    { key: "Development", label: isTelugu ? t.categories.development : "Development" },
    { key: "Press Meet", label: isTelugu ? t.categories.pressMeet : "Press Meet" },
    { key: "Legal", label: isTelugu ? t.categories.legal : "Legal" },
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? mediaArticlesData
      : mediaArticlesData.filter((a) => a.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.media.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.media.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.media.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-congress-orange" /> {t.media.filterCategory}
          </div>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.key
                  ? "bg-congress-orange text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArticles.map((article) => (
            <MediaCard key={article.id} article={article} />
          ))}
        </div>

        {/* Editorial Disclosure Note */}
        <div className="p-6 rounded-3xl bg-[#F8F8F6] border border-gray-200 flex items-start gap-3 text-xs text-muted-foreground font-body">
          <ShieldCheck className="w-4 h-4 text-congress-green flex-shrink-0 mt-0.5" />
          <p>{t.media.disclosureText}</p>
        </div>
      </div>
    </div>
  );
};

