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
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //Wait to make sure everything is loaded
    await page.waitForTimeout((delay || 5000));
    await page.setViewport({
      width: 1800,
      height: 780,
      deviceScaleFactor: 1,
    });
    await page.goto(url);
    await page.screenshot({
    	path: 'screenshot-files/' + fileName + '.png', 
    	fullPage: true,
    });
    browser.close();
}
run();