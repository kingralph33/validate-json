import { expect, test } from '@playwright/test';
import { saucedemoLoginPage } from '../pages/login.page';

test('has title', async ({ page }) => {
  const slPage = new saucedemoLoginPage(page);
  await slPage.goto();
  await expect(page).toHaveTitle('Swag Labs');
});

test('login successfully', async ({ page }) => {
  const slPage = new saucedemoLoginPage(page);
  await slPage.goto();
  await slPage.login('standard_user', 'secret_sauce');
  await slPage.logout();
});
