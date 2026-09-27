#!/usr/bin/env node
/**
 * Builds data/redirect-map.csv: every live WordPress URL → its destination on
 * this site. Rules are ordered strongest-first, and every row records which
 * rule produced it so the weak ones can be reviewed by hand.
 *
 *   node scripts/fetch-live-urls.mjs && node scripts/build-redirect-map.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const ORIGIN = "https://citizencoolingsolutions.co.ke";
const urls = JSON.parse(readFileSync("data/live-urls.json", "utf8"));
const site = readFileSync("src/lib/site.ts", "utf8");

// --- read the catalogue straight out of site.ts (single source of truth) ---
const catBlock = site.match(
  /export const productCategories[^=]*=\s*\[([\s\S]*?)\n\];/
)[1];
const categories = [
  ...catBlock.matchAll(
    /slug:\s*"([^"]+)",\s*\n\s*group:\s*"([^"]+)"([\s\S]*?)(?=\n {2}\{\n {4}slug:|$)/g
  ),
].map((m) => ({
  slug: m[1],
  group: m[2],
  items: [...m[3].matchAll(/name:\s*"([^"]+)"/g)].map((i) => i[1]),
}));

const productSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[°%]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const products = categories.flatMap((c) =>
  c.items.map((name) => ({
    path: `/products/${c.slug}/${productSlug(name)}`,
    name: name.toLowerCase(),
  }))
);

// --- keyword tables -------------------------------------------------------
const SERVICE_KEYWORDS = {
  "radiator-repair-fabrication": ["radiator", "recore", "coolant", "filler neck", "overheat"],
  "oil-cooler-repair": ["oil cooler"],
  "turbocharger-intercoolers": ["turbo", "intercooler"],
  "tea-factory-dryer-radiators": ["tea factory", "dryer radiator", "industrial dryer"],
  "generator-repair-maintenance": ["generator companies", "generator repair", "generator servicing", "generator service", "generator maintenance", "overhaul", "load bank", "vibration analysis", "fluid analysis", "control panel", "common generator", "generator problem", "refurbishment"],
  "generator-filters-spares": ["filter", "fleetguard", "fleet guard", "spare part", "air cleaner", "fuel separator", "water separator", "cummins", "perkins"],
  "motor-rewinding": ["motor rewinding", "electric motor", "armature"],
  "generator-stator-rewinding": ["stator", "alternator"],
  // catch the generator/radiator "companies" landing pages
};

const CATEGORY_KEYWORDS = {
  "ceramic-fibre": ["ceramic fiber", "ceramic fibre", "kaowool"],
  "mineral-wool-fibreglass": ["rockwool", "rock wool", "mineral wool", "fiberglass", "fibreglass", "fiber glass", "glasswool", "glass wool", "isover", "pipe section", "pipe insulation", "pipe lagging", "lagging", "metalized", "chiller pipe", "boiler insulation"],
  "foam-roof-board": ["armaflex", "styrofoam", "polystyrene", "polyethylene", "pe foam", "roof insulation", "calcium silicate", "hysil", "millboard", "mill board"],
  "tapes-foil-sealants": ["tape", "foil", "sealant", "adhesive", "somafix", "fsk"],
  refractory: ["firebrick", "fire brick", "refractory", "castable", "mortar", "fondu", "alumina", "magnesite", "insulating brick", "hearth", "tapper", "acid resistant", "acid proof", "acid alkali", "fire resistant block", "fireproof cement", "fire cement", "fire clay", "rockhard", "silicon manganese", "zircon", "pizza oven", "oven insulat", "kiln"],
  "acoustic-safety": ["acoustic", "sound", "noise", "echo", "rubber mat", "electromat", "gasket", "vermiculite", "perlite", "bass trap", "isolation pad", "studio"],
  refrigeration: ["freon", "refrigerant", "refrigeration gas", "r134", "r22 ", "r32 ", "r404", "r407", "r410", "r507", "r600", "r11 ", "copper tube", "copper pipe", "copper fitting"],
  "metal-sheets": ["aluminium sheet", "aluminium plain", "aluminum", "g i sheet", "gi sheet", "galvanised", "galvanized", "stainless steel", "mild steel", "chequered", "aluminium grade", "cladding sheet", "brass"],
  "gypsum-boards": ["gypsum board", "gyproc", "plasterboard", "ceiling board", "knauf board", "gypsum partition"],
  "industrial-chemicals": ["sulphuric", "sulfuric", "nitric", "phosphoric", "caustic soda", "boric", "hydrated lime", "activated carbon", "hypochlorite", "aluminium sulphate", "acetic", "citric", "tripolyphosphate", "butyl glycol", "hydrogen peroxide", "sodium", "calcium carbide", "chemical", "castor oil", "cetrimide", "cetearyl", "cetostearyl", "biocide", "viscosity reducer", "carbatreat", "santreat", "glycol"],
};

const PAGE_MAP = {
  "/": "/",
  "/about-us/": "/about",
  "/contacts/": "/contact",
  "/our-services/": "/services",
  "/gallery/": "/gallery",
  "/shop/": "/products",
  "/cart/": "/request-quote",
  "/checkout/": "/request-quote",
  "/my-account/": "/request-quote",
  "/partners-element/": "/about",
  "/generators/": "/services/generator-repair-maintenance",
  "/radiators/": "/services/radiator-repair-fabrication",
  "/refrigeration/": "/products",
  "/metal-sheets/": "/products",
  "/thermal-insulation/": "/products",
  "/refractory-materials/": "/products/refractory",
  "/sound-insulation/": "/products/acoustic-safety",
};

const words = (path) =>
  path.replace(/^\/|\/$/g, "").replace(/-/g, " ").replace(/[^a-z0-9 ]/gi, " ").toLowerCase();

function destinationFor(path, kind) {
  if (kind === "author") return ["/about", "author archive"];
  if (PAGE_MAP[path]) return [PAGE_MAP[path], "page map"];

  const text = words(path);

  // 1. a product whose every significant word appears in the URL
  let best = null;
  let bestLen = 0;
  for (const p of products) {
    const significant = p.name.split(/[^a-z0-9]+/).filter((w) => w.length > 3);
    if (significant.length && significant.every((w) => text.includes(w)) && p.name.length > bestLen) {
      best = p.path;
      bestLen = p.name.length;
    }
  }
  if (best) return [best, "product page match"];

  // 2. a service
  let service = null;
  let serviceScore = 0;
  for (const [slug, kws] of Object.entries(SERVICE_KEYWORDS)) {
    const score = kws.reduce((n, k) => n + (text.includes(k) ? 3 : 0), 0);
    if (score > serviceScore) [serviceScore, service] = [score, `/services/${slug}`];
  }
  if (serviceScore >= 3) return [service, "service match"];

  // 3. a product category
  let category = null;
  let categoryScore = 0;
  for (const [slug, kws] of Object.entries(CATEGORY_KEYWORDS)) {
    const score = kws.reduce((n, k) => n + (text.includes(k) ? 2 : 0), 0);
    if (score > categoryScore) [categoryScore, category] = [score, `/products/${slug}`];
  }
  if (categoryScore >= 2) return [category, "category match"];

  // 4. no confident match — the catalogue page, flagged for review
  return ["/products", "needs decision"];
}

const rows = Object.entries(urls)
  .map(([url, kind]) => {
    const path = url.replace(ORIGIN, "") || "/";
    const [target, rule] = destinationFor(path, kind);
    return { source: path, type: kind, target, rule };
  })
  .sort((a, b) => a.source.localeCompare(b.source));

const csv = [
  "source,type,target,rule",
  ...rows.map((r) => `${r.source},${r.type},${r.target},${r.rule}`),
].join("\n");
writeFileSync("data/redirect-map.csv", csv + "\n");

const byRule = rows.reduce((acc, r) => ({ ...acc, [r.rule]: (acc[r.rule] || 0) + 1 }), {});
console.log(`${rows.length} rows → data/redirect-map.csv`);
console.table(byRule);
