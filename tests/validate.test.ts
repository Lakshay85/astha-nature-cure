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
  const v = { name: "Asha Verma", phone: "9876543210", age: "45", treatment: "Yoga", date: "2026-12-01", slot: "6:30 AM", notes: "Back pain & stiffness" };
  it("targets the configured number", () => {
    expect(whatsappUrl(v).startsWith(`https://wa.me/${WA_NUMBER}?text=`)).toBe(true);
    expect(WA_NUMBER).toBe("919911490501");
  });
  it("round-trips every detail through encoding", () => {
    const text = decodeURIComponent(whatsappUrl(v).split("text=")[1]);
    for (const x of ["Asha Verma", "9876543210", "45", "Yoga", "6:30 AM", "Back pain & stiffness"]) expect(text).toContain(x);
    expect(text).toBe(whatsappMessage(v));
  });
  it("omits empty optional fields", () => {
    expect(whatsappMessage({ ...v, age: "", notes: "" })).not.toMatch(/Age:|Notes:/);
  });
});
