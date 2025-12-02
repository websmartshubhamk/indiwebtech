import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export default function TermsPage() {
  return (
    <Section className="border-none">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Terms"
          title="Working together."
          description="Baseline terms; replace with your legal review before launch."
        />
        <div className="space-y-4 text-sm leading-relaxed text-white/75">
          <p>
            Project scope, milestones, and fees will be defined in a separate statement of
            work. Payments are due per the schedule outlined in that document.
          </p>
          <p>
            All intellectual property for delivered work transfers to you upon final
            payment, excluding pre-existing tools and libraries used to build the project.
          </p>
          <p>
            By using this site or submitting a form, you consent to us contacting you
            about your inquiry. We’ll never spam or share your contact details.
          </p>
        </div>
      </div>
    </Section>
  );
}
