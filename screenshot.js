const puppeteer = require('puppeteer');
const url = process.argv[2];
const fileName = process.argv[3];
const delay = process.argv[4];
if (!url) {
    throw "Please provide URL as the first argument";
}
if (!fileName) {
    throw "Please provide fileName as the second argument";
}
async function run () {
    //Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navigate to page
    await page.goto(url);
    await page.emulateMediaType('screen');
    await page.reload({waitUntil: 'networkidle2'})

    //Wait to make sure everything is loaded
    await page.waitForTimeout((delay || 5000));

    //Set screen size
    await page.setViewport({
      width: 1800,
      height: 780,
      deviceScaleFactor: 1,
    });
    
    //Take screenshot
    await page.screenshot({
    	path: 'screenshot-files/' + fileName + '.png', 
    	fullPage: true,
    });

    //Close session
    browser.close();
}
run();