import { test as base, expect, chromium } from '@playwright/test';

const test = base.extend({

    testData: async ({ }, use) => {
        const data = {
            email: 'qatests+rev.customer.buydat@rev.com'
        }
        await use(data)
    },
    authenticatedUser: [async ({ page, testData }, use) => {
        await page.goto('https://test.rev.com/app');
        const emailInput = page.locator("input#email-input");
        await expect(emailInput).toBeVisible();
        await page.fill("input#email-input", testData.email);

        const nextButton = page.locator("//button[text()='Next']");
        await expect(nextButton).toBeVisible();
        await nextButton.click();

        const signInButton = page.locator("//button[text()='Sign in']");
        await expect(signInButton).toBeVisible();

        await use(page);

    }, { auto: true }]

})

test("Should do the stuff in the fixture before this", async ({ page }) => {

    const passwordInput = page.locator("input#password-input");
    await expect(passwordInput).toBeVisible();
    await page.fill("input#password-input", "password");

    const signInButton = page.locator("//button[text()='Sign in']");
    await expect(signInButton).toBeVisible();
    await signInButton.click();

});
