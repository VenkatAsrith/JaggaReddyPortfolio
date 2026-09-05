import React, { useState } from "react";
import { socialProfilesData } from "@/data/social";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import {
  MapPin,
  Building,
  AlertCircle,
  ShieldCheck,
  Send,
  ExternalLink,
  Info,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Contact: React.FC = () => {
  const { isTelugu, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = isTelugu ? "పూర్తి పేరు నమోదు చేయాలి." : "Full name is required.";
    }
    if (!formData.email.trim()) {
      errors.email = isTelugu ? "ఈమెయిల్ చిరునామా నమోదు చేయాలి." : "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = isTelugu ? "దయచేసి సరైన ఈమెయిల్ ఇవ్వండి." : "Please enter a valid email address.";
    }
    if (formData.phone && !/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errors.phone = isTelugu ? "దయచేసి సరైన ఫోన్ నంబర్ ఇవ్వండి." : "Please enter a valid telephone number.";
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errors.message = isTelugu
        ? "సందేశం కనీసం 15 అక్షరాలు ఉండాలి."
        : "Message must be at least 15 characters long.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const mailtoSubject = encodeURIComponent(
        `[Public Representation] ${formData.subject || (isTelugu ? "నియోజకవర్గ అంశం" : "Constituency Matter")}`
      );
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:contact@tpcc.org.in?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitted(true);
    }
  };

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.contact.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.contact.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Mandatory Transparency Notice */}
        <div className="mb-12 p-6 rounded-3xl bg-amber-50/70 border border-amber-200 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 font-body">
            <h3 className="text-sm font-heading font-bold text-amber-900">
              {t.contact.noticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
              {t.contact.noticeText}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Office Locations & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F8F8F6] border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-heading font-bold text-gray-950 pb-3 border-b border-gray-200">
                {t.contact.institutionalTitle}
              </h3>

              {/* Sangareddy Constituency Reference */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-congress-orange font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{isTelugu ? "నియోజకవర్గం" : "Constituency Ground"}</span>
                </div>
                <h4 className="text-base font-bold text-gray-950">
                  {t.contact.sangareddyTitle}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  {t.contact.sangareddyDesc}
                </p>
                <p className="text-[11px] text-muted-foreground italic font-body">
                  {t.contact.sangareddyNote}
                </p>
              </div>

              {/* TPCC State Headquarters */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-congress-green font-bold text-xs uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>{isTelugu ? "రాష్ట్ర పార్టీ కేంద్రం" : "State Party Office"}</span>
                </div>
                <h4 className="text-base font-bold text-gray-950">
                  {t.contact.tpccTitle}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  {t.contact.tpccDesc}
                </p>
                <p className="text-[11px] text-muted-foreground italic font-body">
                  {t.contact.tpccNote}
                </p>
              </div>
            </div>

            {/* Social Media & Digital Accounts */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-base font-heading font-bold text-gray-950">
                  {t.contact.digitalTitle}
                </h3>
                <VerificationBadge level="UNVERIFIED" className="text-[10px]" />
              </div>

              <div className="space-y-3.5">
                {socialProfilesData.map((social) => (
                  <div key={social.platform} className="p-4 rounded-2xl bg-[#F8F8F6] border border-gray-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-950">
                        {social.platform}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gray-200 text-gray-700">
                        {isTelugu ? (social.isVerifiedOfficial ? "ధృవీకరించబడిన ఆర్కైవ్" : "గుర్తింపు పొందిన ఖాతా") : social.statusLabel}
                      </span>
                    </div>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-congress-orange hover:underline pt-1"
                    >
                      <span>{social.handle}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <p className="text-[11px] text-muted-foreground leading-relaxed pt-1 font-body">
                      {isTelugu
                        ? (social.isVerifiedOfficial
                          ? "బహిరంగ ప్రసంగాలు, న్యూస్ ఛానల్ ఆర్కైవ్ మరియు శాసనసభ ప్రసంగాలు."
                          : "మీడియా సర్కిల్‌లలో గుర్తించబడిన ఖాతా; అధికారికంగా సర్టిఫై చేయబడిన హ్యాండిల్ కాదు.")
                        : social.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Public Representation Message Form */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xs">
            <h3 className="text-xl font-heading font-bold text-gray-950 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 font-body">
              {t.contact.formDesc}
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-2xl bg-congress-lightGreen border border-green-200 text-congress-green text-xs sm:text-sm flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="font-body">
                  <p className="font-bold">{t.contact.formSuccessTitle}</p>
                  <p className="text-xs mt-0.5">
                    {t.contact.formSuccessDesc}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isTelugu ? "ఉదా: రమేష్ కుమార్" : "e.g. Ramesh Kumar"}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-congress-orange ${
                      formErrors.name ? "border-red-400 bg-red-50/20" : "border-gray-200"
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={isTelugu ? "ఉదా: ramesh@example.com" : "e.g. ramesh@example.com"}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-congress-orange ${
                      formErrors.email ? "border-red-400 bg-red-50/20" : "border-gray-200"
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-congress-orange ${
                      formErrors.phone ? "border-red-400 bg-red-50/20" : "border-gray-200"
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isTelugu ? "ఉదా: తాగునీరు / ప్రజా సమస్య" : "e.g. Drinking Water / Civic Grievance"}
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-congress-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    isTelugu
                      ? "మీ నియోజకవర్గ వినతి, గ్రామం/మండలం పేరు మరియు పూర్తి వివరాలు నమోదు చేయండి..."
                      : "Describe your constituency representation, village/mandal location, and details..."
                  }
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-congress-orange ${
                    formErrors.message ? "border-red-400 bg-red-50/20" : "border-gray-200"
                  }`}
                />
                {formErrors.message && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold btn-congress-saffron shadow-xs focus:ring-2 focus:ring-congress-orange"
              >
                <span>{t.contact.submitBtn}</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="pt-4 border-t border-gray-100 flex items-start gap-2 text-[11px] text-muted-foreground">
                <Info className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span>{t.contact.privacyNotice}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

