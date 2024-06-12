import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
});

test('has title', async ({ page, baseURL }) => {
  await expect(page).toHaveTitle(/World/);

  await expect(baseURL).toBe('http://localhost:3000');
});

