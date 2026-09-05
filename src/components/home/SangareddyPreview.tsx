import React from "react";
import { Link } from "react-router-dom";
import { sangareddyProfile } from "@/data/sangareddy";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../sections/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const SangareddyPreview: React.FC = () => {
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const localizedFacts = [
    {
      label: isTelugu ? "శాసనసభ నియోజకవర్గం" : "Assembly Constituency",
      value: isTelugu ? "సంఖ్య 39" : "No. 39",
      description: isTelugu
        ? "తెలంగాణలోని జనరల్ అసెంబ్లీ నియోజకవర్గం"
        : "Delimited general Assembly constituency in Telangana",
    },
    {
      label: isTelugu ? "ప్రధాన నీటి వనరు" : "Key Water Source",
      value: isTelugu ? "మంజీరా & సింగూరు" : "Manjeera & Singur",
      description: isTelugu
        ? "తాగునీటి సరఫరా మరియు ఆయకట్టు సాగునీటికి జీవనాడి"
        : "Lifeline for local drinking supply and irrigation ayacut",
    },
    {
      label: isTelugu ? "కీలక విద్యా సంస్థ" : "Prominent Landmark",
      value: isTelugu ? "ఐఐటీ హైదరాబాద్ (కంది)" : "IIT Hyderabad (Kandi)",
      description: isTelugu
        ? "నియోజకవర్గ పరిధిలోని ప్రతిష్టాత్మక జాతీయ విద్యాసంస్థ"
        : "Premier national institute situated within the constituency boundaries",
    },
    {
      label: isTelugu ? "వైద్య రంగ మౌలిక వసతి" : "Healthcare Anchor",
      value: isTelugu ? "ప్రభుత్వ మెడికల్ కాలేజీ" : "Govt Medical College",
      description: isTelugu
        ? "సంగారెడ్డిలోని సూపర్ స్పెషాలిటీ బోధనాసుపత్రి"
        : "Tertiary public hospital and medical teaching facility in Sangareddy",
    },
    {
      label: isTelugu ? "రవాణా & ఆర్థిక కారిడార్" : "Highway Corridor",
      value: isTelugu ? "ఎన్‌హెచ్-65 (హైదరాబాద్-పుణె)" : "NH-65 (Hyderabad–Pune)",
      description: isTelugu
        ? "సంగారెడ్డి మీదుగా వెళ్లే ప్రధాన జాతీయ రహదారి"
        : "Major economic lifeline traversing through Sangareddy district",
    },
    {
      label: isTelugu ? "శాసనసభ ప్రాతినిధ్యం" : "Electoral Mandates",
      value: isTelugu ? "3 విడతల ఎమ్మెల్యే" : "3 MLA Terms",
      description: isTelugu
        ? "2004, 2009 మరియు 2018లో జగ్గారెడ్డి విజయం"
        : "Represented by Jagga Reddy in 2004, 2009, and 2018",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F8F6] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <SectionHeading
              overline={t.sangareddy.overline}
              title={isTelugu ? "సంగారెడ్డి: ప్రజా నాయకత్వానికి గుండెకాయ" : "Sangareddy: The Epicentre of Public Leadership"}
              subtitle={t.sangareddy.subtitle}
            />

            <p className="text-base text-gray-700 leading-relaxed mb-6 font-body">
              {isTelugu
                ? "హైదరాబాద్-ముంబై జాతీయ రహదారి (NH-65) వెంట ఉన్న వ్యూహాత్మక నియోజకవర్గం సంగారెడ్డి. మంజీరా పరీవాహక ప్రాంతంలోని వ్యవసాయ నేపథ్యం, కందిలోని ఐఐటీ హైదరాబాద్, పటాన్‌చెరు పారిశ్రామిక అనుసంధానంతో సంప్రదాయ మరియు ఆధునిక తెలంగాణ కలయికగా నిలుస్తుంది."
                : sangareddyProfile.overview}
            </p>

            <div className="space-y-3 mb-8">
              {isTelugu ? (
                <>
                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    జగ్గారెడ్డి ప్రజా ప్రస్థానం సంగారెడ్డితో విడదీయరానిది. 1966లో ఇక్కడే జన్మించి, 1986లో మున్సిపల్ కౌన్సిలర్‌గా ప్రజా సేవ ప్రారంభించారు.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    2004, 2009, 2018లలో మూడుసార్లు శాసనసభ్యునిగా ఎన్నికై స్థానిక తాగునీరు, రహదారులు, ప్రభుత్వ మెడికల్ కాలేజీ సాధన కోసం తీవ్రంగా శ్రమించారు.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-body">
                    ప్రజలకు ఎల్లప్పుడూ అందుబాటులో ఉండే ప్రజా నాయకుడిగా, కార్మికులు, అన్నదాతలు, పేదల పక్షాన గళమెత్తడం ఆయన రాజకీయ వ్యక్తిత్వానికి మూలస్తంభం.
                  </p>
                </>
              ) : (
                sangareddyProfile.connectionNarrative.map((para, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed font-body">
                    {para}
                  </p>
                ))
              )}
            </div>

            <Link
              to="/sangareddy"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-congress-orange hover:bg-primary-hover text-white shadow-xs transition-all"
            >
              <span>{isTelugu ? "నియోజకవర్గ ప్రొఫైల్ & వివరాలు" : "Explore Constituency Profile & Zones"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Key Facts Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localizedFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs hover:border-congress-orange/40 transition-all"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-congress-orange block mb-1">
                    {fact.label}
                  </span>
                  <p className="text-lg font-heading font-extrabold text-gray-950 leading-snug mb-1">
                    {fact.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-body">
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
