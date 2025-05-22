import { expect, test, chromium } from '@playwright/test';

/**
 * This test is using the Playwright test runner to check if the email input field is visible on the page.
 */
test('Email input is visible wihtout fixture', async () => {

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://test.rev.com/app');
    const emailInput = page.locator("input#email-input");
    await expect(emailInput).toBeVisible();

    await browser.close();
});

/**
 * This test is using the Playwright test runner to check if the email input field is visible on the page.
 */
test('Email input is visible with fixture', async ({ page }) => {

    await page.goto('https://test.rev.com/app');
    const emailInput = page.locator("input#email-input");
    await expect(emailInput).toBeVisible();

});

