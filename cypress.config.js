const { defineConfig } = require('cypress')
const { loadConfig } = require('./cypress/support/loadConfig')

const isCI = Boolean(process.env.CI)

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5050',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

    viewportWidth: 1280,
    viewportHeight: 800,
    testIsolation: true,

    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 120000,

    retries: {
      runMode: isCI ? 2 : 0,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config)
      return loadConfig(config)
    },
  },

  env: {
    DEMO_EMAIL: process.env.CYPRESS_DEMO_EMAIL || 'demo@automation.io',
    DEMO_PASSWORD: process.env.CYPRESS_DEMO_PASSWORD || process.env.DEMO_PASSWORD || 'Demo123!',
    BASE_URL: 'http://localhost:5050',
    ENV: 'local',
    sessionCacheAcrossSpecs: true,
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
})
