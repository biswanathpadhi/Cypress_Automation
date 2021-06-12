type Tab = "Home" | "Shop";

export class HomePage {
  url = "https://rahulshettyacademy.com/angularpractice/";

  selectTab(tabName: Tab) {
    cy.get("a.nav-link").contains(tabName).click();
  }

  visit() {
    cy.visit(this.url);
  }
}
