import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";

export class RegisterPage extends CommonPage {
    urlPath: string = '/sign-up';

    readonly accountInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        super(page);
        this.accountInput = page.locator('#taiKhoan');
        this.passwordInput = page.locator('#matKhau');
        this.confirmPasswordInput = page.locator('#confirmPassWord');
        this.fullNameInput = page.locator('#hoTen');
        this.emailInput = page.locator('#email');
        this.registerButton = page.locator('//button[span[text()="Đăng ký"]]');
    }

    async enterAccount(account: string) {
        await this.accountInput.fill(account);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async confirmPassword(password: string) {
        await this.confirmPasswordInput.fill(password);
    }

    async enterFullName(fullname: string) {
        await this.fullNameInput.fill(fullname);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async clickRegister() {
        await this.registerButton.click();
    }
}