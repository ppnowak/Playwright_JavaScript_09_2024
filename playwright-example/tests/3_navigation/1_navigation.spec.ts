
import { expect, test } from '@playwright/test';

test("History navigation on page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole('link', { name: 'Books' }).first().click();
    await expect(page).toHaveURL(/\/books$/g);
    await expect(page).toHaveTitle('Books');
    await page.goBack();
    await expect(page).not.toHaveURL(/\/books$/g);
    await page.goForward();
    await expect(page).toHaveURL(/\/books$/g);
});