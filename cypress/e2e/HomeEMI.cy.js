import HomeLoan from "../support/Pages/HomeLoan";

const HomeEMI = new HomeLoan();

describe('HomeEMI ',()=>{
    Cypress.on('uncaught:exception',(err,runnable)=>{
        return false;
    })
    before(function(){
        HomeEMI.visit();
    })
    it('Navigation To Home Loan',{tags: ['@smoke']},()=>{
        HomeEMI.navigationToHomeLoan();
    })
    it('calculation and display of year-on-year EMI table',()=>{
        HomeEMI.yearTableValidation();
    })
    it('Extracting Values and storing it in excel',()=>{
        HomeEMI.tableExtraction();
    })
    it('Verify Excel file matches displayed table',()=>{
        HomeEMI.readExcelValidation();
    })
})