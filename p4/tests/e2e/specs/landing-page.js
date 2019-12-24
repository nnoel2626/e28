// https://docs.cypress.io/api/introduction/api.html

describe("p4", () => {
  it("Visits the landing page", () => {
    cy.visit("/");
    cy.contains("h1", "Wireless Microphone App");
  });
});
