//import LoanTenure from '../pages/LoanTenure';

import LoanTenure from "../support/Pages/LoanTenure";

describe('Task 1',()=>{  

    before('Visiting the website',()=>{
        LoanTenure.visit();
    })
    
    it('SCRUM 80',()=>{
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