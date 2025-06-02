import CarLoan from "../support/Pages/CarLoan";

describe('',()=>{
    let url;
    let loanAmount;
    let interest;
    let tenure;
  beforeEach(()=>{
    Cypress.on('uncaught:exception',()=> false);
  })

  before('',()=>{
    cy.fixture('example').then((data)=>{
        url = data.url;
        loanAmount= data.loanAmount;
        interest = data.interest;
        tenure =  data.tenure;
    })
  })

  it('Visiting the Website page',()=>{
    CarLoan.visit(url);
  })

  it('Validating the given inputs',()=>{
    CarLoan.validinputs(loanAmount,interest,tenure);
  })

  it('Checking the interest value',()=>{
    CarLoan.validateInterest();
  })
})