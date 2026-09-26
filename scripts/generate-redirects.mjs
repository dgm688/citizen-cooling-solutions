#!/usr/bin/env node
/**
 * Turns the reviewed CSV + gone list into a typed module the middleware imports.
 * Run after editing either data file:
 *
 *   node scripts/generate-redirects.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const norm = (p) => (p !== "/" ? p.replace(/\/+$/, "") : "/");

const rows = readFileSync("data/redirect-map.csv", "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((line) => line.split(","))
  .filter(([source, , target]) => source && target)
  .map(([source, , target]) => [norm(source), target])
  // A URL that already matches its destination needs no rule.
  .filter(([source, target]) => source !== target);

const gone = existsSync("data/gone-urls.txt")
  ? readFileSync("data/gone-urls.txt", "utf8")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"))
      .map(norm)
  : [];

const out = `// GENERATED FILE — do not edit.
// Source: data/redirect-map.csv + data/gone-urls.txt
// Rebuild: node scripts/generate-redirects.mjs
//
// ${rows.length} redirects from the WordPress site, ${gone.length} URLs that must return 410.

export const redirects = new Map<string, string>(${JSON.stringify(rows, null, 0)});

export const gone = new Set<string>(${JSON.stringify(gone, null, 0)});
`;

writeFileSync("src/lib/redirects.generated.ts", out);
console.log(
  `src/lib/redirects.generated.ts — ${rows.length} redirects, ${gone.length} gone URLs`
);
