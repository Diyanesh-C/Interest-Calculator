class TenureValidation{
    visit(){
        cy.visit('https://emicalculator.net/');
    }
    boundaryCheck(){
        cy.get('#car-loan').click();
        cy.get('#loanterm').click().clear();
        cy.get('#loanterm').type('-2 {enter}');  
        cy.log("Enter only Positive Value");
        //if the entered value is less than 1, appropriate error message should be thrown
    
        cy.get('#loanterm').click().clear();
        cy.get('#loanterm').type('8 {enter}'); 
        cy.log('Maximium value should be less than or equal to 7');
        //if the entered value is greater than 7, appropriate error message should be thrown
    }
    emptinessCheck(){
        cy.get('#menu-item-dropdown-2696').click();
        cy.get('#menu-item-3294 > .dropdown-item').click();
        cy.get('#homeprice').click().clear(); 
        cy.get('#maintenanceexpenses').click().clear();
        cy.log('Enter the Valid Home Value and Expense per month');
        //after clearing the home loan value and the Maintenance Expenses/month option, it displays zero as the result 
    }

}
export default TenureValidation