import { expect, test } from '@playwright/test';
import { ShopMainPage } from './ShopMainPage.class';

test("Task #1 Cleaned Code - Add products to the cart", async ({ page }) => {
    
    const shop = new ShopMainPage(page);
    await shop.open();
    await shop.addProductToCart('vacuum');
    await shop.addProductToCart('vacuum');
    await shop.addProductToCart('tv');
    await expect(shop.cartItemsLocator).toHaveText([
        "Vacuum Cleaner (x2, $6,898.00)",
        "TV 50\" OLED (x1, $5,499.00)",
        "Total: $12,397.00"
    ]);
    
});

test("Another test - add 100x TV", async ({ page }) => {
    
    const shop = new ShopMainPage(page);
    await shop.open();
    for (let i = 0; i < 100; i++) {
        await shop.addProductToCart('tv');
    }
    await expect(shop.cartItemsLocator).toHaveText([
        "TV 50\" OLED (x100, $549,900.00)",
        "Total: $549,900.00"
    ]);
    
});