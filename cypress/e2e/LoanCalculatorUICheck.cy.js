import UIValidation from "../support/Pages/UIValidation";
 
const ui = new UIValidation();
 
describe('Loan EMI Calculator UI Validation via Menu', () => {
  it.skip('should validate presence and usability of Loan, Interest, and Tenure inputs and sliders', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.verifyUrl();
    ui.verifyLoanInputsAndSliders();
  });
  it('should reflect changes between input fields and sliders in both directions', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.verifyBiDirectionalSync();
  });
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
});