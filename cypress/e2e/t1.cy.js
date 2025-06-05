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

    it('SCRUM 83',()=>{
        LoanTenure.tenureCheckforMonth();
    })

    it('SCRUM 84',()=>{
        LoanTenure.checkLoanAmount();
    })

    Cypress.on("uncaught:exception",(err,runnable)=>{
        return false;
      })
})