// https://docs.cypress.io/api/introduction/api.html

describe("e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("test header", () => {
    cy.get("p").contains("To do List").should("be.visible");
  });
  it("test ckeckbox", () => {
    cy.get("label").contains("Active").should("be.visible");
    cy.get("label").contains("Active").click();
    cy.get("label").contains("All").should("be.visible");
    cy.get("label").contains("All").click();
    cy.get("label").contains("Complete").should("be.visible");
    cy.get("label").contains("Complete").click();
  });
  it("test task", () => {
    cy.get("P").contains("0/0 left").should("be.visible");
    cy.get("input[name='input']").type("test input").type("{enter}");
    cy.get("P").contains("0/1 left").should("be.visible");
    cy.get("input[name='input']").type("test input").type("{enter}");
    cy.get("input[name='rdo']").should("be.visible");
    cy.get("input[name='rdo']").click({ multiple: true, force: true });
    cy.get("p").contains("2/2 left").should("be.visible");
  });
  it("dell task", () => {
    cy.get("input[name='input']").type("test input").type("{enter}");
    cy.get("P").contains("0/1 left").should("be.visible");
    cy.get("label").contains("Active").click();
    cy.get("div[name='n1']").click();
    cy.get("p").contains("0/0 left").should("be.visible");
  });
});
