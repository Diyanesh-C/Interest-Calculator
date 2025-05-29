describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://emicalculator.net/');
  })
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
})