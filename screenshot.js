//Vars
const puppeteer = require('puppeteer');
const url = process.argv[2];
const fileName = process.argv[3];
const delay = process.argv[4];

//Error Handling
if (!url) {
    throw "Please provide URL as the first argument";
}
if (!fileName) {
    throw "Please provide fileName as the second argument";
}

async function screenshot () {

}

//Primary Function
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navigate to page
    await page.goto(url);
    await page.emulateMediaType('screen');
    await page.reload({waitUntil: 'networkidle2'});

    //Desktop viewport size
    await page.setViewport({
      width: 1800,
      height: 780,
      deviceScaleFactor: 1,
    });

    //Wait to make sure everything is loaded
    await page.waitForTimeout((delay || 2000));

    //PNG screenshot
    await page.screenshot({
    	path: 'screenshot-files/PNGs/' + fileName + '--desktop.png', 
    	fullPage: true,
    });

    //await page.waitForTimeout((delay || 2000))
    //PDF screenshot
    await page.pdf({
        path: 'screenshot-files/PDFs/' + fileName + '--desktop.pdf', 
        width: 1800,
        fullPage: true,
    });
/*
    //Tablet viewport size
    await page.setViewport({
      width: 762,
      height: 780,
      deviceScaleFactor: 1,
    });
    await page.goto(url);
    await page.screenshot({
        path: 'screenshot-files/' + fileName + '--tablet.png', 
        fullPage: true,
    });

    //Mobile viewport size
    await page.setViewport({
      width: 400,
      height: 750,
      deviceScaleFactor: 1,
    });
    await page.goto(url);
    await page.screenshot({
        path: 'screenshot-files/' + fileName + '--mobile.png', 
        fullPage: true,
    });
*/
    //Close browser
    browser.close();
}

//Run primary function
run();