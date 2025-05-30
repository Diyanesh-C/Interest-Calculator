import TenurePage from '../support/Pages/TenureValidation';

const Tenure = new TenurePage();

describe('Car Loan Tenure', () => {
  beforeEach(()=>{
    Tenure.visit();
  })
  it('Negative Boundary', () => {
    Tenure.boundaryCheck();
  })
  Cypress.on("uncaught:exception",(err,runnable)=>{
    return false;
  })
})