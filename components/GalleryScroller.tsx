"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const AUTO_MS = 4500;

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

  const anim = useRef<number | null>(null);

  // JS-driven slide so it animates even where native smooth scrolling is off
  const slideTo = useCallback((target: number, ms = 750) => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const to = Math.max(0, Math.min(max, target));
    const from = el.scrollLeft;
    if (anim.current) cancelAnimationFrame(anim.current);
    if (Math.abs(to - from) < 2) return;
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
    const t0 = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      el.scrollLeft = from + (to - from) * ease(t);
      if (t < 1) anim.current = requestAnimationFrame(tick);
      else { anim.current = null; el.style.scrollSnapType = ""; el.style.scrollBehavior = ""; update(); }
    };
    anim.current = requestAnimationFrame(tick);
  }, [update]);

  const stepSize = () => {
    const card = ref.current?.querySelector("figure") as HTMLElement | null;
    return (card?.offsetWidth ?? 280) + 16;
  };

  const paused = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.4 });
    io.observe(el);
    const id = window.setInterval(() => {
      if (paused.current || !visible.current || document.hidden) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) slideTo(0, 1100);
      else slideTo(el.scrollLeft + stepSize());
    }, AUTO_MS);
    return () => { window.clearInterval(id); io.disconnect(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideTo]);

  const pause = () => { paused.current = true; };
  const resume = () => { paused.current = false; };

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    paused.current = true;
    slideTo(el.scrollLeft + dir * stepSize(), 650);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
  };

  const btn = "absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-moss-dark shadow-lg ring-1 ring-moss/20 transition hover:bg-moss hover:text-white disabled:pointer-events-none disabled:opacity-0";

  return (
    <div className="relative mt-10" onMouseEnter={pause} onMouseLeave={resume} onTouchStart={pause} onTouchEnd={() => window.setTimeout(resume, 6000)} onFocus={pause} onBlur={resume}>
      <button type="button" aria-label="Previous photos" disabled={atStart} onClick={() => go(-1)} className={`${btn} -left-4 md:-left-6`}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button type="button" aria-label="Next photos" disabled={atEnd} onClick={() => go(1)} className={`${btn} -right-4 md:-right-6`}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
      </button>
      <div ref={ref} onScroll={update} onKeyDown={onKey} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" tabIndex={0} aria-label="Photo gallery">
        {items.map((it) => (
          <figure key={it.src} className="w-[72%] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-sm sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]">
            <div className="aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt={it.cap} width={it.w} height={it.h} loading="lazy" draggable={false} className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
