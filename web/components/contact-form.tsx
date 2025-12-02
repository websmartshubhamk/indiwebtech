"use client";

import { useActionState } from "react";
import { submitLead } from "@/app/actions/lead";
import { cn } from "@/lib/utils";

const initialState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-emerald-500/10">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white" htmlFor="name">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
          placeholder="you@company.com"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white" htmlFor="company">
          Company
        </label>
        <input
          id="company"
          name="company"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
          placeholder="Studio or team name"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white" htmlFor="project">
          What do you need?
        </label>
        <textarea
          id="project"
          name="project"
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-emerald-400 focus:outline-none"
          placeholder="Describe your goals, pages, and timeline."
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-white" htmlFor="budget">
          Budget signal
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white focus:border-emerald-400 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Choose a range
          </option>
          <option value="under-5k">Under $5k</option>
          <option value="5-10k">$5k–$10k</option>
          <option value="10-20k">$10k–$20k</option>
          <option value="20k-plus">$20k+</option>
        </select>
      </div>
      {state.message && (
        <p
          className={cn(
            "text-sm",
            state.ok ? "text-emerald-200" : "text-red-200",
          )}
        >
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
