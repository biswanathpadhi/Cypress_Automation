describe("Load Fixture Test", () => {
  before("setup fixture", () => {
    cy.fixture("mydata").then((data) => {
      this.data = data;
    });
  });

  it("Using the fixture data", () => {
    cy.log(this.data.name);
  });
});
