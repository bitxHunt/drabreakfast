export const BREAKFAST_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
export type BreakfastDay = (typeof BREAKFAST_DAYS)[number];

export const SESSION_SLOTS = ["07:30", "08:00", "08:30", "09:00"] as const;
export type SessionSlot = (typeof SESSION_SLOTS)[number];
