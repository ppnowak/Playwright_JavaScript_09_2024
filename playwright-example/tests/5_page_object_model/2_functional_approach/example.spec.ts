

import { expect, test } from '@playwright/test';
import { addProductToCart, getCartItemsLocator, openShop } from './shop.utils';

test("Task #1 Cleaned Code - Add products to the cart", async ({ page }) => {
    
    await openShop(page);
    await addProductToCart(page, 'vacuum');
    await addProductToCart(page, 'vacuum');
    await addProductToCart(page, 'tv');
    await expect(getCartItemsLocator(page)).toHaveText([
        "Vacuum Cleaner (x2, $6,898.00)",
        "TV 50\" OLED (x1, $5,499.00)",
        "Total: $12,397.00"
    ]); 
    
});