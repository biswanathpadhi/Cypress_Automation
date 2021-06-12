describe("Environment variables test", () => {
  it("env test", () => {
    cy.log("-------- PRINTING ENV. VARIABLE VALUE BEFORE SETTTING-----------");
    cy.log(Cypress.env("e"));

    //setting the env. variable
    Cypress.env("e", "dev");
    cy.log("-------- PRINTING ENV. VARIABLE VALUE AFTER SETTTING-----------");
    cy.log(Cypress.env("e"));
  });
});
