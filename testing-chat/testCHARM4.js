const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

//This test consist in logging out from the chatbot page"
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
    await driver.wait(until.elementLocated(By.className("logout")));
    await driver.findElement(By.className("logout")).click();

    //Grab the h1 on the website
    console.log(await driver.getTitle());

    //Check if the title is the same on the login page, if it is the same then print "Test #1 success". Basically check if return to the the home page
    if(await driver.getTitle() === "CHARM"){
        console.log("Test #1 success")
    }else{
        console.log("Test #2 Fail")
        return;
    }

    //The browser close after passing 5 seconds after finally the test
    setInterval(async function(){
        await driver.quit();
    }, 5000);
}

test_case()