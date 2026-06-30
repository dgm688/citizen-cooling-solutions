import { test, expect } from "@playwright/test";

// Every public route should return 200, have a <title> and exactly one <h1>.
const routes = [
  "/",
  "/about",
  "/services",
  "/products",
  "/industries",
  "/projects",
  "/clients",
  "/gallery",
  "/faqs",
  "/contact",
  "/request-quote",
  "/privacy-policy",
  "/terms",
  "/services/radiator-repair-fabrication",
  "/services/tea-factory-dryer-radiators",
  "/industries/tea-factories",
];

test.describe("every route renders", () => {
  for (const path of routes) {
    test(`GET ${path}`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status(), `status for ${path}`).toBe(200);
      await expect(page).toHaveTitle(/Citizen Cooling Solutions/);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toBeVisible();
    });
  }
});

test("unknown route returns 404 and shows the custom not-found page", async ({
  page,
}) => {
  const res = await page.goto("/this-route-does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByText(/page not found/i)).toBeVisible();
});

test("footer links to the Clients page (no orphan routes)", async ({ page }) => {
  await page.goto("/");
  const link = page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Clients", exact: true });
  await expect(link).toHaveAttribute("href", "/clients");
});

test("primary navigation works (desktop)", async ({ page }, testInfo) => {
  test.skip(
    testInfo.project.name === "mobile",
    "Primary nav is collapsed into a menu on mobile"
  );
  await page.goto("/");
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Products", exact: true })
    .click();
  await expect(page).toHaveURL(/\/products$/);
  await expect(page.locator("h1")).toContainText(/Insulation/i);
});

test("WhatsApp float and request-quote CTA are present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: /chat with us on whatsapp/i })
  ).toBeVisible();
});
