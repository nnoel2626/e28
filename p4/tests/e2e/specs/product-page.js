describe("product-page", () => {
  // Test product
  let product = {
    slug: "barker-center-thompson",
    model: "ULX P4",
    building: "Barker Center",
    room: "Thompson"
  };
  it("shows a single product", () => {
    cy.visit("/product/" + product.slug);
    cy.contains('[data-test="product-model"]', product.model);
    cy.contains('[data-test="product-building"]', product.building);
    cy.contains('[data-test="product-room"]', product.room);
  });
  it("adds to cart", () => {
    cy.visit("/product/" + product.slug);
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.get('[data-test="add-to-cart-confirmation"]').should("exist");
    cy.contains('[data-test="cart-count"]', 1);
  });
});
