"use client";

// Root error boundary (HTTP 500 fallback). Replaces the root layout when the
// app throws during render, so it must render its own <html>/<body> and avoid
// depending on app components or styles.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-KE">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1220",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              color: "#7dd3fc",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontSize: 13,
              margin: 0,
            }}
          >
            Error 500
          </p>
          <h1
            style={{
              fontSize: 40,
              lineHeight: 1.1,
              textTransform: "uppercase",
              margin: "12px 0 8px",
            }}
          >
            Something went wrong
          </h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
            An unexpected error occurred. Please try again, or call us on
            0721&nbsp;670960.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
            <button
              onClick={() => reset()}
              style={{
                background: "#f97316",
                color: "#fff",
                border: 0,
                borderRadius: 8,
                padding: "12px 22px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full page reload to recover from a fatal/root error */}
            <a
              href="/"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                borderRadius: 8,
                padding: "12px 22px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
