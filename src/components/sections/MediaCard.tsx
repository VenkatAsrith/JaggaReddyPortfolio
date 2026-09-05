import React from "react";
import { MediaArticle } from "@/data/types";
import { VerificationBadge } from "./VerificationBadge";
import { ExternalLink, Newspaper, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface MediaCardProps {
  article: MediaArticle;
}

export const MediaCard: React.FC<MediaCardProps> = ({ article }) => {
  const { isTelugu } = useLanguage();
  const title = isTelugu && article.titleTe ? article.titleTe : article.title;
  const summary = isTelugu && article.summaryTe ? article.summaryTe : article.summary;

  return (
    <div className="topnotch-card rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-congress-orange">
            <Newspaper className="w-3.5 h-3.5" />
            {article.publication}
          </span>
          <VerificationBadge level={article.confidence} className="text-[10px]" />
        </div>

        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-950 mb-2 leading-snug hover:text-congress-orange transition-colors">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-start gap-1"
          >
            <span>{title}</span>
          </a>
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 font-body">
          {summary}
        </p>
      </div>

      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {article.date}
        </span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-congress-orange hover:text-primary-hover transition-colors"
        >
          <span>{isTelugu ? "కథనం చదవండి" : "Read Publication"}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
