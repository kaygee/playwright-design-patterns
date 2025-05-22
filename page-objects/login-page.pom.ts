import { Locator, Page } from '@playwright/test';

export class LoginPage {

    public readonly emailInput: Locator;
    public readonly passwordInput: Locator;
    public readonly nextButton: Locator;
    public readonly signInButton: Locator;

    constructor(page: Page) {
        this.emailInput = page.locator("input#email-input");
        this.passwordInput = page.locator("input#password-input");
        this.nextButton = page.locator("//button[text()='Next']");
        this.signInButton = page.locator("//button[text()='Sign in']");
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.nextButton.click();
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}