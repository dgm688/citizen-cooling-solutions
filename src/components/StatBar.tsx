import Container from "./ui/Container";
import CountUp from "./motion/CountUp";
import { stats } from "@/lib/site";

export default function StatBar({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-ink text-white" : "bg-white"}>
      <Container className="py-12">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span
                  className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${
                    dark ? "text-white" : "text-steel-950"
                  }`}
                >
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span
                  className={`mt-2 block text-sm font-medium ${
                    dark ? "text-steel-300" : "text-steel-600"
                  }`}
                >
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
