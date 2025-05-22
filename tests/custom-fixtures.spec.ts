import { test as base, expect, chromium } from '@playwright/test';

const test = base.extend({

    testData: async ({ }, use) => {
        const data = {
            email: 'qatests@rev.com'
        }
        await use(data);
    }

})

test("Should use test data", async ({ page, testData }) => {
    await page.goto('https://test.rev.com/app');
    const emailInput = page.locator("input#email-input");
    await expect(emailInput).toBeVisible();
    await page.fill("input#email-input", testData.email);

    const nextButton = page.locator("button#submit-button");
    await expect(nextButton).toBeVisible();

    await page.click("button#submit-button");

    await expect(emailInput).toBeHidden();
});
