import { Locator, Page } from "@playwright/test";

 export class TopNavigationBar {
    readonly registerLink: Locator
    readonly loginLink: Locator

    constructor(page: Page) {
        this.registerLink = page.locator('//a[h3[text()="Đăng Ký"]]');
        this.loginLink = page.locator('//a[h3[text()="Đăng Nhập"]]');
    }

    async navigateToLoginPage() {
        await this.loginLink.click();
    }

    async navigateToRegisterPage() {
        await this.registerLink.click();
    }
 }