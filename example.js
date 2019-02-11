const puppeteer = require('puppeteer');

(async () => {
    const brower = await puppeteer.launch();
    const page = await brower.newPage();
    await page.goto('http://google.com');
    await page.screenshot({path: 'example.png'})

    await brower.close();
})();