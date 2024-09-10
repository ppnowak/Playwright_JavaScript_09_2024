
import { expect, Page, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/alerts');
});

test("Alert", async ({ page }) => {
    const button = page.getByRole('button', { name: 'Show Alert' });

    // W taki sposob nie uda nam sie pracowac z dialogami - zawiesimy przegladarke
    // const [ dialog ] = await Promise.all([
    //     page.waitForEvent('dialog'),
    //     button.click()
    // ]);

    page.once('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept();
    });
    await button.click();
    
});

test("Prompt", async ({ page }) => {
    const button = page.getByRole('button', { name: 'Show Prompt' });
    page.once('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept("Hello from dialog");
    });
    await button.click();
});

test("Confirm", async ({ page }) => {
    const button = page.getByRole('button', { name: 'Show Confirm' });
    page.once('dialog', dialog => {
        console.log(dialog.message());
        dialog.dismiss();
    });
    await button.click();
});

test("HTML Alert", async ({ page }) => {
    const button = page.getByRole('button', { name: 'Show HTML Alert' });
    const modal = page.locator('.modal-content');
    await button.click();
    await expect(modal).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await expect(modal).not.toBeVisible();

});