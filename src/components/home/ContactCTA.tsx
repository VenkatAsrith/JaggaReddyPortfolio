import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const ContactCTA: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-16 md:py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Subtle Congress brand stripe at top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="congress-stripe" />
      </div>

      {/* Subtle Congress Hand Watermark */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <img
          src="/images/branding/congress-hand.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-orange-300 border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-congress-orange" />
            <span>{t.contact.overline}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight mb-4 text-white">
            {isTelugu
              ? "నిరంతర ప్రజా సంప్రదింపులు & ప్రజా సమస్యల పరిష్కారం"
              : "Direct Public Access & Constituency Grievance Redressal"}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 font-body">
            {isTelugu
              ? "జగ్గారెడ్డి ప్రజా నాయకత్వానికి మూలశక్తి నిరంతరం ప్రజలతో మమేకం కావడం. సంగారెడ్డిలోని ప్రజా కార్యాలయం ద్వారా లేదా గాంధీ భవన్ రాష్ట్ర పార్టీ కేంద్రం ద్వారా సంప్రదించవచ్చు."
              : "Jagga Reddy's public leadership is defined by uninterrupted mass contact. Reach out through institutional party offices or during scheduled constituency public grievance interactions in Sangareddy."}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold btn-congress-saffron shadow-md"
            >
              <span>{isTelugu ? "ప్రజా కార్యాలయాలు & సంప్రదింపు వివరాలు" : "Public Contact Details & Office Locations"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/sangareddy"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold btn-congress-green"
            >
              <span>{isTelugu ? "సంగారెడ్డి కార్యాలయ వివరాలు" : "Constituency Office Details"}</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-start gap-2.5 text-xs text-gray-400 font-body">
            <ShieldAlert className="w-4 h-4 text-congress-orange flex-shrink-0 mt-0.5" />
            <p>
              {isTelugu
                ? "గమనిక: అధికారిక వినతులు, ప్రజా సమస్యల నివేదికలు నేరుగా సంబంధిత కాంగ్రెస్ పార్టీ మరియు నియోజకవర్గ కార్యాలయాల ద్వారా స్వీకరించబడతాయి."
                : "Verified representations are handled directly via official party offices and district administrative channels."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
