import Link from "next/link";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { nav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-heat-500/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-20 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cool-300">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-steel-300">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s
          get you back to something useful.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/request-quote" variant="white">
            Request a Quote
          </ButtonLink>
        </div>
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-steel-400">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition-colors hover:text-heat-400">
              {n.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
