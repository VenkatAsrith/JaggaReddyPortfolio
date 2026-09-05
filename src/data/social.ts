export interface SocialProfile {
  platform: string;
  handle: string;
  url: string;
  isVerifiedOfficial: boolean;
  statusLabel: string;
  note: string;
}

export const socialProfilesData: SocialProfile[] = [
  {
    platform: "X (formerly Twitter)",
    handle: "@ImJaggaReddy",
    url: "https://x.com/ImJaggaReddy",
    isVerifiedOfficial: false,
    statusLabel: "Publicly Identified Account",
    note: "Publicly identified in political media circles; not independently verified as an officially certified handle.",
  },
  {
    platform: "YouTube (Public Media Search)",
    handle: "Jagga Reddy TPCC Speeches",
    url: "https://www.youtube.com/results?search_query=Jagga+Reddy+press+meet+TPCC+Sangareddy",
    isVerifiedOfficial: true,
    statusLabel: "Public Media Archive",
    note: "Curated public broadcasts, news channels, and legislative addresses.",
  },
];

export const contactConfig = {
  availabilityNotice:
    "Direct personal phone numbers and private email addresses are not published in verified public registries to protect security and privacy.",
  publicOfficeReference: {
    locationName: "Constituency Representation Reference",
    town: "Sangareddy",
    district: "Sangareddy District",
    state: "Telangana — 502001",
    partyOffice: "Telangana Pradesh Congress Committee (TPCC), Gandhi Bhavan, Nampally, Hyderabad",
    note: "Citizens and party workers typically submit representations during scheduled cadre meets or at the TPCC Headquarters at Gandhi Bhavan.",
  },
};
