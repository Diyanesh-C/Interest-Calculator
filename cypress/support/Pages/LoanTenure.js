class LoanTenure{
    visit(){
        cy.visit('https://emicalculator.net/');
    }

    selectLoanCalculator(){
        cy.get('#menu-item-dropdown-2696').click();
        cy.get('#menu-item-2423 > .dropdown-item').click();
        cy.get('#loan-amount-calc > .hidden-ts').click();
    }

    enterValuesCheck(){
        cy.get('#loaninterest').clear().type('20{enter}');
        cy.get('#loaninterest').clear().type('50{enter}');// value should accept within range but it is accepting greater than range
        cy.get('#loaninterest').clear().type('0{enter}');
        cy.get('#loaninterest').clear().type('-1{enter}');// value should accept within range but it is accepting lesser than range
    }

}

export default new LoanTenure();