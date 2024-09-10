
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // 1. Przejdź na stronę /table
    await page.goto("/table");
})

test("Task #1", async ({ page }) => {

    const loading = page.locator('#browserTable').getByText('Loading...');

    // zaczekaj na pojawienie się rekordów*,
    // opcja z waitem na API
    await page.waitForResponse(/\/api\/v1\/browser-share$/g);
    // opcja z waitem aż selektor zniknie
    await loading.waitFor({ state: 'detached' });
    // opcja z assertem, że element nie jest widoczny na stronie
    await expect(loading).not.toBeVisible();

    // oMarket Share dla Chrome wynosi 69.28%
    
    // oEdge wyświetlony jest na drugiej pozycji w tabeli
    
    // 2. Kliknij dwukrotnie na nazwę kolumny # sprawdź:
    const column = page.locator('...');
    column.dblclick({ delay: 500 });
    column.click({ clickCount: 2, delay: 500 })

    // oKolejność wyświetlania przeglądarek jest malejąca według indeksu
    const indexValues = page.locator('...');
    await expect(indexValues).toHaveText(['5', '4', '3', '2', '1']);
    const indexes = (await indexValues.allTextContents()).map(index => parseInt(index));
    
    
});
