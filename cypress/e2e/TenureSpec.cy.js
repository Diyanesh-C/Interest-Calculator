import TenurePage from '../support/Pages/TenureValidation';

const Tenure = new TenurePage();

describe('Car Loan Tenure', () => {
    
  beforeEach(()=>{
    Tenure.visit(); 
  })

  it('Boundary Check', () => {
    Tenure.boundaryCheck();
  })

  it('Empty Value Check',()=>{
    Tenure.emptinessCheck();
  })

  it('Non-Numberic Value Validation',()=>{
    Tenure.nonNumericValidation();
  })
Cypress.on("uncaught:exception",(err,runnable)=>{
  return false;
})
})