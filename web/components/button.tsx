import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost" | "soft";
  size?: "md" | "lg";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const sizes =
    size === "lg" ? "px-5 py-3 text-base" : "px-4 py-2.5 text-sm";
  const variants = {
    solid:
      "bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 focus-visible:outline-emerald-400",
    ghost:
      "border border-white/15 text-white hover:border-emerald-400 hover:text-emerald-200 focus-visible:outline-emerald-400",
    soft:
      "bg-white/10 text-white hover:bg-white/15 focus-visible:outline-emerald-400",
  };

  return (
    <Link
      href={href}
      className={cn(base, sizes, variants[variant], className)}
      prefetch
    >
      {children}
    </Link>
  );
}
