"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { contactCall } from "@/data/contact";
import { useLiveNow } from "@/hooks/use-live-now";
import { isPastIstDay, isPastIstSlot } from "@/lib/schedule";
import { cn } from "@/lib/utils";

function dayKey(date: Date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatCallDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function buildMonth(cursor: Date) {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const lead = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: { key: string; date: Date; inMonth: boolean }[] = [];

  for (let index = 0; index < lead; index += 1) {
    const date = new Date(year, month, index - lead + 1);
    cells.push({ key: dayKey(date), date, inMonth: false });
  }
  for (let day = 1; day <= days; day += 1) {
    const date = new Date(year, month, day);
    cells.push({ key: dayKey(date), date, inMonth: true });
  }

  const tail = (7 - (cells.length % 7)) % 7;
  for (let index = 1; index <= tail; index += 1) {
    const date = new Date(year, month, days + index);
    cells.push({ key: dayKey(date), date, inMonth: false });
  }
  return cells;
}

export function SchedulePicker({
  date,
  time,
  onDate,
  onTime,
  dense = false,
  fit = false,
  idPrefix = "call",
}: {
  date: Date | null;
  time: string | null;
  onDate: (date: Date | null) => void;
  onTime: (time: string | null) => void;
  dense?: boolean;
  /** Tighter calendar so it fits inside the inquiry modal without scrolling. */
  fit?: boolean;
  idPrefix?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const now = useLiveNow(root);
  const clock = now ?? new Date();
  const [cursor, setCursor] = useState(() => new Date(clock.getFullYear(), clock.getMonth(), 1));
  const isPastMonth =
    cursor.getFullYear() < clock.getFullYear() ||
    (cursor.getFullYear() === clock.getFullYear() && cursor.getMonth() <= clock.getMonth());
  const cells = buildMonth(cursor);
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
    cursor,
  );

  useEffect(() => {
    if (!now || !time || !isPastIstSlot(time, date, now)) return;
    onTime(null);
  }, [date, now, onTime, time]);

  return (
    <div ref={root}>
      <div className={cn(dense ? "mt-5 lg:mt-2.5" : fit ? "mt-2" : "mt-4")}>
        <div className="flex items-center justify-between gap-3">
          <p
            id={`${idPrefix}-month-label`}
            suppressHydrationWarning
            className={dense ? "text-sm font-semibold" : "text-sm font-semibold"}
          >
            {monthLabel}
          </p>
          <div className="flex gap-1">
            <button
              type="button"
              suppressHydrationWarning
              disabled={isPastMonth}
              aria-disabled={isPastMonth}
              aria-label={contactCall.previousMonth}
              onClick={() => {
                if (!isPastMonth) {
                  setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1));
                }
              }}
              className={cn(
                "grid size-8 place-items-center rounded-full text-foreground transition-colors duration-200",
                isPastMonth ? "cursor-not-allowed opacity-25" : "hover:bg-secondary",
              )}
            >
              <ChevronLeft aria-hidden className="size-4" />
            </button>
            <button
              type="button"
              suppressHydrationWarning
              aria-label={contactCall.nextMonth}
              onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
              className="grid size-8 place-items-center rounded-full text-foreground transition-colors duration-200 hover:bg-secondary"
            >
              <ChevronRight aria-hidden className="size-4" />
            </button>
          </div>
        </div>

        <div
          role="group"
          aria-labelledby={`${idPrefix}-month-label`}
          className={cn(
            "mt-2 grid grid-cols-7",
            fit ? "gap-y-0" : "mt-3 gap-y-1",
            dense && "lg:mt-1.5 lg:gap-y-0",
          )}
        >
          {contactCall.weekdays.map((day) => (
            <div
              key={day}
              className={cn(
                "text-center font-medium tracking-wide text-muted-foreground",
                fit ? "py-0.5 text-[0.62rem]" : "py-1 text-[0.68rem]",
                dense && "lg:py-0.5 lg:text-[0.62rem]",
              )}
            >
              {day}
            </div>
          ))}
          {cells.map((cell) => {
            const isPast = !now || isPastIstDay(cell.date, now);
            const selected = date ? sameDay(date, cell.date) : false;
            const isToday = sameDay(cell.date, clock);
            return (
              <button
                key={cell.key}
                type="button"
                disabled={isPast}
                aria-disabled={isPast}
                aria-pressed={selected}
                aria-current={isToday ? "date" : undefined}
                aria-label={formatCallDate(cell.date)}
                onClick={() => !isPast && onDate(selected ? null : cell.date)}
                className={cn(
                  "mx-auto flex w-full min-w-0 items-center justify-center rounded-full transition duration-200 ease-[var(--ease-out-expo)]",
                  fit ? "h-7 max-w-7 text-xs" : "aspect-square max-w-9 text-sm",
                  dense && "max-w-8 text-sm lg:max-w-7 lg:text-xs",
                  isPast && "cursor-not-allowed text-muted-foreground/30 opacity-30 line-through",
                  !isPast && selected && "scale-105 bg-primary text-primary-foreground",
                  !isPast && !selected && cell.inMonth && "text-foreground hover:bg-secondary",
                  !isPast && !selected && !cell.inMonth && "text-muted-foreground opacity-55",
                  isToday && !selected && "font-semibold text-primary ring-1 ring-inset ring-primary/45",
                )}
              >
                {cell.date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      <p
        id={`${idPrefix}-time-label`}
        className={cn(
          "font-semibold",
          fit ? "mb-1.5 mt-2 text-xs" : "mb-2.5 mt-5 text-sm",
          dense && "lg:mb-1.5 lg:mt-2.5 lg:text-xs",
        )}
      >
        {contactCall.timeLabel}
      </p>
      <div
        role="group"
        aria-labelledby={`${idPrefix}-time-label`}
        className={cn("grid grid-cols-3", fit ? "gap-1.5" : "gap-2", dense && "lg:gap-1.5")}
      >
        {now
          ? contactCall.slots
              .filter((slot) => !isPastIstSlot(slot, date, now))
              .map((slot) => {
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onTime(selected ? null : slot)}
                    className={cn(
                      "min-w-0 rounded-full border text-center font-medium leading-tight transition duration-200 ease-[var(--ease-out-expo)]",
                      fit ? "px-1 py-1.5 text-[0.68rem]" : "px-1 py-2 text-[0.7rem] sm:text-xs",
                      dense && "lg:py-1 lg:text-[0.68rem]",
                      selected
                        ? "scale-[1.03] border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/35 hover:bg-secondary",
                    )}
                  >
                    {slot}
                  </button>
                );
              })
          : null}
        {now && contactCall.slots.every((slot) => isPastIstSlot(slot, date, now)) ? (
          <p className="col-span-3 text-center text-xs leading-relaxed text-muted-foreground">
            Today&apos;s times have passed. Choose another date.
          </p>
        ) : null}
      </div>
    </div>
  );
}
