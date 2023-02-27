const puppeteer = require("puppeteer");

(async function scrape() {
  const browser = await puppeteer.launch({ headless: false });
  //add scraping logic here
})();
