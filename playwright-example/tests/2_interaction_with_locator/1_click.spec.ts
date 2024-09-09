import { expect, test } from '@playwright/test';

/*
    Dodajemy do playwright.config.ts baseURL w root.projects:

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://ui.breathtaking.website'
      },
    },

    Druga opcja - dodajemy do playwright.config.ts baseURL w root.use

      use: {
          baseURL: 'https://ui.breathtaking.website',
      },

*/
test.beforeEach(async ({ page }) => {
    await page.goto("/");
})

test("Click link and check if page URL changed", async ({ page }) => {

    const booksLink = page.getByRole('link', { name: 'Books' }).first();
    await booksLink.click();
    await expect(page).toHaveURL(/\/books$/); // -> /books
    // w Regexp trzeba escapować 
    // / -> \/
    // ( -> \(
    // ) -> \)
    // . -> \. (??)
    // $ -> \$ (znak końca linii)
    // ^ -> \^ (znak początku linii)

});

test("click button and check if html box is opened", async ({ page }) => {
    await page.goto("/alerts");
    const button = page.getByRole('button', { name: 'Show HTML Alert' });
    await button.click();
    await expect(page.locator('.modal-content')).toBeVisible();
})
