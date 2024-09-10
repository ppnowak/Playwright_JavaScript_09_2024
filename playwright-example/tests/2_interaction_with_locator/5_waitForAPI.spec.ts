
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("/table");
})

test("Check if table renders - wait for API", async ({ page }) => {

    const edgeCell = page.locator("tr:nth-child(2) td:nth-child(2)");
    // await page.waitForResponse(response => {
    //     return response.url().includes('/api/v1/browser-share') && response.status() === 200;
    // });
    const response = await page.waitForResponse(/\/api\/v1\/browser-share$/g);
    await expect(edgeCell).toHaveText("Edge", { timeout: 500 });
    console.log(await response.json())
    
});