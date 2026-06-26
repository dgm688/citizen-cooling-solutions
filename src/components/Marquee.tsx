const items = [
  "Radiator Re-Coring",
  "Oil Cooler Repair",
  "Turbo Intercoolers",
  "Generator Overhauls",
  "Motor Rewinding",
  "Stator Rewinding",
  "Fire Bricks",
  "Refractory Castables",
  "Rockwool & Ceramic Fiber",
  "Armaflex & Fiberglass",
];

export default function Marquee() {
  return (
    <div className="marquee-pause border-y border-steel-800 bg-steel-950 py-4 text-white">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {items.concat(items).map((item, i) => (
            <li key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-steel-200">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-heat-500" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
