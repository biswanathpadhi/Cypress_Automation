export class GooglePage {
  private name = "input[name='q']";

  getName() {
    return cy.get(this.name);
  }
}
