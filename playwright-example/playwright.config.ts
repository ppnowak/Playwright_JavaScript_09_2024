import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { resolve } from 'path';

/* 
Bash:
> ENV_FILE=.env-qa1 npx playwright test --project=chromium 1_click
> npx playwright test --project=chromium 1_click
*/

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const envFileName = process.env.ENV_FILE || '.env';
dotenv.config({ path: resolve(__dirname, envFileName) });
// console.log({ envFileName, baseURL: process.env.BASE_URL });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  testMatch: /(test|spec).ts$/,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // baseURL: 'https://ui.breathtaking.website',
    baseURL: process.env.BASE_URL,
    launchOptions: {
      slowMo: parseInt(process.env.SLOWMO || '0'),
    },
    screenshot: 'on',
    storageState: './auth/shop-admin.json',
  },

  globalSetup: './tests/global.setup.ts',
  
  // expect: { timeout: 10000 },
  // expect: {
  //   toHaveScreenshot: {
  //     maxDiffPixelRatio: 0.05,
  //     maxDiffPixels: 1000,
  //   }
  // }

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'login to application',
    //   testMatch: /login\.setup\.ts/
    // },
    {
      name: 'chromium',
      // dependencies: ['login to application'],
      use: {
        ...devices['Desktop Chrome'],
        // baseURL: 'https://ui.breathtaking.website'
      },
    },
    // {
    //   name: 'chromium-local',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     // baseURL: 'http://localhost:3000'
    //   }
    // },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // {
    //   name: 'custom',
    //   use: {
    //     "userAgent": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.29 Safari/537.36",
    //     "viewport": {
    //       "width": 500,
    //       "height": 500
    //     },
    //     "deviceScaleFactor": 2,
    //     "isMobile": true,
    //     "hasTouch": true,
    //     "defaultBrowserType": "chromium"
    //   }
    // }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
