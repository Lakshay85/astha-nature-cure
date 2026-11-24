"use client";
import { useState } from "react";

const links = [["Treatments", "#treatments"], ["Sample camp", "#camp"], ["Conditions", "#conditions"], ["Visit", "#visit"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2.5 font-display text-xl text-moss-dark">
          <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#2f5d3a" /><path d="M20 8c6 5 8 11 0 24C12 19 14 13 20 8z" fill="#f6efe0" /><path d="M20 14v16" stroke="#2f5d3a" strokeWidth="1.5" /></svg>
          Astha <span className="hidden sm:inline text-ink/60 text-base">Yoga &amp; Nature Cure Hospital</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-sm text-ink/75 hover:text-moss">{l}</a>)}
          <a href="#book" className="rounded-full bg-moss px-5 py-2 text-sm font-medium text-white hover:bg-moss-dark">Book appointment</a>
        </nav>
        <button className="md:hidden rounded-lg border border-ink/20 px-3 py-1.5 text-sm" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <nav id="mnav" className="grid gap-1 border-t border-ink/10 bg-cream px-5 pb-4 md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2.5 text-ink/80">{l}</a>)}
          <a href="#book" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-moss px-5 py-3 text-center font-medium text-white">Book appointment</a>
        </nav>
      )}
    </header>
  );
}
