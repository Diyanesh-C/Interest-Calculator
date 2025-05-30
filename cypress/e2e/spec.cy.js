describe('template spec', () => {
      it('passes', () => {
        cy.visit('https://emicalculator.net/');
        cy.log("visit");
  })
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
})