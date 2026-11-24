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
