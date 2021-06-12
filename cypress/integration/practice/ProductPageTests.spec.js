import { isExportDeclaration } from "typescript";
import { HomePage, ProductPage } from "../pageObjects"

const homePage = new HomePage();
const productPage = new ProductPage();


describe("product add test", () => {

  let data = {};

  before("setup", () => {
    homePage.visit();
    homePage.selectTab("Shop");
    cy.fixture("mydata.json").then((mydata) => {
      data = mydata;
    });
  });

  it("Add Products", () => {

    // Adding a single product
    // productPage.addProductToCart("iphone X");

    // Adding multiple products
    productPage.addProductsToCart(...data.products);

    // productPage.getCartItemsCount();
    cy.contains("Checkout").invoke("text").then((val) => {
      let myVal = new String(val);
      myVal = myVal.match(/\d+/gi);
      expect(Number(myVal)).to.be.eq(data.products.length);
    })

    productPage.getCheckOut().click();

    cy.get("tbody tr td[class='col-sm-1 col-md-1 text-center']:nth-child(even)")
      .then(($el) => {
        let total = 0;
        for (let i = 0; i < $el.length; i++) {
          total += Number($el.eq(i).text().match(/\d+/g)[0]);
        }

        cy.get('td.text-right').then($val => expect(Number($val.text().match(/\d+/g)[0])).to.be.equal(total));
      })

    cy.contains('Checkout').click();

    cy.get('input#country').click().type('India');
    // Cypress.config({ defaultCommandTimeout: 10000, pageLoadTimeout: 6000 });
    cy.get('.suggestions', { timeout: 10000 }).contains('India').click();

    //Clicking on the checkbox
    cy.get('#checkbox2').click({ force: true });

    //Clicking on submit
    cy.contains('Purchase').click();

    cy.get('div.alert').then(val => {
      expect(val.text().includes('Success!')).to.be.true;
    })
  });
});