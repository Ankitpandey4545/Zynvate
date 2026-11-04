/** Calendar helpers in India Standard Time, so past days and slots match the contact copy. */

export function istStamp(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "00";
  return {
    date: `${read("year")}-${read("month")}-${read("day")}`,
    time: `${read("hour")}:${read("minute")}`,
  };
}

export function istDayKey(date: Date) {
  return istStamp(date).date;
}

export function slotToMinutes(slot: string) {
  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(slot.trim());
  if (!match) return null;
  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const meridiem = match[3]?.toUpperCase();
  if (hours > 12 || minutes > 59 || (meridiem !== "AM" && meridiem !== "PM")) return null;
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export function isPastIstDay(date: Date, now = new Date()) {
  return istDayKey(date) < istStamp(now).date;
}

/** A slot is past when it belongs to today in IST and that clock time has already passed. */
export function isPastIstSlot(slot: string, selected: Date | null, now = new Date()) {
  const stamp = istStamp(now);
  const day = selected ? istDayKey(selected) : stamp.date;
  if (day > stamp.date) return false;
  if (day < stamp.date) return true;
  const minutes = slotToMinutes(slot);
  if (minutes == null) return true;
  const [hour, minute] = stamp.time.split(":");
  return minutes <= Number(hour) * 60 + Number(minute);
}
