describe("cart-page", () => {
  // Test product
  let product = {
    slug: "barker-center-thompson",
    model: "ULX P4"
  };

  it("adds and removes from cart", () => {
    // Add to cart from product page
    cy.visit("/product/" + product.slug);

    cy.get('[data-test="add-to-cart-button"]').click({
      force: true
    });

    //Confirm cart shows product
    cy.visit("/cart");
    cy.contains('[data-test="cart-contents"]', "1 x " + product.model);

    // Remove from cart
    cy.get('[data-test="remove-from-cart-button"]')
      .click()
      .wait(1000);
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains("No items");
  });
});
