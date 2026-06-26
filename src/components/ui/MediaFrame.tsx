import Image from "next/image";
import Icon from "../Icon";

// Swap-ready media slot.
// Drop a real photo in by passing `src` (place the file in /public) — it renders
// an optimised next/image. Until then it shows a styled, labelled placeholder.
export default function MediaFrame({
  src,
  alt,
  icon = "radiator",
  note,
  ratio = "aspect-[16/9]",
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  icon?: string;
  note: string;
  ratio?: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${ratio} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex ${ratio} flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-steel-300 bg-steel-100 text-steel-400 ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden="true" />
      <Icon name={icon} className="relative h-10 w-10 text-steel-300" />
      <span className="relative px-6 text-center font-mono text-[0.65rem] uppercase tracking-wider">
        {note}
      </span>
    </div>
  );
}
