import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, BYLINE } from "@/lib/posts";
import { HOSPITAL } from "@/lib/data";

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | ${HOSPITAL.name}`, description: p.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  if (!post) notFound();
  return (
    <>
      <header className="border-b border-ink/10 bg-cream/85">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3.5">
          <a href="/" className="flex items-center gap-2.5 font-display text-xl text-moss-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="" width={38} height={38} className="h-[38px] w-[38px] rounded-full ring-2 ring-white shadow" />
            Astha
          </a>
          <a href="/#blog" className="text-sm text-moss hover:underline">All articles</a>
        </div>
      </header>
      <div role="note" className="bg-ink px-4 py-2 text-center text-sm font-medium text-white">Demo only: no appointments or camp registrations are sent from this website.</div>
      <main className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-sm uppercase tracking-widest text-saffron">{post.tag} &middot; {post.read}</p>
        <h1 className="mt-3 font-display text-4xl leading-tight text-moss-dark md:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm text-ink/55">By the {BYLINE}</p>
        <article className="mt-10 space-y-5 text-lg leading-relaxed text-ink/80">
          {post.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2 className="mb-2 font-display text-2xl text-moss-dark">{b.h}</h2>}
              {b.p && <p>{b.p}</p>}
              {b.ul && <ul className="mt-2 space-y-1.5">{b.ul.map((u) => <li key={u} className="flex gap-2"><span className="text-moss">&bull;</span>{u}</li>)}</ul>}
            </div>
          ))}
        </article>
        <p className="mt-10 rounded-2xl bg-sand/60 p-5 text-sm text-ink/70">This article is general education, not medical advice, and does not diagnose or treat any condition. For your own health concerns, please consult a qualified physician.</p>
        <div className="mt-8 rounded-3xl bg-moss-dark p-7 text-cream">
          <p className="font-display text-2xl">Want a physician to look at your case?</p>
          <a href="/#book" className="mt-4 inline-block rounded-full bg-saffron px-7 py-3 font-medium text-white">See the appointment section</a>
        </div>
      </main>
    </>
  );
}
