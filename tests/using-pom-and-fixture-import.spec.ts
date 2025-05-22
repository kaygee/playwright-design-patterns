import { test, expect } from '../page-objects/fixtures'

test('Should login using the page object model login', async ({ page, loginPage }) => {

    await page.goto('https://test.rev.com/app');
    await loginPage.login('qatests+rev.customer.buydat@rev.com', 'password');

    // Add assertions to verify successful login
    expect(await page.title()).toContain('Rev');

});