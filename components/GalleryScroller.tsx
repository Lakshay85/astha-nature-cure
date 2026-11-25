"use client";
import { useRef, useState, useEffect, useCallback } from "react";

type Item = { src: string; cap: string; w: number; h: number };

export default function GalleryScroller({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("figure") as HTMLElement | null;
    const step = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  const btn = "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-moss-dark shadow-lg ring-1 ring-moss/20 transition hover:bg-moss hover:text-white disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className="relative mt-10">
      <button type="button" aria-label="Previous photos" disabled={atStart} onClick={() => go(-1)} className={`${btn} -left-4 md:-left-6`}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button type="button" aria-label="Next photos" disabled={atEnd} onClick={() => go(1)} className={`${btn} -right-4 md:-right-6`}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      <div ref={ref} onScroll={update} className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" tabIndex={0} aria-label="Photo gallery">
        {items.map((it) => (
          <figure key={it.src} className="w-[72%] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
            <div className="aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt={it.cap} width={it.w} height={it.h} loading="lazy" draggable={false} className="h-full w-full object-cover" />
            </div>
            <figcaption className="px-5 py-3 text-sm font-medium text-moss-dark">{it.cap}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
