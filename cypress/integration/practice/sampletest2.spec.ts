describe("Testing Rahul Shetty angular app", () => {
  before("setup", () => {
    // visiting the base url
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    // loading the fixtures
    cy.fixture("mydata").then((data) => {
      this.data = data;
    });
  });

  it("first test", () => {
    /*
    // Enter Name
    cy.get('form input[name="name"]').type(this.data.name);

    //Select gender
    cy.get("select").select(this.data.gender);

    let t = "";
    cy.contains("Name")
      .invoke("text")
      .then((v) => {
        cy.log(v);
        t = v;
      });

    cy.log(`t = ${t}`);
    */

    cy.get('form input[name="name"]').should("have.attr", "minlength", "2");
  });

  context.skip("files", () => {
    beforeEach("laoding files", () => {
      cy.fixture("mydata").should((d) => {
        expect(d.name).to.eq;
      });
    });
    it("context tests", () => {
      let a = "2";
      expect(a).to.equal("2");
      expect(a).to.be.true;
    });
  });
});
