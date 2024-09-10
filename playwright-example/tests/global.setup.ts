import { chromium } from "@playwright/test";

const runSetup = async (config) => {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://ui.breathtaking.website/shop/login');
    await page.locator("#username").fill("Piotr");
    await page.locator("#password").fill("Piotr1");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.context().storageState({ path: './auth/shop-admin.json' });
    await browser.close();

}

export default runSetup;