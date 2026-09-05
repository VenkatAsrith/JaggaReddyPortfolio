import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, isTelugu } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.journey, path: "/political-journey" },
    { label: t.nav.elections, path: "/elections" },
    { label: t.nav.sangareddy, path: "/sangareddy" },
    { label: t.nav.publicService, path: "/public-service" },
    { label: t.nav.media, path: "/media" },
    { label: t.nav.gallery, path: "/gallery" },
    { label: t.nav.contact, path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Subtle Congress Brand Stripe */}
      <div className="congress-stripe fixed top-0 left-0 right-0 z-50" />

      {/* Sticky Header */}
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-200 py-2"
            : "bg-white border-b border-gray-200 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Official Congress Hand Symbol */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-congress-orange rounded-lg p-1"
          >
            {/* Congress Hand Brand Mark */}
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center p-1.5 group-hover:border-congress-orange transition-colors">
              <img
                src="/images/branding/congress-hand.png"
                alt="Indian National Congress Hand Symbol"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-base md:text-lg text-gray-950 tracking-tight leading-tight block group-hover:text-congress-orange transition-colors">
                  {isTelugu ? "జగ్గారెడ్డి" : "JAGGA REDDY"}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-congress-lightOrange text-congress-orange border border-orange-200 uppercase tracking-wider">
                  INC
                </span>
              </div>
              <span className="text-[11px] font-medium text-muted-foreground block -mt-0.5 tracking-wide">
                {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి • కాంగ్రెస్ నాయకులు" : "T. Jayaprakash Reddy • Congress Leader"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.filter(l => l.path !== "/contact").map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2 py-1.5 2xl:px-2.5 rounded-lg text-xs 2xl:text-sm font-semibold whitespace-nowrap transition-all duration-150 relative ${
                    active
                      ? "text-congress-orange font-bold bg-congress-lightOrange"
                      : "text-gray-700 hover:text-gray-950 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-congress-orange rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right: Language Switcher & Contact CTA */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Language Switcher Toggle */}
            <div
              className="inline-flex items-center p-1 rounded-lg border border-gray-200 bg-gray-50 shadow-xs"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                  language === "en"
                    ? "bg-white text-congress-orange shadow-xs border border-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                EN
              </button>
              <span className="text-gray-300 px-0.5">|</span>
              <button
                type="button"
                onClick={() => setLanguage("te")}
                aria-pressed={language === "te"}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                  language === "te"
                    ? "bg-white text-congress-orange shadow-xs border border-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                తెలుగు
              </button>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold btn-congress-saffron focus:outline-none focus:ring-2 focus:ring-congress-orange focus:ring-offset-2"
            >
              <span>{isTelugu ? "ప్రజా సంప్రదింపులు" : "Public Contact"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Controls: Compact Switcher + Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Mobile Header Compact Switcher */}
            <div
              className="inline-flex items-center p-0.5 rounded-md border border-gray-200 bg-gray-50 text-[11px] font-bold"
              role="group"
              aria-label="Language Selector"
            >
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  language === "en"
                    ? "bg-white text-congress-orange shadow-xs font-bold"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                type="button"
                onClick={() => setLanguage("te")}
                className={`px-1.5 py-0.5 rounded transition-all ${
                  language === "te"
                    ? "bg-white text-congress-orange shadow-xs font-bold"
                    : "text-gray-500"
                }`}
              >
                తె
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-congress-orange"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between p-6 animate-in slide-in-from-right duration-250 overflow-y-auto max-h-screen overscroll-contain pb-8"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 p-1.5 flex items-center justify-center">
                    <img
                      src="/images/branding/congress-hand.png"
                      alt="Congress Hand"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-bold text-base text-gray-950 block">
                      {isTelugu ? "జగ్గారెడ్డి" : "JAGGA REDDY"}
                    </span>
                    <span className="text-xs text-muted-foreground block">
                      {isTelugu ? "టి. జయప్రకాశ్ రెడ్డి" : "T. Jayaprakash Reddy"}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-congress-orange"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  {isTelugu ? "భాషను ఎంచుకోండి / Language" : "Select Language / భాష"}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                      language === "en"
                        ? "bg-congress-orange text-white shadow-xs"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("te")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
                      language === "te"
                        ? "bg-congress-orange text-white shadow-xs"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    🇮🇳 తెలుగు
                  </button>
                </div>
              </div>

              {/* Drawer Nav Links */}
              <nav className="mt-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        active
                          ? "bg-congress-lightOrange text-congress-orange font-bold"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-congress-orange" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom CTA */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold btn-congress-saffron shadow-xs"
              >
                <span>{isTelugu ? "నియోజకవర్గ సంప్రదింపులు" : "Constituency Contact"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-congress-green" />
                <span>
                  {isTelugu
                    ? "ఇండియన్ నేషనల్ కాంగ్రెస్ • తెలంగాణ"
                    : "Indian National Congress • Telangana"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
