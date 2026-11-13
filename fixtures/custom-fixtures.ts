import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { CommonDialog } from '../pages/dialogs/CommonDialog';


// Declare the types of your fixtures.
type MyFixtures = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  commonDialog: CommonDialog;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  registerPage: async ({ page }, use) => {
    // Set up the fixture.
    const registerPage = new RegisterPage(page);

    // Use the fixture value in the test.
    await use(registerPage);

    // Clean up the fixture.
    //...
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  commonDialog: async ({ page }, use) => {
    await use(new CommonDialog(page));
  }
});
export { expect } from '@playwright/test';