import Link from "next/link";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, caseStudies, hero, services, testimonials } from "@/content/data";

const metrics = [
  { label: "Performance", value: "95+ LCP" },
  { label: "Accessibility", value: "WCAG AA" },
  { label: "Speed to ship", value: "2-4 weeks" },
];

export default function Home() {
  return (
    <>
      <Section className="pt-10 sm:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200 ring-1 ring-white/10">
              {hero.eyebrow}
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {hero.title}
              </h1>
              <p className="text-lg leading-relaxed text-white/70">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="lg">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} size="lg" variant="ghost">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {hero.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-emerald-500/10 p-6 shadow-lg shadow-emerald-500/10 backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-emerald-200">
                Lead-ready foundations
              </p>
              <p className="mt-2 text-base text-white/70">
                Funnel visitors from hero to CTA to booking with purposeful
                sections, proof points, and frictionless forms.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <p className="text-lg font-semibold text-white">{metric.value}</p>
                  <p className="text-xs uppercase tracking-wide text-white/60">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-white">Content, not chaos</p>
              <p className="mt-2 text-sm text-white/70">
                Structured services, case studies, and blog posts keep your site
                shippable without vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Small, focused engagements that move the needle."
          description="Pick the slice you need—launch-ready pages, a content system, or conversion uplift."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
                    {service.id}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{service.name}</h3>
                </div>
                {service.priceHint && (
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {service.priceHint}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-white/70">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Button href="/contact" variant="soft" className="w-full justify-center">
                  {service.cta ?? "Talk to us"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading
            eyebrow="Proof"
            title="Recent work and outcomes."
            description="Case studies and wins from teams shipping faster and converting better."
          />
          <div className="grid flex-1 gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((study) => (
              <div
                key={study.slug}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-emerald-200">{study.client}</p>
                  <div className="flex gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{study.title}</h3>
                <p className="mt-2 text-sm text-white/70">{study.summary}</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/10 bg-slate-900/60 p-3"
                    >
                      <p className="text-lg font-semibold text-white">{metric.value}</p>
                      <p className="text-xs uppercase tracking-wide text-white/60">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/portfolio"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  View the work →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Testimonials"
              title="Teams who trusted us to tell their story."
            />
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
                >
                  <p className="text-base text-white/80">“{testimonial.quote}”</p>
                  <div className="mt-4 text-sm font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-white/60">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-white/5 to-sky-500/15 p-6 shadow-2xl shadow-emerald-500/20">
            <SectionHeading
              eyebrow="Lead capture"
              title="Forms that feel good to submit."
              description="Validation, states, and clear success handling. We wire email notifications and booking links so no lead is missed."
            />
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Contact form</p>
                <p className="text-sm text-white/70">
                  Inline validation, spam-friendly guardrails, and clear next steps.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Booking entry</p>
                <p className="text-sm text-white/70">
                  Calendly/Cal.com handoff with context so calls stay productive.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold text-white">Notifications</p>
                <p className="text-sm text-white/70">
                  Route leads where you need: inbox, ops channel, or CRM.
                </p>
              </div>
              <div className="pt-2">
                <Button href="/contact" size="lg">
                  Plan your lead flow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            eyebrow="Content"
            title="Blog + ideas"
            description="Thought starters to keep your marketing site sharp."
          />
          <Link
            href="/blog"
            className="text-sm font-semibold text-emerald-200 hover:text-emerald-100"
          >
            View all posts →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readingTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-none">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/25 via-slate-900/60 to-sky-500/20 p-8 shadow-2xl shadow-emerald-500/15">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
                Ready when you are
              </p>
              <h3 className="text-3xl font-semibold text-white">
                Let’s build the next version of your site.
              </h3>
              <p className="text-sm text-white/70">
                We’ll align on goals, map the IA, and ship in focused weekly slices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Start a project
              </Button>
              <Button href="/portfolio" size="lg" variant="ghost">
                See proof
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
