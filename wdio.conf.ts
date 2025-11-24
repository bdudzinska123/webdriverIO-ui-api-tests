import fs from 'fs';
import path from 'path';

export const config: WebdriverIO.Config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',

  specs: ['./test/ui/specs/**/*.ts', './test/api/specs/**/*.ts'],
  exclude: [],

  maxInstances: 10,

  capabilities: [
    {
      browserName: 'chrome',
    },
  ],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

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

  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
