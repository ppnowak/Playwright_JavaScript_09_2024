import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://ui.breathtaking.website/books");
})

test("ElementHandle example - with CSS", async ({ page }) => {

    // Pierwsza książka, element .book
    const selector = ".book";
    const firstBook = await page.$(selector);
    // await page.goto("https://ui.breathtaking.website/books");
    // await page.reload();
    const isVisible = await firstBook?.isVisible();
    expect(isVisible).toBeTruthy();

    const books = await page.$$(selector);
    expect(books).toHaveLength(10);

});

test("ElementHandle example - with XPath", async ({ page }) => {

    // Pierwsza książka, element .book
    const selector = "//div[@class='book']";
    const firstBook = await page.$(selector);
    const isVisible = await firstBook?.isVisible();
    expect(isVisible).toBeTruthy();

    const books = await page.$$(selector);
    expect(books).toHaveLength(10);

});