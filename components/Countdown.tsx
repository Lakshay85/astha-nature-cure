"use client";
import { useEffect, useState } from "react";

export default function Countdown({ to }: { to: string }) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => { setNow(Date.now()); const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  if (now === null) return <div className="h-20" />;
  const ms = Math.max(0, new Date(to).getTime() - now);
  const parts: [number, string][] = [[Math.floor(ms / 864e5), "days"], [Math.floor(ms / 36e5) % 24, "hours"], [Math.floor(ms / 6e4) % 60, "min"], [Math.floor(ms / 1e3) % 60, "sec"]];
  return (
    <div className="flex gap-3" aria-label="Time until the camp">
      {parts.map(([n, l]) => (
        <div key={l} className="w-[4.2rem] rounded-2xl bg-white/10 py-3 text-center backdrop-blur"><div className="font-display text-3xl tabular-nums">{String(n).padStart(2, "0")}</div><div className="text-[11px] uppercase tracking-wider opacity-70">{l}</div></div>
      ))}
    </div>
  );
}
