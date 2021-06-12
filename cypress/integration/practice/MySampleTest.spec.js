/// <reference types="cypress" />

// https://on.cypress.io/interacting-with-elements

describe('My Test Suite', () => {

  before('Test Setup - Visit BaseUrl', () => {
    cy.visit('/');
  })

  it('First Test - Type into textbox', () => {

    cy.get(`input[type = 'search']`).type('ca');

    cy.get(`div.products div.product`).should("have.length", 4);

    // use .find() command for getting child
    cy.get('.products').find('.product').should('have.length', 4);

    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

  })

  it.only('Traverse through list', () => {

    cy.get(`input[type = 'search']`).type('ca');

    cy.wait(2000);

    cy.get(`div.products`).find(`div.product`).each(($el, index, $list) => {

      if (index == 3) {
        cy.get($el).find('.product-name').invoke("text").then(value => {
          cy.log(value)
        })
      }
    })
  })
})