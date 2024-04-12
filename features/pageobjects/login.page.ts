import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    public get btnLoginWithEmail() {
        return $('.fab-TextButton.fab-link.js-normalLoginLink');
    }

    public get inputUsername() {
        return $('#lemail');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmit() {
        return $(`//span[normalize-space()='Log In']`);
    }

    public get btnTrustBrowser() {
        return $(`//span[normalize-space()='Yes, Trust this Browser']`);
    }

    public async login(username: string, password: string) {
        await this.btnLoginWithEmail.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await this.btnTrustBrowser.click();
    }

    public open() {
        return super.open('login.php?r=%2Fhome%2F');
    }
}

export default new LoginPage();
