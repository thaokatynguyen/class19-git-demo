import { expect, test } from "../../fixtures/custom-fixtures";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";
import { CommonDialog } from "../../pages/dialogs/CommonDialog";

test('Test Register Successfully', async ({ registerPage, loginPage, commonDialog }) => {

    const account = crypto.randomUUID();
    const email = account + "@example.com";
    const password = "123456";
    const fullname = 'John John'
    
    await test.step('Pre-condition: User is at Register page (Navigate to Register page)', async () => {
        await registerPage.open();
    })
    
    await test.step('Step 1: Enter account textbox', async () => {
        await registerPage.enterAccount(account);
    })

    await test.step('Step 2: Enter password', async () => {
        await registerPage.enterPassword(password);
    })
    
    await test.step('Step 3: Re-enter password', async () => {
        await registerPage.confirmPassword(password);
    })
    
    await test.step('Step 4: Enter full name', async () => {
        await registerPage.enterFullName(fullname);
    })
    
    await test.step('Step 5: Enter email', async () => {
        await registerPage.enterEmail(email);
    })
    
    await test.step('Step 6: Click register', async () => {
        await registerPage.clickRegister();
    })
    
    await test.step('Step 7: Verify user register successfully', async () => {
        const successMsg = await commonDialog.getDialogMessage();
        expect(successMsg).toEqual('Đăng ký thành công');
    })

    await test.step('Step 8: Click "Dang Nhap" link', async () => {
        await loginPage.open();
    })
    
    await test.step('Step 9: Enter username', async () => {
        await loginPage.enterAccount(account);
    })

    await test.step('Step 10: Enter password', async () => {
        await loginPage.enterPassword(password);
    })
    
    await test.step('Step 11: Click login', async () => {
        await loginPage.clickLogin();
    })
    
    await test.step('Step 12: Verify login successfully', async () => {
        const successMsg = await commonDialog.getDialogMessage();
        expect(successMsg).toEqual('Đăng nhập thành công');
    })
    
})