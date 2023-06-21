import { expect } from "@playwright/test";

export default class AddToCart {
  constructor(page) {
    this.page = page;

    this.products = this.page.locator(
      "//div[@class='inventory_list']/div[@class='inventory_item']"
    );
    this.cart = this.page.locator("#shopping_cart_container");
    this.checkout = this.page.locator("#checkout");
    this.firstName = this.page.locator("#first-name");
    this.lastName = this.page.locator("#last-name");
    this.postCode = this.page.locator("#postal-code");
    this.continue = this.page.locator("#continue");
    this.finish = this.page.locator("#finish");
    this.orderConfirm = this.page.locator(".complete-header");
  }

  async AddToCartPorduct(fname, lname, pcode) {
    const totalProduct = await this.products.count();
    console.log(totalProduct);

    for (let i = 0; i < totalProduct; i++) {
      const productName = await this.products
        .nth(i)
        .locator("//div[@class='inventory_item_name']")
        .textContent();
      console.log(productName);
      if (productName.includes("Labs")) {
        await this.products
          .nth(i)
          .locator("//button[text()='Add to cart']")
          .click();
      }
    }

    await this.cart.click();
    await this.checkout.click();
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.postCode.fill(pcode);
    await this.continue.click();
    await this.finish.click();
    const confirmMessage = await this.orderConfirm.textContent();
    expect(confirmMessage.includes("Thank you for your order!")).toBeTruthy();
  }
}
