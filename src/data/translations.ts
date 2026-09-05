export interface Translations {
  nav: {
    home: string;
    about: string;
    journey: string;
    elections: string;
    sangareddy: string;
    publicService: string;
    media: string;
    gallery: string;
    contact: string;
  };
  hero: {
    congressParty: string;
    publicLeadership: string;
    verifiedBadge: string;
    name: string;
    popularName: string;
    role1: string;
    role2: string;
    summary: string;
    exploreJourney: string;
    publicServiceCta: string;
    portraitLabel: string;
    leadershipAnchor: string;
    stats: {
      mlaTerms: string;
      contests: string;
      victories: string;
      beginnings: string;
    };
  };
  quickFacts: {
    title: string;
    subtitle: string;
    labels: {
      fullName: string;
      knownAs: string;
      dob: string;
      party: string;
      constituency: string;
      office: string;
      terms: string;
      start: string;
    };
    values: {
      fullName: string;
      knownAs: string;
      dob: string;
      party: string;
      constituency: string;
      office: string;
      terms: string;
      start: string;
    };
  };
  about: {
    overline: string;
    title: string;
    subtitle: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    readFull: string;
    connectionBtn: string;
    sec1Title: string;
    sec1Text1: string;
    sec1Text2: string;
    sec2Title: string;
    sec2Text1: string;
    sec2Text2: string;
    sec2Text3: string;
    sec3Title: string;
    sec3Text1: string;
    sec3Text2: string;
    legalTitle: string;
    legalText: string;
    legalSource: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  journey: {
    overline: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    viewAllBtn: string;
    allSphere: string;
    bottomBannerTitle: string;
    bottomBannerDesc: string;
    bottomBannerBtn: string;
  };
  elections: {
    overline: string;
    title: string;
    subtitle: string;
    contestsCount: string;
    winsCount: string;
    lossesCount: string;
    highestMargin: string;
    tableView: string;
    cardView: string;
    colYear: string;
    colContest: string;
    colParty: string;
    colVotes: string;
    colVoteShare: string;
    colResult: string;
    colMargin: string;
    colOpponent: string;
    wonBadge: string;
    lostBadge: string;
    disclosureTitle: string;
    disclosureText: string;
  };
  sangareddy: {
    overline: string;
    title: string;
    subtitle: string;
    overviewHeading: string;
    coordsHeading: string;
    zonesOverline: string;
    zonesTitle: string;
    zonesSubtitle: string;
    advocacyOverline: string;
    advocacyTitle: string;
    advocacySubtitle: string;
    photosOverline: string;
    photosTitle: string;
    photosSubtitle: string;
  };
  publicService: {
    overline: string;
    title: string;
    subtitle: string;
    ethicsBannerTitle: string;
    ethicsBannerText: string;
    filterSector: string;
    caseStudyOverline: string;
    caseStudyTitle: string;
    caseStudyContextTitle: string;
    caseStudyContextText: string;
    caseStudyStatusTitle: string;
    caseStudyStatusText: string;
    caseStudyImpactTitle: string;
    caseStudyImpactText: string;
    submitGrievanceTitle: string;
    submitGrievanceDesc: string;
    submitGrievanceBtn: string;
  };
  media: {
    overline: string;
    title: string;
    subtitle: string;
    filterCategory: string;
    readPublication: string;
    disclosureText: string;
  };
  speeches: {
    overline: string;
    title: string;
    subtitle: string;
    featuredBadge: string;
    watchBtn: string;
    keyPointsTitle: string;
    disclosureTitle: string;
    disclosureText: string;
  };
  gallery: {
    overline: string;
    title: string;
    subtitle: string;
    filterCollection: string;
    credit: string;
    disclaimer: string;
  };
  contact: {
    overline: string;
    title: string;
    subtitle: string;
    noticeTitle: string;
    noticeText: string;
    institutionalTitle: string;
    sangareddyTitle: string;
    sangareddyDesc: string;
    sangareddyNote: string;
    tpccTitle: string;
    tpccDesc: string;
    tpccNote: string;
    digitalTitle: string;
    formTitle: string;
    formDesc: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    privacyNotice: string;
  };
  footer: {
    desc: string;
    badgeText: string;
    quickLinksTitle: string;
    serviceTitle: string;
    officeTitle: string;
    copyright: string;
    disclaimer: string;
  };
  notFound: {
    title: string;
    desc: string;
    btn: string;
  };
  categories: {
    all: string;
    water: string;
    farmers: string;
    infrastructure: string;
    urbanDev: string;
    policy: string;
    politics: string;
    sangareddy: string;
    development: string;
    pressMeet: string;
    legal: string;
    portraits: string;
    assembly: string;
    publicMeetings: string;
    campaigns: string;
    constituency: string;
  };
}

export const translations: Record<"en" | "te", Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      journey: "Journey",
      elections: "Elections",
      sangareddy: "Sangareddy",
      publicService: "Public Service",
      media: "Media",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      congressParty: "INDIAN NATIONAL CONGRESS",
      publicLeadership: "PUBLIC LEADERSHIP",
      verifiedBadge: "Verified Record",
      name: "T. Jayaprakash Reddy",
      popularName: '"Jagga Reddy"',
      role1: "Working President, Telangana Pradesh Congress Committee (TPCC)",
      role2: "Three-Term Former MLA — Sangareddy Constituency (AC No. 39)",
      summary:
        "T. Jayaprakash Reddy, popularly known as Jagga Reddy, is a senior political leader in Telangana and the Working President of the Telangana Pradesh Congress Committee. Beginning his public service in 1986 as a local municipal councillor, he has represented the Sangareddy Assembly constituency for three terms as an MLA.",
      exploreJourney: "Explore Political Journey",
      publicServiceCta: "Public Service & Issues",
      portraitLabel: "Official Leadership Profile",
      leadershipAnchor: "TPCC Working President",
      stats: {
        mlaTerms: "MLA Terms",
        contests: "Recorded Contests",
        victories: "Assembly Victories",
        beginnings: "Political Beginnings",
      },
    },
    quickFacts: {
      title: "Quick Factual Record",
      subtitle: "Leadership Dossier",
      labels: {
        fullName: "Full Name",
        knownAs: "Commonly Known As",
        dob: "Date of Birth",
        party: "Political Party",
        constituency: "Primary Constituency",
        office: "Current Office",
        terms: "Assembly Terms",
        start: "Public Service Start",
      },
      values: {
        fullName: "T. Jayaprakash Reddy",
        knownAs: "Jagga Reddy",
        dob: "7 July 1966",
        party: "Indian National Congress",
        constituency: "Sangareddy (AC No. 39)",
        office: "Working President, TPCC",
        terms: "2004, 2009, 2018 (3 Terms)",
        start: "1986 (Municipal Councillor)",
      },
    },
    about: {
      overline: "BIOGRAPHICAL PROFILE",
      title: "A Public Life Shaped by Politics, Constituency Work and Public Issues",
      subtitle:
        "From Sangareddy municipal councillor in 1986 to legislative representation and TPCC state leadership.",
      bioP1:
        "Born on July 7, 1966 in Sangareddy, T. Jayaprakash Reddy entered grassroots public service at an early age. In 1986, he was elected as a municipal councillor in the Sangareddy municipality, establishing an intimate connection with local civic matters, municipal workers, and citizen grievances.",
      bioP2:
        "His legislative career commenced in the 2004 Andhra Pradesh Assembly elections when he won the Sangareddy seat. He consolidated his legislative standing with a decisive re-election in 2009 representing the Indian National Congress. During his second term, he served as the Government Whip in the Andhra Pradesh Legislative Assembly in 2012, coordinating legislative strategy and floor operations.",
      bioP3:
        "In 2018, amid intense political realignment in the newly formed state of Telangana, he secured his third victory from Sangareddy, demonstrating resilient personal voter support. In 2021, recognizing his organizational stature and grassroots mobilization capability, the Congress high command appointed him Working President of the Telangana Pradesh Congress Committee (TPCC).",
      readFull: "Read Full Profile",
      connectionBtn: "Sangareddy Connection",
      sec1Title: "1. Early Life & Political Beginnings (1966 – 2003)",
      sec1Text1:
        "T. Jayaprakash Reddy, widely known by his popular moniker Jagga Reddy, was born on July 7, 1966 in Sangareddy town, in what was formerly Medak district and is today the district headquarters of Sangareddy, Telangana.",
      sec1Text2:
        "His political journey commenced in the local civic sphere. In 1986, at the age of twenty, he was elected as a Municipal Councillor in the Sangareddy Municipality. Serving at the municipal tier gave him firsthand insight into local civic governance, municipal workers' welfare, sanitation challenges, and the daily struggles of town residents.",
      sec2Title: "2. Legislative Career & Three Assembly Mandates",
      sec2Text1:
        "In 2004, Jagga Reddy made his debut in state legislative politics by contesting the Sangareddy Assembly seat. He secured a decisive victory with 51,101 votes, defeating multi-term incumbent K. Satyanarayana by a margin of 16,427 votes to enter the 12th Andhra Pradesh Legislative Assembly.",
      sec2Text2:
        "In 2009, he was re-elected from Sangareddy as a candidate of the Indian National Congress, securing 60,375 votes. Recognizing his legislative acumen and floor coordination capabilities, the government appointed him as the Government Whip in the Andhra Pradesh Legislative Assembly in 2012.",
      sec2Text3:
        "In 2018, amidst widespread political transitions following the creation of Telangana, Jagga Reddy achieved a remarkable political comeback. Contesting on the Congress ticket, he reclaimed Sangareddy with 76,572 votes, defeating the ruling party candidate in one of the most closely watched assembly races in the state.",
      sec3Title: "3. TPCC Working President & State Politics",
      sec3Text1:
        "In June 2021, the All India Congress Committee (AICC) appointed Jagga Reddy as Working President of the Telangana Pradesh Congress Committee (TPCC). In this capacity, he has been responsible for steering organizational strategy, conducting grassroots reviews across districts, leading high-level press conferences at Gandhi Bhavan, and coordinating with senior state and central leadership.",
      sec3Text2:
        "His political philosophy continues to emphasize direct public contact, regular open grievance darbars, and unapologetic advocacy for Sangareddy's fair share in state water and industrial infrastructure.",
      legalTitle: "Legal Record (Verified Factual Documentation)",
      legalText:
        "The public research dossier records a case registered in 2018 in which Jagga Reddy was named as an accused regarding allegations dating back to 2004. On March 26, 2026, the Special Sessions Court for the Trial of MPs and MLAs in Nampally, Hyderabad, delivered its verdict finding him not guilty and acquitted him of all charges, concluding that the prosecution failed to substantiate the allegations with sufficient evidence.",
      legalSource:
        "Documented per official judicial proceedings and reported by The New Indian Express, Deccan Chronicle, and Times of India.",
      ctaTitle: "Explore the Decade-by-Decade Journey",
      ctaDesc: "Review every milestone from 1986 municipal elections to present day leadership.",
      ctaBtn: "View Timeline",
    },
    journey: {
      overline: "HISTORICAL TIMELINE",
      title: "Political Journey & Key Milestones",
      subtitle:
        "From his 1986 entry into municipal governance to three assembly terms and statewide leadership in the Telangana Pradesh Congress Committee.",
      filterLabel: "Filter by Sphere:",
      viewAllBtn: "View Full Timeline",
      allSphere: "All",
      bottomBannerTitle: "Examine the Complete Electoral Record",
      bottomBannerDesc:
        "Detailed statistics for 2004, 2009, 2014, 2018, and 2023 with vote counts and margins.",
      bottomBannerBtn: "View Elections Page",
    },
    elections: {
      overline: "ELECTORAL RECORD",
      title: "Electoral Contests & Legislative Mandates",
      subtitle:
        "A factual overview of electoral contests and Assembly representation across five general elections and one parliamentary by-election.",
      contestsCount: "Total Recorded Contests",
      winsCount: "Assembly Victories",
      lossesCount: "Electoral Deficits",
      highestMargin: "Highest Margin (2004)",
      tableView: "Table View",
      cardView: "Card Grid",
      colYear: "Year",
      colContest: "Election & Constituency",
      colParty: "Party",
      colVotes: "Votes",
      colVoteShare: "Vote %",
      colResult: "Result",
      colMargin: "Margin",
      colOpponent: "Key Runner-Up / Opponent",
      wonBadge: "Won",
      lostBadge: "Lost",
      disclosureTitle: "Factual & Informational Disclosure:",
      disclosureText:
        "Election figures reflect documented official returns from the Election Commission of India (ECI) for the Sangareddy Assembly Constituency (AC No. 39) and Medak Parliamentary Constituency.",
    },
    sangareddy: {
      overline: "CONSTITUENCY PROFILE",
      title: "Sangareddy (AC No. 39)",
      subtitle:
        "The constituency at the centre of Jagga Reddy's political journey: from municipal councillor in 1986 to three legislative assembly mandates.",
      overviewHeading: "Overview & Strategic Significance",
      coordsHeading: "Key Constituency Coordinates",
      zonesOverline: "GEOGRAPHIC ZONES",
      zonesTitle: "Constituency Mandals & Representation Focus",
      zonesSubtitle:
        "Diverse representation encompassing urban municipal wards, premier educational institutes, and agrarian river basins.",
      advocacyOverline: "LOCAL ADVOCACY",
      advocacyTitle: "Public Issues Raised for Sangareddy",
      advocacySubtitle: "Drinking water security from Singur, highway expansion, and municipal upgrades.",
      photosOverline: "FIELD ARCHIVE",
      photosTitle: "Sangareddy in Pictures",
      photosSubtitle: "On-ground public meetings, canal inspections, and citizen assemblies.",
    },
    publicService: {
      overline: "PUBLIC SERVICE & ISSUES",
      title: "Public Issues & Development Advocacy",
      subtitle:
        "A transparent catalog of grassroots representations, legislative demands, and public service initiatives in Sangareddy, classified by factual confidence standards.",
      ethicsBannerTitle: "Responsible Presentation of Development Claims",
      ethicsBannerText:
        "Unlike generic political portals that present every initiative as an undisputed personal triumph, this profile strictly differentiates between Officially Documented Records, Corroborated Public Agitations, and Self-Claimed Constituency Sanctions.",
      filterSector: "Filter by Sector:",
      caseStudyOverline: "CASE STUDY: DEVELOPMENT INITIATIVE",
      caseStudyTitle: "Sangareddy – Patancheru Road Widening Project",
      caseStudyContextTitle: "Initiative Context",
      caseStudyContextText:
        "Four-lane expansion of the high-density highway linking Sangareddy district headquarters to the industrial hub of Patancheru and the outer ring road.",
      caseStudyStatusTitle: "Documentation Status",
      caseStudyStatusText:
        "Classified as Self-Claimed / Reported. Legislative sanction requests and budgetary advocacy during his tenure as MLA and Government Whip are on record; total project implementation involved multiple state and central agencies.",
      caseStudyImpactTitle: "Current Impact",
      caseStudyImpactText:
        "Facilitates daily commute for thousands of industrial workers, university students from IIT Hyderabad, and freight transport towards Mumbai highway (NH-65).",
      submitGrievanceTitle: "Submit Public Grievances or Community Memorandums",
      submitGrievanceDesc:
        "Citizens and village welfare associations can review public contact points and office visiting schedules.",
      submitGrievanceBtn: "Public Contact Details",
    },
    media: {
      overline: "MEDIA & PRESS ARCHIVE",
      title: "News Coverage & Media Statements",
      subtitle:
        "Documented reportage from national and regional newspapers covering legislative interventions, constituency developments, and press briefings.",
      filterCategory: "Filter Category:",
      readPublication: "Read Publication",
      disclosureText:
        "All news articles cite documented publications (including The Hindu, Times of India, Deccan Chronicle, and Telangana Today). Links redirect to external publications in a secure browsing environment with safe referrer policies.",
    },
    speeches: {
      overline: "SPEECHES & BROADCAST ARCHIVE",
      title: "Legislative Speeches & Press Meets",
      subtitle:
        "Curated video addresses, Telangana Assembly interventions on water and agriculture, and official TPCC media conferences at Gandhi Bhavan.",
      featuredBadge: "Featured Briefing",
      watchBtn: "Watch on YouTube",
      keyPointsTitle: "Key Highlights & Arguments:",
      disclosureTitle: "Media Archive Transparency:",
      disclosureText:
        "Speeches and media interactions link to publicly hosted broadcasts and documented television news reports. If any external recording is temporarily unavailable on third-party servers, summary transcripts and key arguments remain accessible above.",
    },
    gallery: {
      overline: "VISUAL ARCHIVE",
      title: "Photo Archive & Public Chronicle",
      subtitle:
        "Curated photographic record capturing official portraits, legislative proceedings, public meetings, constituency inspections, and grassroots campaigns.",
      filterCollection: "Filter Collection:",
      credit: "Credit / Attribution:",
      disclaimer:
        "Photographs and visual chronicle representations adhere to verified public media licensing guidelines. The primary portrait photograph is an authentic official photograph of T. Jayaprakash Reddy (Jagga Reddy).",
    },
    contact: {
      overline: "PUBLIC ENGAGEMENT",
      title: "Public Office & Contact Reference",
      subtitle:
        "Transparent information regarding constituency representations, institutional party headquarters, and verified public channels.",
      noticeTitle: "Verified Public Registry Notice",
      noticeText:
        "Official personal phone numbers and direct private email addresses are not published in available verified research sources. To maintain factual integrity and public security, representations are received through the institutional party offices or during scheduled constituency meetings.",
      institutionalTitle: "Institutional Locations",
      sangareddyTitle: "Sangareddy Camp & Public Grievance Reference",
      sangareddyDesc: "Sangareddy Town, Sangareddy District, Telangana — 502001.",
      sangareddyNote:
        "Public grievance darbars and cadre interactions are scheduled periodically at the local constituency office.",
      tpccTitle: "Telangana Pradesh Congress Committee (TPCC)",
      tpccDesc: "Gandhi Bhavan, Nampally, Hyderabad, Telangana — 500001.",
      tpccNote:
        "Office of the Working President, TPCC. Media briefings and state-level party delegations meet here.",
      digitalTitle: "Digital & Social Presence",
      formTitle: "Constituency Grievance & Memorandum Form",
      formDesc:
        "Complete this structured memorandum. When submitted, this generates a pre-formatted email dispatch for your records or direct submission to party secretariats.",
      formSuccessTitle: "Email Client Dispatched",
      formSuccessDesc:
        "Your email client has opened with your formatted memorandum. You may also print this memorandum for physical submission at Gandhi Bhavan or Sangareddy.",
      nameLabel: "Your Full Name *",
      emailLabel: "Email Address *",
      phoneLabel: "Contact Phone Number (Optional)",
      subjectLabel: "Subject / Category",
      messageLabel: "Detailed Representation / Message *",
      submitBtn: "Format & Dispatch Memorandum",
      privacyNotice:
        "Notice: No backend database stores sensitive citizen details on this public information profile. Submissions are processed directly via your trusted local email application.",
    },
    footer: {
      desc:
        "Senior Indian National Congress leader, Working President of TPCC, and three-term former Member of Legislative Assembly (MLA) from Sangareddy (2004, 2009, 2018).",
      badgeText: "Public Life • Sangareddy • Congress",
      quickLinksTitle: "Quick Links",
      serviceTitle: "Public Service Focus",
      officeTitle: "Office & Public Channels",
      copyright: "© 2026 T. Jayaprakash Reddy (Jagga Reddy). All rights reserved.",
      disclaimer: "Official Digital Profile • Indian National Congress • Telangana",
    },
    notFound: {
      title: "Page Not Found",
      desc: "The requested address could not be located in this public profile. Please use the navigation menu or return to the homepage.",
      btn: "Return Home",
    },
    categories: {
      all: "All",
      water: "Water",
      farmers: "Farmers",
      infrastructure: "Infrastructure",
      urbanDev: "Urban Development",
      policy: "Policy",
      politics: "Politics",
      sangareddy: "Sangareddy",
      development: "Development",
      pressMeet: "Press Meet",
      legal: "Legal",
      portraits: "Portraits",
      assembly: "Assembly",
      publicMeetings: "Public Meetings",
      campaigns: "Campaigns",
      constituency: "Constituency",
    },
  },
  te: {
    nav: {
      home: "హోమ్",
      about: "గురించి",
      journey: "ప్రస్థానం",
      elections: "ఎన్నికలు",
      sangareddy: "సంగారెడ్డి",
      publicService: "ప్రజా సేవ",
      media: "మీడియా",
      gallery: "గ్యాలరీ",
      contact: "సంప్రదించండి",
    },
    hero: {
      congressParty: "ఇండియన్ నేషనల్ కాంగ్రెస్",
      publicLeadership: "ప్రజా నాయకత్వం",
      verifiedBadge: "ధృవీకరించబడిన రికార్డు",
      name: "టి. జయప్రకాశ్ రెడ్డి",
      popularName: '"జగ్గారెడ్డి"',
      role1: "వర్కింగ్ ప్రెసిడెంట్, తెలంగాణ ప్రదేశ్ కాంగ్రెస్ కమిటీ (TPCC)",
      role2: "మూడుసార్లు మాజీ ఎమ్మెల్యే — సంగారెడ్డి నియోజకవర్గం (AC No. 39)",
      summary:
        "టి. జయప్రకాశ్ రెడ్డి (జగ్గారెడ్డి) తెలంగాణ రాజకీయాల్లో సీనియర్ ప్రజా నాయకుడు, టీపీసీసీ వర్కింగ్ ప్రెసిడెంట్. 1986లో స్థానిక కౌన్సిలర్‌గా ప్రజా ప్రస్థానం ఆరంభించి, సంగారెడ్డి శాసనసభ నియోజకవర్గం నుండి మూడు దశాబ్దాలుగా ప్రజా మద్దతుతో మూడుసార్లు శాసనసభ్యునిగా ఎన్నికయ్యారు.",
      exploreJourney: "రాజకీయ ప్రస్థానం పరిశీలించండి",
      publicServiceCta: "ప్రజా సేవ & ప్రజా సమస్యలు",
      portraitLabel: "అధికారిక ప్రజా నాయకత్వ ప్రొఫైల్",
      leadershipAnchor: "టీపీసీసీ వర్కింగ్ ప్రెసిడెంట్",
      stats: {
        mlaTerms: "శాసనసభ పదవీకాలాలు",
        contests: "ఎన్నికల పోటీలు",
        victories: "అసెంబ్లీ విజయాలు",
        beginnings: "రాజకీయ ఆరంభం",
      },
    },
    quickFacts: {
      title: "ముఖ్య వాస్తవిక వివరాలు",
      subtitle: "నాయకత్వ విశేషాలు",
      labels: {
        fullName: "పూర్తి పేరు",
        knownAs: "ప్రజాదరణ పొందిన పేరు",
        dob: "జన్మదినం",
        party: "రాజకీయ పార్టీ",
        constituency: "ప్రాతినిధ్య నియోజకవర్గం",
        office: "ప్రస్తుత బాధ్యత",
        terms: "ఎమ్మెల్యే పదవీకాలాలు",
        start: "ప్రజా జీవిత ఆరంభం",
      },
      values: {
        fullName: "తుర్పు జయప్రకాశ్ రెడ్డి",
        knownAs: "జగ్గారెడ్డి",
        dob: "7 జూలై 1966",
        party: "ఇండియన్ నేషనల్ కాంగ్రెస్ (INC)",
        constituency: "సంగారెడ్డి (నియోజకవర్గం సంఖ్య 39)",
        office: "వర్కింగ్ ప్రెసిడెంట్, టీపీసీసీ",
        terms: "2004, 2009, 2018 (3 సార్లు)",
        start: "1986 (మున్సిపల్ కౌన్సిలర్)",
      },
    },
    about: {
      overline: "జీవిత విశేషాల ప్రొఫైల్",
      title: "ప్రజా సమస్యలు, నియోజకవర్గ అభివృద్ధే ధ్యేయంగా సాగిన నాలుగు దశాబ్దాల ప్రజా జీవితం",
      subtitle:
        "1986లో సంగారెడ్డి మున్సిపల్ కౌన్సిలర్ నుండి మూడుసార్లు శాసనసభ్యునిగా, టీపీసీసీ రాష్ట్ర స్థాయి నాయకత్వం వరకు.",
      bioP1:
        "1966 జూలై 7న సంగారెడ్డిలో జన్మించిన టి. జయప్రకాశ్ రెడ్డి చిన్న వయస్సులోనే ప్రజాసేవలోకి అడుగుపెట్టారు. 1986లో తన 20వ ఏట సంగారెడ్డి మున్సిపాలిటీ కౌన్సిలర్‌గా ఎన్నికై స్థానిక పౌర సమస్యలు, పారిశుధ్య కార్మికుల సంక్షేమం, ప్రజల కష్టాలను స్వయంగా తెలుసుకున్నారు.",
      bioP2:
        "2004 ఉమ్మడి ఆంధ్రప్రదేశ్ శాసనసభ ఎన్నికల్లో సంగారెడ్డి నుండి తొలిసారిగా 51,101 ఓట్లతో భారీ మెజారిటీతో ఎమ్మెల్యేగా గెలుపొందారు. 2009లో కాంగ్రెస్ పార్టీ అభ్యర్థిగా 60,375 ఓట్లతో తిరిగి ఘనవిజయం సాధించారు. ఆయన కార్యాచరణను గుర్తించి 2012లో ఉమ్మడి ఆంధ్రప్రదేశ్ అసెంబ్లీలో ప్రభుత్వ విప్‌గా నియమించారు.",
      bioP3:
        "తెలంగాణ రాష్ట్ర ఏర్పాటు అనంతరం 2018 శాసనసభ ఎన్నికల్లో సంగారెడ్డి నుండి కాంగ్రెస్ పార్టీ తరపున 76,572 ఓట్లతో తిరిగి గెలిచి తన ప్రజాబలాన్ని నిరూపించుకున్నారు. 2021లో కాంగ్రెస్ అధిష్ఠానం ఆయనను తెలంగాణ ప్రదేశ్ కాంగ్రెస్ కమిటీ (టీపీసీసీ) వర్కింగ్ ప్రెసిడెంట్‌గా నియమించింది.",
      readFull: "పూర్తి ప్రొఫైల్ చదవండి",
      connectionBtn: "సంగారెడ్డితో అనుబంధం",
      sec1Title: "1. ప్రారంభ జీవితం & రాజకీయ ఆరంభం (1966 – 2003)",
      sec1Text1:
        "టి. జయప్రకాశ్ రెడ్డి (జగ్గారెడ్డి) 1966 జూలై 7న సంగారెడ్డి పట్టణంలో జన్మించారు. స్థానిక పాఠశాల విద్య అనంతరం యువజన దశలోనే ప్రజా ఉద్యమాలు, ప్రజా సమస్యల పరిష్కారంలో చురుకైన పాత్ర పోషించారు.",
      sec1Text2:
        "1986లో సంగారెడ్డి మున్సిపల్ కౌన్సిలర్‌గా ఆయన రాజకీయ ప్రస్థానం ప్రారంభమైంది. మున్సిపల్ వార్డులలో పర్యటిస్తూ సామాన్య ప్రజలు, మున్సిపల్ కార్మికుల హక్కుల కోసం పోరాడటం ద్వారా స్థానికంగా బలమైన ప్రజా నాయకుడిగా గుర్తింపు పొందారు.",
      sec2Title: "2. శాసనసభ ప్రస్థానం & మూడుసార్లు ఎమ్మెల్యే విజయాలు",
      sec2Text1:
        "2004 అసెంబ్లీ ఎన్నికల్లో సంగారెడ్డి నియోజకవర్గం నుండి పోటీ చేసి 51,101 ఓట్లతో 16,427 ఓట్ల రికార్డు మెజారిటీతో విజయం సాధించి తొలిసారి శాసనసభలో అడుగుపెట్టారు.",
      sec2Text2:
        "2009 ఎన్నికల్లో కాంగ్రెస్ పార్టీ తరఫున 60,375 ఓట్లు సాధించి రెండోసారి శాసనసభ్యునిగా ఎన్నికయ్యారు. 2012లో ఆంధ్రప్రదేశ్ శాసనసభలో కాంగ్రెస్ ప్రభుత్వ విప్‌గా శాసనసభ వ్యవహారాల నిర్వహణలో కీలకంగా వ్యవహరించారు.",
      sec2Text3:
        "2018 తెలంగాణ అసెంబ్లీ ఎన్నికల్లో అత్యంత హోరాహోరీగా సాగిన సంగారెడ్డి పోరులో 76,572 ఓట్లు సాధించి అధికార పార్టీని ఓడించి చారిత్రక విజయం నమోదు చేశారు.",
      sec3Title: "3. టీపీసీసీ వర్కింగ్ ప్రెసిడెంట్ & రాష్ట్ర స్థాయి రాజకీయాలు",
      sec3Text1:
        "2021 జూన్‌లో ఏఐసీసీ ఆయనను టీపీసీసీ వర్కింగ్ ప్రెసిడెంట్‌గా నియమించింది. గాంధీ భవన్‌లో పార్టీ పత్రికా సమావేశాలు, జిల్లా స్థాయి కార్యకర్తల సమావేశాలు, రాష్ట్రవ్యాప్త నిరసనలకు ఆయన నాయకత్వం వహిస్తున్నారు.",
      sec3Text2:
        "మంజీరా నదీ జలాల రక్షణ, సింగూరు ప్రాజెక్టు నీటి కేటాయింపులు, సంగారెడ్డి ప్రభుత్వ మెడికల్ కాలేజీ సాధన, జాతీయ రహదారుల విస్తరణలో ఆయన చేసిన పోరాటాలు ప్రజాదరణ పొందాయి.",
      legalTitle: "న్యాయపరమైన రికార్డు (వాస్తవిక న్యాయస్థాన తీర్పు)",
      legalText:
        "2018లో నమోదైన పాత కేసు విచారణలో 2026 మార్చి 26న హైదరాబాద్ నాంపల్లిలోని ప్రజాప్రతినిధుల ప్రత్యేక సెషన్స్ న్యాయస్థానం జగ్గారెడ్డిపై వచ్చిన ఆరోపణలకు సరైన సాక్ష్యాధారాలు లేవని తేలుస్తూ ఆయనను నిర్దోషిగా ప్రకటిస్తూ తీర్పునిచ్చింది.",
      legalSource: "అధికారిక న్యాయస్థాన విచారణ ప్రొసీడింగ్స్ మరియు ద న్యూ ఇండియన్ ఎక్స్‌ప్రెస్, డెక్కన్ క్రానికల్ కథనాల ఆధారంగా.",
      ctaTitle: "దశాబ్దాల ప్రస్థానాన్ని పరిశీలించండి",
      ctaDesc: "1986 మున్సిపల్ ఎన్నికల నుండి నేటి టీపీసీసీ నాయకత్వం వరకు పూర్తి కాలపట్టిక.",
      ctaBtn: "టైమ్‌లైన్ చూడండి",
    },
    journey: {
      overline: "చారిత్రక కాలపట్టిక",
      title: "రాజకీయ ప్రస్థానం & మైలురాళ్ళు",
      subtitle:
        "1986 మున్సిపల్ కౌన్సిలర్ నుండి మూడు దశాబ్దాల శాసనసభ ప్రాతినిధ్యం, టీపీసీసీ రాష్ట్ర నాయకత్వ బాధ్యతల వరకు.",
      filterLabel: "విభాగాల వారీగా:",
      viewAllBtn: "పూర్తి ప్రస్థానం చూడండి",
      allSphere: "అన్నీ",
      bottomBannerTitle: "సమగ్ర ఎన్నికల రికార్డును పరిశీలించండి",
      bottomBannerDesc:
        "2004, 2009, 2014, 2018 మరియు 2023 ఎన్నికల ఓట్లు, మెజారిటీల పూర్తి గణాంకాలు.",
      bottomBannerBtn: "ఎన్నికల పేజీ చూడండి",
    },
    elections: {
      overline: "ఎన్నికల రికార్డు",
      title: "ఎన్నికల పోటీలు & ప్రజా తీర్పు",
      subtitle:
        "ఐదు అసెంబ్లీ సాధారణ ఎన్నికలు మరియు ఒక లోక్‌సభ ఉపఎన్నికలో సంగారెడ్డి ప్రజల తీర్పు ఆధారిత సమగ్ర రికార్డు.",
      contestsCount: "మొత్తం ఎన్నికల పోటీలు",
      winsCount: "అసెంబ్లీ విజయాలు",
      lossesCount: "ఎన్నికల లోటుపాట్లు",
      highestMargin: "అత్యధిక మెజారిటీ (2004)",
      tableView: "టేబుల్ రూపం",
      cardView: "కార్డుల రూపం",
      colYear: "సంవత్సరం",
      colContest: "ఎన్నిక & నియోజకవర్గం",
      colParty: "పార్టీ",
      colVotes: "ఓట్లు",
      colVoteShare: "ఓట్ల శాతం",
      colResult: "ఫలితం",
      colMargin: "మెజారిటీ",
      colOpponent: "ముఖ్య ప్రత్యర్థి",
      wonBadge: "గెలుపు",
      lostBadge: "ఓటమి",
      disclosureTitle: "వాస్తవిక గణాంకాల ప్రకటన:",
      disclosureText:
        "ఈ వివరాలన్నీ భారత ఎన్నికల సంఘం (ECI) సంగారెడ్డి అసెంబ్లీ నియోజకవర్గం (AC 39) మరియు మెదక్ లోక్‌సభ అధికారిక గెజిట్ నుండి సేకరించబడినవి.",
    },
    sangareddy: {
      overline: "నియోజకవర్గ సమాచారం",
      title: "సంగారెడ్డి (నియోజకవర్గ సంఖ్య 39)",
      subtitle:
        "జగ్గారెడ్డి రాజకీయ ప్రస్థానానికి కేంద్రబిందువు: 1986 మున్సిపల్ కౌన్సిలర్ నుండి మూడుసార్లు శాసనసభ ప్రాతినిధ్యం.",
      overviewHeading: "భౌగోళిక & వ్యూహాత్మక ప్రాధాన్యత",
      coordsHeading: "ముఖ్య నియోజకవర్గ వివరాలు",
      zonesOverline: "ప్రాంతాల వారీగా",
      zonesTitle: "మండలాలు & ప్రజా ప్రాతినిధ్య రంగం",
      zonesSubtitle:
        "పట్టణ మున్సిపల్ వార్డులు, ఐఐటీ లాంటి ప్రతిష్టాత్మక విద్యాసంస్థలు, మంజీరా పరీవాహక ప్రాంతాల సమగ్ర ప్రాతినిధ్యం.",
      advocacyOverline: "స్థానిక పోరాటాలు",
      advocacyTitle: "సంగారెడ్డి ప్రజల కోసం చేపట్టిన ఉద్యమాలు",
      advocacySubtitle: "సింగూరు మంజీరా తాగునీటి హక్కులు, జాతీయ రహదారి విస్తరణ మరియు మున్సిపల్ మౌలిక సదుపాయాలు.",
      photosOverline: "క్షేత్రస్థాయి చిత్రాలు",
      photosTitle: "చిత్రాల్లో సంగారెడ్డి ప్రజా పోరాటాలు",
      photosSubtitle: "ప్రజా సభలు, కాల్వల పరిశీలన, రైతుల ముఖాముఖి సమాచార చిత్రాలు.",
    },
    publicService: {
      overline: "ప్రజా సేవ & ఉద్యమాలు",
      title: "ప్రజా సమస్యలు & అభివృద్ధి పోరాటాలు",
      subtitle:
        "సంగారెడ్డిలో మంజీరా తాగునీరు, రైతుల సంక్షేమం, రహదారుల అభివృద్ధి కోసం చేపట్టిన పోరాటాల అధికారిక వివరాలు.",
      ethicsBannerTitle: "అభివృద్ధి వివరాల బాధ్యతాయుత ప్రదర్శన",
      ethicsBannerText:
        "ప్రతి అంశాన్ని వ్యక్తిగత విజయంగా చూపకుండా, అధికారిక రికార్డులు, ప్రజా ఉద్యమాలు మరియు ప్రాతినిధ్యాల మధ్య స్పష్టమైన వర్గీకరణ పాటించబడింది.",
      filterSector: "రంగాల వారీగా:",
      caseStudyOverline: "పరిశీలన: మౌలిక సదుపాయాల అభివృద్ధి",
      caseStudyTitle: "సంగారెడ్డి – పటాన్‌చెరు రోడ్డు విస్తరణ ప్రాజెక్టు",
      caseStudyContextTitle: "ప్రాజెక్టు నేపథ్యం",
      caseStudyContextText:
        "సంగారెడ్డి జిల్లా కేంద్రాన్ని పటాన్‌చెరు పారిశ్రామిక కేంద్రం, హైదరాబాద్ ఔటర్ రింగ్ రోడ్డుతో అనుసంధానించే నాలుగు వరుసల రహదారి నిర్మాణం.",
      caseStudyStatusTitle: "డాక్యుమెంటేషన్ స్థితి",
      caseStudyStatusText:
        "ఎమ్మెల్యేగా, ప్రభుత్వ విప్‌గా బడ్జెట్ కేటాయింపులు, భూసేకరణ అనుమతుల కోసం చేసిన ప్రాతినిధ్యాలు అసెంబ్లీ రికార్డుల్లో ఉన్నాయి.",
      caseStudyImpactTitle: "ప్రస్తుత ప్రయోజనం",
      caseStudyImpactText:
        "వేలాది మంది కార్మికులు, ఐఐటీ హైదరాబాద్ విద్యార్థులు, ముంబై హైవే (NH-65) రవాణాకు అత్యంత కీలక మార్గంగా మారింది.",
      submitGrievanceTitle: "ప్రజా వినతులు లేదా విజ్ఞాపన పత్రాలు సమర్పించండి",
      submitGrievanceDesc:
        "సంగారెడ్డి ప్రజలు మరియు ప్రజా సంఘాలు తమ సమస్యల పరిష్కారం కోసం ప్రజా కార్యాలయాలను సంప్రదించవచ్చు.",
      submitGrievanceBtn: "కార్యాలయ వివరాలు",
    },
    media: {
      overline: "మీడియా & పత్రికా ప్రకటనలు",
      title: "వార్తా కథనాలు & మీడియా ప్రకటనలు",
      subtitle:
        "శాసనసభ ప్రసంగాలు, పత్రికా సమావేశాలు, ప్రజా ఉద్యమాలపై ప్రముఖ దినపత్రికల్లో ప్రచురితమైన కథనాలు.",
      filterCategory: "వర్గాల వారీగా:",
      readPublication: "కథనం చదవండి",
      disclosureText:
        "అన్ని కథనాలు ద హిందూ, టైమ్స్ ఆఫ్ ఇండియా, డెక్కన్ క్రానికల్, తెలంగాణ టుడే మొదలైన ప్రముఖ దినపత్రికల ఆధారంగా పొందుపరచబడినవి.",
    },
    speeches: {
      overline: "ప్రసంగాలు & వీడియోలు",
      title: "శాసనసభ ప్రసంగాలు & ప్రెస్ మీట్లు",
      subtitle:
        "తెలంగాణ శాసనసభలో మంజీరా జలాలు, రైతుల సమస్యలపై చేసిన ప్రసంగాలు, గాంధీ భవన్‌లో నిర్వహించిన పత్రికా సమావేశాలు.",
      featuredBadge: "ముఖ్య ప్రెస్ మీట్",
      watchBtn: "యూట్యూబ్‌లో వీక్షించండి",
      keyPointsTitle: "ముఖ్య ముఖ్యాంశాలు & వాదనలు:",
      disclosureTitle: "మీడియా ఆర్కైవ్ పారదర్శకత:",
      disclosureText:
        "ప్రసంగాలు మరియు వీడియోలు బహిరంగంగా ప్రసారమైన యూట్యూబ్ మరియు న్యూస్ ఛానల్ ఆర్కైవ్‌లకు అనుసంధానించబడినవి.",
    },
    gallery: {
      overline: "చిత్రమాలిక",
      title: "ప్రజా జీవిత ఛాయాచిత్రాలు",
      subtitle:
        "అధికారిక చిత్రాలు, శాసనసభ సమావేశాలు, ప్రజా సభలు, నియోజకవర్గ పర్యటనలు మరియు ఎన్నికల ప్రచార చిత్రాలు.",
      filterCollection: "చిత్రాల వర్గాలు:",
      credit: "చిత్ర మూలం:",
      disclaimer:
        "అన్ని చిత్రాలు ప్రామాణిక ప్రజా నిబంధనలకు అనుగుణంగా ప్రదర్శించబడుతున్నాయి. ప్రధాన చిత్రంగా టి. జయప్రకాశ్ రెడ్డి గారి అధికారిక ఛాయాచిత్రం ఉపయోగించబడింది.",
    },
    contact: {
      overline: "ప్రజా సంప్రదింపులు",
      title: "కార్యాలయ వివరాలు & వినతుల సమర్పణ",
      subtitle:
        "నియోజకవర్గ వినతులు, కాంగ్రెస్ పార్టీ రాష్ట్ర కార్యాలయ చిరునామాలు మరియు అధికారిక ప్రజా సమాచారం.",
      noticeTitle: "అధికారిక ప్రజా సమాచార సూచన",
      noticeText:
        "ప్రజా రక్షణ మరియు గోప్యతా నియమాల ప్రకారం వ్యక్తిగత ఫోన్ నంబర్లు మరియు ప్రైవేట్ ఈమెయిల్స్ బహిరంగంగా ప్రచురించబడవు. అధికారిక పార్టీ కార్యాలయాలు లేదా సంగారెడ్డి ప్రజా దర్బార్లలో వినతులను నేరుగా స్వీకరిస్తారు.",
      institutionalTitle: "ప్రజా కార్యాలయాలు",
      sangareddyTitle: "సంగారెడ్డి క్యాంప్ & ప్రజా సమస్యల కేంద్రం",
      sangareddyDesc: "సంగారెడ్డి పట్టణం, సంగారెడ్డి జిల్లా, తెలంగాణ — 502001.",
      sangareddyNote: "సంగారెడ్డి క్యాంప్ కార్యాలయంలో క్రమం తప్పకుండా ప్రజా దర్బార్ ద్వారా వినతులు స్వీకరించబడతాయి.",
      tpccTitle: "తెలంగాణ ప్రదేశ్ కాంగ్రెస్ కమిటీ (TPCC)",
      tpccDesc: "గాంధీ భవన్, నాంపల్లి, హైదరాబాద్, తెలంగాణ — 500001.",
      tpccNote: "టీపీసీసీ వర్కింగ్ ప్రెసిడెంట్ కార్యాలయం. రాష్ట్ర స్థాయి పార్టీ వ్యవహారాలు, పత్రికా సమావేశాలు ఇక్కడ జరుగుతాయి.",
      digitalTitle: "డిజిటల్ & సోషల్ మీడియా ఖాతాలు",
      formTitle: "నియోజకవర్గ వినతిపత్రం ఫారం",
      formDesc: "ఈ ఫారంలో మీ సమస్యను పూరించి సమర్పిస్తే మీ ఈమెయిల్ అప్లికేషన్ ద్వారా నిర్దేశిత కార్యాలయానికి మెమోరాండం సిద్ధమవుతుంది.",
      formSuccessTitle: "ఈమెయిల్ అప్లికేషన్ ప్రారంభమైంది",
      formSuccessDesc: "మీ వినతి వివరాలతో ఈమెయిల్ డ్రాఫ్ట్ సిద్ధమైంది. దీన్ని ప్రింట్ చేసి గాంధీ భవన్ లేదా సంగారెడ్డి కార్యాలయంలోనూ సమర్పించవచ్చు.",
      nameLabel: "మీ పూర్తి పేరు *",
      emailLabel: "ఈమెయిల్ చిరునామా *",
      phoneLabel: "ఫోన్ నంబర్ (ఐచ్ఛికం)",
      subjectLabel: "సమస్య / విభాగం",
      messageLabel: "సమస్య పూర్తి వివరాలు / వినతిపత్రం *",
      submitBtn: "వినతిపత్రాన్ని సిద్ధం చేయండి",
      privacyNotice: "గమనిక: ఈ పోర్టల్ ద్వారా ఎటువంటి వ్యక్తిగత సమాచారం డేటాబేస్‌లలో భద్రపరచబడదు. మీ విశ్వసనీయ ఈమెయిల్ ద్వారా నేరుగా పంపబడుతుంది.",
    },
    footer: {
      desc:
        "సీనియర్ ఇండియన్ నేషనల్ కాంగ్రెస్ నాయకుడు, వర్కింగ్ ప్రెసిడెంట్ (టీపీసీసీ), మరియు సంగారెడ్డి నుండి మూడుసార్లు ఎన్నికైన మాజీ శాసనసభ్యులు (2004, 2009, 2018).",
      badgeText: "ప్రజా జీవితం • సంగారెడ్డి • కాంగ్రెస్",
      quickLinksTitle: "ముఖ్య లింకులు",
      serviceTitle: "ప్రజా సేవారంగాలు",
      officeTitle: "కార్యాలయాలు & వేదికలు",
      copyright: "© 2026 టి. జయప్రకాశ్ రెడ్డి (జగ్గారెడ్డి). సర్వహక్కులు ప్రత్యేకించబడినవి.",
      disclaimer: "అధికారిక డిజిటల్ ప్రొఫైల్ • ఇండియన్ నేషనల్ కాంగ్రెస్ • తెలంగాణ",
    },
    notFound: {
      title: "పేజీ కనుగొనబడలేదు",
      desc: "మీరు వెతుకుతున్న పేజీ ఈ అధికారిక ప్రొఫైల్‌లో లభించలేదు. దయచేసి మెనూ ద్వారా ఇతర పేజీలను లేదా హోమ్ పేజీని సందర్శించండి.",
      btn: "హోమ్ పేజీకి తిరిగి వెళ్ళండి",
    },
    categories: {
      all: "అన్నీ",
      water: "నీటిపారుదల",
      farmers: "రైతాంగం",
      infrastructure: "మౌలిక వసతులు",
      urbanDev: "పట్టణాభివృద్ధి",
      policy: "విధానాలు",
      politics: "రాజకీయాలు",
      sangareddy: "సంగారెడ్డి",
      development: "అభివృద్ధి",
      pressMeet: "మీడియా సమావేశం",
      legal: "న్యాయం",
      portraits: "చిత్రాలు",
      assembly: "శాసనసభ",
      publicMeetings: "ప్రజా సభలు",
      campaigns: "ప్రచారం",
      constituency: "నియోజకవర్గం",
    },
  },
};
