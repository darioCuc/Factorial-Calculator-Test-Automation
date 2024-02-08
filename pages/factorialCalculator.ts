// factorialCalculator.ts
import { Page } from '@playwright/test';

// *** *** *** *** *** LOCATORS *** *** *** *** ***


/** New Video button */
export const inputAreaSelector = (page: Page) =>
  page.locator('#number');

/** New Video button > Create Project button */
export const calculateButton = (page: Page) =>
  page.locator('#getFactorial');

export const resultSelector = (page: Page) =>
  page.locator('#resultDiv');



// *** *** *** *** *** FUNCTIONS *** *** *** *** ***

export async function calculateFactorial(page: Page, number: number) {
  await inputAreaSelector(page).fill(number.toString());
  await calculateButton(page).click();
  await page.waitForTimeout(230);
  await resultSelector(page).waitFor();
}

export async function getResultText(page: Page) {
  return resultSelector(page).textContent();
}


export async function factorial(n: number) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}
