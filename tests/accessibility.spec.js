const { test, expect } = require('@playwright/test');

const fs = require('fs');

const AccessibilityHelper =
require('../utils/accessibilityHelper');



test('Validate WCAG accessibility compliance',
async ({page})=>{


await page.goto(
'https://www.saucedemo.com/'
);



const accessibility =
new AccessibilityHelper();



const results =
await accessibility.scanPage(page);



const report =
accessibility.generateReport(results);



fs.writeFileSync(
'accessibility-report.html',
report
);

if(results.violations.length > 0){


    await page.screenshot({

        path:
        './reports/accessibility-failure.png',

        fullPage:true

    });


}

expect(
results.violations
).toEqual([]);



});
