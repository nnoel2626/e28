describe("products-page", () => {
  // Define a product we can use throughout our tests
  let product = {
    slug: "carpenter-center-theater",
    categories: ["installedMic"],
    building: "Carpenter Center",
    room: "Theater",
    make: "Shure",
    model: "ULX P4",
    mic_type: "HandHeld # 3",
    freq_range: "554 - 590 MHZ",
    freq_band: "J1",
    group: "G2",
    channel: "CH19",
    Assigned_freq: "588.800 MHz",
    serial_number: "12345",
    comments: "AbCDEF"
  };

  it("shows all the products", () => {
    cy.visit("/products");
    cy.contains("h2", "List of Wireless Microphones");

    // Confirm we see at least 10 products (that's how many product seeds we have)
    cy.get('[data-test="product-model"]')
      .its("length")
      .should("be.gte", 10);

    // Confirm we see a our test product
    cy.contains('[data-test="product-model"]', product.model);

    // Confirm we can click on a product and get to its individual page
    cy.get('[data-test="product-model"]')
      .contains(product.model)
      .click();

    // Confirm the test product page loads
    cy.contains('[data-test="product-model"]', product.model);
    cy.visit("/product/" + product.slug);
    // cy.get('[data-test="product-details-button"]').click();
    cy.url().should("include", product.slug);
  });
});
