describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to product page and add it to the cart', () => {
    // find href start with '/product'
    cy.get('a[href^="/product"]').first().click()
    cy.location('href').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should not be able to add the same product to the cart', () => {
    // find href start with '/product'
    cy.get('a[href^="/product"]').first().click()
    cy.location('href').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('Moletom')
    cy.location('href').should('include', '/search')

    cy.get('a[href^="/product"]').first().click()
    cy.location('href').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('Cart (1)').should('exist')
  })
})
