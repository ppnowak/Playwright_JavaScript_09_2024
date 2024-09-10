import { expect, test } from '@playwright/test';

test("Playwright site", async ({ page }) => {
    await page.goto("/drag-and-drop")
    const triangle = page.locator('.triangle');
    const targetSquare = page.locator('.square[data-index="1x1"]')
    await triangle.dragTo(targetSquare);
    await expect(triangle.locator('..')).toHaveAttribute('data-index', '1x1');
});