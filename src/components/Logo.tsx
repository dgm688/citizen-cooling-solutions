import Link from "next/link";
import { company } from "@/lib/site";

// Brand mark: a hex bolt-head (industrial) holding a fan/cooling blade.
// Placeholder until the client supplies a high-resolution logo.
export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ccs-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
      </defs>
      <path
        d="M24 2 41 12v24L24 46 7 36V12L24 2Z"
        fill="#0b1220"
        stroke="url(#ccs-g)"
        strokeWidth="2"
      />
      <g stroke="url(#ccs-g)" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <circle cx="24" cy="24" r="3.4" fill="#f97316" stroke="#f97316" />
        <path d="M24 9c4 3 4 7 0 11" />
        <path d="M39 24c-3 4-7 4-11 0" />
        <path d="M24 39c-4-3-4-7 0-11" />
        <path d="M9 24c3-4 7-4 11 0" />
      </g>
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${company.name} — home`}>
      <LogoMark className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:rotate-90" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-bold uppercase tracking-wide ${
            light ? "text-white" : "text-steel-950"
          }`}
        >
          Citizen Cooling
        </span>
        <span className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-cool-500">
          Solutions Ltd
        </span>
      </span>
    </Link>
  );
}
