import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-congress-lightOrange text-congress-orange flex items-center justify-center mx-auto font-heading font-black text-2xl border border-orange-200">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-black text-gray-950 tracking-tight">
          {t.notFound.title}
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed font-body">
          {t.notFound.desc}
        </p>
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-congress-orange hover:bg-primary-hover text-white shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.notFound.btn}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

