const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);


const cp = require('child_process');
const clientPlaywrightVersion = cp.execSync('npx playwright --version').toString().trim().split(' ')[1];

const caps = {
  'browser': 'chrome', // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
  'os': 'osx',
  'os_version': 'catalina',
  'name': 'Codecept test using Playwright',
  'build': 'CodeceptJS on BrowserStack',
  'browserstack.username':'ahmetgokhankocam_tMR6Dw',
  'browserstack.accessKey': '21deuZUp4xnqDWmk6VkZ',
  'client.playwrightVersion': clientPlaywrightVersion  // example '1.11.1'
};


/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      //url: 'http://localhost',
      show: true,
      browser: 'chromium',
       /*chromium: {
        browserWSEndpoint: { wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}` }
      } */
    }
  },
  include: {
    I: './steps_file.js',
    casesPage:'./pages/cases.js'
  },
  name: 'AutomationChallenge'
}