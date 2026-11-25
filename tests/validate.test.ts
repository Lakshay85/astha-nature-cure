import { describe, it, expect } from "vitest";
import { validateBooking, reference, type BookingInput } from "../lib/validate";

const today = new Date(2026, 10, 25);
const ok: BookingInput = { name: "Rakesh Kumar", phone: "98960 91578", age: "45", treatment: "Yoga", date: "2026-11-26", slot: "6:30 AM", notes: "" };

describe("validateBooking", () => {
  it("accepts a valid request", () => expect(validateBooking(ok, today)).toEqual({}));
  it("accepts +91 prefix", () => expect(validateBooking({ ...ok, phone: "+91 9896091578" }, today).phone).toBeUndefined());
  it("rejects short names", () => expect(validateBooking({ ...ok, name: "A" }, today).name).toBeTruthy());
  it("rejects bad phones", () => { for (const p of ["12345", "5896091578", "abcdefghij", ""]) expect(validateBooking({ ...ok, phone: p }, today).phone).toBeTruthy(); });
  it("rejects past dates, allows today", () => { expect(validateBooking({ ...ok, date: "2026-11-24" }, today).date).toBeTruthy(); expect(validateBooking({ ...ok, date: "2026-11-25" }, today).date).toBeUndefined(); });
  it("requires treatment, date and slot", () => { const e = validateBooking({ ...ok, treatment: "", date: "", slot: "" }, today); expect(e.treatment && e.date && e.slot).toBeTruthy(); });
  it("age optional but bounded", () => { expect(validateBooking({ ...ok, age: "" }, today).age).toBeUndefined(); expect(validateBooking({ ...ok, age: "200" }, today).age).toBeTruthy(); });
  it("limits notes", () => expect(validateBooking({ ...ok, notes: "x".repeat(401) }, today).notes).toBeTruthy());
  it("reference is stable", () => { expect(reference(ok)).toBe(reference({ ...ok })); expect(reference(ok)).toMatch(/^AST-[0-9A-Z]{6}$/); });
});

import { whatsappUrl, whatsappMessage, WA_NUMBER } from "../lib/validate";
describe("whatsapp link", () => {
  const v = { name: "Lakshay", phone: "9911490501", age: "25", treatment: "Yoga", date: "2026-11-26", slot: "10:30 AM", notes: "" };
  const sample = [
    "\u{1F3E5} *New Appointment Request - Astha Hospital*",
    "",
    "\u{1F464} *Name:* Lakshay",
    "\u{1F4DE} *Phone:* 9911490501",
    "\u{1F382} *Age:* 25",
    "\u{1FA7A} *Treatment:* Yoga",
    "\u{1F4C5} *Date:* Thu, 26 Nov 2026",
    "\u23F0 *Time:* 10:30 AM",
  ].join("\n");
  it("matches the agreed layout exactly", () => expect(whatsappMessage(v)).toBe(sample));
  it("targets the configured number and encodes line breaks as %0A", () => {
    const u = whatsappUrl(v);
    expect(u.startsWith(`https://wa.me/${WA_NUMBER}?text=`)).toBe(true);
    expect(WA_NUMBER).toBe("919911490501");
    expect(u).toContain("%0A");
    expect(u).not.toMatch(/[\u{1F300}-\u{1FAFF}\n ]/u);
    expect(decodeURIComponent(u.split("text=")[1])).toBe(sample);
  });
  it("skips Age and Notes when not given, and adds Notes when given", () => {
    expect(whatsappMessage({ ...v, age: "" })).not.toContain("Age:");
    expect(whatsappMessage(v)).not.toContain("Notes:");
    expect(whatsappMessage({ ...v, notes: "Back pain" })).toContain("*Notes:* Back pain");
  });
});
