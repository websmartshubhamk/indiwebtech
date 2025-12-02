export type Service = {
  id: string;
  name: string;
  summary: string;
  priceHint?: string;
  details: string[];
  cta?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const hero = {
  eyebrow: "IndieWebTech Studio",
  title: "Web experiences built to convert, scale, and tell your story.",
  description:
    "We craft modern marketing sites, portfolio narratives, and lead funnels for ambitious web service teams.",
  primaryCta: { href: "/contact", label: "Book a strategy call" },
  secondaryCta: { href: "/portfolio", label: "See our work" },
  highlights: [
    "App Router + TypeScript",
    "Lead capture & booking flows",
    "Performance and accessibility first",
  ],
};

export const services: Service[] = [
  {
    id: "launch",
    name: "Launch-ready marketing site",
    summary: "Foundational site that nails your value prop and funnels leads.",
    priceHint: "from $6k",
    details: [
      "IA + narrative for home, services, and proof",
      "Hero, CTA, and booking entry points",
      "Mobile-first components and section library",
    ],
    cta: "Schedule kickoff",
  },
  {
    id: "content",
    name: "Content + case study system",
    summary: "MDX-powered stories for work highlights, blog posts, and news.",
    priceHint: "from $4k",
    details: [
      "Structured models for services, case studies, and posts",
      "SEO essentials: meta, OG, sitemap, and schema",
      "Reusable templates for future updates",
    ],
    cta: "Plan your content",
  },
  {
    id: "conversion",
    name: "Conversion uplift",
    summary: "Polish flows with crisp UX, form validation, and analytics.",
    priceHint: "from $3k",
    details: [
      "Form hardening: validation, error states, spam controls",
      "Performance and accessibility pass",
      "Analytics and success measurement setup",
    ],
    cta: "Review my funnel",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "headless-cms-rollout",
    title: "Headless CMS rollout without downtime",
    client: "Atlas Digital",
    summary:
      "Rebuilt their services site with MDX content and faster publishing.",
    outcome: "Faster iteration with a reusable component system.",
    metrics: [
      { label: "Page speed", value: "95+ LCP" },
      { label: "Publish time", value: "-70%" },
    ],
    tags: ["Content", "Performance", "CMS"],
  },
  {
    slug: "services-funnel",
    title: "Service funnel that doubled consultations",
    client: "Northwind Web",
    summary: "Refined offers, testimonials, and booking flow with clear CTAs.",
    outcome: "Clarity on value and a measurable pipeline lift.",
    metrics: [
      { label: "Consultations", value: "2.1x" },
      { label: "Conversion", value: "+18%" },
    ],
    tags: ["Strategy", "UX", "CRO"],
  },
  {
    slug: "brand-refresh",
    title: "Brand refresh with live style tokens",
    client: "Signal Works",
    summary: "Introduced a vivid visual system and responsive layouts.",
    outcome: "Consistent experience across marketing and case studies.",
    metrics: [
      { label: "Time on page", value: "+23%" },
      { label: "Bounce rate", value: "-17%" },
    ],
    tags: ["Design", "Systems", "UI"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "IndieWebTech translated our messy brief into a tight site that finally tells our story. The lead quality jumped immediately.",
    name: "Priya Narang",
    title: "Founder",
    company: "Northwind Web",
  },
  {
    quote:
      "They shipped fast, kept performance in check, and gave us a repeatable way to publish case studies without a CMS bloat.",
    name: "Jason Mendez",
    title: "Principal",
    company: "Atlas Digital",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "crafting-lead-ctas",
    title: "Designing CTAs that guide leads without feeling pushy",
    excerpt:
      "How to place hero, inline, and footer CTAs so visitors always know the next step.",
    date: "2024-10-08",
    tags: ["UX", "CRO"],
    readingTime: "5 min read",
  },
  {
    slug: "mdx-case-studies",
    title: "MDX for case studies: structure once, update quickly",
    excerpt:
      "Use frontmatter, metrics, and proof components to keep work examples sharp.",
    date: "2024-08-21",
    tags: ["Content", "Engineering"],
    readingTime: "6 min read",
  },
  {
    slug: "perf-accessibility",
    title: "Performance and accessibility checks for every launch",
    excerpt:
      "A lightweight pre-flight to keep LCP, INP, and focus states dialed in.",
    date: "2024-06-12",
    tags: ["Performance", "A11y"],
    readingTime: "4 min read",
  },
];

export const contactInfo = {
  email: "hello@indieweb.tech",
  calendly: "https://cal.com/indiewebtech/strategy",
  location: "Remote-first, North America & Europe friendly hours",
};
