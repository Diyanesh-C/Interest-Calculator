class TenureValidation{
    visit(){
        cy.visit('https://emicalculator.net/');
    }
    boundaryCheck(){
        cy.get('#car-loan').click();
        cy.get('#loanterm').click().clear();
        cy.get('#loanterm').type('-2 {enter}');  
        //if the entered value is less than 1, appropriate error message should be thrown
    
        cy.get('#loanterm').click().clear();
        cy.get('#loanterm').type('8 {enter}'); 
        //if the entered value is greater than 7, appropriate error message should be thrown
    }
}
export default TenureValidation