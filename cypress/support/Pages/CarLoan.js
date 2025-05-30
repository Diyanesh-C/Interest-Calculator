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
        });

    }
}

export default new CarLoan();