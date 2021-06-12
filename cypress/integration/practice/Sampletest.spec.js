
// describe -> group of test case
describe('Gooogle Page test', () => {

    // Runs once before 
    before("Set up", () => {
        // visits a web url or web page
        cy.visit('https://www.google.co.in/');
    })

    // it -> testcase
    it('HomePage test', () => {

        // Get an element
        cy.get('input[name="q"]').type('Cypress learning is FUN!');

        // Get list of element and use eq()
        cy.get('center input[value="Google Search"][type="submit"]').eq(1).click();

        // Verifying results after google search
        cy.get('[href="https://indepth.dev/posts/1085/how-cypress-makes-testing-fun"] > .LC20lb').should("be.visible");

    })

})