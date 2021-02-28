const playwright = require('playwright');

module.exports = (browserType, url)=>{
  (async () => {
      const browser = await playwright[browserType].launch({headless: false});
      global.launchedBrowsers.push(browser)
      const context = await browser.newContext({
      });
      const page = await context.newPage();
      await page.goto(url);
  })();
}
