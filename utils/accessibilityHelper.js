const AxeBuilder = require('@axe-core/playwright').default;


class AccessibilityHelper {


    async scanPage(page){


        const results =
            await new AxeBuilder({ page })
            .withTags([
                'wcag2a',
                'wcag2aa'
            ])
            .analyze();


        return results;


    }



    generateReport(results){


        let report = "";


        report += "<html><body>";

        report += "<h1>Accessibility Report</h1>";

        report +=
        "<h2>Total Violations: "
        + results.violations.length
        + "</h2>";



        results.violations.forEach(
        violation => {


            report +=
            "<h3>"
            + violation.id
            + "</h3>";


            report +=
            "<p>"
            + violation.description
            + "</p>";


            report +=
            "<p>Impact: "
            + violation.impact
            + "</p>";


        });



        report += "</body></html>";


        return report;


    }


}


module.exports = AccessibilityHelper;
