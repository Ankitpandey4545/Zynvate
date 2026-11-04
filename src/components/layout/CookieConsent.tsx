"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";
import { useSmoothScroll } from "@/components/motion/SmoothScrollProvider";

const STORAGE_KEY = "zynovate-cookie-consent";

type Choice = "accepted" | "rejected" | "custom";

export function CookieConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const { setScrollLocked } = useSmoothScroll();

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected" || stored === "custom") setChoice(stored);
    setInitialized(true);
  }, []);

  useEffect(() => {
    const visible = initialized && !choice;
    setScrollLocked(visible);
    return () => setScrollLocked(false);
  }, [choice, initialized, setScrollLocked]);

  const save = (next: Choice) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    setPreferences(false);
  };

  if (!initialized || choice) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end bg-black/70 p-0 backdrop-blur-[2px]"
      role="presentation"
      onWheel={(event) => event.stopPropagation()}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className="w-full min-h-[30vh] max-h-[40vh] overscroll-contain overflow-y-auto border-t border-white/15 bg-[#101010] px-5 py-7 text-white shadow-2xl sm:px-8 lg:px-12 lg:py-9"
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-between gap-7">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow text-white/60">Privacy choices</p>
              <h2
                id="cookie-title"
                className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                We value your privacy
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
                We use cookies and similar technologies to improve your experience, analyze website
                traffic, and provide relevant services. You can accept all cookies, reject
                non-essential cookies, or manage your preferences.
              </p>
            </div>
            <button
              type="button"
              onClick={() => save("rejected")}
              aria-label="Reject non-essential cookies"
              className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
          </div>
          {preferences ? (
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm sm:grid-cols-2">
              <p className="text-white/70">
                Necessary cookies are always enabled so the website can work correctly.
              </p>
              <label className="flex items-center gap-3 sm:justify-end">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="size-4 accent-white"
                />{" "}
                Analytics cookies
              </label>
            </div>
          ) : null}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">
              <Link
                href="/privacy-policy"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Terms and Conditions
              </Link>
              <a
                href="#cookie-policy"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Cookie Policy
              </a>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              {preferences ? (
                <ActionButton
                  label="Save preferences"
                  variant="cream"
                  size="sm"
                  icon={null}
                  onClick={() => save(analytics ? "accepted" : "custom")}
                />
              ) : (
                <>
                  <ActionButton
                    label="Accept All"
                    variant="cream"
                    size="sm"
                    icon={null}
                    onClick={() => save("accepted")}
                  />
                  <ActionButton
                    label="Reject Non-Essential"
                    variant="ghost"
                    size="sm"
                    icon={null}
                    onClick={() => save("rejected")}
                  />
                  <ActionButton
                    label="Manage Preferences"
                    variant="ghost"
                    size="sm"
                    icon={null}
                    onClick={() => setPreferences(true)}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
