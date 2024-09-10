import { expect, test } from '@playwright/test';

test("Creating snapshot for text contents", async ({ page }) => {
    await page.goto("/books");
    const allBooks = page.locator('.book');
    const bookContents = (await allBooks.allInnerTexts()).join("\n---------\n");
    expect(bookContents).toMatchSnapshot();
});

test("Creating snapshot for API response", async ({ page }) => {
    await page.goto("/table");
    const response = await page.waitForResponse(/browser-share$/);
    const headers = await response.allHeaders();
    const responseText = await response.text();
    const textResponse = `${response.status()}\n${JSON.stringify(headers)}\n${responseText}`;
    expect(textResponse).toMatchSnapshot();
});