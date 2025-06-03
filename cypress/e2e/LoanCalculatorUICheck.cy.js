import UIValidation from "../support/Pages/UIValidation";
 
const ui = new UIValidation();
 
describe('Loan EMI Calculator UI Validation via Menu', () => {
  it.skip('should validate presence and usability of Loan, Interest, and Tenure inputs and sliders', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.verifyUrl();
    ui.verifyLoanInputsAndSliders();
  });
  it.skip('should reflect changes between input fields and sliders in both directions', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.verifyBiDirectionalSync();
  });
  it.skip('should toggle between years and months and validate input/slider behavior', () => {
      ui.visitHomePage();
      ui.navigateToLoanCalculator();
      ui.validateLoanTenureToggle();
  });
  it.skip('Validate responsive rendering on mobile and desktop views', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    cy.viewport(1280, 720);           
    cy.get('#loanamount').should('be.visible');
    cy.viewport('iphone-x');         
    cy.get('#loanamount').should('be.visible');
  });
  it('Validate the working of slider through keyboard access',()=>{
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.validationOfKeyboardAccess();
  })
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
});