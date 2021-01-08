/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.click() - click on a DOM element', () => {
    https://testing-library.com/docs/cypress-testing-library/intro/#examples
    cy.findByRole('button', { name: /Hello World/i }).click()
  })
})
