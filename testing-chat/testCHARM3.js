const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

//This test consist in create a new chat"
async function test_case(){
    //Create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //Set the window size to full size
    await driver.manage().window().maximize();

    //Open Browser
    await driver.get("http://localhost:4200/home");

    //Go to the Chatbot page
    await driver.findElement(By.className("fa fa-power-off")).click();

    //Locate the drop-down menu button 
    await driver.wait(until.elementLocated(By.className("openbtn")));
    await driver.findElement(By.className("openbtn")).click();

    //Locate the "New chat" button
    await driver.wait(until.elementLocated(By.partialLinkText("New Chat")));
    await driver.findElement(By.partialLinkText("New Chat")).click();

    //TODO: If sentence

    //The browser close after passing 5 seconds after finally the test
    setInterval(async function(){
        await driver.quit();
    }, 5000);
}

test_case()
