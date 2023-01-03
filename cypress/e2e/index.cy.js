describe('首页', () => {
  it.only('是否可访问', () => {
    cy.login('admin', 'admin')
    cy.visit('/');
  })
})