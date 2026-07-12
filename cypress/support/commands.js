// ─── Selector helpers ─────────────────────────────────────────────────────────

Cypress.Commands.add('getByTestId', (testId, options) =>
  cy.get(`[data-testid="${testId}"]`, options),
)

// ─── Auth ──────────────────────────────────────────────────────────────────────

Cypress.Commands.add('login', (
  email = Cypress.env('DEMO_EMAIL'),
  password = Cypress.env('DEMO_PASSWORD'),
) => {
  cy.visit('/web/login.html')
  cy.getByTestId('login-email').type(email)
  cy.getByTestId('login-password').type(password, { log: false })
  cy.getByTestId('login-submit').click()
  cy.getByTestId('page-dashboard').should('exist')
})

Cypress.Commands.add('seedAuthToken', (
  email = Cypress.env('DEMO_EMAIL'),
  password = Cypress.env('DEMO_PASSWORD'),
) => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    body: { email, password },
    log: false,
  }).then(({ body }) => {
    Cypress.env('AUTH_TOKEN', body.token)
  })
})

Cypress.Commands.add('skipOnboardingTour', () => {
  cy.window().then((win) => {
    win.localStorage.setItem('onboarding-dismissed', 'true')
  })
})

Cypress.Commands.add('createAuthSession', (email, password) => {
  const user = email || Cypress.env('DEMO_EMAIL')
  const pass = password || Cypress.env('DEMO_PASSWORD')
  const cacheAcrossSpecs = Cypress.env('sessionCacheAcrossSpecs') !== false

  cy.session(
    [user, pass, Cypress.env('ENV') || 'local'],
    () => {
      cy.seedAuthToken(user, pass)
      cy.login(user, pass)
      cy.url().should('not.include', '/web/login.html')
      cy.skipOnboardingTour()
      cy.getByTestId('page-dashboard').should('exist')
    },
    {
      cacheAcrossSpecs,
      validate() {
        cy.window().then((win) => {
          const auth = win.sessionStorage.getItem('sandbox-auth')
          if (!auth) throw new Error('Session expired')
        })
      },
    },
  )
})

/** Cached auth via cy.session, then navigate to an authenticated page */
Cypress.Commands.add('visitWithSession', (path = '/web/dashboard.html') => {
  cy.createAuthSession()
  cy.visit(path)
  cy.skipOnboardingTour()
})
