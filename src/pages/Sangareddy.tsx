import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sangareddyProfile } from "@/data/sangareddy";
import { publicIssuesData } from "@/data/issues";
import { galleryData } from "@/data/gallery";
import { mediaArticlesData } from "@/data/media";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { VerificationBadge } from "@/components/sections/VerificationBadge";
import { IssueCard } from "@/components/sections/IssueCard";
import { MediaCard } from "@/components/sections/MediaCard";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { MapPin, ArrowRight, Maximize2, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Sangareddy: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const { language, isTelugu } = useLanguage();
  const t = translations[language];

  const sangareddyIssues = publicIssuesData.filter(
    (i) => i.category === "Water" || i.category === "Infrastructure" || i.category === "Urban Development"
  );
  const sangareddyPhotos = galleryData.filter(
    (p) => p.category === "Constituency" || p.category === "Public Meetings"
  );
  const sangareddyMedia = mediaArticlesData.filter((m) => m.category === "Sangareddy" || m.category === "Development");

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

  const keyZones = isTelugu
    ? [
        {
          name: "సంగారెడ్డి అర్బన్ మున్సిపాలిటీ",
          focus: "పౌర వసతులు, అండర్ గ్రౌండ్ డ్రైనేజీ, ఆధునిక మార్కెట్ యార్డులు, పట్టణ అంతర్గత రహదారులు",
        },
        {
          name: "కంది మండలం",
          focus: "ఐఐటీ హైదరాబాద్ కారిడార్, ఉన్నత విద్యా కేంద్రం, పారిశ్రామిక రవాణా, ప్రమాద రహిత బైపాస్ కూడళ్లు",
        },
        {
          name: "సదాశివపేట / గ్రామీణ మండలాలు",
          focus: "వ్యవసాయ ప్రాంతాలు, మంజీరా ఆయకట్టు, ధాన్యం కొనుగోలు కేంద్రాలు, గ్రామీణ రైతుల సంక్షేమం",
        },
        {
          name: "కొండాపూర్ మండలం",
          focus: "సాగునీటి కాల్వలు, చెరువుల పునరుద్ధరణ, మంచినీటి సరఫరా మరియు చిన్నకారు రైతుల మద్దతు",
        },
      ]
    : sangareddyProfile.keyZones;

  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-congress-orange">
              {t.sangareddy.overline}
            </span>
            <VerificationBadge level="VERIFIED" className="text-[11px]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
            {t.sangareddy.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-body">
            {t.sangareddy.subtitle}
          </p>
        </div>

        {/* 1. Constituency Overview & Key Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-heading font-bold text-gray-950">
              {t.sangareddy.overviewHeading}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed font-body">
              {isTelugu
                ? "హైదరాబాద్-ముంబై జాతీయ రహదారి (NH-65) వెంట ఉన్న వ్యూహాత్మక నియోజకవర్గం సంగారెడ్డి. మంజీరా పరీవాహక ప్రాంతంలోని వ్యవసాయ నేపథ్యం, కందిలోని ఐఐటీ హైదరాబాద్, పటాన్‌చెరు పారిశ్రామిక అనుసంధానంతో సంప్రదాయ మరియు ఆధునిక తెలంగాణ కలయికగా నిలుస్తుంది."
                : sangareddyProfile.overview}
            </p>
            <div className="space-y-3 font-body">
              {isTelugu ? (
                <>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    జగ్గారెడ్డి ప్రజా ప్రస్థానం సంగారెడ్డితో విడదీయరానిది. 1966లో ఇక్కడే జన్మించి, 1986లో మున్సిపల్ కౌన్సిలర్‌గా ప్రజా సేవ ప్రారంభించారు.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    2004, 2009, 2018లలో మూడుసార్లు శాసనసభ్యునిగా ఎన్నికై స్థానిక తాగునీరు, రహదారులు, ప్రభుత్వ మెడికల్ కాలేజీ సాధన కోసం తీవ్రంగా శ్రమించారు.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ప్రజలకు ఎల్లప్పుడూ అందుబాటులో ఉండే ప్రజా నాయకుడిగా, కార్మికులు, అన్నదాతలు, పేదల పక్షాన గళమెత్తడం ఆయన రాజకీయ వ్యక్తిత్వానికి మూలస్తంభం.
                  </p>
                </>
              ) : (
                sangareddyProfile.connectionNarrative.map((narrative, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    {narrative}
                  </p>
                ))
              )}
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F8F8F6] border border-gray-200 rounded-3xl p-6 sm:p-8">
            <h3 className="text-base font-heading font-bold text-gray-950 mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-congress-orange" /> {t.sangareddy.coordsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localizedFacts.map((fact) => (
                <div key={fact.label} className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs">
                  <span className="text-[10px] font-bold uppercase text-congress-orange block">
                    {fact.label}
                  </span>
                  <span className="text-base font-heading font-extrabold text-gray-950 block mt-0.5">
                    {fact.value}
                  </span>
                  <span className="text-[11px] text-muted-foreground block mt-1 leading-tight font-body">
                    {fact.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Key Mandals & Zones */}
        <div className="mb-20">
          <SectionHeading
            overline={t.sangareddy.zonesOverline}
            title={t.sangareddy.zonesTitle}
            subtitle={t.sangareddy.zonesSubtitle}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyZones.map((zone) => (
              <div
                key={zone.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs hover:border-congress-orange/40 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-congress-lightOrange text-congress-orange flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-base font-heading font-bold text-gray-950 mb-2">
                  {zone.name}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-body">
                  {zone.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Key Issues & Advocacy in Sangareddy */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeading
              overline={t.sangareddy.advocacyOverline}
              title={t.sangareddy.advocacyTitle}
              subtitle={t.sangareddy.advocacySubtitle}
              className="mb-0"
            />
            <Link
              to="/public-service"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-congress-orange hover:underline uppercase tracking-wider"
            >
              <span>{isTelugu ? "అన్ని ప్రజా సేవలు & ఉద్యమాలు" : "Explore All Public Service"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sangareddyIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        </div>

        {/* 4. Constituency Photo Archive */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <SectionHeading
              overline={t.sangareddy.photosOverline}
              title={t.sangareddy.photosTitle}
              subtitle={t.sangareddy.photosSubtitle}
              className="mb-0"
            />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-congress-orange hover:underline uppercase tracking-wider"
            >
              <span>{isTelugu ? "పూర్తి చిత్రమాలిక" : "Complete Photo Gallery"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sangareddyPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxIndex(idx)}
                className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-gray-200 cursor-pointer shadow-xs hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h4 className="text-xs font-heading font-bold text-gray-950 line-clamp-1 group-hover:text-congress-orange transition-colors">
                    {isTelugu && photo.titleTe ? photo.titleTe : photo.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 font-body">
                    {isTelugu && photo.captionTe ? photo.captionTe : photo.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Related Sangareddy Media */}
        <div>
          <SectionHeading
            overline={isTelugu ? "స్థానిక వార్తలు" : "LOCAL REPORTING"}
            title={isTelugu ? "సంగారెడ్డి వార్తలు & అభివృద్ధి నివేదికలు" : "Sangareddy News & Developments"}
            subtitle={isTelugu ? "నియోజకవర్గ సమస్యలు, పర్యటనలపై అధికారిక పత్రికా కథనాలు." : "Documented press reports on constituency interventions and development work."}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sangareddyMedia.map((art) => (
              <MediaCard key={art.id} article={art} />
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox
        photos={sangareddyPhotos}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(idx) => setActiveLightboxIndex(idx)}
      />
    </div>
  );
};
