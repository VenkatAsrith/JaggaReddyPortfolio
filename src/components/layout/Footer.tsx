import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { socialProfilesData } from "@/data/social";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Footer: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#111111] text-gray-300 border-t border-gray-800">
      {/* Subtle top Congress stripe */}
      <div className="congress-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Profile & Congress Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center border border-gray-700 shadow-xs">
                <img
                  src="/images/branding/congress-hand.png"
                  alt="Congress Hand Symbol"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-base text-white tracking-tight">
                  {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి" : "T. JAYAPRAKASH REDDY"}
                </h3>
                <p className="text-xs text-congress-orange font-bold tracking-wider">
                  {isTelugu ? "జగ్గారెడ్డి" : "JAGGA REDDY"}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-900 border border-gray-800 text-[11px] text-gray-400">
              <span className="w-2 h-2 rounded-full bg-congress-green" />
              <span>{t.footer.badgeText}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "జీవిత చరిత్ర & వివరాలు" : "Biography & Profile"}
                </Link>
              </li>
              <li>
                <Link to="/political-journey" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "రాజకీయ ప్రస్థానం (1986 – ప్రస్తుత)" : "Political Journey (1986 – Present)"}
                </Link>
              </li>
              <li>
                <Link to="/elections" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "ఎన్నికల రికార్డు & విశ్లేషణ" : "Electoral Record & Analysis"}
                </Link>
              </li>
              <li>
                <Link to="/sangareddy" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "సంగారెడ్డి నియోజకవర్గం (AC నెం. 39)" : "Sangareddy Constituency (AC No. 39)"}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "చిత్రమాలిక & ఆర్కైవ్" : "Photo Archive & Gallery"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Public Service Focus */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.serviceTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/public-service" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "మంజీరా & సింగూరు జలాల ఉద్యమం" : "Manjeera & Singur Water Advocacy"}
                </Link>
              </li>
              <li>
                <Link to="/public-service" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "రైతు సంక్షేమం & ధాన్యం కొనుగోళ్లు" : "Farmer Welfare & Crop Procurement"}
                </Link>
              </li>
              <li>
                <Link to="/public-service" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "సంగారెడ్డి రహదారులు & మౌలిక వసతులు" : "Sangareddy Highway & Civic Works"}
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "మీడియా & పత్రికా నివేదికలు" : "Media Reports & News Coverage"}
                </Link>
              </li>
              <li>
                <Link to="/speeches" className="hover:text-congress-orange transition-colors">
                  {isTelugu ? "అసెంబ్లీ ప్రసంగాలు & ప్రెస్ మీట్లు" : "Assembly Speeches & Press Meets"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-gray-800 pb-2">
              {t.footer.officeTitle}
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-congress-orange mt-0.5 flex-shrink-0" />
                <span>
                  {isTelugu
                    ? "సంగారెడ్డి, తెలంగాణ — 502001 / గాంధీ భవన్, హైదరాబాద్"
                    : "Sangareddy, Telangana — 502001 / TPCC HQ, Gandhi Bhavan, Hyderabad"}
                </span>
              </p>
              <div className="pt-2 border-t border-gray-800 space-y-2">
                <p className="text-[11px] font-semibold text-gray-300">
                  {isTelugu ? "అధికారిక సోషల్ మీడియా:" : "Public Accounts:"}
                </p>
                {socialProfilesData.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-400 hover:text-congress-orange transition-colors py-0.5"
                  >
                    <span>{social.handle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t.footer.copyright}</p>
          <p className="text-[11px] text-gray-500 text-center sm:text-right">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
