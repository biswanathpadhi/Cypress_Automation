export class ProductPage {
  url = "https://rahulshettyacademy.com/angularpractice/shop";

  addProductToCart(productName: string) {
    cy.selectProduct(productName);
  }

  addProductsToCart(...products: string[]) {
    products.forEach((product) => cy.selectProduct(product));
  }

  getCartItemsCount() {}

  getCheckOut() {
    return cy.contains("Checkout");
  }
}
