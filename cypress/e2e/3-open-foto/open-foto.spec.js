/// <reference types="cypress" />

describe('OpenFoto app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays 28 images by default', () => {
    cy.get('[data-testid^="image-action__container-"]').should('have.length', 28)
  })
})
