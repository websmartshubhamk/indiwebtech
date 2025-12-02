import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
};

export function Section({ id, children, className, bleed = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-white/10 py-14 sm:py-16",
        bleed ? "px-0" : "px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-6xl", bleed && "px-4 sm:px-6 lg:px-8")}>
        {children}
      </div>
    </section>
  );
}
