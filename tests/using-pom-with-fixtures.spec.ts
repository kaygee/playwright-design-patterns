import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.pom';

const test = base.extend<{ loginPage: LoginPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})


test('Should login using the page object model', async ({ page, loginPage }) => {

    await page.goto('https://test.rev.com/app');
    await loginPage.emailInput.fill('qatests+rev.customer.buydat@rev.com');
    await loginPage.nextButton.click();
    await loginPage.passwordInput.fill('password');
    await loginPage.signInButton.click();

    // Add assertions to verify successful login

});

test('Should login using the page object model login', async ({ page, loginPage }) => {

    await page.goto('https://test.rev.com/app');
    await loginPage.login('qatests+rev.customer.buydat@rev.com', 'password');

    // Add assertions to verify successful login

});