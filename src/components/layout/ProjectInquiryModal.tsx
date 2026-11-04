"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowLeft, Check, X } from "lucide-react";
import { contact, countryCodes } from "@/data/contact";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { SchedulePicker } from "@/components/ui/SchedulePicker";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "h-9 rounded-lg border border-border bg-background px-2.5 text-sm font-normal outline-none transition-colors focus:border-primary";

function formatWhen(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

export function ProjectInquiryModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const { setScrollLocked } = useSmoothScroll();
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setStep(1);
      setError("");
      return;
    }
    setScrollLocked(true);
    const blockScroll = (event: Event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest("[data-radix-popper-content-wrapper], [role='listbox']")
      ) {
        return;
      }
      event.preventDefault();
    };
    document.addEventListener("wheel", blockScroll, { passive: false });
    document.addEventListener("touchmove", blockScroll, { passive: false });
    dialogRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      setScrollLocked(false);
      document.removeEventListener("wheel", blockScroll);
      document.removeEventListener("touchmove", blockScroll);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setScrollLocked]);

  if (!open) return null;

  const canContinue = Boolean(date && time);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date || !time) {
      setStep(1);
      setError("Choose a date and time first.");
      return;
    }
    if (
      name.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      !/^\d[\d\s-]{7,}$/.test(phone.trim()) ||
      !project ||
      message.trim().length < 12
    ) {
      setError("Please complete all fields with a valid email and a little project detail.");
      return;
    }

    const url = new URL("https://mail.google.com/mail/");
    url.searchParams.set("view", "cm");
    url.searchParams.set("fs", "1");
    url.searchParams.set("to", contact.email);
    url.searchParams.set("su", `ZYNOVATE project inquiry from ${name.trim()}`);
    url.searchParams.set(
      "body",
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Mobile: ${countryCode} ${phone.trim()}`,
        `Project type: ${project}`,
        `Preferred date: ${formatWhen(date)}`,
        `Preferred time (IST): ${time}`,
        "",
        message.trim(),
      ].join("\n"),
    );
    window.open(url.toString(), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex touch-none items-center justify-center overflow-hidden overscroll-none bg-black/70 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-full w-full max-w-md touch-auto flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-background px-4 py-3.5 shadow-2xl outline-none sm:px-5 sm:py-4"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project inquiry"
          className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <X className="size-4" />
        </button>

        <p className="eyebrow text-primary">Step {step} of 2</p>
        <div className="mt-2 flex gap-1.5 pr-8" aria-hidden>
          <span className="h-1 flex-1 rounded-full bg-primary" />
          <span className={cn("h-1 flex-1 rounded-full", step === 2 ? "bg-primary" : "bg-border")} />
        </div>
        <h2 id="project-modal-title" className="display mt-2.5 text-[1.65rem] leading-none sm:text-3xl">
          {step === 1 ? "Pick a date and time." : "Tell us about the project."}
        </h2>
        <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
          {step === 1
            ? "Times are in IST. A time that has already passed today is left out."
            : "Then Gmail opens with the message ready to send."}
        </p>

        {step === 1 ? (
          <div className="mt-1">
            <SchedulePicker
              fit
              idPrefix="inquiry"
              date={date}
              time={time}
              onDate={(next) => {
                setDate(next);
                setError("");
              }}
              onTime={(next) => {
                setTime(next);
                setError("");
              }}
            />
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="min-w-0 text-xs text-muted-foreground">
                {date && time ? (
                  <span className="font-medium text-foreground">
                    {formatWhen(date)} · {time} IST
                  </span>
                ) : (
                  "Choose a date, then a time."
                )}
              </p>
              <ActionButton
                label="Next"
                size="sm"
                disabled={!canContinue}
                onClick={() => setStep(2)}
              />
            </div>
            {error ? (
              <p role="alert" className="mt-2 text-xs text-destructive">
                {error}
              </p>
            ) : null}
          </div>
        ) : (
          <form onSubmit={submit} className="mt-3 grid gap-2">
            <div className="flex items-center justify-between rounded-xl bg-secondary px-3 py-2 text-xs">
              <span>
                <span className="font-medium">{date ? formatWhen(date) : ""}</span>
                <span className="text-muted-foreground"> · {time} IST</span>
              </span>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 font-semibold text-primary"
              >
                <ArrowLeft className="size-3.5" /> Change
              </button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="grid gap-1 text-[0.7rem] font-medium">
                Name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="grid gap-1 text-[0.7rem] font-medium">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
            </div>
            <div className="grid grid-cols-[minmax(5.5rem,0.55fr)_minmax(0,1.45fr)] gap-2">
              <label className="grid gap-1 text-[0.7rem] font-medium">
                Code
                <CustomSelect
                  value={countryCode}
                  onChange={setCountryCode}
                  options={countryCodes.map((item) => ({
                    value: item.code,
                    label: `${item.code} · ${item.label}`,
                  }))}
                  placeholder="Code"
                  className="h-9 rounded-lg border border-border px-2.5 text-sm font-normal"
                />
              </label>
              <label className="grid gap-1 text-[0.7rem] font-medium">
                Mobile number
                <input
                  required
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="88009 04734"
                  autoComplete="tel-national"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="grid gap-1 text-[0.7rem] font-medium">
              Project type
              <CustomSelect
                required
                value={project}
                onChange={setProject}
                options={contact.projectTypes}
                placeholder="Select project type"
                className="h-9 rounded-lg border border-border px-2.5 text-sm font-normal"
              />
            </label>
            <label className="grid gap-1 text-[0.7rem] font-medium">
              Project details
              <textarea
                required
                minLength={12}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="What are you hoping to build?"
                rows={2}
                className={cn(fieldClass, "h-16 resize-none py-2")}
              />
            </label>
            {error ? (
              <p role="alert" className="text-xs text-destructive">
                {error}
              </p>
            ) : null}
            <div className="flex items-center justify-between gap-3 pt-0.5">
              <p className="flex items-center gap-1.5 text-[0.68rem] text-muted-foreground">
                <Check className="size-3.5 text-primary" /> Gmail opens your draft.
              </p>
              <ActionButton label="Open Gmail draft" size="sm" type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
