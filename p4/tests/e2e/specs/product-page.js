describe("product-page", () => {
  // Test product
  let product = {
    slug: "Carpenter-center-theater-4",
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

  it("shows product", () => {
    cy.visit("/product/" + product.slug);
    cy.contains('[data-test="product-model"]', product.model);
  });

  it("adds to cart", () => {
    cy.visit("/product/" + product.slug);
    cy.get('[data-test="add-to-cart-button"]').click();
    // cy.get('[data-test="add-to-cart-confirmation"]').should("exist");
    cy.contains('[data-test="cart-count"]', 1);
  });
});
