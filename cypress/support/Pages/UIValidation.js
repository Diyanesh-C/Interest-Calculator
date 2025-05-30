class UIValidation {
    visitHomePage() {
        cy.visit('https://emicalculator.net/');
    }
   
    navigateToLoanCalculator() {
      cy.contains('Widgets & Rates').trigger('mouseover');
      cy.get('#menu-item-2423 > .dropdown-item').click({ force: true });
    }
   
    verifyUrl() {
      cy.url().should('include', '/loan-calculator');
    }
   
    verifyLoanInputsAndSliders() {
      cy.get('#loanamount').should('be.visible').and('be.enabled');
      cy.get('#loaninterest').should('be.visible').and('be.enabled');
      cy.get('#loanterm').should('be.visible').and('be.enabled');
   
      cy.get('#loanamountslider').should('exist');
      cy.get('#loaninterestslider').should('exist');
      cy.get('#loantermslider').should('exist');
    }
  }
   
  export default UIValidation;