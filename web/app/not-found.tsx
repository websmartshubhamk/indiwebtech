import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <Section className="border-none">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
          404
        </p>
        <h1 className="text-3xl font-semibold text-white">Page not found</h1>
        <p className="text-sm text-white/70">
          The page you’re looking for isn’t here. Explore the latest work or get in touch.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Go home
          </Button>
          <Button href="/contact" size="lg" variant="ghost">
            Contact us
          </Button>
        </div>
        <Link
          href="/portfolio"
          className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200 hover:text-emerald-100"
        >
          View portfolio →
        </Link>
      </div>
    </Section>
  );
}
