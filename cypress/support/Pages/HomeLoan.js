class HomeLoan{
    visit(){
        cy.visit('https://emicalculator.net/');
    }
    navigationToHomeLoan(){
        cy.get('#menu-item-dropdown-2696').click();
        //cy.get('.dropdown-menu show').should('be.visible');
        cy.contains('Home Loan EMI Calculator').click();
        cy.url().should('include','home-loan-emi-calculator/');
        cy.get('h1').should('contain','Home Loan EMI Calculator with Prepayments, Taxes & Insurance');
        cy.get('.homeloanemicalculatorcontainer').should('be.visible');
    }
}
export default HomeLoan

