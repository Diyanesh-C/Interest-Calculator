import UIValidation from "../support/Pages/UIValidation";
 
const ui = new UIValidation();
 
describe('Loan EMI Calculator UI Validation via Menu', () => {
  it('should validate presence and usability of Loan, Interest, and Tenure inputs and sliders', () => {
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
  it('should toggle between years and months and validate input/slider behavior', () => {
      ui.visitHomePage();
      ui.navigateToLoanCalculator();
      ui.validateLoanTenureToggle();
  });
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
});