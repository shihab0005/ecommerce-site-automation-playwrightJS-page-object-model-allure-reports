export default class Login {
  constructor(page) {
    this.page = page;
    this.userName = this.page.locator("//input[@placeholder='Username']");
    this.Password = this.page.locator("//input[@placeholder='Password']");
    this.loginBtn = this.page.locator("//input[@id='login-button']");
  }

  async Login(username, password) {
    await this.userName.fill(username);
    await this.Password.fill(password);
    await this.loginBtn.click();
   
  }
}
