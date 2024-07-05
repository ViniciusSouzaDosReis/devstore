describe('search product', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to product page and add it to the cart', () => {
    cy.searchByQuery('Moletom')

    cy.location('href').should('include', '/search')
    cy.location('search').should('include', 'q=Moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able navigate to search page without query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
