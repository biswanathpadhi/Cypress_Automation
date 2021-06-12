describe("Changing Configuration dynamically", () => {
  it("test", () => {
    cy.log("Before setting the baseUrl value", Cypress.config("baseUrl"));
    Cypress.config("baseUrl", "https://www.google.co.in");
    cy.log("After setting the baseUrl value", Cypress.config("baseUrl"));
    cy.visit("/");
  });

  it("test2", () => {
    cy.log(
      "Accessing baseUrl value in another test",
      Cypress.config("baseUrl")
    );
  });
});

describe("another test", () => {
  it("test3", () => {
    cy.log("Accessing baseUrl test3", Cypress.config("baseUrl"));
  });
});
