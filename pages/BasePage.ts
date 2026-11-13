import { Page } from "@playwright/test";

export abstract class BasePage {

    abstract urlPath: string;

    constructor(readonly page: Page) {}

    async open(url: string = this.urlPath) {
        await this.page.goto(url)
    }
}