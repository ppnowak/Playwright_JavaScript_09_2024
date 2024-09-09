import { test, expect } from '@playwright/test';

test.describe("Check playwright.dev page", () => {

  test.beforeAll(() => {
    console.log("Test beforeAll is executing once per file")
  })

  test.beforeEach(async ({ page, context }) => {
    console.log("Test beforeEach is executing each test block")
    await test.step("Open Playwright homepage", async () => {
      await page.goto('https://playwright.dev/');
    })
  });

  test('has title', async ({ page, context }) => {
    // test.info().
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test.fail('does not have title', async ({ page }) => { // Playwright expects assertion to fail
    // Expect a title "to contain" a substring.
    await expect(page).not.toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    console.log("Test afterEach is executing each test block")
  });

  test.afterAll(() => {
    console.log("Test afterAll is executing each test block")
  });
  
});