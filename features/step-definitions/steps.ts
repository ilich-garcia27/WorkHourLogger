import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

const pages = {
    login: LoginPage,
    home: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
    await browser.maximizeWindow();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^the name label should be present$/, async () => {
    await HomePage.verifyNameLabel();
});