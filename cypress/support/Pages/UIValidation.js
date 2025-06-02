class UIValidation {
  visitHomePage() {
    cy.visit("https://emicalculator.net/");
  }

  navigateToLoanCalculator() {
    cy.contains("Widgets & Rates").trigger("mouseover");
    cy.get("#menu-item-2423 > .dropdown-item").click({ force: true });
  }

  verifyUrl() {
    cy.url().should("include", "/loan-calculator");
  }

  verifyLoanInputsAndSliders() {
    cy.get("#loanamount").should("be.visible").and("be.enabled");
    cy.get("#loaninterest").should("be.visible").and("be.enabled");
    cy.get("#loanterm").should("be.visible").and("be.enabled");

    cy.get("#loanamountslider").should("exist");
    cy.get("#loaninterestslider").should("exist");
    cy.get("#loantermslider").should("exist");
  }

  verifyBiDirectionalSync() {

    cy.get("#loanamountslider").click().type("{rightarrow}{rightarrow}");
    cy.wait(500); 
    cy.get("#loanamount")
      .invoke("val")
      .then((val) => {
        cy.log(val);
        var arryofval=val.split(",");
        var value="";
        arryofval.forEach(element => {
          value+=element;
        });
        cy.log(value);
        expect(Number(value)).to.be.greaterThan(1200000);
      });


    cy.get("#loaninterestslider").click().type("{leftarrow}");
    cy.wait(500);
    cy.get("#loaninterest")
      .invoke("val")
      .then((val) => {
        expect(Number(val)).to.be.lessThan(10);
      });

    
    cy.get("#loanterm").clear().type("3{enter}");
    cy.get('#loantermslider > .ui-slider-handle').should('have.attr', 'style')
    .and('contain', 'left: 10%');

    cy.get("#loantermslider").click().type("{rightarrow}");
    cy.wait(500);
    cy.get("#loanterm")
      .invoke("val")
      .then((val) => {
        expect(Number(val)).to.equal(15.5);
      });
  }
}

export default UIValidation;
