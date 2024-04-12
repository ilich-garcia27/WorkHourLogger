import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    public get labelName() {
        return $(`//div[@class='MyInfoWidget__name truncate']`);
    }

    public get btnClockIn() {
        return $(`//span[normalize-space()='Log In']`);
    }

    public get btnClockOut() {
        return $(`//div[@class='TimeTrackingWidget__multipleType']//button[@type='button']`);
    }

    public async verifyNameLabel() {
        await expect(await this.labelName).toBePresent();
    }

    public open() {
        return super.open('home');
    }
}

export default new HomePage();
