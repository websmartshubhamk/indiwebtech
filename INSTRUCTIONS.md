# IndieWebTech – Farmer Instructions

## Overview
- You are building the IndieWebTech product. Default assumption: a modern web presence and lead-generation experience for a web services studio (marketing site, services, portfolio, blog, contact/lead capture). Confirm this scope with the stakeholder before locking the plan.
- Path: `~/master\ Codex/projects/indiwebtech`
- Operating mode: discovery-first; document decisions; keep tasks synced with reality.

## Objectives (refine with stakeholder)
- Deliver a polished, responsive site with clear value proposition, services, portfolio/work examples, pricing cues, testimonials/social proof, and strong calls-to-action (contact/consult/quote).
- Add content workflows: blog/news posts and lightweight case studies.
- Implement lead capture: contact form, calendaring/meeting link entry point, and email notifications.
- Provide an admin-friendly content approach (CMS or structured content files) and deployment plan.

## Constraints & Preferences
- Confirm stack with stakeholder. Suggested default: TypeScript, Next.js (app router) or similar modern frontend, minimal backend (API routes/serverless) with persistence suited to hosting choice. Prefer simple, low-ops hosting.
- Prioritize accessibility (WCAG AA), performance, and SEO essentials (meta, sitemap, OG tags, schema where appropriate).
- Keep configuration minimal; avoid vendor lock-in; secrets via environment variables.
- Tests: at least smoke/e2e for critical flows (home render, navigation, contact/lead submission).
- Document anything non-obvious; include run/test/build instructions.

## Process Expectations
- Start with discovery: confirm goals, audience, brand tone, pages/IA, required integrations (email, booking, analytics, CMS), and deployment targets.
- Draft a concise architecture/approach doc before coding; get sign-off if possible.
- Work in small milestones; keep `TASKS.md` updated as reality changes.
- Favor reusable components, typed APIs, and clean content modeling.
- Validate user journeys (home → services → proof → CTA) end-to-end.

## Deliverables
- Architecture/approach brief with stack choice and hosting plan.
- Implemented site with defined IA, content structure, and lead flows.
- Tests for core journeys and form handling; basic monitoring hooks (analytics/error logging) if allowed.
- Ops notes: environment variables, secrets handling, deployment instructions, and handoff notes.

## Communication
- Surface risks/unknowns early (branding assets, content ownership, CMS choice, email/booking provider, analytics policy).
- Keep a running changelog in commits and note major decisions in the repo.
