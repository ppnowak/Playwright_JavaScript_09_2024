import { expect, test } from '@playwright/test';

test("Playwright site", async ({ page }) => {
    await page.goto("/form-elements")
    const numInput = page.locator('#numberInput');
    await numInput.focus();
    await page.keyboard.press('ArrowUp');
    await expect(numInput).toHaveValue('51');
    await page.keyboard.press('ArrowDown');
    await expect(numInput).toHaveValue('50');
});