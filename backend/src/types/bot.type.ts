export const BREAKFAST_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
export type BreakfastDay = (typeof BREAKFAST_DAYS)[number];

// TODO: finalize slot boundaries — 7:00-10:30 doesn't divide evenly into 45-min blocks,
// see the "Schedule and slots" section of the spec doc.
export const SESSION_SLOTS = ["07:00", "07:45", "08:30", "09:15"] as const;
export type SessionSlot = (typeof SESSION_SLOTS)[number];
