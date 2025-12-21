import { test, expect } from '@playwright/test';

test('carousel initializes on /en/', async ({ page }) => {
  await page.goto('/en/');

  const container = page.locator('swiper-container');
  await expect(container).toBeVisible();

  await page.waitForFunction(() => {
    const el = document.querySelector('swiper-container');
    return el && el.swiper;
  });

  const hasSwiper = await page.evaluate(() => {
    const el = document.querySelector('swiper-container');
    return !!el.swiper;
  });

  expect(hasSwiper).toBe(true);
});