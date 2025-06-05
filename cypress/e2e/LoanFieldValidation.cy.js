import LoanTenure from "../support/Pages/LoanTenure";

describe('Validation of fields',()=>{  

    before('Visiting the website',()=>{
        LoanTenure.visit();
    })
    
    it('Navigating and validating the interest rate field',()=>{
        LoanTenure.selectLoanCalculator();
        LoanTenure.interestRateCheck();
    })
    
    it('Validating the loan tenure field in years',()=>{
        LoanTenure.tenureCheckforYear();
    })

    it('Validating the loan tenure field in months',()=>{
        LoanTenure.tenureCheckforMonth();
    })

    it('Validating the loan amount field',()=>{
        LoanTenure.checkLoanAmount();
    })

    Cypress.on("uncaught:exception",(err,runnable)=>{
        return false;
      })
})