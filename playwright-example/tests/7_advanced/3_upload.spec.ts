import { expect, test } from '@playwright/test';
import { readFileSync } from 'fs';
import { join } from 'path';

test("Playwright site", async ({ page }) => {

    const realFileName = "upload.txt";
    const filePath = join(__dirname, realFileName);
    const file = readFileSync(filePath, 'UTF-8');

    const fileInput = page.locator("#file");
    const uploadBtn = page.getByRole('button', { name : 'Upload File' });
    const fileName = page.locator("#fileName");
    const fileContents = page.locator("#fileContent");
    
    await page.goto("/upload");
    await fileInput.setInputFiles(filePath);
    await uploadBtn.click();
    await expect(fileName).toHaveText(realFileName);
    const value = await fileContents.inputValue();
    // await expect(fileContents).toHaveValue(file);
    console.log({value});
    expect(value.trim()).toBe(file);

});