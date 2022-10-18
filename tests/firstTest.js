const { By, Builder } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    // Launch browser
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to application
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        // Request browser information
        let title = await driver.getTitle();
        assert.equal('Web form', title);

        // Establish waiting strategy
        await driver.manage().setTimeouts({ implicit: 500 });

        // Find an element
        let textBox = await driver.findElement(By.name('my-text'));
        let submitButton = await driver.findElement(By.css('button'));

        // Take action on element
        await textBox.sendKeys('Selenium');
        await submitButton.click();

        // Request element information
        let message = await driver.findElement(By.id('message'));
        let value = await message.getText();
        assert.equal('Received!', value);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();