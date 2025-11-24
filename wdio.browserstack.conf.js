const fs = require('fs');
const path = require('path');

exports.config = {
  runner: 'local',

  tsConfigPath: './tsconfig.json',

  specs: ['./test/ui/specs/**/*.ts', './test/api/specs/**/*.ts'],
  exclude: [],

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  maxInstances: 5,
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        os: 'OS X',
        osVersion: 'Sonoma',
        buildName: 'wdio-aap-framework',
        sessionName: 'UI + API tests',
        local: false,
        debug: true,
        networkLogs: true,
      },
    },
  ],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    [
      'browserstack',
      {
        browserstackLocal: false,
      },
    ],
  ],

  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  onPrepare: function () {
    const resultsDir = path.join(__dirname, 'allure-results');
    if (fs.existsSync(resultsDir)) {
      fs.rmSync(resultsDir, { recursive: true, force: true });
      console.log('🧹 Removed old Allure results');
    }
  },

  afterTest: async function (test, context, { error, result, passed, duration }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
