import { TC, tc } from '../../support/@enums/testCases'

describe('Visual — Percy snapshots', { tags: '@visual @regression' }, () => {
  it(tc(TC.VISUAL_LOGIN, 'login page baseline'), { tags: '@visual' }, () => {
    cy.visit('/web/login.html')
    cy.getByTestId('login-email').should('be.visible')
    cy.percySnapshot('Login Page')
  })

  it(tc(TC.VISUAL_DASHBOARD, 'dashboard baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/dashboard.html')
    cy.getByTestId('page-dashboard').should('exist')
    cy.percySnapshot('Dashboard')
  })

  it(tc(TC.VISUAL_COMPONENTS, 'components page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/components.html')
    cy.getByTestId('page-components').should('exist')
    cy.percySnapshot('Components Page')
  })

  it(tc(TC.VISUAL_TEAM, 'team page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/team.html')
    cy.getByTestId('page-team').should('exist')
    cy.percySnapshot('Team Page')
  })

  it(tc(TC.VISUAL_SETTINGS, 'settings page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/settings.html')
    cy.getByTestId('page-settings').should('exist')
    cy.percySnapshot('Settings Page')
  })

  it(tc(TC.VISUAL_ACTIVITY, 'activity page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/activity.html')
    cy.getByTestId('page-activity').should('exist')
    cy.percySnapshot('Activity Page')
  })

  it(tc(TC.VISUAL_WIZARD, 'wizard page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/wizard.html')
    cy.getByTestId('page-wizard').should('exist')
    cy.percySnapshot('Wizard Page')
  })

  it(tc(TC.VISUAL_STATES, 'states page baseline'), { tags: '@visual' }, () => {
    cy.visitWithSession('/web/states.html')
    cy.getByTestId('page-states').should('exist')
    cy.percySnapshot('States Page')
  })
})
