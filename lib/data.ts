// (Removed duplicate light stub exports — retained the fuller definitions lower in the file.)
// ── Types ─────────────────────────────────────────────────────────────────────

export interface ProjectModal {
  overview: string;
  capabilities: string[];
  enterpriseValue: string;
  useCases: string[];
}

export interface PlatformProject {
  id: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  modal: ProjectModal;
}

export interface Project {
  id: string;
  label: string;
  platformLabel?: string;
  title: string;
  type: string;
  description: string;
  tech: string[];
  href?: string;
  modal: ProjectModal;
}

export interface RoleAlignment {
  requirement: string;
  evidence: string;
  highlight: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

// ── Platform Architecture (core systems — matches resume) ──────────────────────

export const PLATFORM_PROJECTS: PlatformProject[] = [
  {
    id: 'mimir2',
    title: 'MIMIR² — Adaptive Learning & Knowledge Spine',
    type: 'Knowledge Architecture · Memory + Intelligence Backbone',
    description:
      'Persistent knowledge graph engine managing learning content at the component level. Enables contextual reassembly and propagation of updates across interconnected materials.',
    tech: ['Neo4j', 'Python', 'FastAPI', 'Docker'],
    modal: {
      overview:
        'MIMIR² is the backbone for scaling training content without scaling headcount. It treats educational material as interconnected components — when source knowledge changes, the system automatically identifies every affected training artifact and triggers coordinated updates.',
      capabilities: [
        'Single source of truth for training content — one update propagates everywhere',
        'Audience-aware content assembly (trainers get facilitation notes, learners get simplified versions)',
        'Automated identification of stale content when product documentation changes',
        'Version history supporting "what did we teach last quarter?" audits',
        'Integration hooks for AI content generation — feeds Janus with canonical context',
      ],
      enterpriseValue:
        'Eliminates the documentation drift problem. When Walmart Connect product specs change, MIMIR² identifies every affected training artifact before a learner encounters stale content.',
      useCases: [
        'Product release automatically triggers updated facilitator guides and learner materials',
        'Onboarding content stays current without manual review cycles',
        'Regional variants generated from canonical content with localization rules',
      ],
    },
  },
  {
    id: 'aether',
    title: 'Aether SDK — Universal Sync & Orchestration',
    type: 'Enterprise Integration Infrastructure',
    description:
      'Dual-architecture integration platform: Aether Lite (FastAPI) for lightweight integrations and Aether Pro (NATS + Temporal) for enterprise-scale workflows with automated drift detection.',
    tech: ['Python', 'FastAPI', 'NATS', 'Temporal', 'PostgreSQL'],
    modal: {
      overview:
        'Built from a real enterprise problem — connecting UKG, Docebo, Axonify, and LinkedIn Learning at a financial services organization. Aether provides a universal adapter framework for connecting systems that were never designed to work together, with durable workflow orchestration and automated drift detection.',
      capabilities: [
        'Automated learner provisioning when employees join or change roles',
        'Training completion data flowing back to HRIS for compliance dashboards',
        'Content sync ensuring materials stay consistent across delivery platforms',
        'Drift detection alerting when systems fall out of sync',
        'Temporal-backed workflows that survive system outages and retry intelligently',
      ],
      enterpriseValue:
        'Solves the integration layer that makes scaled LMS operations possible. Directly applicable to Intellum + HRIS/CRM synchronization at Walmart Connect.',
      useCases: [
        'New hire triggers automated onboarding curriculum enrollment',
        'Role change in Workday assigns appropriate certification requirements',
        'Completion data from multiple platforms aggregates into single compliance report',
      ],
    },
  },
  {
    id: 'janus',
    title: 'Janus — Multi-Modal Content Engine',
    type: 'AI Agent Orchestration',
    description:
      'Multi-modal AI content engine governed by persona rules. Generates images, video, voice, and presentations at scale while maintaining consistency and brand alignment.',
    tech: ['Python', 'Claude API', 'OpenAI', 'Multi-Modal AI'],
    modal: {
      overview:
        'Janus separates intent from execution — one instructional designer produces what traditionally required a team of specialists. Feed it a brief, generate coordinated assets across formats — slides, video scripts, voice narration, visual aids — all maintaining consistent voice and brand. The persona system ensures outputs match the audience.',
      capabilities: [
        'Single brief generates slides, handouts, demo videos, and assessment items',
        'Persona rules ensure facilitator content differs from learner materials',
        'Brand voice enforcement across all generated assets',
        'Multi-modal output (text, image, video, voice) from unified content definition',
        'Coordinated updates — changing source propagates across all formats',
      ],
      enterpriseValue:
        'Directly addresses the Walmart role requirement: "Pioneer AI-first content creation and AI-personalized learner journeys." One operator, multiple audiences, coordinated outputs at scale.',
      useCases: [
        'New product feature generates complete training kit in hours, not weeks',
        'Regional trainers receive localized materials while maintaining source accuracy',
        'Facilitator guides, learner handouts, and assessments from single content definition',
      ],
    },
  },
];

// ── Applied Systems (production implementations of the platform) ───────────────

export const PROJECTS: Project[] = [
  {
    id: 'curriculum-builder',
    label: 'L&D Tool · AI-First',
    platformLabel: 'Janus + MIMIR² application',
    title: 'Curriculum Builder',
    type: 'AI-Assisted Instructional Design',
    description:
      'Enter a topic, audience, and duration — AI generates a structured curriculum with learning objectives, activities, and assessments, ready for any LMS including Intellum.',
    tech: ['Claude API', 'Next.js', 'SCORM-aware'],
    href: 'https://curriculum-builder.vercel.app',
    modal: {
      overview:
        'Applied implementation of the Janus content engine with MIMIR²-style content structuring. Enter a topic, audience, and duration — AI generates a structured curriculum with learning objectives, activities, and assessments, ready for any LMS including Intellum.',
      capabilities: [
        'Structured curriculum from a single brief — topic, audience, duration',
        'Audience-aware content generation (different outputs for learners vs. facilitators)',
        'Learning objectives, activities, and assessments in one pass',
        'SCORM-compatible output schema for direct LMS import',
        'Deployable to Intellum, Docebo, Workday Learning, and other platforms',
      ],
      enterpriseValue:
        'Reduces curriculum design time from days to hours. One L&D professional produces what previously required a full instructional design team. Directly addresses the AI-first content creation requirement.',
      useCases: [
        'New product feature → complete training kit within a business day',
        'Compliance course refresh triggered by policy changes',
        'Onboarding curriculum generation for new hire cohorts at scale',
      ],
    },
  },
  {
    id: 'connex',
    label: 'Enterprise Integration',
    platformLabel: 'Aether SDK implementation',
    title: 'Connex',
    type: 'Integration Control Plane',
    description:
      'Integration control plane for enterprise HR and learning systems. Semantic field matching, human-in-the-loop approval queues, and live sync logs across UKG, Docebo, LinkedIn Learning, and Axonify.',
    tech: ['React', 'Next.js', 'AI Matching'],
    href: 'https://connex-dashboard.vercel.app',
    modal: {
      overview:
        'Production implementation of the Aether SDK integration architecture. Integration control plane for enterprise HR and learning systems — semantic field matching, human-in-the-loop approval queues, and live sync logs across UKG, Docebo, LinkedIn Learning, and Axonify.',
      capabilities: [
        'Semantic field matching across mismatched system schemas',
        'Human-in-the-loop approval queues for high-stakes data changes',
        'Live sync status logs and error surfaces',
        'Support for UKG + Docebo + LinkedIn Learning + Axonify',
        'Drift detection with configurable alerting thresholds',
      ],
      enterpriseValue:
        'Eliminates manual data reconciliation between HR and learning systems. The same architecture is directly applicable to Intellum + HRIS/CRM integration at Walmart Connect.',
      useCases: [
        'Employee role change triggers automated learning path update',
        'Training completions sync automatically to HRIS compliance records',
        'New hire auto-enrolled in Intellum onboarding path on day one',
      ],
    },
  },
  {
    id: 'prompt-observatory',
    label: 'Developer Tool',
    platformLabel: 'Janus experimentation layer',
    title: 'Prompt Observatory',
    type: 'AI Workflow Testing & Governance',
    description:
      'Test, compare, and version AI prompts with real-time latency metrics, token counting, and side-by-side run comparison. Built for teams iterating on LLM-powered L&D workflows.',
    tech: ['Claude API', 'Next.js', 'TypeScript'],
    href: 'https://prompt-observatory.vercel.app',
    modal: {
      overview:
        'Experimentation and iteration environment for the AI workflows that power Janus. Test, compare, and version AI prompts with real-time latency metrics, token counting, and side-by-side run comparison — built for teams iterating on LLM-powered L&D workflows.',
      capabilities: [
        'Side-by-side prompt comparison with performance metrics',
        'Latency and token cost tracking per run',
        'Version history for prompt iterations with rollback',
        'Reproducible test runs with documented results',
        'Shareable run records for team review and approval workflows',
      ],
      enterpriseValue:
        'Enables responsible AI deployment: prompt behavior is testable, comparable, and auditable before it reaches learners. Supports enterprise AI governance — humans validate before production use.',
      useCases: [
        'Evaluating content generation prompts before LMS deployment',
        'A/B testing learner communication variants for completion rate impact',
        'Documenting AI-assisted design decisions for audit trail',
      ],
    },
  },
  {
    id: 'self-healing-docs',
    label: 'Documentation System',
    platformLabel: 'MIMIR² drift detection prototype',
    title: 'Self-Healing Docs',
    type: 'AI-Assisted Documentation Governance',
    description:
      'AI-assisted drift detection for technical documentation. Surfaces breaking changes, behavioral shifts, and doc update recommendations with confidence scoring.',
    tech: ['Claude API', 'Next.js', 'MDX'],
    href: 'https://garthpuckerin-vercel.vercel.app',
    modal: {
      overview:
        "Applied prototype of MIMIR²'s drift detection and propagation logic. Paste two API specs — the agent surfaces breaking changes, behavioral shifts, and doc update recommendations with confidence scoring. Proof-of-concept for AI-assisted training content governance.",
      capabilities: [
        'API spec comparison and drift analysis with confidence scoring',
        'Breaking change detection vs. behavioral shift classification',
        'Actionable update suggestions for doc maintainers',
        'Structured output suitable for downstream content generation triggers',
        'Human-review gate — no recommendations surface without approval',
      ],
      enterpriseValue:
        'Demonstrates the documentation governance principle this role requires: keeping training content accurate when the product changes. Directly applicable to Intellum content maintenance workflows.',
      useCases: [
        'Flagging outdated training materials after product release cycles',
        'Tracking documentation drift across quarterly platform updates',
        'Informing Intellum content refresh priorities with confidence scores',
      ],
    },
  },
];

// ── Role Alignment ─────────────────────────────────────────────────────────────

export const ROLE_ALIGNMENT: RoleAlignment[] = [
  {
    requirement: 'Intellum LMS Administration',
    evidence:
      'Administered Docebo (enterprise-class, equivalent scale and complexity), Workday Learning, SumTotal, and SuccessFactors — user management, permissions, enrollments, and learning paths across multiple global orgs.',
    highlight: '5 LMS platforms administered',
  },
  {
    requirement: 'Enterprise Scale — 3,000+ Users',
    evidence:
      'Managed Docebo for 10,000+ users across internal, partner, and customer organizations at Entrust Corporation. Coordinated training for 25,000+ across 7 locations at Montefiore Hospital.',
    highlight: '10,000+ users at Entrust · 3× requirement',
  },
  {
    requirement: 'AI-First Content & Learner Journeys',
    evidence:
      'Built and deployed two AI-powered L&D tools: Curriculum Builder (structured curricula from topic, audience, and duration via Claude API) and Prompt Observatory (LLM workflow testing platform). Actively exploring agentic AI for learner support.',
    highlight: '2 live AI tools in production',
  },
  {
    requirement: 'Support Ticketing & Workflow Systems',
    evidence:
      'Designed learner and content-creator support workflows, intake processes, and operational systems at three enterprises. Experienced building no-code/low-code workflow automation at scale, including Airtable-class tooling.',
    highlight: 'Support systems at 3 enterprises',
  },
  {
    requirement: 'Dashboards & Reporting',
    evidence:
      'Built completion, NPS, engagement, and compliance dashboards in AWS QuickSight and Salesforce Reports. Produced monthly enablement scorecards at Medidata linking LMS adoption directly to Sales pipeline outcomes.',
    highlight: 'QuickSight + Salesforce + Excel',
  },
  {
    requirement: 'SCORM / xAPI Deployment',
    evidence:
      'Configured GxP-compliant SCORM validation and global launch schedules at Boehringer Ingelheim Pharmaceuticals. Introduced and implemented xAPI-compliant LXP tools with full data tracking at Success Academy.',
    highlight: 'GxP SCORM + xAPI — both standards',
  },
];

// ── Experience ─────────────────────────────────────────────────────────────────

export const EXPERIENCE: Experience[] = [
  {
    role: 'L&D Specialist / Interim LMS Admin',
    company: 'Citadel Credit Union',
    period: 'Aug – Nov 2025',
    bullets: [
      'Maintained Docebo platform continuity during team transition — zero service disruption',
      'Scoped integration consolidation across UKG, Axonify, LinkedIn Learning, and Docebo',
    ],
  },
  {
    role: 'Learning Management & Integration Consultant',
    company: 'Federal Home Loan Bank of Chicago',
    period: 'Aug – Oct 2025',
    bullets: [
      'Directed integration between Docebo, Udemy, Outlook, Teams, SSO, and SharePoint',
      'Authored UAT scripts and executed content validation across sandbox and production environments',
      'Configured authentication and permissions for pilot cohorts in coordination with HRIS and IT',
    ],
  },
  {
    role: 'Business Systems Analyst – LMS',
    company: 'Entrust Corporation',
    period: 'Jun 2022 – Mar 2025',
    bullets: [
      'Managed global Docebo LMS for 10,000+ users across internal, partner, and customer orgs',
      'Integrated Workday, Salesforce, QuickSight, and LinkedIn Learning to automate cross-system data flows',
      'Led Tier I/II incident triage with vendors, engineering, and security teams',
      'Built performance dashboards, UAT test plans, and compliance-ready audit documentation',
    ],
  },
  {
    role: 'LMS Administrator',
    company: 'Medidata Solutions',
    period: 'Nov 2020 – Jun 2022',
    bullets: [
      'Deployed Docebo with Okta SSO integration and zero operational disruption',
      'Produced monthly enablement scorecards linking LMS adoption data to Sales pipeline',
      'Diagnosed performance issues using browser tooling and API testing',
    ],
  },
  {
    role: 'Learning Experience Platform Manager',
    company: 'Success Academy Charter Schools',
    period: 'Feb 2019 – Nov 2019',
    bullets: [
      'Introduced and implemented xAPI-compliant LXP tools for data tracking and analytics',
      'Integrated Whova and supporting event applications for large-scale programs',
      'Automated cohort assignments, notifications, and reporting through custom API orchestration',
    ],
  },
  {
    role: 'LMS Associate',
    company: 'Boehringer Ingelheim Pharmaceuticals',
    period: 'Oct 2016 – Jul 2018',
    bullets: [
      'Administered GxP-compliant training programs and resolved SCORM content issues',
      'Configured compliance-driven learning paths, SCORM validation, and global launch schedules',
      'Coordinated with QA and legal partners to maintain audit-ready documentation',
    ],
  },
  {
    role: 'Project Coordinator – Epic Go-Live',
    company: 'Montefiore Hospital',
    period: 'Oct 2015 – Jul 2016',
    bullets: [
      'Coordinated training for 25,000+ users across 7 locations with 120+ instructors',
      'Built Access-based scheduling system and analytics dashboards for trainer logistics',
    ],
  },
  {
    role: 'Regulatory Compliance Training Analyst',
    company: 'American Express',
    period: 'Feb 2012 – Oct 2015',
    bullets: [
      'Managed enterprise compliance training programs and regulatory alignment',
      'Migrated workflows to SharePoint and SumTotal with improved reporting and traceability',
    ],
  },
];

// ── Skills ─────────────────────────────────────────────────────────────────────

export const SKILLS: SkillGroup[] = [
  {
    group: 'LMS Platforms',
    items: [
      'Docebo',
      'Workday Learning',
      'SumTotal',
      'SuccessFactors',
      'Axonify',
      'Intellum-ready',
    ],
  },
  {
    group: 'AI & Automation',
    items: [
      'Claude API',
      'Curriculum Builder',
      'Prompt Observatory',
      'Airtable',
      'Workflow Automation',
      'Agentic AI',
    ],
  },
  {
    group: 'Integration & Systems',
    items: [
      'Workday',
      'Salesforce',
      'UKG Pro',
      'Okta SSO',
      'LinkedIn Learning',
      'HRIS/CRM',
      'REST APIs',
    ],
  },
  {
    group: 'Analytics & Reporting',
    items: [
      'AWS QuickSight',
      'Salesforce Reports',
      'Excel / Google Sheets',
      'Pivot Tables',
      'VLOOKUP / XLOOKUP',
    ],
  },
  {
    group: 'Standards & Compliance',
    items: ['SCORM 2004', 'xAPI / Tin Can', 'GxP Compliance', 'WCAG 2.1'],
  },
];
