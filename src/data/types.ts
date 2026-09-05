export type ConfidenceLevel =
  | "VERIFIED"
  | "CORROBORATED"
  | "REPORTED"
  | "SELF-CLAIMED"
  | "ALLEGED"
  | "UNVERIFIED";

export interface LeaderProfile {
  name: string;
  knownAs: string;
  nativeNameTelugu: string;
  birthDate: string;
  birthPlace: string;
  party: string;
  currentRole: string;
  formerRoles: string[];
  constituency: string;
  district: string;
  state: string;
  bioSummary: string;
  longBio: string[];
  politicalPhilosophy: string;
  quickFacts: { label: string; value: string; icon: string }[];
  stats: { value: string; label: string; subtext: string; confidence: ConfidenceLevel }[];
}

export interface ElectionRecord {
  year: number;
  electionType: string;
  electionTypeTe?: string;
  constituency: string;
  constituencyTe?: string;
  district: string;
  districtTe?: string;
  party: string;
  partyTe?: string;
  votes: number;
  votePercentage?: number;
  result: "Won" | "Lost";
  margin: number;
  opponent: string;
  opponentTe?: string;
  opponentParty: string;
  opponentPartyTe?: string;
  opponentVotes: number;
  totalVotersOrTurnout?: string;
  significance: string;
  significanceTe?: string;
  source: string;
  confidence: ConfidenceLevel;
}

export interface TimelineMilestone {
  year: string;
  date?: string;
  title: string;
  titleTe?: string;
  description: string;
  descriptionTe?: string;
  party: string;
  partyTe?: string;
  roleOrContext: string;
  roleOrContextTe?: string;
  category: "Civic" | "Legislative" | "Party Leadership" | "Public Advocacy" | "Legal";
  confidence: ConfidenceLevel;
}

export interface PublicIssue {
  id: string;
  title: string;
  titleTe?: string;
  category: "Water" | "Farmers" | "Infrastructure" | "Urban Development" | "Policy";
  period: string;
  summary: string;
  summaryTe?: string;
  details: string[];
  detailsTe?: string[];
  statusNote: string;
  statusNoteTe?: string;
  confidence: ConfidenceLevel;
  sourceIndicator: string;
}

export interface MediaArticle {
  id: string;
  title: string;
  titleTe?: string;
  publication: string;
  date: string;
  category: "Politics" | "Sangareddy" | "Development" | "Press Meet" | "Legal";
  summary: string;
  summaryTe?: string;
  url: string;
  confidence: ConfidenceLevel;
}

export interface SpeechVideo {
  id: string;
  title: string;
  titleTe?: string;
  date: string;
  venueOrPlatform: string;
  venueOrPlatformTe?: string;
  topic: string;
  duration?: string;
  youtubeId?: string;
  youtubeUrl: string;
  keyPoints: string[];
  keyPointsTe?: string[];
  confidence: ConfidenceLevel;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  titleTe?: string;
  category: "Portraits" | "Assembly" | "Public Meetings" | "Campaigns" | "Constituency";
  caption: string;
  captionTe?: string;
  src: string;
  alt: string;
  aspectRatio: "portrait" | "landscape" | "square";
  creditOrSource: string;
  confidence: ConfidenceLevel;
}
