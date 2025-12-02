import Link from "next/link";
import { navLinks, contactInfo } from "@/content/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
            IndieWebTech
          </p>
          <p className="text-2xl font-semibold text-white">
            Web experiences built to convert, scale, and feel intentional.
          </p>
          <p className="text-sm text-white/70">
            {contactInfo.location} — {contactInfo.email}
          </p>
          <div className="text-sm">
            <Link
              className="text-emerald-200 hover:text-emerald-100"
              href={contactInfo.calendly}
              target="_blank"
              rel="noreferrer"
            >
              Book a strategy call
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="font-semibold text-white">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-white">Resources</p>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white" href="/blog">
                  Articles
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/portfolio">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="font-semibold text-white">Legal</p>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        IndieWebTech Studio — built with performance, accessibility, and care.
      </div>
    </footer>
  );
}
