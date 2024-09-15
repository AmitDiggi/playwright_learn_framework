import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
// import { LoginPage } from "../pages/LoginPage";

test("Login test", async( {page} ) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("playwright@qa.com");
    await loginPage.fillPassword("playwright@007");

    const homePage = await loginPage.clickOnLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})