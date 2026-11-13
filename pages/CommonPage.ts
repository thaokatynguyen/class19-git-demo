import { Page } from "@playwright/test";
import { TopNavigationBar } from "./components/TopNavigationBar";
import { BasePage } from "./BasePage";


export abstract class CommonPage extends BasePage {

    readonly topNavigationBar: TopNavigationBar

    constructor(page: Page) {
        super(page);
        this.topNavigationBar = new TopNavigationBar(page);
    }
}