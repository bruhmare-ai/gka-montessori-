"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { site, tuition } from "@/lib/site";
import Button from "./Button";

const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type LeadFormProps = {
  /** "full" (default) = all fields; "compact" = name / phone / child's age / start date — the short funnel variant. */
  variant?: "full" | "compact";
  submitLabel?: string;
  className?: string;
};

/**
 * Speed-to-lead form. Posts JSON to /api/lead. Hidden UTM/click-id inputs are
 * populated from the URL query string on mount. Reused on /contact,
 * /admissions (#book-a-tour) and /book-a-tour.
 */
export default function LeadForm({
  variant = "full",
  submitLabel = "Book a Tour",
  className = "",
}: LeadFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  // Populate the hidden attribution inputs from URL query params on mount.
  // Imperative DOM update (not state) — keeps SSR/client markup identical.
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const params = new URLSearchParams(window.location.search);
    for (const key of TRACKING_KEYS) {
      const value = params.get(key);
      const input = form.elements.namedItem(key);
      if (value && input instanceof HTMLInputElement) input.value = value;
    }
    const pageInput = form.elements.namedItem("page");
    if (pageInput instanceof HTMLInputElement) {
      pageInput.value = window.location.pathname;
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    // Honeypot — bots fill the hidden "company" field; drop silently.
    if (typeof data.company === "string" && data.company.trim() !== "") {
      setStatus("success");
      return;
    }
    delete data.company;

    // Drop tracking fields the URL didn't provide.
    for (const key of [...TRACKING_KEYS, "page"]) {
      if (data[key] === "") delete data[key];
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`lead submit failed: ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-3xl bg-tint p-8 text-center sm:p-10 ${className}`}
      >
        <p className="font-display text-2xl text-navy sm:text-3xl">
          You&rsquo;re on the list
        </p>
        <p className="mt-3 text-navy/80">
          We&rsquo;ll text you within a minute to set up your tour — keep your
          phone nearby.
        </p>
      </div>
    );
  }

  const full = variant === "full";
  const labelClass = "block text-sm font-bold uppercase tracking-widest text-navy";
  const fieldClass =
    "mt-2 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-navy/40 focus:border-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-dark/40";

  const scheduleOptions = [
    { value: "full-time", label: `${tuition.fullTime.label} · ${tuition.fullTime.hours}` },
    { value: "half-day-am", label: `${tuition.halfDay.label} — Mornings (AM)` },
    { value: "half-day-pm", label: `${tuition.halfDay.label} — Afternoons (PM)` },
    { value: "not-sure", label: "Not sure yet" },
  ];

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`relative grid gap-5 sm:grid-cols-2 ${className}`}
    >
      {/* Hidden attribution fields, populated from URL query params on mount */}
      {TRACKING_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} defaultValue="" />
      ))}
      <input type="hidden" name="page" defaultValue="" />

      {/* Honeypot (spam protection) — visually hidden, ignored by humans */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor={`${uid}-company`}>Company</label>
        <input
          id={`${uid}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor={`${uid}-parentName`} className={labelClass}>
          Parent&rsquo;s name <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-parentName`}
          name="parentName"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${uid}-phone`} className={labelClass}>
          Mobile phone <span aria-hidden="true">*</span>
        </label>
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={fieldClass}
        />
      </div>

      {full && (
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-email`} className={labelClass}>
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      )}

      <div>
        <label htmlFor={`${uid}-childAge`} className={labelClass}>
          Child&rsquo;s age
        </label>
        <input
          id={`${uid}-childAge`}
          name="childAge"
          type="text"
          inputMode="numeric"
          placeholder={site.ages}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${uid}-startDate`} className={labelClass}>
          Desired start date
        </label>
        <input
          id={`${uid}-startDate`}
          name="startDate"
          type="date"
          className={fieldClass}
        />
      </div>

      {full && (
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-schedule`} className={labelClass}>
            Schedule
          </label>
          <select
            id={`${uid}-schedule`}
            name="schedule"
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Choose a schedule…
            </option>
            {scheduleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {full && (
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className={labelClass}>
            Anything we should know?
          </label>
          <textarea
            id={`${uid}-message`}
            name="message"
            rows={4}
            className={fieldClass}
          />
        </div>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-navy/5 px-4 py-3 text-sm text-navy sm:col-span-2"
        >
          Something went wrong sending your request. Please try again, or call
          us at{" "}
          <a href={site.phoneHref} className="font-bold underline">
            {site.phone}
          </a>
          .
        </p>
      )}

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </Button>
        <p className="mt-3 text-center text-xs text-navy/60">
          By submitting, you agree we may text you about your inquiry. Reply
          STOP to opt out.
        </p>
      </div>
    </form>
  );
}
