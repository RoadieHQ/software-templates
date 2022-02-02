describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to ${{ values.website_name }}').click();
  })
})
