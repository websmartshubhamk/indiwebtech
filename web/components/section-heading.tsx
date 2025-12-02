type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-200">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      {description && <p className="text-base text-white/70">{description}</p>}
    </div>
  );
}
