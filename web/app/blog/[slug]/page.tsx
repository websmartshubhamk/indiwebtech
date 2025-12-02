import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/section";
import { blogPosts } from "@/content/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | IndieWebTech`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <Section className="border-none">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wide text-emerald-200">
            {new Date(post.date).toLocaleDateString()} — {post.readingTime}
          </p>
          <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-white/75">
          <p>{post.excerpt}</p>
          <p>
            We’ll expand this into full MDX content as assets and longer-form copy arrive.
            For now, this post template shows how we structure metadata, tags, and reading
            time for clear publishing.
          </p>
          <p>
            Want this topic covered in detail? Let us know what you’re shipping, and we’ll
            tailor examples to your stack and launch plan.
          </p>
        </div>
      </div>
    </Section>
  );
}
