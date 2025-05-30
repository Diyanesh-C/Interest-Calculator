import UIValidation from "../support/Pages/UIValidation";
 
const ui = new UIValidation();
 
describe('Loan EMI Calculator UI Validation via Menu', () => {
  it('should validate presence and usability of Loan, Interest, and Tenure inputs and sliders', () => {
    ui.visitHomePage();
    ui.navigateToLoanCalculator();
    ui.verifyUrl();
    ui.verifyLoanInputsAndSliders();
  });
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
});