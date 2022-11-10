const assert = require('assert');
const puppeteer = require('puppeteer');

puppeteer.launch(
  {args: [], headless: true}
).then(async browser => {
  await main(browser);
  browser.close();
});

async function main(browser) {
  const page = await browser.newPage();
  // page.on('console', msg => console.log('page console.log:', msg.text()));
  await page.goto('https://ssatosays.github.io/myage/');
  const e = await page.evaluate(() => {
    return {
      title: document.title,
      birthday: document.querySelector('#birthday').textContent,
      age: document.querySelector('#age').textContent
    };
  });
  assert(e.title === 'myage');
  assert(e.birthday === 'birthday: 1993/11/10');
  assert(e.age === 'age: 29');
}
