import { test, expect } from "@playwright/test";

// The quote form posts to a Server Action which emails the lead. In CI no
// delivery channel is configured, so the form must fail *honestly*: an alert
// plus a WhatsApp fallback carrying the details the visitor already typed.
// That fallback is the thing that must never break — it's the lead's escape hatch.

async function fillForm(page: import("@playwright/test").Page) {
  await page.getByLabel("Your name").fill("Test Engineer");
  await page.getByLabel("Phone / WhatsApp").fill("0712 000 000");
  await page.getByLabel("What do you need?").selectOption({ index: 1 });
  await page.getByLabel(/Quantity/).fill("20 rolls");
  await page.getByLabel("Details").fill("Need a radiator re-core");
}

test("submitting the form reports the outcome and keeps a WhatsApp fallback", async ({
  page,
}) => {
  await page.goto("/request-quote");
  await fillForm(page);
  await page.getByRole("button", { name: /send quote request/i }).click();

  // Either delivered (configured deploy) or an honest failure — never silence.
  const outcome = page.locator('form [role="alert"], form [role="status"]');
  await expect(outcome.first()).toBeVisible({ timeout: 15000 });

  const fallback = page.locator('form a[href*="wa.me"]').first();
  const href = await fallback.getAttribute("href");
  expect(href).toContain("wa.me/254721670960");
  expect(decodeURIComponent(href || "")).toContain("Test Engineer");
  expect(decodeURIComponent(href || "")).toContain("0712 000 000");
});

test("a malformed phone number is rejected before anything is sent", async ({
  page,
}) => {
  await page.goto("/request-quote");
  await fillForm(page);
  await page.getByLabel("Phone / WhatsApp").fill("12345");
  await page.getByRole("button", { name: /send quote request/i }).click();

  await expect(page.locator('form [role="alert"]')).toContainText(/phone number/i, {
    timeout: 15000,
  });
});

test("the form carries a honeypot field that people never see", async ({ page }) => {
  await page.goto("/request-quote");
  const honeypot = page.locator('input[name="company_website"]');
  await expect(honeypot).toHaveCount(1);
  await expect(honeypot).toBeHidden();
});
