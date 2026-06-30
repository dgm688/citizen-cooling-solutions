import { test, expect, type Page } from "@playwright/test";

async function jsonLd(page: Page) {
  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const parsed = blocks.map((b) => JSON.parse(b));
  const types = parsed
    .map((j) => (Array.isArray(j["@type"]) ? j["@type"] : [j["@type"]]))
    .flat();
  return { types, raw: blocks.join("\n") };
}

test("home emits core structured data and NO fabricated ratings", async ({
  page,
}) => {
  await page.goto("/");
  const { types, raw } = await jsonLd(page);
  expect(types).toContain("LocalBusiness");
  expect(types).toContain("WebSite");
  expect(types).toContain("WebPage");
  // Guard against fake review/rating markup (Google-guidelines + brand rule).
  expect(raw).not.toContain("aggregateRating");
  expect(raw).not.toContain("AggregateRating");
});

test("service page emits Service, FAQ, Breadcrumb and WebPage", async ({
  page,
}) => {
  await page.goto("/services/radiator-repair-fabrication");
  const { types } = await jsonLd(page);
  expect(types).toContain("Service");
  expect(types).toContain("FAQPage");
  expect(types).toContain("BreadcrumbList");
  expect(types).toContain("WebPage");
});

test("robots.txt and sitemap.xml are served correctly", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap:");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain(
    "/services/radiator-repair-fabrication"
  );
});

test("each page has a canonical URL and a unique meta description", async ({
  page,
}) => {
  await page.goto("/");
  const homeDesc = await page
    .locator('meta[name="description"]')
    .getAttribute("content");
  const homeCanonical = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");

  await page.goto("/products");
  const productsDesc = await page
    .locator('meta[name="description"]')
    .getAttribute("content");

  expect(homeDesc).toBeTruthy();
  expect(productsDesc).toBeTruthy();
  expect(homeDesc).not.toBe(productsDesc);
  expect(homeCanonical).toContain("citizencoolingsolutions.co.ke");
});
