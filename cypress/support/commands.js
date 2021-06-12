// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('selectProduct', (product) => {
    cy.get('.card-title').each((el, i, li) => {
        if (el.text().includes(product)) {
            cy.get('app-card button').eq(i).click();
        }
    });
})

Cypress.Commands.add('selectProducts', (...products) => {

    for (const product of products) {
        cy.log(product);

        // cy.contains(product).parent('div.card-body').next().find('button').click();

        cy.get('.card-title').each((el, i, li) => {
            if (el.text().includes(product)) {
                cy.get('app-card button').eq(i).click();
            }
        });
    }
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
