import { expect, type Locator, type Page } from '@playwright/test';

export class saucedemoLoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly inventoryContainer: Locator;
  readonly openMenu: Locator;
  readonly logoutSidebarLink: Locator;
  readonly loginButtonContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.openMenu = page.locator('[role="button"]');
    this.logoutSidebarLink = page.locator('[data-test="logout-sidebar-link"]');
    this.loginButtonContainer = page.locator('#login_button_container');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.username.click();
    await this.username.fill(username);
    await this.username.press('Tab');
    await this.password.fill(password);
    await this.loginButton.click();
    await expect(this.inventoryContainer).toBeVisible();
  }

  async logout() {
    await this.openMenu.click();
    await this.logoutSidebarLink.click();
    await expect(this.loginButtonContainer).toBeVisible();
  }
}
