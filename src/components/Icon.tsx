import type { SVGProps } from "react";

// Single source of line icons (24x24, stroke-based, currentColor).
// No emojis — SVG only, consistent sizing.
const paths: Record<string, React.ReactNode> = {
  radiator: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14M11 5v14M15 5v14M19 5v14" />
    </>
  ),
  droplet: <path d="M12 3s6 6.6 6 11a6 6 0 1 1-12 0c0-4.4 6-11 6-11Z" />,
  turbo: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3a9 9 0 0 1 7.8 4.5M21 12a9 9 0 0 1-4.5 7.8M12 21A9 9 0 0 1 4.2 16.5M3 12A9 9 0 0 1 7.5 4.2" />
    </>
  ),
  generator: (
    <>
      <rect x="3" y="7" width="18" height="11" rx="2" />
      <path d="M7 7V5h10v2M8 12h4M16 11v2" />
    </>
  ),
  filter: <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />,
  coil: (
    <>
      <path d="M4 12h2M18 12h2" />
      <path d="M6 12c0-3 2-3 2 0s2 3 2 0 2-3 2 0 2 3 2 0 2-3 2 0" />
    </>
  ),
  stator: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l5 3V10l5 3V8l8 4v8H3Z" />
      <path d="M7 16h2M13 16h2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  leaf: <path d="M5 19c0-8 6-13 14-13 0 8-5 14-14 13ZM5 19c3-4 6-6 9-7" />,
  flame: <path d="M12 3c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1-1-2-1-3 2 1 3 3 3 5a6 6 0 1 1-11-3c2-3 5-4 6-8Z" />,
  beaker: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7 15h10" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.3-5.3a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.5-.5-2.3 2.3-2.4Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: <path d="M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z" />,
  map: <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Zm0 0v14m6-12v14" />,
  phone: <path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4 4 10-10" />,
  plus: <path d="M12 5v14M5 12h14" />,
  whatsapp: (
    <path
      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.6 12.3c-.2.6-1.1 1.1-1.6 1.1-.4 0-.9.2-3-1-2.5-1.4-4-4-4.2-4.2-.1-.2-1-1.3-1-2.5s.6-1.7.9-2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .6.5l.7 1.8c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.2 1.6 1.9 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z"
      strokeWidth="0"
      fill="currentColor"
    />
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
  ...props
}: { name: string; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
