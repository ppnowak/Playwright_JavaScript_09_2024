
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("/delayed-content");
})

test("Check delayed divs - standard code", async ({ page }) => {
    const mainElement = page.locator("#mainElement");
    const delayedElement = page.locator("#delayedElement");
    const secondElement = page.locator("#secondElement");

    await expect(mainElement).toHaveText("Initial data");
    await expect(delayedElement).toHaveText("This div is delayed by 5s");
    await expect(secondElement).toHaveText("This div is delayed by 7s, and disappears after 5s");
});

test("Check delayed divs - with sleep", async ({ page }) => {
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const mainElement = page.locator("#mainElement");
    const delayedElement = page.locator("#delayedElement");
    const secondElement = page.locator("#secondElement");

    await expect(mainElement).toHaveText("Initial data");
    await page.waitForTimeout(5000);
    await expect(delayedElement).toHaveText("This div is delayed by 5s");
    await page.waitForTimeout(2000);
    await expect(secondElement).toHaveText("This div is delayed by 7s, and disappears after 5s");
});

test("Check delayed divs - timeout in assertion", async ({ page }) => {
    const mainElement = page.locator("#mainElement");
    const delayedElement = page.locator("#delayedElement");
    const secondElement = page.locator("#secondElement");

    await expect(mainElement).toHaveText("Initial data");
    await expect(delayedElement).toHaveText("This div is delayed by 5s", { timeout: 6000 });
    await expect(secondElement).toHaveText("This div is delayed by 7s, and disappears after 5s");
});

test("Check delayed divs - waitForSelector, locator.waitFor", async ({ page }) => {
    const mainElement = page.locator("#mainElement");
    const delayedElement = page.locator("#delayedElement");
    const secondElement = page.locator("#secondElement");

    await expect(mainElement).toHaveText("Initial data");
    // await page.waitForSelector("#delayedElement");
    await delayedElement.waitFor();
    await expect(delayedElement).toHaveText("This div is delayed by 5s");
    await expect(secondElement).toHaveText("This div is delayed by 7s, and disappears after 5s");
});

test("Check delayed divs - global timeout", async ({ page }) => {
    const mainElement = page.locator("#mainElement");
    const delayedElement = page.locator("#delayedElement");
    const secondElement = page.locator("#secondElement");
    // page.setDefaultTimeout(10000); // to nie zadziała
    // w playwright.config.ts można ustawić
    //  expect: { timeout: 10000 },
    await expect(mainElement).toHaveText("Initial data");
    await expect(delayedElement).toHaveText("This div is delayed by 5s");
    await expect(secondElement).toHaveText("This div is delayed by 7s, and disappears after 5s");
});