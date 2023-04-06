const puppeteer = require('puppeteer');
const url = process.argv[2];
const fileName = process.argv[3];
if (!url) {
    throw "Please provide URL as a first argument";
}
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1800,
      height: 780,
      deviceScaleFactor: 1,
    });
    await page.goto(url);
    await page.screenshot({path: 'screenshot-files/' + fileName + '.png', fullPage: true});
    browser.close();
}
run();