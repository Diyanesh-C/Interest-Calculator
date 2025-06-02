class HomeLoan{
    visit(){
        cy.visit('https://emicalculator.net/');
    }
    navigationToHomeLoan(){
        cy.get('#menu-item-dropdown-2696').click();
        cy.contains('Home Loan EMI Calculator').click();
        cy.url().should('include','home-loan-emi-calculator/');
        cy.get('h1').should('contain','Home Loan EMI Calculator with Prepayments, Taxes & Insurance');
        cy.get('.homeloanemicalculatorcontainer').should('be.visible');
    }
    yearTableValidation(){
        cy.get('#homeprice').click().clear().type('60,00,000 {enter}');
        cy.get('#downpayment').click().clear().type('10 {enter}');
        cy.get('#homeloaninsuranceamount').click().clear().type('0 {enter}');
        cy.get('#homeloaninterest').click().clear().type('8 {enter}');
        cy.get('#homeloanterm').click().clear().type('10 {enter}');
        cy.get('#loanfees').click().clear().type('0.15 {enter} ');
        cy.get('#onetimeexpenses').click().clear().type('15 {enter}');
        cy.get('#propertytaxes').click().clear().type('0.15 {enter}');
        cy.get('#homeinsurance').click().clear().type('0.10 {enter}');
        cy.get('#maintenanceexpenses').click().clear().type('3000 {enter}');
        cy.get('.noextras').scrollIntoView();
        cy.get('.noextras').should('be.visible');
        cy.get('.row.no-margin th').should('have.length.greaterThan',0);
        cy.get('.row.no-margin th').invoke('text').then((text)=>{
            expect(text).to.include('Year')
            expect(text).to.include('Principal')
            expect(text).to.include('Interest')
            expect(text).to.include('Taxes, Home Insurance & Maintenance (C)')
            expect(text).to.include('Total Payment(A + B + C)')
            expect(text).to.include('Balance')
            expect(text).to.include('Loan Paid To Date')
        })
        cy.get('.row.no-margin.yearlypaymentdetails').should('have.length.greaterThan',0);
    }
}
export default HomeLoan

