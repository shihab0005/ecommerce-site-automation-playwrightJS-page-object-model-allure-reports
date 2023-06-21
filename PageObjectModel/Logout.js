export default class Logout {
  constructor(page) {
    this.page = page;
    this.menuBar = this.page.locator("//button[@id='react-burger-menu-btn']");
    this.logoutBtn = this.page.locator("#logout_sidebar_link");
  }
  async LogoutUser() {
    await this.menuBar.click();
    await this.page.waitForSelector(".bm-item-list");
    await this.logoutBtn.click();
  }
}
