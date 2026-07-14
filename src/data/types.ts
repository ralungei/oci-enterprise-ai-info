export type SectionType =
  | "hero"
  | "what-is-agent"
  | "challenge"
  | "platform"
  | "models"
  | "tools"
  | "memory"
  | "build"
  | "deploy"
  | "data-privacy"
  | "observability"
  | "security-auth"
  | "use-cases"
  | "regions"
  | "get-started"
  | "governance"
  | "demo"
  | "architecture";

export type SectionTheme = "dark" | "light" | "gray" | "mesh-1" | "mesh-2";

export interface ProblemStat {
  num: string;
  text: string;
}

export interface TimelinePhase {
  year: string;
  phase: string;
  desc: string;
}

export interface PillarCard {
  num: string;
  name: string;
  tagline: string;
  desc: string;
  gradient: string;
}

export interface LifecycleStep {
  icon: string;
  label: string;
}

export interface ProviderCard {
  provider: string;
  models: string;
  badge: string;
}

export interface DeploymentMode {
  title: string;
  subtitle: string;
  desc: string;
  accent: boolean;
  icon: string;
}

export interface KeyMessage {
  icon: string;
  title: string;
  desc: string;
}

export interface ToolCard {
  icon: string;
  name: string;
  desc: string;
  whatItDoes: string;
  howItWorks: string;
}

export interface MemoryCard {
  title: string;
  sub: string;
  desc: string;
  code: string;
}

export interface DeployTier {
  tier: string;
  sub: string;
  items: string[];
  accent: boolean;
}

export interface DeployOp {
  icon: string;
  title: string;
  bullets: string[];
}

export interface HostedFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface AuthMethod {
  method: string;
  desc: string;
  languages: string;
  useCase: string;
}

export interface PrivacyPrinciple {
  icon: string;
  title: string;
  desc: string;
}

export interface ObservabilityTool {
  icon: string;
  name: string;
  desc: string;
}

export interface ComplianceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface UseCaseIndustry {
  industry: string;
  impact: string;
  cases: string[];
  border: string;
  details: string;
}

export interface RegionCity {
  name: string;
  region: string;
  photo: string;
}

export interface GetStartedStep {
  step: string;
  label: string;
  desc: string;
}

/* ── Section content interfaces ── */

export interface HeroContent {
  badge: string;
  titleLines: string[];
  subtitle: string;
}

export interface AgentComponent {
  icon: string;
  name: string;
  desc: string;
}

export interface SpectrumItem {
  label: string;
  desc: string;
  isAgent: boolean;
}

export interface QuizScenario {
  scenario: string;
  isAgent: boolean;
  explanation: string;
}

export interface WhatIsAgentContent {
  definition: string;
  components: AgentComponent[];
  spectrum: SpectrumItem[];
  quiz: QuizScenario[];
}

export interface ChallengeContent {
  headline: string;
  headlineAccent: string;
  subtext: string;
  stats: ProblemStat[];
  timeline: TimelinePhase[];
}

export interface PlatformContent {
  pillars: PillarCard[];
  lifecycle: LifecycleStep[];
}

export interface ModelsContent {
  providers: ProviderCard[];
  codeExample: string;
  deploymentModes: DeploymentMode[];
  keyMessages: KeyMessage[];
}

export interface ToolsContent {
  tools: ToolCard[];
  multiToolCode: string;
}

export interface MemoryContent {
  types: MemoryCard[];
}

export interface BuildContent {
  frameworks: string[];
  migrationCode: string;
}

export interface DeployContent {
  tiers: DeployTier[];
  operations: DeployOp[];
  hostedFeatures: HostedFeature[];
}

export interface DataPrivacyContent {
  principles: PrivacyPrinciple[];
}

export interface ObservabilityContent {
  tools: ObservabilityTool[];
  traceLog: string[];
}

export interface SecurityAuthContent {
  authMethods: AuthMethod[];
  compliance: ComplianceItem[];
}

export interface UseCasesContent {
  industries: UseCaseIndustry[];
}

export interface RegionsContent {
  cities: RegionCity[];
}

export interface GetStartedContent {
  steps: GetStartedStep[];
}

export type SectionContent =
  | HeroContent
  | WhatIsAgentContent
  | ChallengeContent
  | PlatformContent
  | ModelsContent
  | ToolsContent
  | MemoryContent
  | BuildContent
  | DeployContent
  | DataPrivacyContent
  | ObservabilityContent
  | SecurityAuthContent
  | UseCasesContent
  | RegionsContent
  | GetStartedContent;

export interface SlideSection {
  id: SectionType;
  sectionLabel: string;
  title: string;
  type: SectionType;
  theme: SectionTheme;
  speakerNotes: string[];
  content: SectionContent;
}
