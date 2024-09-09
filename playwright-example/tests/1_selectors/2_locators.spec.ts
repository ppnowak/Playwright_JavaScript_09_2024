import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://ui.breathtaking.website/books");
})

test("Locator example - with CSS", async ({ page }) => {

    // Pierwsza książka, element .book
    const selector = ".book";
    const books = page.locator(selector);
    // const firstBook = page.locator(selector).first();
    // const nthBook = page.locator(selector).nth(5);
    // const lastBook = page.locator(selector).last();
    await page.goto("https://ui.breathtaking.website/books");
    await page.reload();
    await expect(books.first()).toBeVisible();
    await expect(books.nth(5)).toHaveText(`Hidden Valley Road\nby Robert Kolker\n(nonfiction)`); // \n - nowa linia ; \t - tab
    await expect(books.last()).toBeVisible();
    await expect(books).toHaveCount(10);

});

test("Locator example - with CSS, by element ID", async ({ page }) => {

    // Pierwsza książka, element .book
    const book = page.locator("#book-3332f");
    await page.goto("https://ui.breathtaking.website/books?randomize=true");
    await expect(book).toHaveText(`Hidden Valley Road\nby Robert Kolker\n(nonfiction)`);

});

test("Locator example - with XPath", async ({ page }) => {

    // Pierwsza książka, element .book
    const selector = "//div[@class='book']";
    const books = page.locator(selector);
    // await page.goto("https://ui.breathtaking.website/books");
    // await page.reload();
    await expect(books.first()).toBeVisible();
    await expect(books.nth(5)).toHaveText(`Hidden Valley Road\nby Robert Kolker\n(nonfiction)`); // \n - nowa linia ; \t - tab
    await expect(books.last()).toBeVisible();
    await expect(books).toHaveCount(10);

});

test("Locator example - by Role", async ({ page }) => {

    // language.utils.js
        const texts = {
            LINK_BOOKS: 'LINK_BOOKS'
        }
        const getTransalation = (key, language) => {
            /* Jakas tam logika */
            return "Books";
        }

    // Pierwsza książka, element .book
    const link = page.getByRole('link', {
        name: getTransalation(texts.LINK_BOOKS, "en")
    });
    await expect(link).toBeVisible();

});