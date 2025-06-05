import CarLoan from "../support/Pages/CarLoan";
describe('CarEMI',()=>{
    let testData;
  beforeEach(()=>{
    Cypress.on('uncaught:exception',()=> false);
  })

  before('',()=>{
    cy.fixture('example').then((data)=>{
        testData = data;
    })
  })

  it('Visiting the Website page',{ tags : ['@smoke']},()=>{
    CarLoan.visit(testData.Car.url);
  })

  it('Validating the given inputs',{tags : ['@smoke']},()=>{
    CarLoan.visit(testData.Car.url);
    CarLoan.validinputs(testData.Car.loanAmount,testData.Car.interest,testData.Car.tenure);
  })

  it('Checking the interest value',()=>{
    CarLoan.validateInterest();
  })

  it('Validate the Loan with invalid input',()=>{
    CarLoan.validateLoan();
  })

  it('Checking with the 0% interest',()=>{
    CarLoan.validateEqual();
  })
})