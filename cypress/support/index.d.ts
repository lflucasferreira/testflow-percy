/// <reference types="cypress" />
/// <reference types="@percy/cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId(
      testId: string,
      options?: Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>,
    ): Chainable<JQuery<HTMLElement>>
    login(email?: string, password?: string): Chainable<void>
    seedAuthToken(email?: string, password?: string): Chainable<void>
    skipOnboardingTour(): Chainable<void>
    createAuthSession(email?: string, password?: string): Chainable<void>
    visitWithSession(path?: string): Chainable<void>
  }
}

export {}
