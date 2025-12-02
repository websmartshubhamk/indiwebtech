import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { contactInfo, services } from "@/content/data";

export default function ContactPage() {
  const quickOptions = services.map((service) => service.name);

  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project."
          description="We respond in one business day with a quick plan and timeline."
        />
      </Section>
      <Section className="border-none">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <ContactForm />
          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-emerald-200">Booking link</p>
              <Link
                href={contactInfo.calendly}
                className="text-lg font-semibold text-white hover:text-emerald-100"
              >
                Book a strategy call →
              </Link>
              <p className="text-sm text-white/70">
                Drop us a note or grab time directly; we’ll prep based on your goals.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Quick options</p>
              <div className="flex flex-wrap gap-2">
                {quickOptions.map((option) => (
                  <span
                    key={option}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Prefer email?</p>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="text-sm text-emerald-200 hover:text-emerald-100"
              >
                {contactInfo.email}
              </Link>
              <p className="text-xs uppercase tracking-wide text-white/60">
                {contactInfo.location}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
