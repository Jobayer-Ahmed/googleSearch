const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await await puppeteer.launch({args: ['--no-sandbox']});
        const page = await browser.newPage();
        const searchFor = 'javascript';
        await page.goto(`https://www.google.com/search?q=${searchFor}`);
        await page.waitFor(1000);
        const heading = await page.$$('h3.r a');
        const headingList = await page.evaluate(heading => heading.innerText, heading)
        console.log(headingList)
    } catch(e) {
        console.log(e);
    }
})()