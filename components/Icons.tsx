import type { Treatment } from "@/lib/data";

export function Icon({ k }: { k: Treatment["icon"] }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
      {k === "oil" && <g {...p}><path d="M24 6c6 8 10 13 10 19a10 10 0 0 1-20 0c0-6 4-11 10-19z" /><path d="M19 27a5 5 0 0 0 5 5" /></g>}
      {k === "drop" && <g {...p}><path d="M24 4v10" /><path d="M24 20c4 5 7 8 7 12a7 7 0 0 1-14 0c0-4 3-7 7-12z" /><path d="M12 42h24" /></g>}
      {k === "lotus" && <g {...p}><path d="M24 10c5 5 6 12 0 22-6-10-5-17 0-22z" /><path d="M8 20c8 0 13 5 16 12-8 1-14-3-16-12z" /><path d="M40 20c-8 0-13 5-16 12 8 1 14-3 16-12z" /><path d="M10 38h28" /></g>}
      {k === "spine" && <g {...p}><rect x="19" y="6" width="10" height="6" rx="2" /><rect x="18" y="16" width="12" height="6" rx="2" /><rect x="19" y="26" width="10" height="6" rx="2" /><rect x="18" y="36" width="12" height="6" rx="2" /></g>}
      {k === "steam" && <g {...p}><path d="M14 10c-3 4 3 6 0 10s3 6 0 10" /><path d="M24 8c-3 4 3 6 0 10s3 6 0 10" /><path d="M34 10c-3 4 3 6 0 10s3 6 0 10" /><path d="M8 40h32" /></g>}
      {k === "leaf" && <g {...p}><path d="M10 38C8 20 20 8 40 8c0 20-10 32-28 30z" /><path d="M10 38C18 26 26 18 34 14" /></g>}
      {k === "flame" && <g {...p}><circle cx="24" cy="24" r="8" /><path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4" /></g>}
      {k === "herb" && <g {...p}><path d="M24 42V18" /><path d="M24 26c-8 0-12-5-12-12 8 0 12 5 12 12z" /><path d="M24 20c6 0 10-4 10-10-6 0-10 4-10 10z" /><path d="M24 34c-6 0-9-3-9-8 6 0 9 3 9 8z" /></g>}
    </svg>
  );
}

export function Mandala({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.8">
        {petals.map((a) => (<path key={a} transform={`rotate(${a})`} d="M0 -88 C14 -66 14 -40 0 -22 C-14 -40 -14 -66 0 -88z" />))}
        {petals.map((a) => (<path key={"b" + a} transform={`rotate(${a + 15})`} d="M0 -64 C8 -52 8 -40 0 -30 C-8 -40 -8 -52 0 -64z" />))}
        <circle r="96" /><circle r="18" /><circle r="8" />
      </g>
    </svg>
  );
}

export function Leaf({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 140" className={className} style={style} aria-hidden="true">
      <path d="M50 135C10 100 5 45 50 5c45 40 40 95 0 130z" fill="currentColor" opacity="0.9" />
      <path d="M50 135V25M50 60L30 45M50 80L25 62M50 60l20-15M50 80l25-18" stroke="#f6efe0" strokeWidth="2" fill="none" opacity="0.55" />
    </svg>
  );
}
