const puppeteer = require('puppeteer');
const userName = process.env.USER_NAME;
const password = process.env.PASSWORD;
const isSyukkin = !process.argv[2];
const isTaikin = !isSyukkin;
const button = isTaikin ? 'a[href="/my/time_recorder/clock_out"]' : 'a[href="/my/time_recorder/clock_in"]';

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://payroll.moneyforward.com/');
  await page.type('input#sign_in_session_service_email', userName);
  await page.type('input#sign_in_session_service_password', password);
  await Promise.all([
    page.waitForNavigation(),
    page.click('form#new_sign_in_session_service input[type=submit]')
  ]);
  await Promise.all([
    page.on('dialog', async dialog => { await dialog.accept(); }),
    page.click(button)
  ]);
  await browser.close();
})();
