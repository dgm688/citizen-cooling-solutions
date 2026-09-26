#!/usr/bin/env node
/**
 * Pulls the live WordPress URL inventory from its sitemaps into
 * data/live-urls.json, so the redirect map can be rebuilt from the real site
 * at any point before cutover.
 *
 *   node scripts/fetch-live-urls.mjs [https://citizencoolingsolutions.co.ke]
 */
import { writeFileSync, mkdirSync } from "node:fs";

const BASE = process.argv[2] || "https://citizencoolingsolutions.co.ke";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/128 Safari/537.36";

const get = async (url) => {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res.text();
};

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const index = await get(`${BASE}/sitemap_index.xml`);
const urls = {};

for (const sub of locs(index)) {
  const kind = sub.split("/").pop().replace("-sitemap.xml", "");
  for (const u of locs(await get(sub))) urls[u] = kind;
  process.stderr.write(`  ${kind}: ${Object.keys(urls).length} total\n`);
}

mkdirSync("data", { recursive: true });
writeFileSync("data/live-urls.json", JSON.stringify(urls, null, 0) + "\n");
console.log(`${Object.keys(urls).length} live URLs → data/live-urls.json`);
