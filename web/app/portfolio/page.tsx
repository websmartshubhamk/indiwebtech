import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { caseStudies } from "@/content/data";

export default function PortfolioPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Case studies"
          title="Proof that pairs narrative with measurable outcomes."
          description="Highlights from recent builds and refreshes."
        />
      </Section>
      <Section className="border-none">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-emerald-200">{study.client}</p>
                <div className="flex flex-wrap gap-2">
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
              <h2 className="mt-3 text-2xl font-semibold text-white">{study.title}</h2>
              <p className="mt-2 text-sm text-white/70">{study.summary}</p>
              <p className="mt-2 text-sm font-semibold text-white/90">{study.outcome}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-slate-900/60 p-3"
                  >
                    <p className="text-xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/60">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link
                  href={`/contact?project=${study.slug}`}
                  className="text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                >
                  Plan a similar build →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-slate-900/60 to-sky-500/20 p-6 shadow-lg shadow-emerald-500/10">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
              Want to see more?
            </p>
            <p className="text-lg font-semibold text-white">
              We have additional work samples tailored to your industry.
            </p>
          </div>
          <Button href="/contact" size="lg" variant="ghost">
            Request a walkthrough
          </Button>
        </div>
      </Section>
    </>
  );
}
