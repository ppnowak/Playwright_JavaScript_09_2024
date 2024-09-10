import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("/form-elements");
})

test("Play with the text input", async ({ page }) => {

  const textInput = page.locator("#textInput");
  const value = await textInput.inputValue();
  console.log("Value is", value);
  await expect(textInput).toHaveValue("Sample text");

  const newValue = "New value";
  await textInput.fill(newValue); // { force: true }
  await expect(textInput).toHaveValue(newValue);

  await textInput.clear();
  await expect(textInput).toBeEmpty();

});

test("Play with the password input", async ({ page }) => {

  const textInput = page.locator("#passwordInput");
  const value = await textInput.inputValue();
  console.log("Value is", value);
  await expect(textInput).toHaveValue("password123");

  const newValue = "New value";
  await textInput.fill(newValue);
  await expect(textInput).toHaveValue(newValue);

  await textInput.clear();
  await expect(textInput).toBeEmpty();

});

test("Play with the textarea", async ({ page }) => {

  const textInput = page.locator("textarea");
  const value = await textInput.inputValue();
  console.log("Value is", value);
  await expect(textInput).toHaveValue("Sample text area content");

  const newValue = "New value";
  await textInput.fill(newValue);
  await expect(textInput).toHaveValue(newValue);

  await textInput.clear();
  await expect(textInput).toBeEmpty();

});

test("Play with the single select", async ({ page }) => {

  const dropdown = page.locator("#singleSelect");
  await expect(dropdown).toHaveValue('3');
  // await expect(dropdown).toHaveText('Three');

  await dropdown.selectOption(['1']);
  await expect(dropdown).toHaveValue('1');

  await dropdown.selectOption([{ label: 'Two' }]);
  await expect(dropdown).toHaveValue('2');

});

test("Play with the multi select", async ({ page }) => {

  const dropdown = page.locator("#multiSelect");
  await expect(dropdown).toHaveValues(['2', '3']);
  // await expect(dropdown).toHaveText('Three');

  await dropdown.selectOption(['1']);
  await expect(dropdown).toHaveValue('1');

  await dropdown.selectOption([{ label: 'Two' }, { label: 'Five'}]);
  await expect(dropdown).toHaveValues(['2', '5']);

  // await dropdown.clear();
  await dropdown.selectOption([]);
  await expect(dropdown).toHaveValues([]);

});

test("Play with the slider", async ({ page }) => {

  const textInput = page.locator("#sliderInput");
  const value = await textInput.inputValue();
  console.log("Value is", value);
  await expect(textInput).toHaveValue("50");

  const newValue = "100";
  await textInput.fill(newValue);
  await expect(textInput).toHaveValue(newValue);

  // await textInput.clear();

});

test("Play with the checkbox", async ({ page }) => {

  const checkbox = page.locator("#checkbox");
  const disabled = page.locator("#disabledCheckbox");

  // await checkbox.isChecked()
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  await checkbox.uncheck();
  await expect(checkbox).not.toBeChecked();

  await checkbox.click();
  await expect(checkbox).toBeChecked();

  if (await disabled.isEnabled()) {
    await disabled.check();
    await disabled.uncheck();
    await disabled.click();
  }

});

test("Tab navigation", async ({ page }) => {

  const textInput = page.locator("#textInput");
  const passwordInput = page.locator("#passwordInput");
  await textInput.focus();

  await expect(textInput).toBeFocused();
  page.keyboard.press('Tab');
  await expect(passwordInput).toBeFocused();
  page.keyboard.press('Shift+Tab')
  await expect(textInput).toBeFocused();



});