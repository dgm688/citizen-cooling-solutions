import { test, expect } from "@playwright/test";

// The quote form builds a WhatsApp deep-link and opens it via window.open.
// We stub window.open to capture the URL instead of launching WhatsApp.
test("quote form opens WhatsApp with the entered details", async ({ page }) => {
  await page.addInitScript(() => {
    (window as unknown as { __opened: string[] }).__opened = [];
    window.open = ((url?: string | URL) => {
      (window as unknown as { __opened: string[] }).__opened.push(String(url));
      return null;
    }) as typeof window.open;
  });

  await page.goto("/request-quote");

  await page.getByLabel("Your name").fill("Test Engineer");
  await page.getByLabel("Phone number").fill("0712000000");
  await page.getByLabel("What do you need?").selectOption({ index: 1 });
  await page.getByLabel("Details").fill("Need a radiator re-core");

  await page.getByRole("button", { name: /send via whatsapp/i }).click();

  // Accessible confirmation is announced to screen readers.
  await expect(page.getByRole("status")).toBeVisible();

  const opened = await page.evaluate(
    () => (window as unknown as { __opened: string[] }).__opened
  );
  expect(opened.length).toBeGreaterThan(0);
  expect(opened[0]).toContain("wa.me/254721670960");
  expect(opened[0]).toContain(encodeURIComponent("Test Engineer"));
  expect(opened[0]).toContain(encodeURIComponent("0712000000"));
});
