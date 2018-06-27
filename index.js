const puppeteer = require('puppeteer');
const fs = require('fs-extra');

(async() => {
	try {
		const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
		const page = await browser.newPage();
		const subject = 'javascript';
		await page.goto(`https://www.google.com/search?q=${subject}`);
		const a = await page.evaluate(() => {
			let x = document.querySelectorAll('h3 a');
			let y = []
			for(let i = 0; i < x.length; i++) {
				y.push(x[i].textContent);
			}
			return y
		});
		await fs.writeJson('out.json', {name: a})
	} catch(e) {
		console.log(e);
	}
})();