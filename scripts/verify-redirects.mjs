#!/usr/bin/env node
/**
 * Asserts the migration contract against a running deployment:
 *   every old URL  → exactly one 301 → a live 200
 *   every gone URL → 410
 *
 *   node scripts/verify-redirects.mjs http://localhost:3300
 *   node scripts/verify-redirects.mjs https://citizen-cooling-solutions.vercel.app
 */
import { readFileSync } from "node:fs";

const BASE = (process.argv[2] || "http://localhost:3300").replace(/\/$/, "");
const CONCURRENCY = Number(process.env.CONCURRENCY || 12);
// Vercel preview deployments sit behind deployment protection. Pass the cookie
// from a share link so a protected preview can be verified before it goes live:
//   COOKIE="_vercel_jwt=…" node scripts/verify-redirects.mjs https://…vercel.app
const HEADERS = process.env.COOKIE ? { cookie: process.env.COOKIE } : {};

const norm = (p) => (p !== "/" ? p.replace(/\/+$/, "") : "/");
const rows = readFileSync("data/redirect-map.csv", "utf8")
  .trim()
  .split("\n")
  .slice(1)
  .map((l) => l.split(","))
  .map(([source, type, target, rule]) => ({ source: norm(source), type, target, rule }))
  .filter((r) => r.source !== r.target);

let gone = [];
try {
  gone = readFileSync("data/gone-urls.txt", "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map(norm);
} catch {}

const failures = [];
let checked = 0;

async function checkRedirect(row, sourceOverride) {
  const source = sourceOverride ?? row.source;
  const res = await fetch(BASE + source, { redirect: "manual", headers: HEADERS });
  if (res.status !== 301) {
    failures.push(`${source} → expected 301, got ${res.status}`);
    return;
  }
  const location = res.headers.get("location") || "";
  const landed = new URL(location, BASE);
  if (landed.pathname !== row.target) {
    failures.push(`${source} → 301 to ${landed.pathname}, expected ${row.target}`);
    return;
  }
  const final = await fetch(landed.toString(), { redirect: "manual", headers: HEADERS });
  if (final.status !== 200) {
    failures.push(`${source} → ${landed.pathname} answered ${final.status} (chain or dead end)`);
  }
}

async function checkGone(path) {
  const res = await fetch(BASE + path, { redirect: "manual", headers: HEADERS });
  if (res.status !== 410) failures.push(`${path} → expected 410, got ${res.status}`);
}

async function run(items, fn, label) {
  const queue = [...items];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      try {
        await fn(item);
      } catch (err) {
        failures.push(`${item.source || item} → ${err.message}`);
      }
      if (++checked % 50 === 0) process.stderr.write(`  ${checked} checked…\n`);
    }
  });
  await Promise.all(workers);
  console.log(`${label}: ${items.length} checked`);
}

console.log(`Verifying against ${BASE}`);
await run(rows, (row) => checkRedirect(row), "redirects (no trailing slash)");
checked = 0;
await run(
  rows.filter((r) => r.source !== "/"),
  (row) => checkRedirect(row, row.source + "/"),
  "redirects (trailing slash — as Google has them indexed)"
);
if (gone.length) await run(gone, checkGone, "gone URLs");
else console.log("gone URLs: none listed yet (data/gone-urls.txt is empty)");

if (failures.length) {
  console.error(`\n${failures.length} FAILURES:`);
  for (const f of failures.slice(0, 40)) console.error("  " + f);
  if (failures.length > 40) console.error(`  …and ${failures.length - 40} more`);
  process.exit(1);
}
console.log("\nAll good — every old URL lands on a live page in one hop.");
