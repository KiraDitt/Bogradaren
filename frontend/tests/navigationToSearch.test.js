import { test, expect } from '@playwright/test';

test('should route from homepage to Search page', async ({ page }) => {
    
    await page.goto('http://localhost:5175/');

    await expect(page).toHaveURL('http://localhost:5175/');

    const myBooksButton = await page.locator('text=Search');
    await myBooksButton.click();

    await page.waitForURL('http://localhost:5175/search');

    await expect(page).toHaveURL('http://localhost:5175/search');
});