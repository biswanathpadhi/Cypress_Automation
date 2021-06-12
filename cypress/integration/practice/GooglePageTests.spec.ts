import { GooglePage } from "../../support/pages";

const googlePage = new GooglePage();

describe.skip("hello", () => {
  before("this is before ", () => {
    cy.visit("http://localhost:3000/");
  });
  it("first test", () => {
    expect(true).to.be.true;
    cy.get("#num1Id").type("3");
    cy.get("#num2Id").type("4");
    cy.contains("Add")
      .click()
      .then(($el) => {
        // cy.log($el.text());
      });
  });
});

describe("Google Tests", () => {
  before("Open Google", () => {
    cy.visit("https://www.google.co.in");
  });

  it("Google Search", () => {
    googlePage.getName().type("Hello to Cypress!");
    cy.wait(3000);
    googlePage.getName().should("have.value", "Hello to Cypress!");
  });
});

describe.skip("Traverse parent chilid", () => {
  before("Open Rahul shetty automation academy", () => {
    cy.visit("https://testpages.herokuapp.com/styled/tag/table.html");
  });
  it("traversing using parent child", () => {
    cy.contains("Aleister")
      .siblings("td")
      .then((el) => {
        cy.log("length", el.length);
      });
    // .next()
    // .invoke("text")
    // .should("contain", "33.3");
  });
});

describe.skip("Rahul Shetty Academy", () => {
  before("Rahul Shetty Academy visit", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("mouseover example", () => {
    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");
  });
});
