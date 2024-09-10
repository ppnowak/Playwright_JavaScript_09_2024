import { Locator, Page } from "@playwright/test";

export class ShopMainPage {

    page: Page;
    cartItemsLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItemsLocator = page.locator('#cart-items li');
    }

    async open(): Promise<void> {
        await this.page.goto('/shop')
    }

    async waitForProductToBeAdded(): Promise<void> {
        await this.page.waitForResponse(response => 
            response.url().includes("/api/v1/shop/add") && response.status() === 200
        );
    }

    getAddLocator(onclickText: string): Locator {
        return this.page.locator(`[onclick*=${onclickText}]`);
    }

    async addProductToCart(productCode: string): Promise<void> {
        await this.getAddLocator(productCode).click();
        await this.waitForProductToBeAdded();
    }

}