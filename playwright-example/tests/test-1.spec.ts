import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ui.breathtaking.website/');
  await page.getByRole('link', { name: 'Shop' }).first().click();
  await page.locator('.product > button').first().click();
  await page.locator('.product > button').first().click();
  await page.locator('div:nth-child(4) > button').click();
  await expect(page.locator('#cart-items')).toContainText('TV 50" OLED (x2, $10,998.00)');
  await expect(page.locator('#cart-items')).toContainText('Vacuum Cleaner (x1, $3,449.00)');
  await expect(page.locator('#cart-items')).toContainText('Total: $14,447.00');
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Piotr');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('Piotr1');
  await page.getByText('Username: Password: Login').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('cell', { name: '$14,447.00' }).click();
  await expect(page.locator('tbody')).toContainText('$14,447.00');
});