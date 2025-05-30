import HomeLoan from "../support/Pages/HomeLoan";

const HomeEMI = new HomeLoan();

describe('HomeEMI',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false;
    })
    beforeEach(function(){
        HomeEMI.visit();
    })
    it('Navigation To Home Loan',()=>{
        HomeEMI.navigationToHomeLoan();
    })
})