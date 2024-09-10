
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // 1. Przejść na stronę /books
    await page.goto("/books");
})

test("Execute test #1", async ({ page }) => {
    const books = page.locator('.book');
    const randomLink = page.getByRole('link', { name: 'random' });
    const defaultLink = page.getByRole('link', { name: 'default' });
    const defaultLinkText = page.locator('.links span');
    const nonFictionBooks = page.getByText('(nonfiction)');

    //     o wyświetlone jest 10 książek
    await expect(books).toHaveCount(10);
    //     o występuje link z napisem "random" na stronie
    await expect(randomLink).toBeVisible();
    //     o nie występuje link z napisem "default" na stronie
    await expect(defaultLink).not.toBeVisible();
    await expect(defaultLinkText).toHaveText('default');
    //     o wyświetlone jest 5 książek z kategorii "(nonfiction)"
    await expect(nonFictionBooks).toHaveCount(5);    
});

test("Execute test #2", async ({ page }) => {
    // 2. Przejść na stronę /books, kliknąć "random" i sprawdzić, czy:
    //     o kolejność wyświetlonych książek zmienia się po odświeżeniu strony
    const books = page.locator('.books-list');
    const randomLink = page.getByRole('link', { name: 'random' });
    const book = books.locator('.book');

    const getIds = async () => await book.evaluateAll(elements => elements.map(e => e.id));
    const ids = await getIds();
    // const booksText = await books.innerText();
    await randomLink.click();
    // await expect(books).not.toHaveText(booksText); 
    expect(ids).not.toBe(await getIds());

});
