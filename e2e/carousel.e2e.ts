import { test, expect } from '@playwright/test';

test('carousel container exists on /en/', async ({ page }) => {
  await page.goto('/en/');
  await page.waitForSelector('.swiper, .carousel'); // adjust to your actual class
  await expect(page.locator('.swiper, .carousel')).toBeVisible();
});
