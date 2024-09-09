import { test, expect } from '@playwright/test';

test.describe("Check if form submission works", () => {

  test.beforeEach(async () => {
    /* Open form page */
  })

  test.skip('success scenario', async ({ page }) => {
    
    await test.step("Fill form with data", async () => {
      /* Logic to fill the form */
    });

    await test.step("Submit form", async () => {
      /* Submit the form & wait for new page */
    });

    await test.step("Check data", async () => {
      /* Check if form data is the same as set in form */
    });

  });

  test.afterEach(async () => {
    /* Remove created data */
  });
  
});