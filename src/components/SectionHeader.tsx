export default function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cool-600">
        <span className={`${center ? "hidden" : "inline-block"} h-px w-8 bg-heat-500`} />
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-steel-950"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-steel-300" : "text-steel-600"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
