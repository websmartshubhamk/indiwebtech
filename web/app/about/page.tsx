import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { contactInfo } from "@/content/data";

const principles = [
  {
    title: "Narrative first",
    copy: "We work with you to articulate value props, offers, and proof so the design supports a clear story.",
  },
  {
    title: "Ship in slices",
    copy: "Work happens in weekly milestones with visible progress—no big-bang waits.",
  },
  {
    title: "Accessibility + performance",
    copy: "We keep WCAG AA and Core Web Vitals in the loop from day one, not as an afterthought.",
  },
];

const capabilities = [
  "Next.js App Router + TypeScript",
  "MDX content models for posts and case studies",
  "Tailwind-powered design systems",
  "Lead capture flows with validation and spam guards",
  "Analytics wiring and SEO essentials",
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="About"
          title="IndieWebTech is a focused studio for modern marketing sites."
          description="We’re designers and engineers who care about clarity, speed, and lead capture."
        />
        <div className="mt-6 max-w-3xl space-y-4 text-base text-white/75">
          <p>
            We build marketing and content experiences for web service teams. That means
            shaping the story, crafting modular layouts, and wiring the forms and booking
            links that turn visits into conversations.
          </p>
          <p>
            Our approach pairs intentional design with pragmatic engineering—typed APIs,
            file-based content, and lightweight ops. You keep control over hosting and
            content without getting locked into a heavy CMS.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Principles"
              title="How we work"
              description="Repeatable habits that keep projects on track."
            />
            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-emerald-500/5"
                >
                  <p className="text-base font-semibold text-white">{principle.title}</p>
                  <p className="mt-2 text-sm text-white/70">{principle.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-slate-900/70 to-sky-500/15 p-6 shadow-2xl shadow-emerald-500/15">
            <SectionHeading
              eyebrow="Capabilities"
              title="What we bring"
              description="Core stack, patterns, and disciplines baked into every build."
            />
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {capabilities.map((capability) => (
                <li key={capability} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/contact" size="lg">
                Meet the team
              </Button>
            </div>
            <p className="mt-3 text-xs uppercase tracking-wide text-white/60">
              {contactInfo.location}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
