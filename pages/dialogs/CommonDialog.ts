import { Locator, Page } from "@playwright/test";

export class CommonDialog {
    readonly dialogMessage: Locator;

    constructor(page: Page) {
        this.dialogMessage = page.locator('#swal2-title');
    }

    async getDialogMessage() {
        return await this.dialogMessage.innerText();
    }
}