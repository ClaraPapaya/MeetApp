import puppeteer from 'puppeteer';

// Feature 2

describe('show/hide an event\'s details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000); // increases the timeout long enough for Puppeteer to run its tests
    browser = await puppeteer.launch(
      // {
      // headless: false, // too see test run in browser turn default headless mode off
      // slowMo: 250, // slow down by 250ms
      // ignoreDefaultArgs: ['--disable-extensions'] // ignores default setting that causes timeout errors
      // }
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });
  afterAll(() => {
    browser.close();
  });

  // Scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });

  // Scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });

  // Scenario 3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });
});