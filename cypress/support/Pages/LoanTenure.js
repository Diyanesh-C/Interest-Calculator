class LoanTenure{
    visit(){
        cy.visit('https://emicalculator.net/');
    }

    selectLoanCalculator(){
        cy.get('#menu-item-dropdown-2696').click();
        cy.get('#menu-item-2423 > .dropdown-item').click();
        cy.get('#loan-amount-calc > .hidden-ts').click();
    }

    interestRateCheck(){
        cy.get('#loaninterest').clear().type('20{enter}');
        cy.get('#loaninterest').clear().type('50{enter}');// value should accept within range but it is accepting greater than range
        cy.get('#loaninterest').clear().type('0{enter}');
        cy.get('#loaninterest').clear().type('-1{enter}');// value should accept within range but it is accepting lesser than range
    }

    tenureCheckforYear(){
        cy.get('.input-group-append > .btn-group > .active').click();
        cy.get('#loanterm').clear().type('3{enter}').invoke('val').should('contain','3');
        cy.get('#loanterm').clear().type('30{enter}').invoke('val').then((el)=>{
            expect(Number(el)).to.be.a('number')
        })
        cy.get('#loanterm').as('loanfield').clear().type('-25{enter}')
        cy.get('@loanfield').invoke('val').then((res)=>{
            expect(Number(res)).to.equal(25)
        })
    }


}

export default new LoanTenure();