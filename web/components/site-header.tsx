"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/content/data";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30">
            IWT
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
              IndieWebTech
            </p>
            <p className="text-xs text-white/70">Studio</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative transition hover:text-white",
                  isActive && "text-white",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-400 to-sky-500" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Start a project
          </Button>
        </div>
        <div className="md:hidden">
          <Button href="/contact" size="md" variant="soft">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
