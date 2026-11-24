"use client";
import { useState } from "react";
import { treatments, slots } from "@/lib/data";
import { validateBooking, reference, type BookingInput, type Errors } from "@/lib/validate";

const empty: BookingInput = { name: "", phone: "", age: "", treatment: "", date: "", slot: "", notes: "" };

function localISO(d: Date) {
  const z = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

export default function Booking() {
  const [v, setV] = useState<BookingInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ ref: string; v: BookingInput } | null>(null);
  const [busy, setBusy] = useState(false);
  const set = (k: keyof BookingInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const er = validateBooking(v);
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      document.getElementById("f-" + first)?.focus();
      return;
    }
    setBusy(true);
    setTimeout(() => { setDone({ ref: reference(v), v }); setBusy(false); }, 700);
  }

  if (done) {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 md:p-10 shadow-xl text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-moss text-white check-pop">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg>
        </div>
        <h3 className="font-display text-3xl text-ink">Request received, {done.v.name.split(" ")[0]}</h3>
        <p className="mt-3 text-ink/70">Our front desk will call you on <b>{done.v.phone}</b> within 2 hours to confirm.</p>
        <dl className="mx-auto mt-6 grid max-w-sm grid-cols-2 gap-y-2 rounded-2xl bg-cream p-5 text-left text-sm">
          <dt className="text-ink/60">Reference</dt><dd className="font-semibold">{done.ref}</dd>
          <dt className="text-ink/60">For</dt><dd>{done.v.treatment}</dd>
          <dt className="text-ink/60">Date</dt><dd>{new Date(done.v.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</dd>
          <dt className="text-ink/60">Time</dt><dd>{done.v.slot}</dd>
        </dl>
        <p className="mt-5 text-xs text-ink/50">Demo site: no real booking is made and nothing is stored. To book now, call +91 98960 91578.</p>
        <button onClick={() => { setDone(null); setV(empty); }} className="mt-6 rounded-full border border-moss px-6 py-2.5 text-moss hover:bg-moss hover:text-white transition">Book another</button>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink outline-none transition focus:border-moss focus:ring-2 focus:ring-moss/25";
  const err = (k: keyof BookingInput) => errors[k] && <p id={`e-${k}`} role="alert" className="mt-1 text-sm text-red-700">{errors[k]}</p>;
  const aria = (k: keyof BookingInput) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 md:p-10 shadow-xl">
      <div className="grid gap-5 md:grid-cols-2">
        <div><label htmlFor="f-name" className="mb-1 block text-sm font-medium">Full name</label><input id="f-name" autoComplete="name" className={field} value={v.name} onChange={set("name")} {...aria("name")} />{err("name")}</div>
        <div><label htmlFor="f-phone" className="mb-1 block text-sm font-medium">Mobile number</label><input id="f-phone" inputMode="tel" autoComplete="tel" placeholder="98765 43210" className={field} value={v.phone} onChange={set("phone")} {...aria("phone")} />{err("phone")}</div>
        <div><label htmlFor="f-age" className="mb-1 block text-sm font-medium">Age <span className="text-ink/50">(optional)</span></label><input id="f-age" inputMode="numeric" className={field} value={v.age} onChange={set("age")} {...aria("age")} />{err("age")}</div>
        <div><label htmlFor="f-treatment" className="mb-1 block text-sm font-medium">Treatment</label>
          <select id="f-treatment" className={field} value={v.treatment} onChange={set("treatment")} {...aria("treatment")}>
            <option value="">Select one</option>
            <option>General consultation (first visit)</option>
            {treatments.map((t) => <option key={t.id}>{t.name}</option>)}
            <option>Camp registration</option>
          </select>{err("treatment")}</div>
        <div><label htmlFor="f-date" className="mb-1 block text-sm font-medium">Preferred date</label><input id="f-date" type="date" min={localISO(new Date())} className={field} value={v.date} onChange={set("date")} {...aria("date")} />{err("date")}</div>
        <div><label htmlFor="f-slot" className="mb-1 block text-sm font-medium">Time slot</label>
          <select id="f-slot" className={field} value={v.slot} onChange={set("slot")} {...aria("slot")}><option value="">Select a time</option>{slots.map((s) => <option key={s}>{s}</option>)}</select>{err("slot")}</div>
      </div>
      <div className="mt-5"><label htmlFor="f-notes" className="mb-1 block text-sm font-medium">Anything we should know? <span className="text-ink/50">(optional)</span></label><textarea id="f-notes" rows={3} className={field} value={v.notes} onChange={set("notes")} {...aria("notes")} />{err("notes")}</div>
      <button disabled={busy} className="mt-7 w-full rounded-full bg-moss px-8 py-4 text-lg font-medium text-white shadow-lg shadow-moss/30 transition hover:bg-moss-dark disabled:opacity-70 md:w-auto">{busy ? "Sending..." : "Request appointment"}</button>
      <p className="mt-3 text-xs text-ink/50">Timings: 6:30 AM to 12:30 PM and 4 PM to 8 PM. To book right now, call +91 98960 91578. This demo form does not send data anywhere.</p>
    </form>
  );
}
