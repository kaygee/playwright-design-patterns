import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.pom';

test('Should login using the page object model', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await page.goto('https://test.rev.com/app');

    await loginPage.emailInput.fill('qatests+rev.customer.buydat@rev.com');
    await loginPage.nextButton.click();
    await loginPage.passwordInput.fill('password');
    await loginPage.signInButton.click();

    // Add assertions to verify successful login

});