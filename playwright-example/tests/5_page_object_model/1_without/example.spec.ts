

import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // • Przejść na podstronę /shop
    await page.goto('/shop');
});

test("Task #1 - Add products to the cart", async ({ page }) => {
    const vacuumCleanerPrice = 3449;
    const tvPrice = 5499;

    // const products = page.locator('.product');
    const addTv = page.locator("[onclick*=tv]");
    const addVacuumCleaner = page.locator("[onclick*=vacuum]");

    // • Dodać do koszyka:
    //    o 2 szt. Vacuum Cleaner
    // await addVacuumCleaner.dblclick(); // this will not wait - we're too fast
    // await addVacuumCleaner.dblclick({ delay: 500 }); // this will work but probably a flaky test
    for (let i = 0; i < 2; i++) {
        // console.log({ i })
        await addVacuumCleaner.click();
        await page.waitForResponse(response => response.url().includes("/api/v1/shop/add") && response.status() === 200);
    }
    // await page.waitForResponse(response => {
    //     return response.url().includes("/api/v1/shop/add") && response.status() === 200);
    // });

    //    o 1 szt. TV 50" OLED
    await addTv.click();
    await page.waitForResponse(response => response.url().includes("/api/v1/shop/add") && response.status() === 200);

    // • Sprawdzić czy produkty są w koszyku i czy cena jest właściwa
    /*
    <ul id="cart-items">
        <li>Vacuum Cleaner (x2, $6,898.00)</li>
        <li>TV 50" OLED (x1, $5,499.00)</li>
        <li>Total: $12,397.00</li>
    </ul>
    */
//    const cartItems = page.locator('#cart-items');
//    await expect(cartItems).toContainText("Vacuum Cleaner (x2, $6,898.00)");
//    await expect(cartItems).toContainText("TV 50\" OLED (x1, $5,499.00)");
//    await expect(cartItems).toContainText("Total: $12,397.00");

    const cartItems = page.locator('#cart-items li');
    // await expect(cartItems.first()).toHaveText("Vacuum Cleaner (x2, $6,898.00)");
    // await expect(cartItems.nth(1)).toHaveText("TV 50\" OLED (x1, $5,499.00)");
    // await expect(cartItems.last()).toHaveText("Total: $12,397.00");
    await expect(cartItems).toHaveText([
        "Vacuum Cleaner (x2, $6,898.00)",
        "TV 50\" OLED (x1, $5,499.00)",
        "Total: $12,397.00"
    ]);
   
    
});

test("Task #1 Cleaned Code - Add products to the cart", async ({ page }) => {

    const addTv = page.locator("[onclick*=tv]");
    const addVacuumCleaner = page.locator("[onclick*=vacuum]");

    // • Dodać do koszyka:
    //    o 2 szt. Vacuum Cleaner
    for (let i = 0; i < 2; i++) {
        await addVacuumCleaner.click();
        await page.waitForResponse(response => response.url().includes("/api/v1/shop/add") && response.status() === 200);
    }
    //    o 1 szt. TV 50" OLED
    await addTv.click();
    await page.waitForResponse(response => response.url().includes("/api/v1/shop/add") && response.status() === 200);

    const cartItems = page.locator('#cart-items li');
    await expect(cartItems).toHaveText([
        "Vacuum Cleaner (x2, $6,898.00)",
        "TV 50\" OLED (x1, $5,499.00)",
        "Total: $12,397.00"
    ]);   
    
});