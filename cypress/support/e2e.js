require('./commands')
require('@bahmutov/cy-grep')()
require('@percy/cypress')

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('sessionStorage') || err.message.includes('ResizeObserver')) {
    return false
  }
})

beforeEach(() => {
  cy.window({ log: false }).then((win) => {
    win.localStorage.setItem('onboarding-dismissed', 'true')
  })
})
