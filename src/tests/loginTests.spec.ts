import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
// import { LoginPage } from "../pages/LoginPage";

test("Login test", async( {page} ) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUserName("gitisagd-3auu@force.com");
    await loginPage.fillPassword("playwright@QA10");

    const homePage = await loginPage.clickOnLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})