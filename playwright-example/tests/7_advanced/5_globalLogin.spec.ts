import { expect, test } from '@playwright/test';

// test.use( { storageState: './auth/shop-admin.json'} )

// playwright.config.ts
// use.storageState: './auth/shop-admin.json',

test("Mocking API", async ({ page }) => {
    await page.goto('/shop');
    await expect(page).toHaveScreenshot();
});