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


}


module.exports = AccessibilityHelper;
