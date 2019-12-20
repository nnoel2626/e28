describe("categories-page", () => {
  it("shows the categories", () => {
    cy.visit("/categories");
    cy.contains('[data-test="category-name"]', "installedMic");

    // With seed data, we should have at least 8 categories
    cy.get('[data-test="category-name"]')
      .its("length")
      .should("be.gte", 3);
  });
});
