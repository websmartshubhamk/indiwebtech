import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/content/data";

export default function BlogPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Blog"
          title="Ideas for sharper marketing sites."
          description="Guides, patterns, and checklists you can apply today."
        />
      </Section>
      <Section className="border-none">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mt-2 text-sm text-white/70">{post.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
              >
                Read post →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
