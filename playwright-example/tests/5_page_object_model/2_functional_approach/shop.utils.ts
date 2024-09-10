import { Locator, Page } from "@playwright/test";

export const openShop = async (page: Page): Promise<void> => {
    await page.goto('/shop')
};

export const waitForProductToBeAdded = async (page: Page): Promise<void> => {
    await page.waitForResponse(response => 
        response.url().includes("/api/v1/shop/add") && response.status() === 200
    );
}

export const getCartItemsLocator = (page: Page): Locator =>
    page.locator('#cart-items li');

export const getAddLocator = (page: Page, onclickText: string): Locator =>
    page.locator(`[onclick*=${onclickText}]`)

export const addProductToCart = async (page: Page, productCode: string): Promise<void> => {
    await getAddLocator(page, productCode).click();
    await waitForProductToBeAdded(page);
}