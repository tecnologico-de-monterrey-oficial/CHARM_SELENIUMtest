const {By, Key, Builder, until} = require("selenium-webdriver");
require("chromedriver");

async function test_case(){
    //Create driver
    let driver = await new Builder().forBrowser("chrome").build();

    //Set the window size to full size
    await driver.manage().window().maximize();

    //Open Browser
    await driver.get("http://localhost:4200/home");

    //Look for the text "sign in" on the website, and he click on it
    await driver.findElement(By.partialLinkText("Commerce")).click();

    //Grab the h1 on the website
    console.log(await driver.getTitle());

    //Check if the title is the same on the github login page, if it is the same then print "Test #1 success". Basically check if if we pass from the home page
    if(await driver.getTitle() === "Commerce is Evolving. Are You Keeping Up?"){
        console.log("Test #1 success")
    }else{
        console.log("Test #2 Fail")
        return;
    }

    //The browser close after passing 10 seconds after finally the test
    setInterval(async function(){
        await driver.quit();
    }, 5000);
}

test_case()