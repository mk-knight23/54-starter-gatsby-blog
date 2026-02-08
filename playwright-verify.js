import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    devtools: true
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });

  const page = await context.newPage();

  // Capture console logs
  page.on('console', msg => {
    console.log(`[${msg.type()}] ${msg.text()}`);
  });

  // Capture errors
  page.on('pageerror', error => {
    console.error(`[PAGE ERROR] ${error.message}`);
  });

  // Capture network failures
  page.on('requestfailed', request => {
    console.error(`[NETWORK FAIL] ${request.url()}: ${request.failure().errorText}`);
  });

  console.log('Navigating to http://localhost:5174...');
  await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });

  // Wait for Vue app to mount
  await page.waitForTimeout(3000);

  // Take screenshot
  await page.screenshot({
    path: '/Users/mkazi/60 Projects/screenshots/starters/starter-54.png',
    fullPage: true
  });

  console.log('Screenshot saved to /Users/mkazi/60 Projects/screenshots/starters/starter-54.png');

  // Get page info
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Check for Vue app content
  const appContent = await page.$eval('#app', el => el.innerHTML.substring(0, 500));
  console.log('App content preview:', appContent);

  // Keep browser open for 5 seconds to inspect
  await page.waitForTimeout(5000);

  await browser.close();
  console.log('Browser verification complete');
})();
