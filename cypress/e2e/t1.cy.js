//import LoanTenure from '../pages/LoanTenure';

import LoanTenure from "../support/Pages/LoanTenure";

describe('Task 1',()=>{  
    
    it('SCRUM 80',()=>{
        LoanTenure.visit();
        LoanTenure.selectLoanCalculator();
        LoanTenure.interestRateCheck();
    })
    
    it('SCRUM 82',()=>{
        LoanTenure.tenureCheckforYear();
    })

    Cypress.on("uncaught:exception",(err,runnable)=>{
        return false;
      })
})