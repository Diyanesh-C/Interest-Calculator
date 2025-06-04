class CarLoan{
    visit(url)
    {
        cy.visit(url);
    }
    validinputs(loanAmount,interest,tenure)
    {
        cy.get('#loanamount').clear().type(loanAmount).type('{enter}');
        cy.get('#loaninterest').clear().type(interest).type('{enter');
        cy.get('#loanterm').clear().type(tenure).type('{enter}');

        cy.get('#emiamount span').eq('0').invoke('text').then((msg)=>{
        cy.log("Loan Amount",msg);
        expect(msg).to.equal('1,31,525');
        });

    }
    validateInterest()
    {
        cy.get('tr.row.no-margin.monthlypaymentdetails').
        first().find('td.currency').eq(1).
        invoke('text').then((interestValue) => {
        cy.log('First Month Interest:', interestValue);
         expect(interestValue).to.equal('₹ 11,875');
         });
    }
    validateLoan()
    {
        cy.get('#loanamount').clear().type('-1400000').type('{enter}');
        cy.log("This is invalid input but it gives the calculation of the EMI Calculation");
    }
    validateEqual()
    {
        cy.get('#loanamount').clear().type('2000000').type('{enter}');
        cy.get('#loaninterest').clear().type('0').type('{enter}');
        cy.log("This is invalid as it changes into the default value and not showing any error message");
        cy.get('#loaninterest').should('have.value','0');
    }
}

export default new CarLoan();