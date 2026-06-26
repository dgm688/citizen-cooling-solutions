import Link from "next/link";
import Icon from "../Icon";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-xl border border-steel-200 bg-white p-6 transition-all duration-200 hover:border-cool-400 hover:shadow-lg hover:shadow-cool-500/5"
    >
      {service.flagship && (
        <span className="absolute right-4 top-4 rounded-full bg-heat-500/10 px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-heat-600">
          Specialist
        </span>
      )}
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel-950 text-cool-400 transition-colors duration-200 group-hover:bg-cool-600 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-steel-950">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">
        {service.short}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cool-600 transition-colors group-hover:text-heat-600">
        Learn more
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
