// https://docs.cypress.io/api/introduction/api.html

describe("p4", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Wireless Microphone App");
  });
});
