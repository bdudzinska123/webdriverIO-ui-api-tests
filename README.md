WDIO AAP Framework

WebdriverIO + TypeScript + App Action Pattern + API tests + Allure Reports + BrowserStack

This repository contains a modern, scalable end-to-end automation framework combining UI and API testing.
It follows the App Action Pattern, uses TypeScript, supports cloud execution on BrowserStack, and generates advanced Allure Reports.


- Tech Stack
  Technology Purpose
  WebdriverIO v8 UI & API automation
  TypeScript Strong typing, clean architecture
  App Action Pattern Scalable separation of concerns
  Mocha Test runner
  Axios API requests
  Allure Reports Rich test reporting
  BrowserStack Cloud cross-browser testing
  ▶️ Running Tests

1. Install dependencies
   npm install

🖥️ Run Local Tests
UI + API
npm run wdio

Only UI
npm run test:ui

Only API
npm run test:api

- Generate Allure Report

The framework is configured to:

✔️ Automatically clean old reports on each run
✔️ Save new results inside allure-results/

Generate HTML report:
npm run allure:generate
npm run allure:open

- BrowserStack Execution
  Run tests on BrowserStack

Before running, export your credentials:

export BROWSERSTACK_USERNAME="your_username"
export BROWSERSTACK_ACCESS_KEY="your_key"

Then:

npm run wdio:bs

Uses:

wdio.browserstack.conf.js

OS X / Sonoma

Latest Chrome

Network logs + debugging enabled

- App Action Pattern (AAP)

The AAP structure separates:

Selectors → /pages

Business actions → /actions

Assertions → /assertions

Tests → /specs

Example:

await AuthActions.loginAsStandardUser();
await InventoryActions.addProductByName('Sauce Labs Backpack');
await CheckoutActions.checkoutDefaultUser();
await OrderAssertions.orderIsConfirmed();

This keeps test files clean, readable, and scalable.

- API Testing

Uses centralized axios client:

const res = await apiClient.post('/login', { email: 'peter@klaven' });
expect(res.status).toBe(400);

Supports:

GET / POST / PUT / DELETE

Shared headers & baseURL

Easy token injection

- Screenshots & Reporting

On test failure → automatic screenshot inside Allure

Allure stores:

steps

logs

screenshots

attachments

- Scripts (package.json)
  {
  "scripts": {
  "wdio": "wdio run ./wdio.conf.ts",
  "wdio:bs": "wdio run ./wdio.browserstack.conf.js",
  "allure:generate": "allure generate allure-results --clean",
  "allure:open": "allure open"
  }
  }
