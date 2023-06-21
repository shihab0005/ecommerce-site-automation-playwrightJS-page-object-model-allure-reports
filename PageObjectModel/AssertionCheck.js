import { expect } from "@playwright/test";

export default class AssertionCheck {
  constructor(page) {
    this.page = page;
    this.menuLogo = this.page.locator("#react-burger-menu-btn");
    this.shoppingLogo = this.page.locator("#shopping_cart_container");
    this.textLogo = this.page.locator(".app_logo");
  }

  async verifyUiElement() {
    expect(this.page).toHaveTitle("Swag Labs");
    await expect(this.menuLogo).toBeVisible();
    await expect(this.shoppingLogo).toBeVisible();
    await expect(this.textLogo).toHaveText("Swag Labs");
  }
}
