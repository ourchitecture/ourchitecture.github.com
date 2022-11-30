describe('Home Page', () => {
  it('Gets page title', () => {
    cy.visit('/')
    cy.contains('Ourchitecture')
  })
})
