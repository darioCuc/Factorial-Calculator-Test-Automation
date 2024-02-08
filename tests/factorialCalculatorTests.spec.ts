// factorialCalculatorTests.spec.ts
import { test, expect } from '@playwright/test';
import * as factorialPage from '../pages/factorialCalculator';

test.describe('Factorial Calculator Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test('Verify factorial for numbers in range 10 to 100', async ( {page} ) => {
        const title = await page.getByTitle('factorial');
        for (let num = 10; num <= 100; num++) {
            await factorialPage.calculateFactorial(page, num);
            const result = await factorialPage.getResultText(page);
            // Ensure some result is returned for each calculation
            // console.log(result?.toString());
            expect(result).toMatch(new RegExp(`The factorial of ${num} is: \\d+`));
        }
    });
});
