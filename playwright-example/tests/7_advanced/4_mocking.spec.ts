import { expect, test } from '@playwright/test';

test("Mocking API", async ({ page }) => {
    await page.route(/\/api\/v1\/browser-share$/, route => {
        const json = [
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
            { name: "Playwright", share: "100"},
        ]
        route.fulfill({ json })
    });

    page.goto('/table');
    const loading = page.locator('table').getByText("Loading...");
    await expect(loading).not.toBeVisible();

    await expect(page.locator('table')).toHaveScreenshot();
});

test("Mocking other routes", async ({ page }) => {
    await page.route(/\/api\/v1\/browser-share$/, route => {
        const json = [
            { 
                name: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", 
                share: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},
        ]
        route.fulfill({ json })
    });

    await page.route(/main\.css$/, async route => {
        const originalResponse = await route.fetch();
        const originalCSS = await originalResponse.text();
        const newCSS = `${originalCSS}\n td { line-break: anywhere; }`;
        route.fulfill({
            contentType: 'text/css',
            body: newCSS
        });
    })

    page.goto('/table');
    const loading = page.locator('table').getByText("Loading...");
    await expect(loading).not.toBeVisible();

    await expect(page.locator('table')).toHaveScreenshot();
});

test("Aborting route", async ({ page }) => {
    await page.route(/(png|jpg|jpeg)$/, route => route.abort());

    page.goto('/shop');
    await expect(page).toHaveScreenshot();
});