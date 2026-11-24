export type BookingInput = { name: string; phone: string; age: string; treatment: string; date: string; slot: string; notes: string };
export type Errors = Partial<Record<keyof BookingInput, string>>;

export function validateBooking(v: BookingInput, today = new Date()): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, "").replace(/^(\+91|0)/, ""))) e.phone = "Enter a valid 10-digit mobile number.";
  if (v.age && (!/^\d{1,3}$/.test(v.age) || +v.age < 1 || +v.age > 110)) e.age = "Enter an age between 1 and 110.";
  if (!v.treatment) e.treatment = "Choose a treatment or consultation.";
  if (!v.date) e.date = "Pick a date.";
  else {
    const d = new Date(v.date + "T00:00:00");
    const t0 = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (isNaN(d.getTime()) || d < t0) e.date = "Pick today or a later date.";
  }
  if (!v.slot) e.slot = "Pick a time slot.";
  if (v.notes.length > 400) e.notes = "Please keep notes under 400 characters.";
  return e;
}

export function reference(v: BookingInput): string {
  let h = 0;
  for (const c of v.name + v.phone + v.date + v.slot) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return "AST-" + h.toString(36).toUpperCase().padStart(6, "0").slice(0, 6);
}
