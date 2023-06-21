import { test } from "@playwright/test";
import Login from "../PageObjectModel/Login";
import AddToCart from "../PageObjectModel/AddToCart";
import Logout from "../PageObjectModel/Logout";
import AssertionCheck from "../PageObjectModel/AssertionCheck";

const url = "https://www.saucedemo.com/";
const userName = "standard_user";
const Password = "secret_sauce";
const firstName = "Shihab";
const lastName = "khan";
const postCode = "6655";
test.describe("End to end testing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    const loginUser = new Login(page);
    await loginUser.Login(userName, Password);

    await page.waitForLoadState("networkidle");
  });

  test.afterAll(async ({ browser }) => {
    const contex = await browser.newContext();
    const page = await contex.newPage();
    console.log("Successfully Confirm Order");
    await page.close();
  });

  test("Assertion Check", async ({ page }) => {
    const uiCheck = new AssertionCheck(page);
    uiCheck.verifyUiElement();
  });

  test("Add to Cart", async ({ page }) => {
    const addProduct = new AddToCart(page);
    await addProduct.AddToCartPorduct(firstName, lastName, postCode);
    await page.waitForTimeout(3000);
  });

  test("Logout", async ({ page }) => {
    const logoutPage = new Logout(page);
    await logoutPage.LogoutUser();
  });
});
