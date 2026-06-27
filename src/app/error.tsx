"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import { Button, ButtonLink } from "@/components/ui/Button";

// Route-segment error boundary — keeps the header/footer (from the root layout)
// and offers a recovery path. Root-level failures fall back to global-error.tsx.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface in the console for debugging; wire to a logging service in production.
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-blueprint" aria-hidden="true" />
      <Container className="relative py-20 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cool-300">
          Something went wrong
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
          We hit a snag
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-steel-300">
          This page failed to load. Please try again, or contact us on
          0721&nbsp;670960 and we&apos;ll help right away.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button onClick={() => reset()} arrow>
            Try again
          </Button>
          <ButtonLink href="/" variant="white">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
