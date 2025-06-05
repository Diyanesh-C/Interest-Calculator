import TenurePage from '../support/Pages/TenureValidation';

const Tenure = new TenurePage();

describe('Error message validation', () => {

  beforeEach(()=>{
    Tenure.visit(); 
  })

  it('should check with the unrealistic values', () => {
    Tenure.boundaryCheck();
  })

  it('should check with the empty value',()=>{
    Tenure.emptinessCheck();
  })

  it('should validate with the non-numberic value',()=>{
    Tenure.nonNumericValidation();
  })
Cypress.on("uncaught:exception",(err,runnable)=>{
  return false;
})
})