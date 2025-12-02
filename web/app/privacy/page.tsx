import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export default function PrivacyPage() {
  return (
    <Section className="border-none">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Privacy"
          title="How we handle data."
          description="We keep things light and transparent. Update this page once production tracking and forms are finalized."
        />
        <div className="space-y-4 text-sm leading-relaxed text-white/75">
          <p>
            We only collect the information you provide through the contact form or when
            you email us directly. If analytics are enabled, they will be privacy-first
            and anonymized.
          </p>
          <p>
            We do not sell or share your data with third parties. Submitted leads are used
            solely to respond to your inquiry and coordinate next steps.
          </p>
          <p>
            If you’d like your data removed, email us at hello@indieweb.tech and we’ll
            confirm deletion.
          </p>
        </div>
      </div>
    </Section>
  );
}
