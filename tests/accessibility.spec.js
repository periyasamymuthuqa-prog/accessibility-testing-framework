const { test, expect } = require('@playwright/test');

const AccessibilityHelper =
require('../utils/accessibilityHelper');


test('Validate WCAG accessibility compliance', async ({page})=>{


    await page.goto(
    'https://www.saucedemo.com/'
    );


    const accessibility =
    new AccessibilityHelper();


    const results =
    await accessibility.scanPage(page);



    console.log(
    "Accessibility Violations:",
    results.violations.length
    );



    expect(
    results.violations
    ).toEqual([]);


});
