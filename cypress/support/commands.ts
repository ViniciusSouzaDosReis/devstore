/// <reference types="cypress" />

// need add rule in eslint file - `"@typescript-eslint/no-namespace": "off"`
declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.get('input[name="q"]').type(query).parent('form').submit()
})
