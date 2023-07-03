const puppeteer = require('puppeteer');
const url = process.argv[2];
const fileName = process.argv[3];
const delay = process.argv[4];

//Command warnings
if (!url) {
    throw "Please provide URL as the first argument";
}
if (!fileName) {
    throw "Please provide fileName as the second argument";
}

//Primary function
async function run () {
    //Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navigate to page
    await page.goto(url);
    await page.emulateMediaType('screen');
    await page.reload({waitUntil: 'networkidle2'})

    //Wait to make sure everything is loaded
    //Scroll to bottom and back to top to load lazy-load elements
    await page.waitForTimeout((delay || 2000));
    await autoScroll(page);
    await scrollToTop(page);
    await page.waitForTimeout((500));

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

/* ===================== */
/* ===== AutoScroll ===== */
/* ===================== */
async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight - window.innerHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

async function scrollToTop(page){
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            window.scrollTo(0, 0);
            resolve();
        });
    });
}


//Run script
run();