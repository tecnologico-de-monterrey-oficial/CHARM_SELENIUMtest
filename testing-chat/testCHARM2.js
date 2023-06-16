const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

//This test consist in test the Notion functionalities asking the following question: "Write a pitch about my only project on DevOps?"
async function test_case(){
    //Create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //Set the window size to full size
    await driver.manage().window().maximize();

    //Open Browser
    await driver.get("http://localhost:4200/home");

    //Go to the Chatbot page
    await driver.findElement(By.className("fa fa-power-off")).click();

    //Send the prompt
    await driver.wait(until.elementLocated(By.id("txtinput")));
    await driver.findElement(By.id("txtinput")).sendKeys("Write a pitch about my only project on DevOps?", Key.RETURN);

    //Wait until the bubble chat appear
    await driver.wait(until.elementLocated(By.className("chat-message bot-msg")));

    // if the bubble chat of the bot appear then the test is success
    if (await driver.findElement(By.className("chat-message bot-msg")) === true){
        console.log("Test success")
    }else{
        console.log("Test failed")
    }

    //The browser close after passing 5 seconds after finally the test
    setInterval(async function(){
        await driver.quit();
    }, 5000);
}

test_case()