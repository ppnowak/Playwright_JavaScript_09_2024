
import { expect, Page, test } from '@playwright/test';

test("Popup (link target=_blank)", async ({ page, context }) => {
    await page.goto("/form-elements");

    const link = page.getByText("Popup Link");


    await link.click();
    // const newPage = await context.waitForEvent('page');
    const newPage = await page.context().waitForEvent('page');

    await expect(newPage).toHaveTitle('Books');
    await expect(page).toHaveTitle('HTML Form Elements')
    expect(context.pages()).toHaveLength(2);
});

test("Popup (link target=_blank) - better solution", async ({ page, context }) => {
    await page.goto("/form-elements");

    const link = page.getByText("Popup Link");

    const newPagePromise = page.context().waitForEvent('page');
    await link.click();
    const newPage = await newPagePromise;
    
    await expect(newPage).toHaveTitle('Books');
    await expect(page).toHaveTitle('HTML Form Elements')
    expect(context.pages()).toHaveLength(2);
});

test("Popup (link target=_blank) - even better solution", async ({ page, context }) => {
    await page.goto("/form-elements");

    const link = page.getByText("Popup Link");

    const [ newPage ] = await Promise.all([
        page.context().waitForEvent('page'),
        link.click()
    ]);
    
    await expect(newPage).toHaveTitle('Books');
    await expect(page).toHaveTitle('HTML Form Elements')
    expect(context.pages()).toHaveLength(2);
});

const doActionAndWaitForNewPage = async (page: Page, action): Promise<Page> => {
    const [ newPage ] = await Promise.all([
        page.context().waitForEvent('page'),
        action()
    ]);
    return newPage;
}

test("Popup (link target=_blank) - external function", async ({ page, context }) => {
    await page.goto("/form-elements");
    const link = page.getByText("Popup Link");
    const newPage = await doActionAndWaitForNewPage(page, async () => await link.click());
    await expect(newPage).toHaveTitle('Books');
    await expect(page).toHaveTitle('HTML Form Elements')
    expect(context.pages()).toHaveLength(2);
});