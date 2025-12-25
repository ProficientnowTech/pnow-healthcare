import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Badge } from "@/components/ui/badge";

type Props = {
  id: string;
};

export function BlogDetailPage({ id }: Props) {
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return null;

  return (
    <main className="bg-white mt-[50px] text-slate-900 min-h-screen">
      <section className="relative">
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-20 space-y-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
          >
            ← Back to insights
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1">
              {blog.category}
            </Badge>
            <span className="text-slate-500 text-sm">{blog.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            {blog.title}
          </h1>
          <p className="text-lg text-slate-600 md:text-xl max-w-3xl">
            {blog.summary}
          </p>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/60">
            <Image
              src={blog.image}
              alt={blog.title}
              width={1200}
              height={800}
              className="relative h-full w-full object-contain bg-gradient-to-br from-white via-slate-50 to-blue-50"
              priority
            />
          </div>
          <ul className="flex flex-wrap gap-2">
            {blog.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs text-blue-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="relative mx-auto max-w-5xl px-6 space-y-10">
          {blog.fullContent ? (
            <article className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50 p-6 md:p-8">
              <div className="whitespace-pre-line text-base leading-relaxed text-slate-800">
                {blog.fullContent}
              </div>
            </article>
          ) : (
            blog.sections.map((section) => (
              <article
                key={section.heading ?? section.body?.[0]}
                className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-blue-100/50 p-6 md:p-8 space-y-4"
              >
                {section.heading && (
                  <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
                    {section.heading}
                  </h2>
                )}
                {section.body?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-slate-800"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 text-base text-slate-800">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
