
import { expect, test } from '@playwright/test';

test("Iframe", async ({ page }) => {
    await page.goto("/iframe");

    const iframes = page.frameLocator('iframe');
    const first = iframes.nth(0);
    const second = iframes.nth(1);

    await expect(first.getByRole('button', { name: 'Reload Time' })).toBeVisible();
    await expect(second.locator('#textInput')).toBeVisible();
    
});