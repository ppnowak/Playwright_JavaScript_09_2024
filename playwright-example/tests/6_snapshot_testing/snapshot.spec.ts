import { expect, test } from '@playwright/test';
import { ShopMainPage } from '../5_page_object_model/3_page_object/ShopMainPage.class';
import { join } from 'path';

test("Playwright site", async ({ page }) => {
    await page.goto("https://playwright.dev")
    await expect(page).toHaveScreenshot({ fullPage: true });
});

test("Creating snapshots with mask", async ({ page }) => {
    
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

    // const viewPort = page.viewportSize();
    // const newHeight = viewPort?.height ? viewPort.height * 2 : 1; 
    // await page.setViewportSize({ width: viewPort?.width || 1, height: newHeight })
    // await expect(page).toHaveScreenshot({ fullPage: true });

    await expect(page).toHaveScreenshot({
        mask: [
            page.locator('.uptime')
        ],
        // maskColor: '#0000FF'
    });
    
});

test("Creating snapshots with diff", async ({ page }) => {
    
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

    await expect(page).toHaveScreenshot({
        // maxDiffPixelRatio: 0.05
        maxDiffPixels: 1000
    });

    // Configurable globally via playwright.config.ts
    // expect: {
    //     toHaveScreenshot: {
    //       maxDiffPixelRatio: 0.05,
    //       maxDiffPixels: 1000,
    //     }
    //   }
    
});

test("Creating snapshots with custom styles", async ({ page }) => {
    const shop = new ShopMainPage(page);
    await shop.open();
    await expect(page).toHaveScreenshot({
        stylePath: join(__dirname, 'customStyle.css')
    });
});

test("Creating snapshots for locator", async ({ page }) => {
    const shop = new ShopMainPage(page);
    await shop.open();
    await expect(page.locator('.item').nth(2)).toHaveScreenshot();

    // test.info().attach(...)
});