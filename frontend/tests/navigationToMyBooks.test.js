import { test, expect } from '@playwright/test';

test('should route from homepage to MyBooks page', async ({ page }) => {
    
    await page.goto('http://localhost:5175/');

    await expect(page).toHaveURL('http://localhost:5175/');

    const myBooksButton = await page.locator('text=My Books');
    await myBooksButton.click();

    await page.waitForURL('http://localhost:5175/my-books');

    await expect(page).toHaveURL('http://localhost:5175/my-books');
});