import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/button";
import { services } from "@/content/data";

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch, publish, and convert."
          description="Pick a focused engagement or combine them to fit your timeline."
        />
      </Section>
      <Section className="border-none">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
                    {service.id}
                  </p>
                  <h1 className="mt-2 text-2xl font-semibold text-white">
                    {service.name}
                  </h1>
                </div>
                {service.priceHint && (
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {service.priceHint}
                  </span>
                )}
              </div>
              <p className="mt-3 text-base text-white/70">{service.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <Button href="/contact" size="lg" className="w-full justify-center">
                  {service.cta ?? "Start this engagement"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
